// const moon = '🌑🌚🌒🌓🌔🌕🌝🌖🌗🌘';
const moon = [
  '&#x1F311',
  '&#x1F31A',
  '&#x1F312',
  '&#x1F313',
  '&#x1F314',
  '&#x1F315',
  '&#x1F31D',
  '&#x1F316',
  '&#x1F317',
  '&#x1F318',
]
const moonContainers = document.getElementsByClassName('moon-container')
let moonList = []

for (let i = 0; i < moonContainers.length; i++) {
  moonList.push(moonContainers[i].getElementsByClassName('moon'))
}

const loop = () => {
  for (let i = 0; i < moonList.length; i++) {
    for (let j = 0; j < 10; j++) {
      moonList[i][j].innerHTML = moonMove((1 + 0.1 * i) * j * 0.2)
      moonList[i][j].style.transform = moonScale(j)
    }
  }

  requestAnimationFrame(loop)
}

function moonMove(delay) {
  return moon[Math.floor((Date.now() / 250 + delay) % moon.length)]
}

function moonScale(delay) {
  let offset = Math.floor((Date.now() / 250 + delay) % moon.length)
  return `scale(${1 - 0.1 * offset})`
}

window.addEventListener('load', () => {
  loop()
})
