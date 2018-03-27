
$(function() {


	$('.sidebarBtn').click(function(){
    $('.sidebar').toggleClass('open');
    $('.leftline').toggleClass('openleftline');
    $('.sidebarBtn').toggleClass('btnOpen');
  })

  $('.pasbt').click(function(){
    $('.secondblock').toggleClass('activli');

  })

//OWL carusel
$('.owl-carousel').owlCarousel({
  items: 1,
  margin:10,
  loop: true,
  center: true,
  autoplay:true,
  autoplayHoverPause:true
})
//owl end
//POPUPFORM
// Модальное окно

// открыть по кнопке
$('.js-button-campaign').click(function() { 
  
  $('.js-overlay-campaign').fadeIn();
  $('.js-overlay-campaign').addClass('disabled');
});

// закрыть на крестик
$('.js-close-campaign').click(function() { 
  $('.js-overlay-campaign').fadeOut();
  
});

/* закрыть по клику вне окна
$(document).mouseup(function (e) { 
  var popup = $('.js-popup-campaign');
  if (e.target!=popup[0]&&popup.has(e.target).length === 0){
    $('.js-overlay-campaign').fadeOut();
    
  }
});*/



//POPUPORMEND
});
//  Headhesive
// Options
var options_topline = {
  offset: 500
}
var topline = new Headhesive('.topline', options_topline);

//END


