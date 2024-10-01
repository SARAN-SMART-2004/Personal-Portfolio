$(document).ready(function() {

  // Toggle menu icon and header on click
  $('#menu').click(function() {
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  // Remove classes and show/hide 'top' button on scroll or load
  $(window).on('scroll load', function() {
    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if ($(window).scrollTop() > 0) {
      $('.top').fadeIn(); // Use fadeIn for smooth appearance
    } else {
      $('.top').fadeOut(); // Use fadeOut for smooth disappearance
    }
  });

  // Smooth scrolling for anchor links
  $('a[href*="#"]').on('click', function(e) {
    e.preventDefault();

    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
  });

});
