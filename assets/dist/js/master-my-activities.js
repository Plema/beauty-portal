document.addEventListener("touchstart", function () {}, true);

$(document).ready(function () {
    jcf.replaceAll();
    $('.heading .settings').on('click', function () {
        $('.filter-settings').toggleClass('active');
    })
})