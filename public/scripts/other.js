const logo = document.querySelector('#logo')

logo.addEventListener('click', ()=>{
    location.reload()
})

window.addEventListener('contextmenu', function (e) { 
    e.preventDefault(); 
  }, false);

