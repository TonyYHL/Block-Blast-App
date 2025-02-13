// Get the board container
const board = document.getElementById('board');
const action1 = document.getElementById('action1');
const action2 = document.getElementById('action2');
const action3 = document.getElementById('action3');
const blocks5x5 = [
    [[0,0,0,0,0],
    [0,0,1,0,0],
    [0,0,0,1,0],
    [0,0,0,0,0],
    [0,0,0,0,0]],

    [[0,0,0,0,0],
     [0,0,0,1,0],
     [0,0,1,0,0],
     [0,0,0,0,0],
     [0,0,0,0,0]],
    
    [[0,0,0,0,0],
     [0,1,0,0,0],
     [0,0,1,0,0],
     [0,0,0,1,0],
     [0,0,0,0,0]],

    [[0,0,0,0,0],
     [0,0,0,1,0],
     [0,0,1,0,0],
     [0,1,0,0,0],
     [0,0,0,0,0]],

    [[0,0,0,0,0],
     [0,0,1,1,0],
     [0,0,1,1,0],
     [0,0,0,0,0],
     [0,0,0,0,0]],

     [[0,0,0,0,0],
      [0,1,1,1,0],
      [0,1,1,1,0],
      [0,1,1,1,0],
      [0,0,0,0,0]],   
     
     [[0,0,0,0,0],
      [0,1,0,0,0],
      [0,1,0,0,0],
      [0,1,1,1,0],
      [0,0,0,0,0]],  
     
     [[0,0,0,0,0],
      [0,0,0,1,0],
      [0,0,0,1,0],
      [0,1,1,1,0],
      [0,0,0,0,0]],  
     
     [[0,0,0,0,0],
      [0,1,1,1,0],
      [0,0,0,1,0],
      [0,0,0,1,0],
      [0,0,0,0,0]],  

     [[0,0,0,0,0],
      [0,1,1,1,0],
      [0,1,0,0,0],
      [0,1,0,0,0],
      [0,0,0,0,0]],  
     
     [[0,0,0,0,0],
      [0,0,1,1,0],
      [0,0,1,1,0],
      [0,0,1,1,0],
      [0,0,0,0,0]],  

     [[0,0,0,0,0],
      [0,1,1,1,0],
      [0,1,1,1,0],
      [0,0,0,0,0],
      [0,0,0,0,0]],  
     
     [[0,0,0,0,0],
      [0,0,0,1,0],
      [0,0,0,1,0],
      [0,0,1,1,0],
      [0,0,0,0,0]],  
     
     [[0,0,0,0,0],
      [0,0,1,0,0],
      [0,0,1,0,0],
      [0,0,1,1,0],
      [0,0,0,0,0]],

     [[0,0,0,0,0],
      [0,0,1,1,0],
      [0,0,0,1,0],
      [0,0,0,1,0],
      [0,0,0,0,0]],

     [[0,0,0,0,0],
      [0,0,1,1,0],
      [0,0,1,0,0],
      [0,0,1,0,0],
      [0,0,0,0,0]],

      [[0,0,0,0,0],
      [0,1,0,0,0],
      [0,1,1,1,0],
      [0,0,0,0,0],
      [0,0,0,0,0]], 

      [[0,0,0,0,0],
      [0,1,1,1,0],
      [0,1,0,0,0],
      [0,0,0,0,0],
      [0,0,0,0,0]], 

      [[0,0,0,0,0],
      [0,0,0,1,0],
      [0,1,1,1,0],
      [0,0,0,0,0],
      [0,0,0,0,0]], 

      [[0,0,0,0,0],
      [0,1,1,1,0],
      [0,0,0,1,0],
      [0,0,0,0,0],
      [0,0,0,0,0]], 

      [[0,0,0,0,0],
     [0,0,1,1,0],
     [0,0,1,0,0],
     [0,0,0,0,0],
     [0,0,0,0,0]],

     [[0,0,0,0,0],
     [0,0,0,1,0],
     [0,0,1,1,0],
     [0,0,0,0,0],
     [0,0,0,0,0]],

     [[0,0,0,0,0],
     [0,0,1,1,0],
     [0,0,0,1,0],
     [0,0,0,0,0],
     [0,0,0,0,0]],

     [[0,0,0,0,0],
     [0,0,1,0,0],
     [0,0,1,1,0],
     [0,0,0,0,0],
     [0,0,0,0,0]],

     [[0,0,0,0,0],
     [0,0,0,0,0],
     [0,1,1,1,1],
     [0,0,0,0,0],
     [0,0,0,0,0]],

     [[0,0,0,0,0],
     [0,0,0,0,0],
     [1,1,1,1,1],
     [0,0,0,0,0],
     [0,0,0,0,0]],

     [[0,0,1,0,0],
     [0,0,1,0,0],
     [0,0,1,0,0],
     [0,0,1,0,0],
     [0,0,0,0,0]],

     [[0,0,1,0,0],
     [0,0,1,0,0],
     [0,0,1,0,0],
     [0,0,1,0,0],
     [0,0,1,0,0]],

     [[0,0,0,0,0],
      [0,0,1,0,0],
      [0,1,1,1,0],
      [0,0,0,0,0],
      [0,0,0,0,0]], 

     [[0,0,0,0,0],
      [0,1,1,1,0],
      [0,0,1,0,0],
      [0,0,0,0,0],
      [0,0,0,0,0]], 
     
      [[0,0,0,0,0],
      [0,0,1,0,0],
      [0,0,1,1,0],
      [0,0,1,0,0],
      [0,0,0,0,0]], 

      [[0,0,0,0,0],
      [0,0,0,1,0],
      [0,0,1,1,0],
      [0,0,0,1,0],
      [0,0,0,0,0]], 

      [[0,0,0,0,0],
      [0,0,1,0,0],
      [0,0,1,1,0],
      [0,0,0,1,0],
      [0,0,0,0,0]], 

      [[0,0,0,0,0],
      [0,0,0,1,0],
      [0,0,1,1,0],
      [0,0,1,0,0],
      [0,0,0,0,0]], 

      [[0,0,0,0,0],
      [0,1,1,0,0],
      [0,0,1,1,0],
      [0,0,0,0,0],
      [0,0,0,0,0]],  

      [[0,0,0,0,0],
      [0,0,1,1,0],
      [0,1,1,0,0],
      [0,0,0,0,0],
      [0,0,0,0,0]],  

      [[0,0,0,0,0],
      [0,0,0,0,0],
      [0,0,1,1,0],
      [0,0,0,0,0],
      [0,0,0,0,0]], 
      
      [[0,0,0,0,0],
      [0,0,1,0,0],
      [0,0,1,0,0],
      [0,0,0,0,0],
      [0,0,0,0,0]],  

      [[0,0,0,0,0],
      [0,0,0,0,0],
      [0,1,1,1,0],
      [0,0,0,0,0],
      [0,0,0,0,0]],  

      [[0,0,0,0,0],
      [0,0,1,0,0],
      [0,0,1,0,0],
      [0,0,1,0,0],
      [0,0,0,0,0]],  
]
const blocks = {
     0 : [[1, 0],
          [0, 1]],
     
     1 : [[0, 1],
          [1, 0]],
     
     2 : [[1, 0, 0],
          [0, 1, 0],
          [0, 0, 1]],
     
     3 : [[0, 0, 1],
          [0, 1, 0],
          [1, 0, 0]],
     
     4 : [[1, 1],
          [1, 1]],
     
     5 : [[1, 1, 1],
          [1, 1, 1],
          [1, 1, 1]],
     
     6 : [[1, 0, 0],
          [1, 0, 0],
          [1, 1, 1]],
     
     7 : [[0, 0, 1],
          [0, 0, 1],
          [1, 1, 1]],
     
     8 : [[1, 1, 1],
          [0, 0, 1],
          [0, 0, 1]],
     
     9 : [[1, 1, 1],
          [1, 0, 0],
          [1, 0, 0]],
     
     10: [[1,1],
          [1,1],
          [1,1]],
     
     11:[[1,1,1],
          [1,1,1]],
     
     12: [[0,1],
          [0,1],
          [1,1]],
     
     13: [[1,0],
          [1,0],
          [1,1]],
     
     14: [[1,1],
          [0,1],
          [0,1]],
     
     15: [[1,1],
          [1,0],
          [1,0]],
     
     16:[[1,0,0],
          [1,1,1]],
     
     17:[[1,1,1],
          [1,0,0]],
     
     18:[[0,0,1],
          [1,1,1]],
     
     19:[[1,1,1],
          [0,0,1]],
     
     20: [[1, 1],
          [1, 0]],
     
     21: [[0, 1],
          [1, 1]],
     
     22: [[1, 1],
          [0, 1]],
     
     23: [[1, 0],
          [1, 1]],
     
     24: [[1,1,1,1]],
     
     25: [[1,1,1,1,1]],
     
     26: [[1],
          [1],
          [1],
          [1]],
     
     27: [[1],
          [1],
          [1],
          [1],
          [1]],
     
     28: [[0,1,0],
          [1,1,1]],
     
     29: [[1,1,1],
          [0,1,0]],
     
     30: [[1,0],
          [1,1],
          [1,0]],
     
     31: [[0,1],
          [1,1],
          [0,1]],
     
     32: [[1,0],
          [1,1],
          [0,1]],
     
     33: [[0,1],
          [1,1],
          [1,0]],
     
     34: [[1,1,0],
          [0,1,1]],
     
     35: [[0,1,1],
          [1,1,0]],
     
     36: [[1,1]],
     
     37: [[1],
          [1]],
     
     38: [[1,1,1]],
     
     39: [[1],
          [1],
          [1]],
}

