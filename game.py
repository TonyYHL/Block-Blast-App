from __future__ import annotations
from random import randint

from copy import deepcopy

class BlockBlast:
     BLOCKS : dict[int, list[list[bool]]] = {
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
     BLOCKS_SIZE : dict[int, int] = {
     0 : 2,
     1 : 2,
     2 : 3,
     3 : 3,
     4 : 4,
     5 : 9,
     6 : 5,
     7 : 5,
     8 : 5,
     9 : 5,
     10: 6,
     11: 6,
     12: 4,
     13: 4,
     14: 4,
     15: 4,
     16: 4,
     17: 4,
     18: 4,
     19: 4,
     20: 3,
     21: 3,
     22: 3,
     23: 3,
     24: 4,
     25: 5,
     26: 4,
     27: 5,
     28: 4,
     29: 4,
     30: 4,
     31: 4,
     32: 4,
     33: 4,
     34: 4,
     35: 4,
     36: 2,
     37: 2,
     38: 3,
     39: 3,
}
     BLOCKS_ROT_90_CLOCK = {
          -1:-1,
          0 : 1,
          1 : 0,
          2 : 3,
          3 : 2,
          4 : 4,
          5 : 5,
          6 : 9,
          7 : 6,
          8 : 7,
          9 : 8,
          10:11,
          11:10,
          12:16,
          13:17,
          14:18,
          15:19,
          16:15,
          17:14,
          18:13,
          19:12,
          20:22,
          21:23,
          22:21,
          23:20,
          24:26,
          25:27,
          26:24,
          27:25,
          28:30,
          29:31,
          30:29,
          31:28,
          32:35,
          33:34,
          34:33,
          35:32,
          36:37,
          37:36,
          38:39,
          39:38
     }
     TOTAL_BLOCKS : int = 40

     BOARD_SIZE = 8
     COMBO_EXPIRE = 3
     EMPTY_BOARD = [[0 for i in range(8)] for j in range(BOARD_SIZE)]

     def __init__(self):
          # Note: 0 represents empty space and 1 represents occupied space.
          self.board : list[list[bool]] = [[0 for i in range(BlockBlast.BOARD_SIZE)] for j in range(BlockBlast.BOARD_SIZE)]
          self.actions : list[int] = [-1,-1,-1] # stores avaliable piece id
          self.score : int = 0
          # number of block placed: +1 each
          # Row/Column completion: +10 each
          # combo completion: Each additional combo +10. E.g 2 combo +10,  3 combo +30
          # clear board: +300
          self.combo = 0
          self.comboExpires = 3
          self._refreshActions()
     
     def placePiece(self, actionIndex:int, x:int, y:int) -> bool:
          """Return: True: operation successful, False: operation failed"""
          if self.actions[actionIndex] == -1:
               return False
          
          piece = BlockBlast.BLOCKS[self.actions[actionIndex]]
          
          # Check for overlapping and placenent validity.
          try:
               for r, row in enumerate(piece):
                    for c, column in enumerate(row):
                         boardBlock = self.board[y+r][x+c]
                         if boardBlock and column:
                              return False
          except IndexError:
               return False
          
          updatedRows : list[int] = []
          updatedColumns : list[int] = []
          
          for r, row in enumerate(piece):
               for c, column in enumerate(row):
                    self.board[y+r][x+c] = column or self.board[y+r][x+c]
          
          for r in range(len(piece)):
               updatedRows.append(y+r)
          for c in range(len(piece[0])):
               updatedColumns.append(x+c)
                    
          self.score += BlockBlast.BLOCKS_SIZE[self.actions[actionIndex]] # Placement score
          self.actions[actionIndex] = -1
          
          self.comboExpires -= 1
          
          self.__updateBoard(updatedColumns, updatedRows)
                    
          if self.comboExpires == 0:
               self.combo = 0
               self.comboExpires = BlockBlast.COMBO_EXPIRE
          
          if self.actions.count(-1)==3:
               self._refreshActions()
          
          return True

     def __updateBoard(self, column:list[int], row:list[int]) -> None:
          fullRow : list[int] = []
          for r in row:
               if self.board[r] == [1,1,1,1,1,1,1,1]:
                    fullRow.append(r)
          notFullColumn : list[int] = []
          for c in column:
               for i in range(0,BlockBlast.BOARD_SIZE):
                    if self.board[i][c] == 0:
                         notFullColumn.append(c)
                         break
          
          if len(fullRow) == 0 and len(notFullColumn) == len(column):
               return
          else:
               self.comboExpires = BlockBlast.COMBO_EXPIRE
          
          for r in fullRow:
               self.board[r] = [0 for i in range(BlockBlast.BOARD_SIZE)]
               self.score += (self.combo + 1) * 10
               self.combo += 1
          for c in set(column).difference(notFullColumn):
               for i in range(0,BlockBlast.BOARD_SIZE):
                    self.board[i][c] = 0
               self.score += (self.combo + 1) * 10
               self.combo += 1
          
          if self.__isBoardEmpty():
               self.score += 300
     
     def allNextStates(self):
          """A generator that generates all valid next state from the current state."""
          for pieceIndex, pieceId in enumerate(self.actions):
               if self.actions[pieceIndex] != -1:
                    for x in range(BlockBlast.BOARD_SIZE):
                         for y in range(BlockBlast.BOARD_SIZE):
                              # Copy all information of the current game
                              game = BlockBlast()
                              game.board = deepcopy(self.board)
                              game.actions = deepcopy(self.actions)
                              game.score = self.score
                              game.combo = self.combo
                              game.comboExpires = self.comboExpires
                                                       
                              if game.placePiece(pieceIndex, x, y):
                                   yield (pieceId, x, y, game)        
          
     def _refreshActions(self) -> None:
          self.actions : list[int] = []
          self.actions.append(randint(0,BlockBlast.TOTAL_BLOCKS-1))
          self.actions.append(randint(0,BlockBlast.TOTAL_BLOCKS-1))
          self.actions.append(randint(0,BlockBlast.TOTAL_BLOCKS-1))
          
     def __isBoardEmpty(self) -> bool:
          return self.board == BlockBlast.EMPTY_BOARD
                         
     def print(self) -> None:
          for j in range(BlockBlast.BOARD_SIZE):
               print(str(self.board[j]))
     
     def getGameState(self) -> tuple[list,list]:
          hotEncoding = [0 for i in range(self.TOTAL_BLOCKS)]
          for actionId in self.actions:
               hotEncoding[actionId] += 1
          return (self.board, hotEncoding)

     @staticmethod
     def Utilflatten(list2d:list[list[int]]) -> list:
          return [x for xs in list2d for x in xs]
     
     @staticmethod
     def isPlaceable(grid:list[list[int]], pieceId:int, x:int, y:int) -> bool:
          """Return True if the block is placeable at the current state otherwise False."""
          piece = BlockBlast.BLOCKS[pieceId]
          try:
               for r, row in enumerate(piece):
                    for c, column in enumerate(row):
                         boardBlock = grid[y+r][x+c]
                         if boardBlock and column:
                              return False
          except IndexError:
               return False
          return True
     
     def reset(self):
          self.board : list[list[bool]] = [[0 for i in range(BlockBlast.BOARD_SIZE)] for j in range(BlockBlast.BOARD_SIZE)]
          self.actions = [-1,-1,-1]
          self.score : int = 0
          self.combo = 0
          self.comboExpires = 3
          self._refreshActions()
          
     def clone(self):
          new = BlockBlast()
          new.board = deepcopy(self.board)
          new.actions = deepcopy(self.actions)
          new.combo = self.combo
          new.comboExpires = self.comboExpires
          return new

if __name__ == "__main__":
     game = BlockBlast()
     
     while True:
          print("Score: ",game.score)
          game.print()
          print(game.actions)
          
          try:
               pieceId = int(input("PieceId : "))
               x = int(input("@x : "))
               y = int(input("@y : "))
          except:
               pass
          
          print("Placement",game.placePiece(pieceId, x, y))
