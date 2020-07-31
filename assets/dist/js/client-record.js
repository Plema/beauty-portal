document.addEventListener("touchstart", function () {}, true);

$(document).ready(function () {
    jcf.replaceAll();

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
    $(".option").hover(function () {
        $('.option').css('z-index', '0')
        $(this).css('z-index', '2')
    })

    $('.choose').on('click', function () {
        $(this).toggleClass('active')
        $('.filter').toggleClass('active')
        $('.list').toggleClass('active')
    })

    $('.item').on('click', function () {
        $('.item').removeClass('active')
        $(this).addClass('active')
        $('.choose').removeClass('active')
        $('.filter').removeClass('active')
        $('.list').removeClass('active')
    })

    $('.item-time ul li').on('click', function () {
        $('.item-time ul li').removeClass('active-record')
        $(this).toggleClass('active-record')
    })


    $('.calendar3').fullCalendar({
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
            }

            if (event.customRenderFree === true) {
                var dataToFind = moment(event.start).format('YYYY-MM-DD');
                $("td[data-date='" + dataToFind + "']").addClass('freeDay');
            }

            if (event.averageEmployment === true) {
                var dataToFind = moment(event.start).format('YYYY-MM-DD');
                $("td[data-date='" + dataToFind + "']").addClass('averageEmployment');
            }

            if (event.busy === true) {
                var dataToFind = moment(event.start).format('YYYY-MM-DD');
                $("td[data-date='" + dataToFind + "']").addClass('busy');
            }
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
                start: "2019-12-03",
                record: true, // день записи
            },
            {
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
        ],

    });
    $('.fc-button').on('click', function () {
        $('.fc-center h2').each(function (index, element) {
            var heading = $(element);
            var Word_array, last_Word, first_part;

            Word_array = heading.html().split(/\s+/); // split on spaces
            last_Word = Word_array.pop(); // pop the last Word
            first_part = Word_array.join(' '); // rejoin the first words together

            heading.html([first_part, ' <span class="last-Word">', last_Word, '</span>'].join(''));
        });
    })
    $('.fc-center h2').each(function (index, element) {
        var heading = $(element);
        var Word_array, last_Word, first_part;

        Word_array = heading.html().split(/\s+/); // split on spaces
        last_Word = Word_array.pop(); // pop the last Word
        first_part = Word_array.join(' '); // rejoin the first words together

        heading.html([first_part, ' <span class="last-Word">', last_Word, '</span>'].join(''));
    });
})