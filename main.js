//var
var player1 = new Player('Rick')
var player2 = new Player('Greg')
var game = new Game(player1, player2)
//Query
var p1wincounter = document.querySelector('.p1')
var p2wincounter = document.querySelector('.p2')
var gameBoard = document.querySelector('.sec3')
var gameMsg = document.querySelector('.game-msg')
var p1Wins = document.querySelector('.p1Wins')
var p2Wins = document.querySelector('.p2Wins')
var startNewGame = document.querySelector('.newgame')
var overlay = document.querySelector('.overlay')
var ttt = document.querySelectorAll('.ttt')
//Event Listeners
window.addEventListener('load', newGame(player1, player2))
gameBoard.addEventListener('click', clickHandler)
startNewGame.addEventListener('click', newGameButton)
//Functions
function clickHandler() {
    game.makeMove(event)
    game.drawGame()
}

function newGameButton() {
    game.turn = 9
    game.drawGame(player1, player2)
}

function newGame(player1, player2) {
    p1wincounter.innerText = `${player1.name} Wins:`
    p2wincounter.innerText = `${player2.name} Wins:`
    game.drawGame(player1, player2)
}

function suspend(player1, player2) {
    updateScore(player1, player2)
    overlay.classList.remove('hidden')
    setTimeout(reEnable, 3000)
}

function reEnable() {
    clearSectors()
    overlay.classList.add('hidden')
    game.resetGame(player1, player2)
}

function updateScore(player1, player2) {
    p1Wins.innerText = `${player1.wins}`
    p2Wins.innerText = `${player2.wins}`
}

function markSector(player) {
    var mark = game.player1Turn ? 'X' : 'O'
    for (var i = 0; i < player.moves.length; i++) {
        ttt[player.moves[i] - 1].innerText = mark
    }
}

function clearSectors() {
    for (var i = 0; i < 9; i++)
    ttt[i].innerText = ''
}