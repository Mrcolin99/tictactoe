class Game {
    constructor(player1, player2) {
        this.player1Turn = true
        this.player1 = player1
        this.player2 = player2
        this.turn = 0
    }
    changePlayer(player1, player2) {
        if (this.player1Turn === true) {
            this.player1Turn = false
            gameMsg.innerText = `${player2.name}s turn`
            player1.checkForWin()
        } else {
            this.player1Turn = true
            gameMsg.innerText = `${player1.name}s turn`
            player2.checkForWin()

        }
    }
    makeMove(event) {
        var move = parseInt(event.target.attributes.sector.value)
        if (this.player1Turn === true && !player2.moves.includes(move) && !player1.moves.includes(move)) {
            player1.moves.push(move)
            markSector(player1)
            console.log(player1.moves)
        } else if (this.player1Turn === false && !this.player1.moves.includes(move) && !player2.moves.includes(move)) {
            player2.moves.push(move)
            markSector(player2)
            console.log(player2.moves)
        } else { return }
        this.turn++
        this.changePlayer(player1, player2)
    }

    drawGame() {
        if (this.turn >= 9) {
            gameMsg.innerText = 'DRAW!'
            suspend(player1, player2)
        } else { return }
    }

    resetGame(player1, player2) {
        this.turn = 0
        this.player1Turn = true
        player1.moves = []
        player2.moves = []
        gameMsg.innerText = `${player1.name}s turn`
        gameBoard.innerHTML = `<div class="ttt" id="1" sector="1"></div>
        <div class="ttt" id="2" sector="2"></div>
        <div class="ttt" id="3" sector="3"></div>
        <div class="ttt" id="4" sector="4"></div>
        <div class="ttt" id="5" sector="5"></div>
        <div class="ttt" id="6" sector="6"></div>
        <div class="ttt" id="7" sector="7"></div>
        <div class="ttt" id="8" sector="8"></div>
        <div class="ttt" id="9" sector="9"></div>`
    }
}