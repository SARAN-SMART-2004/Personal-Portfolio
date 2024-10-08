$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500, 
      'linear'
    );

  });

});
function showMore() {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => box.style.display = 'block'); // Show all boxes
  document.getElementById('show-more-btn').style.display = 'none'; // Hide the button
}
// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent the form from refreshing the page
  
  // Get the form values
  const name = this.name.value;
  const email = this.email.value;
  const project = this.project.value;
  const message = this.message.value;

  // Send the email using EmailJS
  emailjs.send("service_g6p4mxw", "template_lbmrhm9", {
      name: name,
      email: email,
      project: project,
      message: message
  })
  .then(function(response) {
      // Display success message
      document.getElementById('success-message').style.display = 'block';
      document.getElementById('error-message').style.display = 'none';
  }, function(error) {
      // Display error message
      document.getElementById('error-message').style.display = 'block';
      document.getElementById('success-message').style.display = 'none';
  });

  // Clear the form
  this.reset();
});
