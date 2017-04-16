$("#contact-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact-page").offset().top
    }, 1000);
});

$( "#contact-page" ).load( "contact-form.html", function() {
  // alert( "Load was performed." );
});
