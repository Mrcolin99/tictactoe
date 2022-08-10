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
        if (this.player1Turn === true) {
            player1.moves.push(move)
            console.log(player1.moves)
        } else { player2.moves.push(move) }
        this.turn++
        console.log(this.turn)
    }

    drawGame() {
        gameMsg.innerText = 'DRAW!'
        // this.resetGame()
    }

    resetGame(player1) {
        this.turn = 0
        this.player1Turn = true
        gameMsg.innerText = `${player1.name}s turn`
        console.log(this.turn)
    }
}