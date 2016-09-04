/*
*/
$(document).ready( function(){
  console.log('jammin!')
  var landingHtml = Handlebars.compile($('#landingPage').html())
  $('body').html(landingHtml)
  setTimeout(function(){
    $('h1').html('SURPRISE HUGS!')
  }, 1500)
})
