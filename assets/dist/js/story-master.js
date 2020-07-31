document.addEventListener("touchstart", function () {}, true);

$(document).ready(function () {
    if (window.matchMedia("(max-width: 767px)").matches) {
        $('.slide-card').slick();
        $('.slide-item').slick();
        $(".list_specialist").removeClass('mCustomScrollbar');
    }

    (function ($) {
        if (window.matchMedia("(min-width: 767px)").matches) {
            $(document).on("load", function () {
                $(".list_specialist").mCustomScrollbar();
                $(".list_specialist").addClass('mCustomScrollbar');
            });
        }
    })(jQuery);

    $(".filter").on('click', function () {
        $('.sort').toggleClass('active');
        $('.current-value').toggleClass('active');
    })

    $('.sort a').on('click', function () {
        $('.current-value').html($(this).html()).find('.sort').removeClass('active');
    });
})