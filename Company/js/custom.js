$("#contact-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact-page").offset().top
    }, 1000);
});

$( "#contact-page" ).load( "contact-form.html", function() {
  $("#formSubmit").click(function () {
    alert("I'm sorry, my contact form isn't currently working. Please use my contact information to the right to contact me. I'm sorry for any inconvenience.");
  });
});
