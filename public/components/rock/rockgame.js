import { createbutton } from '../createbutton/createbutton'
import { stonedata } from '../data/stonepaperdata'
import './rockgame.css'
export const rockgame = () => {
  let compscore = 0
  let userscore = 0
  const divapp = document.querySelector('#app')
  divapp.innerHTML = ''
  const rocksection = document.createElement('section')
  rocksection.className = 'rockscetion'
  const scorediv = document.createElement('div')
  scorediv.className = 'scorediv'
  const comscore = document.createElement('h1')
  const playerscore = document.createElement('h1')
  comscore.textContent = `machine Score:${compscore}`
  playerscore.textContent = `user Score:${userscore}`
  scorediv.append(comscore)
  scorediv.append(playerscore)

  const playsection = document.createElement('div')
  playsection.className = 'playsection'
  const playdiv = document.createElement('div')
  playdiv.className = 'playdiv'
  const playimg = document.createElement('img')
  playimg.src = stonedata[0].imageurl
  playimg.className = 'playimg'
  playdiv.appendChild(playimg)
  const playchoicediv = document.createElement('div')
  playchoicediv.className = 'playchoicediv'
  for (const item of stonedata) {
    const playicon = document.createElement('img')
    playicon.className = 'playicon'
    playicon.src = item.imageurl
    playicon.addEventListener('click', () => {
      playimg.src = item.imageurl
      const randomIndex = Math.floor(Math.random() * stonedata.length)
      comimg.src = stonedata[randomIndex].imageurl
    })
    playchoicediv.appendChild(playicon)
  }
  playdiv.appendChild(playchoicediv)
  const comdiv = document.createElement('div')
  comdiv.className = 'comdiv'
  const comimg = document.createElement('img')
  comimg.src = stonedata[0].imageurl
  comimg.className = 'playimg'
  comdiv.appendChild(comimg)
  const comchoicediv = document.createElement('div')

  for (const item of stonedata) {
    const comicon = document.createElement('img')
    comicon.src = item.imageurl
    comicon.className = 'playicon'

    comchoicediv.append(comicon)
  }
  comdiv.append(comchoicediv)

  playsection.append(playdiv)
  playsection.append(comdiv)
  rocksection.appendChild(scorediv)
  rocksection.appendChild(playsection)
  divapp.append(rocksection)
}
