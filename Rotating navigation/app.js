const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListener('click', ()=> handleOpen())
close.addEventListener('click', () => handleClose())

function handleOpen(){
  container.style.boxShadow = "-10px 10px 33px #fff";
  container.classList.add('show-nav')
}

function handleClose() {
  // container.style.border = 'none'
  container.classList.toggle('show-nav')
}