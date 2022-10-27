var button = document.querySelector('#button');
var close = document.querySelector('#close');
var modal = document.querySelector('#modal')

button.addEventListener('click',function(){
    modal.classList.add('modal-active');
})

close.addEventListener('click',function(){
    modal.classList.remove('modal-active');
})