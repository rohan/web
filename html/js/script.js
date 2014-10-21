$(document).ready(function() {
  $('#about-button').click(function() {
  	$("#contents").children().hide();
  	$('#about').show();
  });
  $('#notes-button').click(function() {
  	$("#contents").children().hide();
  	$('#notes').show();
  });
  $('#contact-button').click(function() {
  	$("#contents").children().hide();
  	$('#contact').show();
  });
});
