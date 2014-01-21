'use strict';


$(function(){
  var $fadeIn = $('.fade-in-on-scroll');
  $fadeIn.each(function(i, elem){
    $(elem).addClass('fade-out');
  });

  $(document).scroll(function(){
    var bottom = $(document).scrollTop() + $(window).height() * 0.85;
    $fadeIn.each(function(i, elem){
      if(bottom > $(elem).position().top) {
        $(elem).removeClass('fade-out');
      }
    });
  });

});
