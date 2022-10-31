$(document).ready(function(){

  new WOW().init();

  
var button=$('#button')
var modal=$('#modal')
var close=$('#close')
    button.click(function(){
        modal.addClass('modal-active');
    })

    close.click(function(){
        modal.removeClass('modal-active');
    })

$('.slider').slick({
    slidesToShow: 3,
    prevArrow: $('.arrows__left'),
    nextArrow: $('.arrows__right'),
    responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 868,
          settings: {
            slidesToShow: 1
          }
        }      
      ]
});


})
