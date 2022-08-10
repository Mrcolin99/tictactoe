class Player {
    constructor(name) {
        this.name = name
        this.wins = 0
        this.moves = []
    }
    includesWin(winState, moves) {
        for (var i = 0; i < winState.length; i++) {
          if (!moves.includes(winState[i])) {
            return false;
          }
        }
        return true;
      }
    
      checkForWin() {
        var winStates = [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
          [1, 4, 7],
          [2, 5, 8],
          [3, 6, 9],
          [1, 5, 9],
          [3, 5, 7]
        ]
        for (var i = 0; i < winStates.length; i++) {
          if (this.includesWin(winStates[i], this.moves)) {
            this.wins ++
            this.playerWin()
            return true
          }
        }
        return false
      }
    playerWin() {
        return gameMsg.innerText = `${this.name} WINS!`
    }
}