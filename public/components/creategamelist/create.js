import { gamelist } from '../data/gamelist'
import { memory } from '../gamepages/memorygame/memory'
import './create.css'
export const creategamelist = () => {
  const divapp = document.querySelector('#app')
  divapp.innerHTML = ''
  const uldiv = document.createElement('div')
  uldiv.className = 'uldiv'
  const ulcontainer = document.createElement('nav')
  ulcontainer.className = 'ulcontainer'
  for (let i = 0; i < gamelist.length; i++) {
    const game = gamelist[i]
    const gameli = document.createElement('a')
    gameli.textContent = game.gamename
    gameli.href = game.gamepage
    gameli.classList.add('gameli')
    if (i === 0) {
      gameli.classList.add('active')
    }
    gameli.addEventListener('click', (event) => {
      event.preventDefault()
      document.querySelectorAll('.gameli').forEach((a) => {
        a.classList.remove('active')
      })
      gameli.classList.add('active')
      game.page()
      return false
    })

    ulcontainer.appendChild(gameli)
  }

  uldiv.appendChild(ulcontainer)
  document.body.appendChild(uldiv)
  memory()
}
