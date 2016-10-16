var container = $('body'),
scrollTo = $('#details');

$(document).ready(function() {
  $('#about-link').click(function() {
  	$("#details").children().hide();
  	$('#about').show();
    // $("html, body, #details").scrollTop(0);
    // $("#info").height($("#about").height())
    container.animate({
        scrollTop: $('#details').offset().top
    }, 1000);
  });

  $('#courses-link').click(function() {
    $("#details").children().hide();
    $('#courses').show();
    // $("#info").height($("#courses").height())
    // $("html, body, #details").scrollTop(0);
    container.animate({
        scrollTop: $('#details').offset().top
    }, 1000);
  });

  $('#projects-link').click(function() {
    $("#details").children().hide();
    $('#projects').show();
    // $("html, body, #details").scrollTop(0);
    // $("#info").height($("#projects").height())

    container.animate({
        scrollTop: $('#details').offset().top
    }, 1000);
  });


});
