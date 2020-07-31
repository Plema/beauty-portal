document.addEventListener("touchstart", function () {}, true);

$(document).ready(function () {
    jcf.replaceAll();

    $('.heading .link-settings').on('click', function () {
        $('.filter-settings').toggleClass('active');
    })

    $('.item').on("click", function () {
        $('.item').removeClass('active').find('.content-hide').removeClass('active')
        $(this).addClass('active').find('.content-hide').addClass('active')
    })

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

    $('#datepicker').on("click", function () {
        $('.calendar').toggleClass('active');
        $('a.ui-state-default').on("click", function () {
            $('.calendar').removeClass('active');
            console.log(this)
        });
        $('.calendar').addClass('active')
    });

    $('label.icon-calendar').on("click", function () {
        $('.calendar').addClass('active')
    })

    jQuery(function ($) {
        $(document).mouseup(function (e) {
            var div = $(".calendar");
            if (!div.is(e.target) &&
                div.has(e.target).length === 0) {
                div.removeClass('active');
            }
        });
    });

    $(function () {
        $('.calendar').datepicker({
            altField: '#datepicker',
            altFormat: 'yy-mm-dd',
            inline: true,
            firstDay: 1,
            showOtherMonths: true,
            monthNames: ['Январь', 'Февраль', 'Март', 'Апрель',
                'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь',
                'Октябрь', 'Ноябрь', 'Декабрь'
            ],
            dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            firstDay: 1,
        });
    });

    $('.list-events').slick({
        slidesToShow: 7,
        slidesToScroll: 2,
        variableWidth: true,
        arrows: false,
        infinite: true,
        responsive: [{
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    variableWidth: false,
                    arrows: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    variableWidth: false,
                    arrows: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                    variableWidth: false,
                    arrows: true,
                }
            },
        ]
    })
})