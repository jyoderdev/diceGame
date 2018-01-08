# diceGame
Dice Game project files
Colors Used:
Dark Gray: #a6a6a6
Davy's Gray: #555
Light Gray: #bdbdbd
Sage Green: #7CB342
V. Dark Gray: #222
Darker green: #689537
The basic CSS and JavaScript outline for this game came from code provided by Jonas Schmedtmann from the Udemy course The Complete JavaScript Course: Build a Real-World Project.
I fleshed out the game following instructions provided in-class by Mr. Schmedtmann and then added additional functionality to the game on my own.

BASIC GAME RULES (coded in class):
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

The objectives listed below I completed on my own.
YOUR 3 CHALLENGES - Change the game to follow these rules:

[X] A player loses his ENTIRE score when he rolls two 6's in a row. After that, it's the next player's turn. (Hint: Always save the previous die roll in a separate variable) -Completed 2018/01/08

[ ] Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good opportunity to use Google to figure this out)

[ ] Add another die to the game, so that there are two dice now. The player loses his current score when one of them is a 1. (Hint: you will need CSS to position the second die, so take a look at the CSS code for the first one.)
