$(document).ready(function(){
  $('.carousel').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });
  // Hidding Navigation
  var zero = 0;
  $(window).scroll(function(){
    $('nav').toggleClass('hide', $(window).scrollTop() > zero);
    zero = $(window).scrollTop();
  });
});
