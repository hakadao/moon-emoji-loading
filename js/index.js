// const moon = '🌚🌑🌒🌓🌔🌕🌝🌖🌗🌘';
const moon = [
  '&#x1F318',
  '&#x1F311',
  '&#x1F312',
  '&#x1F313',
  '&#x1F314',
  '&#x1F315',
  '&#x1F31D',
  '&#x1F316',
  '&#x1F317',
]
const moons = document.getElementsByClassName('moon')

const loop = () => {
  moons[0].innerHTML = moonMove(0);
  moons[1].innerHTML = moonMove(.2);
  moons[2].innerHTML = moonMove(.4);
  moons[3].innerHTML = moonMove(.6);
  moons[4].innerHTML = moonMove(.8);
  moons[5].innerHTML = moonMove(1);
  moons[6].innerHTML = moonMove(1.2);
  moons[7].innerHTML = moonMove(1.4);
  moons[8].innerHTML = moonMove(1.6);
  moons[9].innerHTML = moonMove(1.8);
  moons[10].innerHTML = moonMove(2);

  requestAnimationFrame(loop)
}

function moonMove(delay) {
  return moon[Math.floor((Date.now() / 250 + delay) % moon.length)]
}

window.addEventListener('load', () => {
  loop()
})
