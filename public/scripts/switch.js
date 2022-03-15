const btn = document.querySelector('#btn')
const arrow = document.querySelector('#seta')
const secOneOut = document.querySelector('.sec-one')

btn.addEventListener('click', clickHandelr)

// animation loop
anime({
    targets: arrow,
    duration: 2000,
    scale: 1.5,
    loop: true,
    easing: 'easeInOutQuad'
})


function clickHandelr(){
    arrow.style.transform = "rotate(180deg)"
    anime({
        targets: secOneOut,
        translateY: 20,
        easing: 'easeInOutQuad',
        opacity: [1, 0],
        duration: 750,
    })
}



