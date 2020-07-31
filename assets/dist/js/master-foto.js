document.addEventListener("touchstart", function () {}, true);

$(document).ready(function () {
    if ($(window).width() > 767) {
        $(".sort").css('display', 'none')
    }

    $(".sort .column").on('click', function () {
        $('.list-gallery').addClass('col')
    })
    $(".sort .row").on('click', function () {
        $('.list-gallery').removeClass('col')
    })
})