import { memoryData } from '../data/memorydata'
import './gamemry.css'
export const gamemry = () => {
  const divapp = document.querySelector('#app')
  divapp.innerHTML = ''
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }
  const printcard = () => {
    const memoryGrid = document.createElement('div')
    memoryGrid.className = 'memory-grid'
    shuffleArray(memoryData)
    memoryData.forEach((item) => {
      const card = document.createElement('div')
      card.className = 'memory-card'
      card.dataset.id = item.id

      const front = document.createElement('div')
      front.className = 'front'
      const back = document.createElement('div')
      back.className = 'back'
      back.style.backgroundImage = `url(${item.imageUrl})`

      card.appendChild(front)
      card.appendChild(back)

      card.addEventListener('click', () => handleCardClick(card))

      memoryGrid.appendChild(card)
    })

    divapp.appendChild(memoryGrid)
  }
  printcard()
  let score = 0
  let flippedCards = []
  let matchedCards = new Set()
  const scoreh1 = document.createElement('h1')
  scoreh1.className = 'score'
  scoreh1.textContent = `Score: ${score}`
  divapp.appendChild(scoreh1)
  // reset the score bord
  const resetGame = () => {
    matchedCards.clear()
    score = 0
    scoreh1.textContent = `Score: ${score}`
    flippedCards.forEach((card) => flipCard(card))
    flippedCards = []
    printcard()
  }

  const flipCard = (card) => {
    card.classList.toggle('flipped')
  }

  const checkMatch = () => {
    const [firstCard, secondCard] = flippedCards

    if (firstCard.dataset.id === secondCard.dataset.id) {
      if (score == 10) {
        resetscore()
      }
      score++

      scoreh1.textContent = `Score: ${score}`
      matchedCards.add(firstCard.dataset.id)
      flippedCards = []
      if (score === 10) {
        setTimeout(() => {
          alert('you win the game')
        }, 1000)

        resetGame()
      }
    } else {
      setTimeout(() => {
        flippedCards.forEach((card) => flipCard(card))
        flippedCards = [] // Clear flipped cards
      }, 1000)
    }
  }
  const handleCardClick = (card) => {
    if (
      !matchedCards.has(card.dataset.id) &&
      flippedCards.length < 2 &&
      !flippedCards.includes(card)
    ) {
      console.log('Valid click')
      flipCard(card)
      flippedCards.push(card)
      if (flippedCards.length === 2) {
        checkMatch()
      }
    } else {
      alert('invalid click')
    }
  }
}
