(function ($) {
    "use strict";

    new PerfectScrollbar('.chat-list-scroll');
    new PerfectScrollbar('.chat-sidenav-scroll');
    
    $('.chat-user-item').on('click', function () {
        window.location = "chat.html";
    });

})(jQuery);