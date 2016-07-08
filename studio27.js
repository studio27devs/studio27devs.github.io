document.createElement("section");
$(document).ready(function() {
  $('.text-primary').text('Studio 27 Web Design');
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
});