var gameBoardState = [[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],];
var selectedAction = -1;
var actionPiece = [-1,-1,-1];
var score = 0;

action1.addEventListener('click', () => {
     if (selectedAction==0) {
          action1.style.border = "1px solid black";
          action2.style.border = "1px solid black";
          action3.style.border = "1px solid black";
          selectedAction = -1;
     } else {
          action1.style.border = "2px solid green";
          action2.style.border = "1px solid black";
          action3.style.border = "1px solid black";
          selectedAction = 0;
     }
})
action2.addEventListener('click', () => {
     if (selectedAction==1) {
          action1.style.border = "1px solid black";
          action2.style.border = "1px solid black";
          action3.style.border = "1px solid black";
          selectedAction = -1;
     } else {
          action1.style.border = "1px solid black";
          action2.style.border = "2px solid green";
          action3.style.border = "1px solid black";
          selectedAction = 1;
     }
})
action3.addEventListener('click', () => {
     if (selectedAction==2) {
          action1.style.border = "1px solid black";
          action2.style.border = "1px solid black";
          action3.style.border = "1px solid black";
          selectedAction = -1;
     } else {
          action1.style.border = "1px solid black";
          action2.style.border = "1px solid black";
          action3.style.border = "2px solid green";
          selectedAction = 2;
     }
})

