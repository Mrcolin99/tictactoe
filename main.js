//var
var player1 = new Player('Greg')
var player2 = new Player('Ted')
var game = new Game(player1, player2)
//Query
var gameBoard = document.querySelector('.sec3')
var gameMsg = document.querySelector('.game-msg')
var p1Wins = document.querySelector('.p1Wins')
var p2Wins = document.querySelector('.p2Wins')
var startNewGame = document.querySelector('.newgame')
//Event Listeners
gameBoard.addEventListener('click', clickHandler)
startNewGame.addEventListener('click', newGame)
//Functions
function clickHandler() {
    game.makeMove(event)
    game.changePlayer()
    game.winCondition()
}

function firstWins() {
    p1Wins.innerText = `${player1.wins++} Wins`
}

function secondWins() {
    p2Wins.innerText = `${player2.wins++} Wins`
}

function newGame() {
    game.resetGame()
}