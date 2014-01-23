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
    var headerTop = $('.header-content').position().top;

    $('.header-content').toggleClass('fade-out', headerTop < scrollTop - height * 0.2);

    $fadeIn.each(function(i, elem){
      if(bottom > $(elem).position().top) {
        $(elem).removeClass('fade-out');
      }
    });
  });

});
