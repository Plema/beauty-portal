document.addEventListener("touchstart", function () {}, true);

$(document).ready(function () {

    jcf.replaceAll();

    $(".phone_mask").inputmask({
        "mask": "+7(999)999-99-99"
    });

    $('.url').inputmask({
        regex: "https://.*"
    });
    $('.username').inputmask();
    $('.email').inputmask()


    $('#add-select2').on('click', function () {
        var theSelect2 = document.getElementById('elementId2');
        var span = $('<span/>').addClass('folder_name2').html(theSelect2[theSelect2.selectedIndex].text);
        span.innerHTML = (theSelect2[theSelect2.selectedIndex].text);
        $(span).append('<span class="close-folder2">x</span>')
        $('.select-options2').append(span)
        $('.select-options2 .folder_name2 .close-folder ').on('click', function () {
            $(this).parent('.folder_name2').css('display', 'none')
        })
    })

    $('#add-select').on('click', function () {
        var theSelect = document.getElementById('elementId');
        var span = $('<span/>').addClass('folder_name').html(theSelect[theSelect.selectedIndex].text);
        span.innerHTML = (theSelect[theSelect.selectedIndex].text);
        $(span).append('<span class="close-folder">x</span>')
        $('.select-options').append(span)
        $('.select-options .folder_name .close-folder ').on('click', function () {
            $(this).parent('.folder_name').css('display', 'none')
        })
    })

    $('.widget ul li').on('click', function () {
        var id = $(this).attr('id');
        $('li').removeClass('active')
        $(this).addClass('active');
        $(".section_settings [data-id='" + id + "']").addClass('active').siblings().removeClass('active');
    });

    //range slder
    $("#slider-range").slider({
        animate: "slow",
        range: "min",
        value: 50,
        slide: function (event, ui) {
            $("#result-range").text(ui.value);
        }
    });

    $("#result-range").text($("#slider-range").slider("value"));

    // Показать при ховере справку
    $('.show-reference').hover(
        function () {
            $(this).parent().addClass('show');
        },
        function () {
            $(this).parent().removeClass('show');
        }
    );

    $('.promotional-code .show-reference').hover(
        function () {
            $(this).parent().addClass('show');
        },
        function () {
            $(this).parent().removeClass('show');
        }
    );

    $('.payment_history span').on('click', function () {
        $(this).parent().toggleClass('show');
    });

    $('.history span').on('click', function () {
        $(this).parent().toggleClass('show');
    });

    $('.rating_formula .show-formula').on('click', function () {
        $(this).parent().toggleClass('show');
    });

    $('.generate_promotional_code .promotional-code').on('click', function () {
        $(this).parent().toggleClass('show');
    });

    $('.replenish_account').on('click', function () {
        $(this).parent().toggleClass('show');
    });

    $("#file-image,#file-images").fileinput({
        uploadUrl: "/ file-upload-batch / 1",
    });

    $('.limited').bind('keyup keydown paste', function (e) {
        var $t = $(this);
        setTimeout(function () {
            var max = $t.attr('maxlength') * 1;
            if ($t.val().length > max) {
                $t.val($t.val().substr(0, max));
            }
            $t.next().children('span').text(max - $t.val().length);
        }, 0);
    });

    $("#file-1,#file-2,#file-3,#file-4").fileinput({
        uploadUrl: "/ file-upload-batch / 1",
    });

    $('.btn-brows-2').on('click', function () {
        $('#file-2').trigger('click');
    })

    $('.item-user').on('click', function () {
        $(this).toggleClass('active');
    })

    $('.black-list li .item-action').on('click', function () {
        $(this).parent('li').css('display', 'none');
    })

    $('.btn-brows-3').on('click', function () {
        $('#file-3').trigger('click');
    })
    $('.btn-brows-4').on('click', function () {
        $('#file-4').trigger('click');
    })
    $('.add-image#files2, .add-video#files3, .add-files#files4, .btn-brows').on('click', function () {
        $('#file-1').trigger('click');
    })
})