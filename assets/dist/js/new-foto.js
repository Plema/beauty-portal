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
});

$(document).ready(function () {

    $("#file-add").fileinput({
        uploadUrl: "/ file-upload-batch / 1",
    });

    $('.btn-brows-foto').on('click', function () {
        $('#file-add').trigger('click');
    })
})