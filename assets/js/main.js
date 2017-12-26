
var navbar_height = $('.navbar').outerHeight();

// SMOOTH SCROLL FOR THE NAVBAR
$("#landing-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#landing").offset().top - navbar_height
    }, 600);
});

$("#about-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top - navbar_height
    }, 600);
});

$("#experience-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#experience").offset().top - navbar_height
    }, 600);
});

$("#projects-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#projects").offset().top - navbar_height
    }, 600);
});

$("#resume-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#resume").offset().top - navbar_height - 0.35 * $('#projects').outerHeight()
    }, 600);
});

$("#contact-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top - navbar_height
    }, 600);
});


// LANDING SCROLL-DOWN BUTTON
$("#scroll-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top - navbar_height
    }, 600);
});

//PICK THE THEME OF THE NAVBAR BASED ON THE INITIAL POSITION
window.onload = initialise;
function initialiseNavbar() {
  var landing_area = $('#about').offset().top;
  var navbar_pos = $('.nav-item').offset().top;
  if (navbar_pos >= landing_area - navbar_height) {
    $('.nav-item').addClass('black-text');
    $('.navbar').addClass('navbar-bg-dark');
  } else {
    $('.nav-item').addClass('white-text');
    $('.navbar-brand').addClass('shadow-text');
    $('.navbar').addClass('navbar-bg-light');
  }
}

// CHANGE BACKGROUND EVERY LOAD
var numOfBgs = 3;
var bgNumber = Math.floor(Math.random() * numOfBgs) + 1;
var imageUrl = './assets/backgrounds/bg'+ bgNumber + '.jpg';

function setBackground() {
  $('#landing').css('background', 'url(' + imageUrl + ')' + 'center center / cover no-repeat');
}

// ON EVERY LOAD OF PAGE
function initialise() {
  initialiseNavbar();
  setBackground();
}

// CHANGE FROM WHITE TO BLACK WHEN SCROLLED PAST LANDING
$(document).ready(function() {
	$(window).scroll(function() {
    var landing_area = $('#about').offset().top;
    var navbar_pos = $('.nav-item').offset().top;
    if (navbar_pos >= landing_area - navbar_height) {
      $('.nav-item').removeClass('white-text');
    	$('.nav-item').addClass('black-text');
      $('.navbar-brand ').removeClass('shadow-text');

      $('.navbar').removeClass('navbar-bg-light');
      $('.navbar').addClass('navbar-bg-dark');

    } else {
    	$('.nav-item').removeClass('black-text');
      $('.nav-item').addClass('white-text');
      $('.navbar-brand ').addClass('shadow-text');

      $('.navbar').removeClass('navbar-bg-dark');
      $('.navbar').addClass('navbar-bg-light');
    }
  })
})


// CHANGE TO LIGHT VERSION OF IMAGE ON HOVER
$(function ($) {
    $('.social-icon').hover(function () {
        $(this).find('img').attr('src', function (i, src) {
            return src.replace("-dark.svg", ".svg");
        })
    }, function () {
        $(this).find('img').attr('src', function (i, src) {
            return src.replace(".svg", "-dark.svg");
        })
    })
})

// HIGHLIGHT THE SECTION CURRENTLY VISITED
$(window).on("scroll", function() {
  var currentPos = $(window).scrollTop();
  $('.nav-item').each(function() {
    var sectionLink = $(this);

    // Capture the height of the navbar
    var navHeight = $('.navbar').outerHeight() + 1;
    var section = $(sectionLink.attr('href'));
    var sectionTop = section.position().top;
    var sectionBottom = section.position().top + section.outerHeight();
    var resumeActivateBorder = $('#projects').position().top + (0.40 * $('#projects').outerHeight());
    var contactActivateBorder = $('#projects').position().top + (0.70 * $('#projects').outerHeight());

    if (currentPos + navHeight >= sectionTop && currentPos + navHeight <= sectionBottom) {
      sectionLink.addClass('active-link');
    } else {
      sectionLink.removeClass('active-link');
    }

    // HIGHLIGHT FOR SMALL SECTIONS AT THE END OF THE PAGE
    if (currentPos + navHeight >= resumeActivateBorder && currentPos + navHeight <= contactActivateBorder) {
      $('.nav-item').removeClass('active-link');
      $('#resume-btn').addClass('active-link');
    } else if (currentPos + navHeight >= contactActivateBorder) {
      $('.nav-item').removeClass('active-link');
      $('#contact-btn').addClass('active-link');
    }

  });
});
