(function($){
    $(document).ready(function () {
  
        $(window).scroll(function () {
            var topScroll = Number(jQuery(window).scrollTop());
  
            if (topScroll >= 200) {
                $(".header-fixed").css( "display", "block" );
            } else {
                $(".header-fixed").css( "display", "none" );
            }
        });
  
    });
  })(jQuery);