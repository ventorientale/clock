(() => {
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
  document.addEventListener('DOMContentLoaded', () => {
    const timeElement = document.querySelector('.time')
    const dateElement = document.querySelector('.date')
    const secondsElement = document.querySelector('.seconds-value')

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
  })
})()