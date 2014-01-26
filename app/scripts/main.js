'use strict';


$(function(){

  if(Modernizr.touch) {
    return;
  }

  var $fadeIn = $('.fade-in-on-scroll');
  $fadeIn.each(function(i, elem){
    $(elem).addClass('fade-out');
  });

  $(document).scroll(function(){
    var height = $(window).height();
    var scrollTop = $(document).scrollTop();
    var bottom = scrollTop + height * 0.85;
    var $headerContent = $('.header-content');
    var headerBottom = $headerContent.position().top + $headerContent.height() * 0.75;

    $headerContent.toggleClass('fade-out', headerBottom < scrollTop);

    $fadeIn.each(function(i, elem){
      if(bottom > $(elem).position().top) {
        $(elem).removeClass('fade-out');
      }
    });
  });

});
