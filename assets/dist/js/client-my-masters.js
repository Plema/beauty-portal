$(document).ready(function () {
    $(".option").hover(function () {
        $('.option').css('z-index', '0')
        $(this).css('z-index', '2')
    })

    $(".photo").mCustomScrollbar({
        axis: "x" // horizontal scrollbar
    });
})