document.createElement("section");
$(document).ready(function() {

  $('h2').addClass('text-primary');
  
  $window = $(window);

  $('section[data-type="background"]').each(function() {
    var $scroll = $(this);

    $(window).scroll(function() {
      var yPos = -($window.scrollTop() / $scroll.data('speed'));
      var coords = '50% ' + yPos + 'px';
      $scroll.css({
        backgroundPosition: coords
      });
    });
  });

var window = screen.width;

if(window < 800) {
  $('body').css('background','#ccd5da');
}

});
