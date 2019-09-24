let setColorsByIndex = (index) => {}

(function () {
  const colorStorageKey = 'selected-color-index'

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
      bottomLeft: '#f8a348',
      bottomRight: '#f8ec39',
      bodyColor: '#fff'
    },
    {
      topLeft: '#af2444',
      topRight: '#df3f52',
      bottomLeft: '#961632',
      bottomRight: '#f8b15e',
      bodyColor: '#fff'
    },
    {
      topLeft: '#af465b',
      topRight: '#f0e4a2',
      bottomLeft: '#f86f86',
      bottomRight: '#f8513a',
      bodyColor: '#fff'
    },
    {
      topLeft: '#e2d133',
      topRight: '#51d9df',
      bottomLeft: '#e9708d',
      bottomRight: '#f81f59',
      bodyColor: '#fff'
    },
    {
      topLeft: '#2434af',
      topRight: '#4ce5f0',
      bottomLeft: '#f8d12c',
      bottomRight: '#f84e5a',
      bodyColor: '#fff'
    }, {
      topLeft: '#e62242',
      topRight: '#e64537',
      bottomLeft: '#f8f39e',
      bottomRight: '#44f8f1',
      bodyColor: '#fff'
    },
  ]

  const getRandomArbitrary = (min, max) => Math.random() * (max - min) + min

  document.addEventListener('DOMContentLoaded', (event) => {
    const background1Element = document.querySelector('.background-1')
    const background2Element = document.querySelector('.background-2')
    const bodyElement = document.querySelector('body')
    const colorMenuElement = document.querySelector('.color-menu')

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
      renderMenu(index)
    }

    let currentColorIndex = parseInt(localStorage.getItem(colorStorageKey), 10) || 0
    setColorsByIndex(backgroundColors[currentColorIndex] ? currentColorIndex : 0)

    function renderMenu (currentIndex) {
      let menuInner = ''
      backgroundColors.forEach((color, index) => {
        menuInner += getMenuButton(color, index, index === currentIndex)
      })
      colorMenuElement.innerHTML = menuInner
    }

    renderMenu(currentColorIndex)
  })

  /**
   *
   * @param {{topLeft: string, topRight: string, bottomLeft: string, bottomRight: string, bodyColor: string}} colors
   * @param index
   * @param isActive
   */
  function getMenuButton (colors, index, isActive = false) {
    return `
  <div class="item ${isActive ? 'active' : ''}" onclick="setColorsByIndex(${index})">
        <span style="background: ${colors.topLeft} "></span>
        <span style="background: ${colors.topRight}"></span>
        <span style="background: ${colors.bottomLeft}"></span>
        <span style="background: ${colors.bottomRight}"></span>
        <span style="background: ${colors.bodyColor}"></span>
    </div>
  `
  }

}())