import './tresrayas.css'
export const tictac = () => {
  const divapp = document.querySelector('#app')
  divapp.innerHTML = ''
  let currentPlayer = ''
  let cells = ['', '', '', '', '', '', '', '', '']
  const gameBoard = document.createElement('div')
  gameBoard.className = 'gamaBoard'
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
  const creategame = () => {}
  divapp.append(gameBoard)
}
