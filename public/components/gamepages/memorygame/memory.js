import { createbutton } from '../../createbutton/createbutton'
import { gamemry } from '../../memorygame/gamemry'
import './memory.css'
export const memory = () => {
  const divapp = document.querySelector('#app')
  divapp.innerHTML = ''
  const memorydiv = document.createElement('div')
  memorydiv.className = 'memorydiv'
  const myimg = document.createElement('img')
  myimg.src = './assets/mgame.png'
  myimg.className = 'gamepic'
  const play = 'play'
  const playbutton = createbutton(play)
  playbutton.className = 'playbutton'
  playbutton.addEventListener('click', () => {
    gamemry()
  })
  memorydiv.appendChild(myimg)
  memorydiv.appendChild(playbutton)
  divapp.append(memorydiv)
}
