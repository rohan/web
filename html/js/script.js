$(document).ready(function() {
  $('#about-button').click(function() {
  	$("#contents").children().hide();
  	$('#about').show();
  });
  $('#projects-button').click(function() {
    $("#contents").children().hide();
    $('#projects').show();
  });
  $('#writing-button').click(function() {
  	$("#contents").children().hide();
  	$('#writing').show();
  });
  $('#teaching-button').click(function() {
    $("#contents").children().hide();
    $('#teaching').show();
  });
  $('#contact-button').click(function() {
  	$("#contents").children().hide();
  	$('#contact').show();
  });
});
