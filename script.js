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
    bottomRight: '#027461'
  }
]

const getRandomArbitrary = (min, max) => Math.random() * (max - min) + min

document.addEventListener('DOMContentLoaded', (event) => {
  const timeElement = document.querySelector('.time')
  const dateElement = document.querySelector('.date')
  const secondsElement = document.querySelector('.seconds-value')
  const background1Element = document.querySelector('.background-1')
  const background2Element = document.querySelector('.background-2')

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
})

