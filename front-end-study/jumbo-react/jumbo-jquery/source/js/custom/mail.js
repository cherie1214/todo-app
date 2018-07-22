(function ($) {
    "use strict";

    if($('.module-list-scroll').length > 0) {
        new PerfectScrollbar('.module-list-scroll');
    }
    
    if($('.module-side-scroll').length > 0) {
        new PerfectScrollbar('.module-side-scroll');
    }
    
    $('.module-list-info').on('click', function () {
        window.location = "mail-inner.html";
    });

})(jQuery);