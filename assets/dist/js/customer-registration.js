document.addEventListener("touchstart", function () {}, true);

$(document).ready(function () {
    $("#file-image").fileinput({
        uploadUrl: "/ file-upload-batch / 1",
    });
})