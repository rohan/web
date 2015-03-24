$(document).ready(function() {
  $('#about-button').click(function() {
  	$("#contents").children().hide();
  	$('#about').show();
  });
  $('#writing-button').click(function() {
  	$("#contents").children().hide();
  	$('#writing').show();
  });
  $('#contact-button').click(function() {
  	$("#contents").children().hide();
  	$('#contact').show();
  });
});
