$(document).ready(function(){
var button=$('#button')
var modal=$('#modal')
var close=$('#close')
    button.click(function(){
        modal.addClass('modal-active');
    })

    close.click(function(){
        modal.removeClass('modal-active');
    })




})
