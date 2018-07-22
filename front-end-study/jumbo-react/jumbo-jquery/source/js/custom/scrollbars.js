(function ($) {
    "use strict";

    if($('.module-list-scroll').length > 0) {
        new PerfectScrollbar('.module-list-scroll');
    }
    
    if($('.module-side-scroll').length > 0) {
        new PerfectScrollbar('.module-side-scroll');
    }

})(jQuery);