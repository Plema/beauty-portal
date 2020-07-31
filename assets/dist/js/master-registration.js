document.addEventListener("touchstart", function () {}, true);

$(document).ready(function () {
    $("#file-image").fileinput({
        uploadUrl: "/ file-upload-batch / 1",
    });

    $(".address_link").on('click', function () {
        $('.add-address-link').css('display', 'none')
        $('.add-address').css('display', 'block')
    })
})