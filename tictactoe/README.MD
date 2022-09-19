**App's Functionality**
MVP

- As a user, I want to see who's turn it is at the top of the page
- As a user, I want to click a reset button to start the game over.
- As a user, when I click on a square on the board, I want to see my piece populate that spot on the board.
- As a user, after every move, I want to know whether I won, loss, or the game is still going

Icebox Features

- As a user, I want to see the running score of how many games each player has won.
- As a user, if I hover over a winning move, I want to see a line passed through it.
- As a user, I want to see a timer to know how long a player's move is taking

**Psuedocode**
When we a start a game of tic tac toe:

- initialize the board state to be empty [ init() ]
- pick a player to go first (initializing the playerTurn / turn state) [ pickPlayer() ]
- render the game state to the DOM [ render() ]

When it's a player's turn:

- when a player clicks the board, we need to update the board state to reflect the space that they chose [ handleClick() ]
- change who's turn it is (update the turn state) [ updateTurn() ]
- check the state of the game to see if win loss draw or keep playing [ checkWin() ]
- render the game state to the DOM [ render() ]

When the game is over:

- update the user's running overall score [ updateUserScore() ]
- render a win/lose/tie message to the DOM [ render() ]
- remove event listeners from the board (?)
- reinitialize the state of the game if the player clicks the reset button (reinitialize board, reinitialize turns, timer if implemented) [ init() ]

** Application State Data **

- turn (potentially string with usernames, potentially integer using 1, -1, boolean, objects/the player object itself)
  - we will go with the integers (1, -1)
- board (potentially an array with 9 elements or one array with 3 nested arrays w/ 3 elements each)
  - we will go with a single array with 9 elements (for code simplicity)
- win (potentially strings storing 'win' 'lose' 'draw' or whoever won the game / numbers (1, -1, 0), potentially booleans, null)
  - we will go with the integers (1, -1) to indicate a certain winner, otherwise we will use null to represent no current winner

** Application Constant Data **

- winningCombinations (an object or array because we have a list of combos (each combo is going to be an array with three elements))
  - we will go with a nested array
- player (this will be an object that will store our player info such as: who is an x and who is an o)
