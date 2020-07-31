$(document).ready(function () {

    jcf.replaceAll();

    var customSelect = $('.photoDescr__popup select');

    // Options for custom Select
    jcf.setOptions('Select', {
        wrapNative: false,
        wrapNativeOnMobile: false,
        fakeDropInBody: false,
        maxVisibleItems: 5
    });

    jcf.replace(customSelect);

    (function ($) {
        $(document).on("load", function () {
            $(".mainInfo").mCustomScrollbar();
        });
    })(jQuery);

    $('#datepicker').on("click", function () {
        $('.calendar').toggleClass('active');
        $('a.ui-state-default').on("click", function () {
            $('.calendar').removeClass('active');
            console.log(this)
        });
        $(function () {
            $('.calendar').datepicker({
                altField: '#datepicker',
                altFormat: 'yy-mm-dd',
                inline: true,
                firstDay: 1,
                showOtherMonths: true,
            });
        });
    });

    $(function () {
        $('.calendar').datepicker({
            altField: '#datepicker',
            altFormat: 'yy-mm-dd',
            inline: true,
            firstDay: 1,
            showOtherMonths: true,
        });
    });

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

    $('.search-extended').on('click', function () {
        $('.extended').addClass('active');
        $('.form').css('display', 'none');
    });


});
