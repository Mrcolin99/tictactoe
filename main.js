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
var overlay = document.querySelector('.overlay')
var ttt = document.querySelector('.ttt')
//Event Listeners
gameBoard.addEventListener('click', clickHandler)
startNewGame.addEventListener('click', newGame)
window.addEventListener('load', newGame)
//Functions
function clickHandler() {
    game.makeMove(event)
    game.drawGame()
}

function newGame() {
    game.resetGame(player1, player2)
}

function suspend(player1, player2) {
    updateScore(player1, player2)
    overlay.classList.remove('hidden')
    console.log(overlay)
    setTimeout(reEnable, 3000)
}

function reEnable() {
    overlay.classList.add('hidden')
    game.resetGame(player1, player2)
}

function updateScore(player1, player2) {
    p1Wins.innerText = `${player1.wins}`
    p2Wins.innerText = `${player2.wins}`
}

function markSector(event) {
    var currentSector = event.target.attributes.sector.value
    if (game.player1Turn === true) {
        ttt.currentSector.innerText = 'X'
    } else {ttt.currentSector.innerText = 'O'}
}