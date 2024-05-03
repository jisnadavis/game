import { createbutton } from '../../createbutton/createbutton'
import { rockgame } from '../../rock/rockgame'
import './stonepaper.css'
export const stone = () => {
  const divapp = document.querySelector('#app')
  divapp.innerHTML = ''
  const memorydiv = document.createElement('div')
  memorydiv.className = 'memorydiv'
  const myimg = document.createElement('img')
  myimg.src = './assets/rock1.jpg'
  myimg.className = 'gamepic'
  const play = 'play'
  const playbutton = createbutton(play)
  playbutton.className = 'playbutton'
  playbutton.addEventListener('click', () => {
    rockgame()
  })
  memorydiv.appendChild(myimg)
  memorydiv.appendChild(playbutton)
  divapp.append(memorydiv)
}
