const dotsInvert = document.querySelector('.dots')

window.addEventListener('mousemove', (e)=>{
    var mouseX = e.pageX
    var mouseY = e.pageY
    var pageY = document.body.clientHeight
    var pageX = document.body.clientWidth
    var offset = 0.05
    var moveX = (pageX - mouseX - pageX / 2) * offset
    var moveY = (pageY - mouseY - pageY / 2) * offset
    dotsInvert.style.transform = `translate(${moveX}px, ${moveY}px)`
})

window.addEventListener('mouseout', (e)=>{
    dotsInvert.style.transform = `translate(0px, 0px)`
})


