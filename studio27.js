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
  
  $("#project-img").hover(function(e) {
    $($(this).data("tooltip")).css({
        left: e.pageX + 1,
        top: e.pageY + 1,
        opacity: 1
    }).stop().show(100);
}, function() {
    $($(this).data("tooltip")).hide();
    
});

});



