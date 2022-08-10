class Game {
    constructor(player1, player2) {
        this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
        this.player1Turn = true
        this.player1 = player1
        this.player2 = player2
        this.turn = 0
    }
    changePlayer() {
        if (this.player1Turn === true) {
            this.player1Turn = false
        } else { this.player1Turn = true }
    }
    makeMove(event) {
        var move = event.target.attributes.sector.value
        if (this.player1Turn === true) {
            this.board[move] = 1
        } else { this.board[move] = 2 }
        this.turn++
        console.log(this.board)
        console.log(this.turn)
    }
    winCondition() {
        var winBoard = [
            [1, 1, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 1, 1],
            [1, 0, 0, 1, 0, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 0, 0, 1, 0, 0, 0, 1],
            [0, 0, 1, 0, 1, 0, 1, 0, 0]
        ]
        for (var i = 0; i < winBoard.length; i++) {
            if (this.board.includes(winBoard[i])) {
                this.playerWin()
            } else if (this.turn >= 9) {
                this.drawGame()
            }
        }
    }
    drawGame() {
        gameMsg.innerText = 'DRAW!'
        // this.resetGame()
    }

    resetGame() {
        this.turn = 0
        this.player1Turn = true
        this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
        gameMsg.innerText = ''
        console.log(this.board)
        console.log(this.turn)
    }

    playerWin() {
        if (this.player1Turn === true) {
            main.firstWins()
            gameMsg.innerText = 'PLAYER 1 WINS!'
        } else {
            main.secondWins()
            gameMsg.innerText = 'PLAYER 2 WINS!'
        }
        this.resetGame()
        
    }
}