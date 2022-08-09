//var
var player1 = new Player('Greg')
var player2 = new Player('Ted')
var game = new Game(player1, player2)
//Query
var gameBoard = document.querySelector('.sec3')
var gameMsg = document.querySelector('.game-msg')
//Arrays

//Event Listeners
gameBoard.addEventListener('click', clickHandler)
//Functions
function clickHandler() {
    game.makeMove(event)
    game.changePlayer()
    game.winCondition()
}
