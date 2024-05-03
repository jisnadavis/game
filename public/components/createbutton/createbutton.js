import './createbutton.css'
export const createbutton = (text) => {
  const button = document.createElement('button')
  button.textContent = text
  return button
}
