// CHANGE FROM WHITE TO BLACK WHEN SCROLLED PAST LANDING
$(document).ready(function() {
  initialiseNavbar();
  setScroll();
})


//PICK THE THEME OF THE NAVBAR BASED ON THE INITIAL POSITION
function initialiseNavbar() {
  var landing_area = $('#about').offset().top;
  var navbar_pos = $('.nav-item').offset().top;
  if (navbar_pos >= landing_area - navbar_height) {
    $('.nav-item').addClass('black-text');
    $('#menu').addClass('black-text');
    $('.navbar').addClass('navbar-bg-dark');
  } else {
    $('.nav-item').addClass('white-text');
    $('#menu').addClass('white-text');
    $('.navbar-brand').addClass('shadow-text');
    $('.navbar').addClass('navbar-bg-light');
  }
}

function setScroll() {
  $(window).scroll(function() {
    var landing_area = $('#about').offset().top;
    var navbar_pos = $('.nav-item').offset().top;
    if (navbar_pos >= landing_area - navbar_height) {
      $('.nav-item').removeClass('white-text');
      $('#menu').removeClass('white-text');
      $('.nav-item').addClass('black-text');
      $('#menu').addClass('black-text');
      $('.navbar-brand ').removeClass('shadow-text');

      $('.navbar').removeClass('navbar-bg-light');
      $('.navbar').addClass('navbar-bg-dark');

    } else {
      $('.nav-item').removeClass('black-text');
      $('#menu').removeClass('black-text');
      $('.nav-item').addClass('white-text');
      $('#menu').addClass('white-text');
      $('.navbar-brand ').addClass('shadow-text');

      $('.navbar').removeClass('navbar-bg-dark');
      $('.navbar').addClass('navbar-bg-light');
    }
  })
}
