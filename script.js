const colorStorageKey = 'selected-color-index'
let hours = 0
let minutes = 0
let seconds = 0
let day = 0
let month = 0
let year = 0
let dayOfWeek = 'sun'
let daysOfWeek = [
  'sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'
]

let backgroundColors = [
  {
    topLeft: '#580141',
    topRight: '#580141',
    bottomLeft: '#027461',
    bottomRight: '#027461',
    bodyColor: '#433636'
  },
  {
    topLeft: '#af465b',
    topRight: '#af465b',
    bottomLeft: '#f8ec39',
    bottomRight: '#f8ec39',
    bodyColor: '#fff'
  },
  {
    topLeft: '#af2444',
    topRight: '#df3f52',
    bottomLeft: '#f8abf1',
    bottomRight: '#f839c1',
    bodyColor: '#fff'
  },
  {
    topLeft: '#af465b',
    topRight: '#f0e4a2',
    bottomLeft: '#f86d7a',
    bottomRight: '#f8513a',
    bodyColor: '#fff'
  }
]

const getRandomArbitrary = (min, max) => Math.random() * (max - min) + min
let setColorsByIndex = (index) => {}

document.addEventListener('DOMContentLoaded', (event) => {
  const timeElement = document.querySelector('.time')
  const dateElement = document.querySelector('.date')
  const secondsElement = document.querySelector('.seconds-value')
  const background1Element = document.querySelector('.background-1')
  const background2Element = document.querySelector('.background-2')
  const bodyElement = document.querySelector('body')
  const colorMenuElement = document.querySelector('.color-menu')

  function render () {
    timeElement.innerHTML = `${hours}:${minutes}`
    secondsElement.innerHTML = seconds
    dateElement.innerHTML = `${dayOfWeek}, ${day}.${month}.${year}`
  }

  function padZeroLeft (text, length = 2) {
    return text.toString().padStart(length, '0')
  }

  setInterval(() => {
    const currentDate = new Date()
    hours = padZeroLeft(currentDate.getHours())
    minutes = padZeroLeft(currentDate.getMinutes())
    seconds = padZeroLeft(currentDate.getSeconds())
    day = padZeroLeft(currentDate.getDate())
    month = padZeroLeft(currentDate.getMonth())
    year = currentDate.getFullYear()
    dayOfWeek = daysOfWeek[currentDate.getDay()]
    render()
  }, 500)
  setInterval(() => {
    background1Element.style.opacity = getRandomArbitrary(0.5, 1)
    background2Element.style.opacity = getRandomArbitrary(0.3, 0.7)
  }, 1000)

  /**
   *
   * @param {{topLeft: string, topRight: string, bottomLeft: string, bottomRight: string, bodyColor: string}} colors
   */
  function setColors (colors) {
    background1Element.style.backgroundImage = `linear-gradient(135deg, ${colors.topLeft}, ${colors.bottomLeft})`
    background2Element.style.backgroundImage = `linear-gradient(225deg, ${colors.topRight}, ${colors.bottomRight})`
    bodyElement.style.background = colors.bodyColor
  }

  setColorsByIndex = (index) => {
    setColors(backgroundColors[index])
    localStorage.setItem(colorStorageKey, index)
  }

  let currentColorIndex = parseInt(localStorage.getItem(colorStorageKey), 10) || 0
  setColorsByIndex(backgroundColors[currentColorIndex] ? currentColorIndex : 0)

  let menuInner = ''
  backgroundColors.forEach((color, index) => {
    menuInner += getMenuButton(color, index)
  })
  colorMenuElement.innerHTML = menuInner
})

/**
 *
 * @param {{topLeft: string, topRight: string, bottomLeft: string, bottomRight: string, bodyColor: string}} colors
 * @param index
 */
function getMenuButton (colors, index) {
  return `
  <div class="item" onclick="setColorsByIndex(${index})">
        <span style="background: ${colors.topLeft} "></span>
        <span style="background: ${colors.topRight}"></span>
        <span style="background: ${colors.bottomLeft}"></span>
        <span style="background: ${colors.bottomRight}"></span>
        <span style="background: ${colors.bodyColor}"></span>
    </div>
  `
}

