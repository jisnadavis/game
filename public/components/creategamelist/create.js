import { gamelist } from '../data/gamelist'
import './create.css'
export const creategamelist = () => {
  const divapp = document.querySelector('#app')
  divapp.innerHTML = ''
  const uldiv = document.createElement('div')
  uldiv.className = 'uldiv'
  const ulcontainer = document.createElement('ul')
  ulcontainer.className = 'ulcontainer'
  for (const game of gamelist) {
    const gameli = document.createElement('li')
    gameli.textContent = game.gamename

    const gameanchor = document.createElement('a')
    gameanchor.href = game.gamepage
    gameanchor.target = '_blank'
    gameli.addEventListener('click', () => {
      game.page()
    })
    ulcontainer.appendChild(gameli)
    gameli.appendChild(gameanchor)
  }
  uldiv.appendChild(ulcontainer)
  divapp.appendChild(uldiv)
}
