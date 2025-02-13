from flask import Flask, render_template, request, jsonify
from copy import deepcopy
import json

from game import BlockBlast

app = Flask(__name__)

game = BlockBlast()
game.reset()

episodeRecord = {
    "states" : [],
    "rewards": [],
    "nextStates": [],
    "terminations": [],
}  

#with open("test_human_saves", 'r') as fp:
#    episodeRecord = json.load(fp)

def genBatch(game: BlockBlast, nextGame: BlockBlast) -> dict:
    """Generate a batch of the current game states, but with rotated/flipped actions and board.
    Note: Reflection not implemented yet."""
    def rot90Clock(game: BlockBlast):
        """
        L = [[1,2,3],
        [4,5,6],
        [7,8,9]]

    newL = [[L[col][row] for row in range(2,-1,-1)] for col in range(0,3)] # reflection left-right
    newL2 = [[L[row][col] for row in range(2,-1,-1)] for col in range(0,3)] # rot 90 clock
    newL3 = [[L[row][col] for col in range(0,3)] for row in range(2,-1,-1)] # reflection top-down
        """
        newBoard = [[game.board[row][col] for row in range(7,-1,-1)] for col in range(0,8)] # rot 90 clock
        game.board = newBoard
        game.actions = [BlockBlast.BLOCKS_ROT_90_CLOCK[action] for action in game.actions]
    batch = {
        "states":[],
        "nextStates":[],
    }
    batch["states"].append(observeGame(game))
    rot90Clock(game)
    batch["states"].append(observeGame(game))
    rot90Clock(game)
    batch["states"].append(observeGame(game))
    rot90Clock(game)
    batch["states"].append(observeGame(game))
        
    batch["nextStates"].append(observeGame(nextGame))
    rot90Clock(nextGame)
    batch["nextStates"].append(observeGame(nextGame))
    rot90Clock(nextGame)
    batch["nextStates"].append(observeGame(nextGame))
    rot90Clock(nextGame)
    batch["nextStates"].append(observeGame(nextGame))    
    return batch

BLOCKS = {}
EMPTY = [0 for i in range(5*5)]
for key in BlockBlast.BLOCKS:
    block = deepcopy(BlockBlast.BLOCKS[key])
    for r in range(len(block)):
        while len(block[r]) < 5:
            block[r].append(0)
    while len(block) < 5:
        block.append([0,0,0,0,0])
    flatBlock = BlockBlast.Utilflatten(block)
    BLOCKS[key] = flatBlock

def observeGame(game: BlockBlast) -> tuple:
    flatBoard = BlockBlast.Utilflatten(game.board)
    flatBlocks = []
    
    for actionId in game.actions:
        if actionId != -1:
            flatBlocks += BLOCKS[actionId]
    
    flatBlocks += EMPTY*game.actions.count(-1)
    return flatBoard + flatBlocks + [game.combo] + [game.comboExpires]

@app.route('/')
def index():
    return render_template('index.html')

checked = False
stateBefore = game.clone()
pendingSaves = 0

@app.route('/square-click')
def square_click():
    global stateBefore, pendingSaves, checked
    row = request.args.get('row', type=int)
    col = request.args.get('col', type=int)
    selectedAction = request.args.get('selectedAction', type=int)
    
    if game.placePiece(selectedAction, col, row):
        pendingSaves += 1
        checked = False
        batch = genBatch(stateBefore, game.clone())
        episodeRecord["states"] += batch["states"]
        episodeRecord["nextStates"] += batch["nextStates"]
        episodeRecord["rewards"] += [1,1,1,1]
        stateBefore = game.clone()
    
    if not checked:
        if len(list(game.allNextStates())) == 0:
            game.reset()
            checked = False
            episodeRecord["terminations"] += [True, True, True, True]
        else:
            checked = True
            episodeRecord["terminations"] += [False, False, False, False]
            
    return jsonify({"gameBoardState": game.board,
                    "actions": game.actions,
                    "score":game.score})

@app.route('/get-game-state')
def get_game_state():
    return jsonify({"gameBoardState": game.board,
                    "actions": game.actions})

@app.route('/reset-game')
def reset_game():
    game.reset()
    return jsonify({"gameBoardState": game.board,
                    "actions": game.actions})

@app.route('/save-history')
def save_history():
    global pendingSaves
    pendingSaves = 0
    with open("test_human_saves.json", 'w') as f:
        json.dump(episodeRecord, f)
    return jsonify({"status":"ok"})

if __name__ == '__main__':
    app.run(debug=True)
