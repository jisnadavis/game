import { creategamelist } from './public/components/creategamelist/create'
import './style.css'
const divapp = document.querySelector('#app')
const letsplaybutton = document.createElement('button')
letsplaybutton.textContent = 'lets play'
letsplaybutton.className = 'play'
letsplaybutton.addEventListener('click', () => {
  creategamelist()
})
divapp.appendChild(letsplaybutton)
