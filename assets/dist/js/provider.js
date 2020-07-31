document.addEventListener("touchstart", function () {}, true);

$(document).ready(function () {

    $(".option").hover(function () {
        $('.option').css('z-index', '0')
        $(this).css('z-index', '2')
    })

    if ($(window).width() > 767) {
        $(".tabs").css('display', 'none');
        $('.item-gallery').addClass('active')
        $('.item-profile').addClass('active')
        $('.item-services').addClass('active')
        $('.list-gallery').mCustomScrollbar('destroy').removeClass('mCustomScrollbar').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
        })
    };

    $(".products-link").on('click', function () {
        $('.products').addClass('active')
        $('.services').removeClass('active')
        $(this).addClass('active')
        $('.services-link').removeClass('active')
    })

    $(".services-link").on('click', function () {
        $('.products').removeClass('active')
        $('.services').addClass('active')
        $(this).addClass('active')
        $('.products-link').removeClass('active')
    })

    $(".tabs li").on('click', function () {
        $('.tabs li').removeClass('active')
        $(this).addClass('active')
    })

    $(".gallery").on('click', function () {
        $('.item-gallery').addClass('active')
        $('.item-profile').removeClass('active')
        $('.item-services').removeClass('active')
    })

    $(".profile").on('click', function () {
        $('.item-gallery').removeClass('active')
        $('.item-profile').addClass('active')
        $('.item-services').removeClass('active')
    })

    $(".services").on('click', function () {
        $('.item-gallery').removeClass('active')
        $('.item-profile').removeClass('active')
        $('.item-services').addClass('active')
    })

    $(".link-description").on('click', function () {
        $('.description').addClass('active')
        $('.profile-video').removeClass('active')
        $('.reviews').removeClass('active')
        $('.list-profile').addClass('active')
        $('.button_border').removeClass('active')
        $(this).addClass('active')
    })

    $(".link-video").on('click', function () {
        $('.description').removeClass('active')
        $('.profile-video').addClass('active')
        $('.reviews').removeClass('active')
        $('.list-profile').removeClass('active')
        $('.button_border').removeClass('active')
        $(this).addClass('active')
    })

    $(".link-reviews").on('click', function () {
        $('.description').removeClass('active')
        $('.profile-video').removeClass('active')
        $('.reviews').addClass('active')
        $('.list-profile').addClass('active')
        $('.button_border').removeClass('active')
        $(this).addClass('active')
    })

    $(".sort .column").on('click', function () {
        $('.list-gallery').addClass('col')
    })
    $(".sort .row").on('click', function () {
        $('.list-gallery').removeClass('col')
    })

    $(".sort-services .column").on('click', function () {
        $('.item-services .list').addClass('column')
        $(".sort-services .row").removeClass('active')
        $(this).addClass('active')
    })
    $(".sort-services .row").on('click', function () {
        $('.item-services .list').removeClass('column')
        $(".sort-services .column").removeClass('active')
        $(this).addClass('active')
    })

    $('.video-holder').on('click', function () {
        $('.play').css('display', 'none');
        $('.video-holder').css('background-image', 'none');
        $('.video').css('display', 'block').play();
    });

});