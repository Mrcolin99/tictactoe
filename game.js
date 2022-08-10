class Game {
    constructor(player1, player2) {
        // this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
        this.player1Turn = true
        this.player1 = player1
        this.player2 = player2
        this.turn = 0
    }
    changePlayer() {
        if (this.player1Turn === true) {
            this.player1Turn = false
            gameMsg.innerText = 'Player 2s turn!'
        } else { 
            this.player1Turn = true
            gameMsg.innerText = 'Player 1s turn!'

        }
    }
    makeMove(event) {
        var move = parseInt(event.target.attributes.sector.value)
        if (this.player1Turn === true) {
            player1.moves.push(move)
            player1.checkForWin()
            console.log(player1.moves)
        } else { player2.moves.push(move) }
        this.turn++
        console.log(this.turn)
    }

    drawGame() {
        gameMsg.innerText = 'DRAW!'
        // this.resetGame()
    }

    resetGame() {
        this.turn = 0
        this.player1Turn = true
        gameMsg.innerText = 'Player 1s turn!'
        console.log(this.turn)
    }

    playerWin() {
        if (this.player1Turn === true) {
            gameMsg.innerText = 'PLAYER 1 WINS!'
        } else {
            gameMsg.innerText = 'PLAYER 2 WINS!'
        }
        // this.resetGame()
        
    }
}