document.addEventListener("touchstart", function () {}, true);

$(document).ready(function () {
    jcf.replaceAll();
    $('#sity').on('change paste keyup', function () {
        var $this = $(this);

        var input_value = $this.val();
        var input_id = $this.attr('id');

        if (input_value.length === 0) {
            $('.form-column').addClass('active');
        } else {
            $('.form-column').removeClass('active');
        }
    });

    $('.link-settings-client').on('click', function () {
        $('.filter-settings').toggleClass('active');
    })
})