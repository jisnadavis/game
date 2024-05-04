import './tictac.css'
export const threeline = () => {
  const divapp = document.querySelector('#app')
  divapp.innerHTML = ''
  let currentPlayer = ''
  let cells = ['', '', '', '', '', '', '', '', '']

  const gameBoard = document.createElement('div')
  gameBoard.className = 'gameBoard'
  const startgame = () => {
    const buttonX = document.createElement('button')
    buttonX.className = 'button'
    buttonX.textContent = 'play as X'
    buttonX.addEventListener('click', () => {
      currentPlayer = 'X'
      gameBoard.innerHTML = ''
      creategame()
    })
    const buttonO = document.createElement('button')
    buttonO.className = 'button'
    buttonO.textContent = 'play as  O'
    buttonO.addEventListener('click', () => {
      currentPlayer = 'O'
      gameBoard.innerHTML = ''
      creategame()
    })
    gameBoard.append(buttonX)
    gameBoard.append(buttonO)
  }

  const creategame = () => {
    for (let i = 0; i < 9; i++) {
      const cell = document.createElement('div')
      cell.classList.add('cell')
      cell.dataset.index = i
      cell.addEventListener('click', cellclick)
      gameBoard.append(cell)
    }
    const resetbutton = document.createElement('button')
    resetbutton.textContent = 'reset'
    resetbutton.className = 'reset'
    resetbutton.addEventListener('click', resetGame)
    gameBoard.append(resetbutton)
  }

  const cellclick = (event) => {
    const index = event.target.dataset.index
    if (cells[index] === '') {
      event.target.textContent = currentPlayer
      cells[index] = currentPlayer
      if (checkWin(currentPlayer)) {
        alert(`${currentPlayer} wins!`)
        resetGame()
      } else if (cells.every((cell) => cell !== '')) {
        alert("It's a draw!")
        resetGame()
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
      }
    }
  }
  function checkWin(player) {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    return winPatterns.some((pattern) =>
      pattern.every((index) => cells[index] === player)
    )
  }
  function resetGame() {
    currentPlayer = ''
    cells = ['', '', '', '', '', '', '', '', '']
    gameBoard.innerHTML = ''
    startgame()
  }

  startgame()

  divapp.append(gameBoard)
}
