const btn = document.querySelector('#btn')
const arrow = document.querySelector('#seta')
const secOneOut = document.querySelector('.sec-one')
const secTwoOut = document.querySelector('.sec-two')
const rocket = document.querySelector('.rocket')

var currentPage = 1

btn.addEventListener('click', clickHandelr)
secTwoOut.style.display = 'none'

// animation loop
anime({
    targets: arrow,
    duration: 2000,
    scale: 1.5,
    loop: true,
    easing: 'easeInOutQuad'
})

anime({
    targets: rocket,
    duration: 2000,
    translateY: 25,
    loop: true,
    easing: 'easeInOutQuad',
    direction: 'alternate',
  })


function clickHandelr(){
    console.log(currentPage)
    if(currentPage === 1){
        arrow.style.transform = "rotate(180deg)"
        anime({
            targets: secOneOut,
            translateY: 20,
            easing: 'easeInOutQuad',
            opacity: [1, 0],
            duration: 750,
        })
        
        setTimeout(() => {
            secOneOut.style.display = 'none'
        }, 750);

        setTimeout(()=>{
            secTwoOut.style.display = 'flex'
            anime({
                targets: secTwoOut,
                translateY: 20,
                easing: 'easeInOutQuad',
                opacity: [0, 1],
                duration: 750,
                })
            }, 750)
        
            currentPage = 2

    }else{
        // close page 1 and active page 2
        arrow.style.transform = "rotate(180deg)"

        anime({
            targets: secTwoOut,
            translateY: 20,
            easing: 'easeInOutQuad',
            opacity: [1, 0],
            duration: 750,
        })

        setTimeout(() => {
            secTwoOut.style.display = 'none'
        }, 750);
        
        setTimeout(()=>{
            secOneOut.style.display = 'flex'
            anime({
                targets: secOneOut,
                translateY: 20,
                easing: 'easeInOutQuad',
                opacity: [0, 1],
                duration: 750,
                })
            }, 750)
        currentPage = 1
    }

}



