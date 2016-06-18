$(document).ready(function() {
  $('#about-link').click(function() {
  	$("#details").children().hide();
  	$('#about').show();
    $("html, body, #details").scrollTop(0);
    // $("#info").height($("#about").height())
  });

  $('#courses-link').click(function() {
    $("#details").children().hide();
    $('#courses').show();
    // $("#info").height($("#courses").height())
    $("html, body, #details").scrollTop(0);
  });

  $('#projects-link').click(function() {
    $("#details").children().hide();
    $('#projects').show();
    $("html, body, #details").scrollTop(0);
    // $("#info").height($("#projects").height())
  });
});
