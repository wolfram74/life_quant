/*
*/
$(document).ready( function(){
  console.log('jammin!')
  var landingHtml = Handlebars.compile($('#landingPage').html())
  $('body').html(landingHtml)
})