/**
 * This function includes some key listeners.
 * @param {*} div 
 */
function iniBoard(div) {
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.dataset.row = row;
            square.dataset.col = col;
            square.dataset.container = div.id;
            
            // Add a click event to each square
            square.addEventListener('click', () => {
                fetch(`/square-click?row=${row}&col=${col}&selectedAction=${selectedAction}`)
                    .then(response => response.json())
                    .then(data => {
                         gameBoardState = data["gameBoardState"];
                         actionPiece = data["actions"];
                         score = data["score"];
                         refreshAll();
                    });
            });

            square.addEventListener('mouseenter', () => {
               const r = Number(square.dataset.row);
               const c = Number(square.dataset.col);
       
               square.style.border = "2px solid red";

               if (selectedAction != -1) {
                    if (actionPiece[selectedAction] != -1){
                         for (let row = 0; row < blocks[actionPiece[selectedAction]].length; row++) {
                              for (let col = 0; col < blocks[actionPiece[selectedAction]][row].length; col++) {
                                   if (blocks[actionPiece[selectedAction]][row][col]) {
                                        if (row+r < 8 && col+c < 8) {
                                             if (gameBoardState[row+r][col+c]) {
                                                  changeSquareColor(div, row+r, col+c,"red");
                                             } else {
                                                  changeSquareColor(div, row+r, col+c,"green");
                                             }
                                        }
                                   }
                              }
                         }
                    }
               }
           });
       
           square.addEventListener('mouseleave', () => {
               square.style.border = "none";
               renderBoardState(board, gameBoardState);
           });
    
            div.appendChild(square);
        }
    }
}

