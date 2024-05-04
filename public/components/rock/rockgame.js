import { createbutton } from '../createbutton/createbutton'
import { stonedata } from '../data/stonepaperdata'
import './rockgame.css'
export const rockgame = () => {
  let compscore = sessionStorage.getItem('compscore')
    ? parseInt(sessionStorage.getItem('compscore'))
    : 0
  let userscore = sessionStorage.getItem('userscore')
    ? parseInt(sessionStorage.getItem('userscore'))
    : 0
  const divapp = document.querySelector('#app')
  divapp.innerHTML = ''
  const rocksection = document.createElement('section')
  rocksection.className = 'rocksection'
  const scorediv = document.createElement('div')
  scorediv.className = 'scorediv'
  const playerscore = document.createElement('h1')
  const comscore = document.createElement('h1')
  comscore.textContent = `Machine Score: ${compscore}`
  playerscore.textContent = `User Score: ${userscore}`
  scorediv.append(playerscore)
  scorediv.append(comscore)

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
      const comChoice = stonedata[randomIndex]
      comimg.src = comChoice.imageurl
      checkGame(item.imageurl, comChoice.imageurl)
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
  function checkGame(userChoiceImageUrl, comChoiceImageUrl) {
    if (
      (userChoiceImageUrl === stonedata[0].imageurl &&
        comChoiceImageUrl === stonedata[2].imageurl) ||
      (userChoiceImageUrl === stonedata[1].imageurl &&
        comChoiceImageUrl === stonedata[0].imageurl) ||
      (userChoiceImageUrl === stonedata[2].imageurl &&
        comChoiceImageUrl === stonedata[1].imageurl)
    ) {
      // User wins
      userscore++
    } else if (
      (comChoiceImageUrl === stonedata[0].imageurl &&
        userChoiceImageUrl === stonedata[2].imageurl) ||
      (comChoiceImageUrl === stonedata[1].imageurl &&
        userChoiceImageUrl === stonedata[0].imageurl) ||
      (comChoiceImageUrl === stonedata[2].imageurl &&
        userChoiceImageUrl === stonedata[1].imageurl)
    ) {
      compscore++
    }

    playerscore.textContent = `User Score: ${userscore}`
    comscore.textContent = `Machine Score: ${compscore}`
    sessionStorage.setItem('compscore', compscore.toString())
    sessionStorage.setItem('userscore', userscore.toString())
  }
}
