 $(window).bind('scroll', function() {
     if ($(window).scrollTop() > 10) {
         $('.mdl-layout__header').addClass('bg-color');
     }
     else {
         $('.mdl-layout__header').removeClass('bg-color');
     }
});