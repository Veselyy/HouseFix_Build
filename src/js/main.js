$(document).ready(function(){

  new WOW().init();

// Modální okno
var button=$('#button')
var modal=$('#modal')
var close=$('#close')
    button.click(function(){
        modal.addClass('modal-active');
    })

    close.click(function(){
        modal.removeClass('modal-active');
    })

// Validace formuláře
$('#brief-form').validate({
  rules: {
    // Musí být vyplnění
    username: "required",
    phone: "required"
    },
  
  // Zprávy, které se zobrazí při erroru
  // Zprávy se přepíšou podle nás
    messages:{
      username: "Prosím vyplňte pole!",
    },
    phone: "Prosím vyplňte pole!"
});

// Slidern na webu a responzibilita
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
