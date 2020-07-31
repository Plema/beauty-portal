document.addEventListener("touchstart", function () {}, true);


$(document).ready(function () {
    $('#calendar').fullCalendar({
        contentHeight: 'auto',
        firstDay: 1,
        firstDay: 1,
        nowIndicator: true,
        allDaySlot: false,
        timezone: 'local',

        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthNamesShort: ['Янв.', 'Фев.', 'Март', 'Апр.', 'Май', 'Июнь', 'Июль', 'Авг.', 'Сент.', 'Окт.', 'Ноя.', 'Дек.'],
        dayNames: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
        dayNamesShort: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        views: {},

        header: {
            left: 'prev ',
            center: 'title',
            right: 'next'
        },
        defaultView: "month",

        eventOverlap: function (stillEvent, movingEvent) {
            return stillEvent.rendering == "background";
        },

        eventRender: function (event, element, view) {
            if (event.customRender === true) {

                var dataToFind = moment(event.start).format('YYYY-MM-DD');
                $("td[data-date='" + dataToFind + "']").addClass('activeDay');
                console.log(dataToFind)
            }

            if (event.customRenderFree === true) {
                var dataToFind = moment(event.start).format('YYYY-MM-DD');
                $("td[data-date='" + dataToFind + "']").addClass('freeDay');
                console.log(dataToFind)
            }

            if (event.averageEmployment === true) {
                var dataToFind = moment(event.start).format('YYYY-MM-DD');
                $("td[data-date='" + dataToFind + "']").addClass('averageEmployment');
                console.log(dataToFind)
            }

            if (event.busy === true) {
                var dataToFind = moment(event.start).format('YYYY-MM-DD');
                $("td[data-date='" + dataToFind + "']").addClass('busy');
                console.log(dataToFind)
            }

        },

        eventClick: function (event) {
            $('#modalTitle').html(event.title);
            $('#modalBody').html(event.description);
            $('#fullCalModal').modal();
        },

        dayClick: (function () {
            var lastThis;
            return function (date, jsEvent, view) {
                if (lastThis)
                    lastThis.css('background-color', 'white');
                lastThis = $(this);
                $(".fc-day").removeClass("active");
                $(this).addClass('active')
            }
        })(),


        events: [{
                start: "2019-12-02",
                customRenderFree: true, //свободный день зеленая обводка
            },
            {
                start: "2019-12-18",
                averageEmployment: true, // средняя занятость желтая обводка
            },
            {
                start: "2019-12-17",
                busy: true, //день занят красная обводка
            },
            {
                start: "2019-12-20",
            }
        ]
    });
    $('.fc-day-top').on('click', function () {
        jQuery('.click-organaizer')[0].click();
    })
});

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

})