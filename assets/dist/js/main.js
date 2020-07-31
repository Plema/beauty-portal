document.addEventListener("touchstart", function () {}, true);

$(document).ready(function () {
    $('.menu').on('click', function () {
        $("aside").toggleClass('active');
        $(this).find('i.icon-3-dots').toggleClass('colorBlue');
        $(".score").removeClass('active');
        $('.personal_score i.icon-wallet').removeClass('colorBlue');
        $('.iSearch').removeClass('colorBlue');
        $(".search .form").removeClass('active');
        $(".dropdown-notification").removeClass('active');
        $(".header_action .icon-bell-1").removeClass('active');
        $(".dropdown-user").removeClass('active');
    });

    $('.search .iSearch').on('click', function () {
        $(".form").toggleClass('active');
        $(this).toggleClass('colorBlue');
        $("aside").removeClass('active');
        $('i.icon-3-dots').removeClass('colorBlue');

        $(".score").removeClass('active');
        $('.personal_score i.icon-wallet').removeClass('colorBlue');
        $("aside").removeClass('active');
        $('i.icon-3-dots').removeClass('colorBlue');
        $(".dropdown-user").removeClass('active');
        $(".dropdown-notification").removeClass('active');
        $(".header_action .icon-bell-1").removeClass('active');
    });

    $('.header_action .notification').on('click', function () {
        $(".dropdown-notification").toggleClass('active');
        $(".header_action .icon-bell-1").toggleClass('active');
        $(".dropdown-user").removeClass('active');
        $('.personal_score i.icon-wallet').removeClass('colorBlue');
        $(".score").removeClass('active');
        $("aside").removeClass('active');
        $('i.icon-3-dots').removeClass('colorBlue');
    });

    $('.navigation a .icon-arrow-down').on('click', function () {
        $(".dropdown-user").toggleClass('active');
        $(".dropdown-notification").removeClass('active');
        $(".header_action .icon-bell-1").removeClass('active');
        $('.personal_score i.icon-wallet').removeClass('colorBlue');
        $(".score").removeClass('active');
        $("aside").removeClass('active');
        $('i.icon-3-dots').removeClass('colorBlue');
    });

    // Функция проверки полей формы

    $('.header_action .search-query').on('change paste keyup', function () {
        var $this = $(this);
        var input_value = $this.val();
        if (input_value.length === 0) {
            $('.header_action .search-results').css('display', 'none');
        } else {
            $('.header_action .search-results').css('display', 'block');
        }
    });

    $('.personal_score i.icon-wallet').on('click', function () {
        $(".score").toggleClass('active');
        $(this).toggleClass('colorBlue');
        $("aside").removeClass('active');
        $('i.icon-3-dots').removeClass('colorBlue');
        $('.iSearch').removeClass('colorBlue');
        $(".search .form").removeClass('active');
        $(".dropdown-user").removeClass('active');
        $(".dropdown-notification").removeClass('active');
        $(".header_action .icon-bell-1").removeClass('active');
    });

    $('.politics').on('click', function () {
        $(".modall-services").removeClass('active');
        $(".modall").removeClass('active');
        $(".politics-modall").addClass('active');
        $(".modall-activities ").removeClass('active');
        $('.body').addClass('showing-modal');
    });

    $('.services-button').on('click', function () {
        $(".politics-modall").removeClass('active');
        $(".modall-services ").addClass('active');
        $('.body').addClass('showing-modal');
    });

    $('.remove-button').on('click', function () {
        $(".politics-modall").removeClass('active');
        $(".modall").addClass('active');
        $('.body').addClass('showing-modal');
    });

    $('.foto-button').on('click', function () {
        $(".politics-modall").removeClass('active');
        $(".modall-foto").addClass('active');
        $('.body').addClass('showing-modal');
        $('.image').slick({
            dots: true,
            arrows: true,
        })
    });

    $('.freeze-button').on('click', function () {
        $(".politics-modall").removeClass('active');
        $(".modall").removeClass('active');
        $(".modall-freeze").addClass('active');
        $('.body').addClass('showing-modal');
    });

    $('.thanks-button').on('click', function () {
        $(".politics-modall").removeClass('active');
        $(".modall-ok").addClass('active');
        $('.body').addClass('showing-modal');
    });

    $('.activities-button').on('click', function () {
        $(".politics-modall").removeClass('active');
        $(".modall-activities ").addClass('active');
        $('.body').addClass('showing-modal');
    });

    $('.button-black-list').on('click', function () {
        $(".politics-modall").removeClass('active');
        $(".modall-list ").addClass('active');
        $('.body').addClass('showing-modal');
    });

    $('.record-button').on('click', function () {
        $(".politics-modall").removeClass('active');
        $(".modall-record ").addClass('active');
        $('.body').addClass('showing-modal');
    });

    $('.user-button').on('click', function () {
        $(".politics-modall").removeClass('active');
        $(".modall-user ").addClass('active');
        $('.body').addClass('showing-modal');
    });

    $('.raiting-button').on('click', function () {
        $(".politics-modall").removeClass('active');
        $(".modall-raiting").addClass('active');
        $('.body').addClass('showing-modal');
    });

    $('.event-button').on('click', function () {
        $(".politics-modall").removeClass('active');
        $(".modall-events").addClass('active');
        $('.body').addClass('showing-modal');
    });

    $('.request-button').on('click', function () {
        $(".politics-modall").removeClass('active');
        $(".modall-request").addClass('active');
        $('.body').addClass('showing-modal');
    });

    $('.calendar-button').on('click', function () {
        $(".politics-modall").removeClass('active');
        $(".modall-calendar").addClass('active');
        $('.body').addClass('showing-modal');
    });

    $('.send').on('click', function () {
        $(".politics-modall").removeClass('active');
        $(".modall-message ").addClass('active');
        $('.body').addClass('showing-modal');
    });

   
    // var hash = location.hash.substr(1);
    // var classList = document.getElementById(hash)

    $('.replenish').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800)
        var hash = location.hash.substr(1);
        if (hash != 'balance') {
            hash = 'balance';
        } else {}

        var classList = document.getElementById(hash)
        $('.widget ul li').removeClass('active')
        $(classList).addClass('active')
        $(".section_settings [data-id='" + hash + "']").addClass('active').siblings().removeClass('active');

    })


    var element_work = document.getElementById('section_settings');
    console.log(element_work);
    if (element_work != 'null') {
        var hash = location.hash.substr(1);
        $('html, body').animate({
            scrollTop: 0
        }, 800)
        var classList = document.getElementById(hash)
        $('.widget ul li').removeClass('active')
        $(classList).addClass('active')
        $(".section_settings [data-id='" + hash + "']").addClass('active').siblings().removeClass('active');
    } else {
        console.log('dont work');
    }

    $(".link-account").click(function () {
        var hash = location.hash.substr(1);
        if (hash !='my-account') {
            hash = 'my-account';
        }
        var classList = document.getElementById(hash)
        $('.widget ul li').removeClass('active')
        $(classList).addClass('active')
        $(".section_settings [data-id='" + hash + "']").addClass('active').siblings().removeClass('active');
        console.log(hash)
    })
    $(".link-advertising").click(function () {
        var hash = location.hash.substr(1);
        if (hash !='advertising') {
            hash = 'advertising';
        }
        var classList = document.getElementById(hash)
        $('.widget ul li').removeClass('active')
        $(classList).addClass('active')
        $(".section_settings [data-id='" + hash + "']").addClass('active').siblings().removeClass('active');
        console.log(hash)
    })
    $(".link-services").click(function () {
        if (hash != 'services') {
            hash = 'services';
        }
        var classList = document.getElementById(hash)
        $('.widget ul li').removeClass('active')
        $(classList).addClass('active')
        $(".section_settings [data-id='" + hash + "']").addClass('active').siblings().removeClass('active');
    })
    $(".link-rating").click(function () {
        if (hash != 'rating') {
            hash = 'rating';
        }
        var classList = document.getElementById(hash)
        $('.widget ul li').removeClass('active')
        $(classList).addClass('active')
        $(".section_settings [data-id='" + hash + "']").addClass('active').siblings().removeClass('active');
    })
    $(".link-balance").click(function () {
        if (hash != 'balance') {
            hash = 'balance';
        }
        var classList = document.getElementById(hash)
        $('.widget ul li').removeClass('active')
        $(classList).addClass('active')
        $(".section_settings [data-id='" + hash + "']").addClass('active').siblings().removeClass('active');
    })


    $(".go-to").click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800)
    })

   
    $('.close').on('click', function () {
        $(".modall-services").removeClass('active');
        $(".politics-modall").removeClass('active');
        $(".modall-activities").removeClass('active');
        $(".modall").removeClass('active');
        $(".modall-list").removeClass('active');
        $('.modall-widget').removeClass('active');
        $(".modall-message").removeClass('active');
        $(".modall-record ").removeClass('active');
        $(".modall-user").removeClass('active');
        $(".modall-ok").removeClass('active');
        $(".modall-raiting").removeClass('active');
        $(".modall-events").removeClass('active');
        $(".modall-request").removeClass('active');
        $('.body').removeClass('showing-modal');
    });

    $('.cancellation').on('click', function () {
        $(".modall-calendar").removeClass('active');
        $('.body').removeClass('showing-modal');
    })

    $(".modall-raiting").find('.modall-body').click(function (event) {
        event.stopPropagation();
    });
    $(".modall-raiting").on('click', function () {
        $(".modall-raiting").removeClass('active');
        $('.body').removeClass('showing-modal');
    });

    $(".modall-events").find('.modall-body').click(function (event) {
        event.stopPropagation();
    });
    $(".modall-events").on('click', function () {
        $(".modall-events").removeClass('active');
        $('.body').removeClass('showing-modal');
    });

    $(".modall-request").find('.modall-body').click(function (event) {
        event.stopPropagation();
    });
    $(".modall-request").on('click', function () {
        $(".modall-request").removeClass('active');
        $('.body').removeClass('showing-modal');
    });

    jQuery(function ($) {
        $(document).mouseup(function (e) {
            var div = $(".modall-events");
            if (!div.is(e.target) &&
                div.has(e.target).length === 0) {
                div.removeClass('active');
                $('.body').removeClass('showing-modal');
            }
        });
    });

    $(".modall-ok").find('.modall-body').click(function (event) {
        event.stopPropagation();
    });
    $(".modall-ok").on('click', function () {
        $(".modall-ok").removeClass('active');
        $('.body').removeClass('showing-modal');
    });

    $(".modall-calendar").find('.modall-body').click(function (event) {
        event.stopPropagation();
    });
    $(".modall-calendar").on('click', function () {
        $(".modall-calendar").removeClass('active');
        $('.body').removeClass('showing-modal');
    });

    $(".modall-foto").find('.modall-body').click(function (event) {
        event.stopPropagation();
    });
    $(".modall-foto").on('click', function () {
        $(".modall-foto").removeClass('active');
        $('.body').removeClass('showing-modal');
    });

    $(".modall-message").find('.modall-body').click(function (event) {
        event.stopPropagation();
    });
    $(".modall-message").on('click', function () {
        $(".modall-message").removeClass('active');
        $('.body').removeClass('showing-modal');
    });

    $(".modall-user").find('.modall-body').click(function (event) {
        event.stopPropagation();
    });
    $(".modall-user").on('click', function () {
        $(".modall-user").removeClass('active');
        $('.body').removeClass('showing-modal');
    });

    $(".modall-record").find('.modall-body').click(function (event) {
        event.stopPropagation();
    });
    $(".modall-record").on('click', function () {
        $(".modall-record").removeClass('active');
        $('.body').removeClass('showing-modal');
    });

    $(".politics-modall").find('.politics-body').click(function (event) {
        event.stopPropagation();
    });

    $(".politics-modall").on('click', function () {
        $(".politics-modall").removeClass('active');
        $('.body').removeClass('showing-modal');
    });

    $(".modall-activities").find('.modall-body').click(function (event) {
        event.stopPropagation();
    });
    $(".modall-activities").on('click', function () {
        $(".modall-activities").removeClass('active');
        $('.body').removeClass('showing-modal');
    });

    $(".modall-list").find('.modall-body').click(function (event) {
        event.stopPropagation();
    });
    $(".modall-list").on('click', function () {
        $(".modall-list").removeClass('active');
        $('.body').removeClass('showing-modal');
    });

    $(".modall").find('.modall-body').click(function (event) {
        event.stopPropagation();
    });

    $(".modall").on('click', function () {
        $(".modall").removeClass('active');
        $('.body').removeClass('showing-modal');
    });

    $(".modall-freeze").find('.modall-body').click(function (event) {
        event.stopPropagation();
    });

    $(".modall-freeze").on('click', function () {
        $(".modall-freeze").removeClass('active');
        $('.body').removeClass('showing-modal');
    });

    $(".cancellation").on('click', function () {
        $(".modall-freeze").removeClass('active');
    })

    $(".modall-services").find('.modall-body').click(function (event) {
        event.stopPropagation();
    });

    $(".modall-services").on('click', function () {
        $(".modall-services").removeClass('active');
        $('.body').removeClass('showing-modal');
    });



    //Widgets

    $(".widget-client .add").on('click', function () {
        $('.modall-widget').removeClass('active')
        $(this).parents('.widget-client').find('.modall-widget').addClass('active')
        $('.widget-client .item-user').on('click', function () {
            $(this).toggleClass('active');
        })

    })

    $(".widget-collegues .add").on('click', function () {
        $('.modall-widget').removeClass('active')
        $(this).parents('.widget-collegues').find('.modall-widget').addClass('active')
        $('.widget-collegues .item-user').on('click', function () {
            $(this).toggleClass('active');
        })
    })

    var cStars = function (nowPos) {
        // У всех убираем active
        $('.rating-data .icon-icon1').removeClass('active');
        for (var i = 0; nowPos + 1 > i; i++) {
            $('.rating-data .icon-icon1').eq(i).toggleClass('active');
        }
    }

    var starsCount = $('.icon-icon1.active').length; //переменная содержит количество активных звезд

    // При наведении
    $('.rating-data .icon-icon1').hover(function () {
        cStars($(this).index());
    });

    // При клике
    $('.rating-data .icon-icon1').click(function () {
        cStars($(this).index());
        starsCount = $('.icon-icon1.active').length; //меняем количество по клику
    });

    $('.rating-data .icon-icon1').on('mouseleave', function () {
        cStars(+starsCount - 1);
    });
});
