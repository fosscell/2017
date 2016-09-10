$(document).ready(function(){
 
  // hide our element on page load 
  $('.data').waypoint(function() {
      $('.data').addClass('slideInRight');
  }, { offset: '50%' });
 
});