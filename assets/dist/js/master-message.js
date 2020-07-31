document.addEventListener("touchstart", function () {}, true);

$(document).ready(function () {
    if ($(window).width() < 1023) {
        $('.users').mCustomScrollbar('destroy').removeClass('mCustomScrollbar')
    }

    $(".option").on('click', function () {
        if (!$(this).hasClass('active')) {
            $('.option').css('z-index', '0').removeClass('active').children('.option-cintent').removeClass('active-options')
            $(this).css('z-index', '2').addClass('active').children('.option-cintent').addClass('active-options')
        } else { // если есть
            $('.option').css('z-index', '0').removeClass('active').children('.option-cintent').removeClass('active-options')
        }

    })


    jQuery(function ($) {
        $(document).mouseup(function (e) {
            var div = $(".option");
            if (!div.is(e.target) &&
                div.has(e.target).length === 0) {
                div.removeClass('active').css('z-index', '0')
            }
        });
    });

    $('.all-users').on('click', function () {
        $('.item-user').addClass('active')
        $('.users').removeClass('active')
    })

    $('.item-user').on('click', function () {
        $('.item-user').removeClass('active', 'color')
        $(this).addClass('active', 'color')
        $('.users').addClass('active')
    })

    $('.to-accept').on('click', function () {
        $('.message-action .button_light').css('display', 'none');
        $('.accepted').css('display', 'inline-block');
    })
    $('.reject').on('click', function () {
        $('.message-action .button_light').css('display', 'none');
        $('.rejected').css('display', 'inline-block');
    })
})