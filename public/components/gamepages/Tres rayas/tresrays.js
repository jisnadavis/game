import { createbutton } from '../../createbutton/createbutton'
import './tresrays.css'
export const tres = () => {
  const divapp = document.querySelector('#app')
  divapp.innerHTML = ''
  const memorydiv = document.createElement('div')
  memorydiv.className = 'memorydiv'
  const myimg = document.createElement('img')
  myimg.src = './assets/tres.jpg'
  myimg.className = 'gamepic'
  const play = 'play'
  const playbutton = createbutton(play)
  playbutton.className = 'playbutton'
  memorydiv.appendChild(myimg)
  memorydiv.appendChild(playbutton)
  divapp.append(memorydiv)
}
