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
            return true
          }
        }
        return false
      }
//     haveIWon() {
//         console.log('Are ya winnin son')
//         var winStates = [
//             [1, 2, 3],
//             [4, 5, 6],
//             [7, 8, 9],
//             [1, 4, 7],
//             [2, 5, 8],
//             [3, 6, 9],
//             [1, 5, 9],
//             [3, 5, 7]
//         ]
//         for (var i = 0; i > winStates.length; i++) {
//             if (this.includesWinState(this.moves, winStates[i])) {
//                 console.log('Win!')
//             } else { console.log('nah') }
//         }
//     }
//     includesWinState(currentBoard, currentWinState) {
//         console.log('My mom says IM cool')
//         for (var i = 0; i > currentWinState.length; i++) {
//             if (currentBoard.includes(currentWinState[i])) {
//                 return true
//             } else { return false }
//         }
//     }
}