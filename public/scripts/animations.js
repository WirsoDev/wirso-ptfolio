const sideBar = document.querySelector('.side-bar')
const topbar = document.querySelector('.nav')
const secOne = document.querySelector('.sec-one')
const photo = document.querySelector('.sec-foto')
const dots = document.querySelector('.sec-dots')
const glass = document.querySelector('.sec-glass')
const footer = document.querySelector('.footer')

var tl = anime.timeline({
    duration: 550,
    direction: 'reverse',
    easing: 'easeInOutQuad',
  });

tl
.add({
    targets: [topbar, photo],
    translateY: 20,
    easing: 'easeInOutQuad',
    opacity: [1, 0],
})
.add({
    targets: [sideBar, footer],
    translateX: 50,
    easing: 'easeInOutQuad',
    opacity: [1, 0],
})

var tlTow = anime.timeline({
    duration: 550,
    direction: 'reverse',
    easing: 'easeInOutQuad',
    endDelay: 500
  });

tlTow
.add({
    targets: [glass, dots],
    translateX: -50,
    easing: 'easeInOutQuad',
    opacity: [1, 0],
})