function initActionGrid(div) {
    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
            const square = document.createElement('div');
            square.classList.add('display_square');
            square.dataset.row = row;
            square.dataset.col = col;
            square.dataset.container = div.id;
            
            div.appendChild(square);
        }
    }
}

function changeSquareColor(div, row, col, color) {
    const square = [...document.querySelectorAll('.square')].find(
        sq => sq.dataset.row == row && sq.dataset.col == col && sq.dataset.container == div.id
    );

    if (square) {
        square.style.backgroundColor = color;
    } else {
        console.error(`Square at row ${row}, col ${col}, container ${div.id} not found.`);
    }
}

function changeDisplaySquareColor(div, row, col, color) {
    const square = [...document.querySelectorAll('.display_square')].find(
        sq => sq.dataset.row == row && sq.dataset.col == col && sq.dataset.container == div.id
    );

    if (square) {
        square.style.backgroundColor = color;
    } else {
        console.error(`Square at row ${row}, col ${col}, container ${div.id} not found.`);
    }
}

function fillAction(div, pieceId) {
    const emptyColour = "#FFF";
    const solidColour = "#CCC";

    
    const squares = document.querySelectorAll(`.display_square[data-container="${div.id}"]`);
    squares.forEach(square => {
        square.style.backgroundColor = emptyColour;
    });

    if (pieceId == -1) {
     return;
    }
    
     for (let row = 0; row < 5; row++) {
          for (let col = 0; col < 5; col++) {
               if (blocks5x5[pieceId][row][col]) {
                    changeDisplaySquareColor(div, row, col, solidColour);
               } else {
                    changeDisplaySquareColor(div, row, col, emptyColour);
               }
          }
     }
}

function renderBoardState(div, pBoardState) {
     const emptyColour = "#CCC";
     const solidColour = "#FFF";

     for (let row = 0; row < 8; row++) {
          for (let col = 0; col < 8; col++) {
               if (pBoardState[row][col]) {
                    changeSquareColor(div, row, col, solidColour);
               } else {
                    changeSquareColor(div, row, col, emptyColour);
               }
          }
     }
}

function fetchGameState() {
     fetch('/get-game-state')
         .then(response => response.json())
         .then(data => {
               gameBoardState = data["gameBoardState"];
               actionPiece = data["actions"];
               refreshAll();
         });
}

function resetGame() {
     fetch('/reset-game')
          .then(response => response.json())
          .then(data => {
               gameBoardState = data["gameBoardState"];
               actionPiece = data["actions"];
               refreshAll();
          })
}

function updateScore() {
     let scoreLbl = document.getElementById("score");
     scoreLbl.innerText = "Score: "+score;
}

function saveHistory() {
     fetch('/save-history')
          .then(response => response.json())
          .then(data => {})
}

function refreshAll() {
     renderBoardState(board, gameBoardState);
     fillAction(action1, actionPiece[0]);
     fillAction(action2, actionPiece[1]);
     fillAction(action3, actionPiece[2]);
     updateScore();
}

// Don't touch the initialization code.
iniBoard(board);
initActionGrid(action1);
initActionGrid(action2);
initActionGrid(action3);

fetchGameState();
