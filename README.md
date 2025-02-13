# Block-Blast-App
Clone of the game Block Blast. Features fully functional game environment and game episode recorder for reinforcement learning and web page GUI.

game.py contains the game environment built in OOP. Run this file to play the game on terminal. 
The game contains 40 standard blocks. Score system similar to the actual game. E.g. Combo gains higher score. 
Note: The actions are randomly generated. 

blockBlastApp.py contains interfaces for playing game on the web page. 
Web page GUI dependency: Flask 3.1.0
Type _saveHistory();_ in console to save all the game state in a json file. The json file will be created in the directory that contains the blockBlastApp.py file. 
The saved game history contains rotated board and respective blocks for reinforcement learning purpose. 
