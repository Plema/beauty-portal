document.addEventListener("touchstart", function () {}, !0), $(document).ready(function () {
   
    $("#calendar3").fullCalendar({
        contentHeight: "auto",
        firstDay: 1,
        firstDay: 1,
        nowIndicator: !0,
        allDaySlot: !1,
        timezone: "local",
        monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
        monthNamesShort: ["Янв.", "Фев.", "Март", "Апр.", "Май", "Июнь", "Июль", "Авг.", "Сент.", "Окт.", "Ноя.", "Дек."],
        dayNames: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
        dayNamesShort: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        views: {},
        header: {
            left: "prev ",
            center: "title",
            right: "next"
        },
        defaultView: "month",
        eventOverlap: function (a, b) {
            return "background" == a.rendering
        },
        eventRender: function (a, b, c) {
            if (a.customRender === !0) {
                var d = moment(a.start).format("YYYY-MM-DD");
                $("td[data-date='" + d + "']").addClass("activeDay")
            }
            if (a.customRenderFree === !0) {
                var d = moment(a.start).format("YYYY-MM-DD");
                $("td[data-date='" + d + "']").addClass("freeDay")
            }
            if (a.averageEmployment === !0) {
                var d = moment(a.start).format("YYYY-MM-DD");
                $("td[data-date='" + d + "']").addClass("averageEmployment")
            }
            if (a.busy === !0) {
                var d = moment(a.start).format("YYYY-MM-DD");
                $("td[data-date='" + d + "']").addClass("busy")
            }
            if (a.record === !0) {
                var d = moment(a.start).format("YYYY-MM-DD");
                $("td[data-date='" + d + "']").addClass("record")
            }
        },
        dayClick: function () {
            var a;
            return function (b, c, d) {
                a && a.css("background-color", "white"), a = $(this), $(".fc-day").removeClass("active"), $(this).addClass("active")
            }
        }(),
        events: [{
            start: "2019-12-03",
            record: !0
        }, {
            start: "2019-12-02",
            customRenderFree: !0
        }, {
            start: "2019-12-18",
            averageEmployment: !0
        }, {
            start: "2019-12-17",
            busy: !0
        }, {
            start: "2019-12-20"
        }]
    }), 
    $(".fc-button").on("click", function () {
        $(".fc-center h2").each(function (a, b) {
            var c, d, e, f = $(b);
            c = f.html().split(/\s+/), d = c.pop(), e = c.join(" "), f.html([e, ' <span class="last-Word">', d, "</span>"].join(""))
        })
    }), 
    $(".fc-center h2").each(function (a, b) {
        var c, d, e, f = $(b);
        c = f.html().split(/\s+/), d = c.pop(), e = c.join(" "), f.html([e, ' <span class="last-Word">', d, "</span>"].join(""))
    }), 
    $(".link-calendar").on("click", function () {
        $(".widget").toggleClass("active")
        $(".widget").css('opacity','0').css('display','block').css('pointer-events','none')
        $(".widget.active").css('opacity','1').css('display','block').css('pointer-events','all')
        // $("#calendar3").fullCalendar("render") 
        // $(".fc-button").on("click", function () {
        //     $(".fc-center h2").each(function (a, b) {
        //         var c, d, e, f = $(b);
        //         c = f.html().split(/\s+/), d = c.pop(), e = c.join(" "), f.html([e, ' <span class="last-Word">', d, "</span>"].join(""))
        //     })
        // }), 
        // $(".fc-center h2").each(function (a, b) {
        //     var c, d, e, f = $(b);
        //     c = f.html().split(/\s+/), d = c.pop(), e = c.join(" "), f.html([e, ' <span class="last-Word">', d, "</span>"].join(""))
        // })
    }), 
    jcf.replaceAll(), 
    $(".arrow").on("click", function () {
        $(this).toggleClass("active").parents(".form-event").toggleClass("active")
    });
    var a = 0;
    const b = $("#title-time");
    b.on("click", function () {
        ++a, a % 2 !== 0 ? $('input[type="checkbox"]').parents(".jcf-checkbox").addClass("jcf-checked").removeClass("jcf-unchecked") : $('input[type="checkbox"]').parents(".jcf-checkbox").removeClass("jcf-checked").addClass("jcf-unchecked")
    }), $("#hour").on("click", function () {
        $('input[type="checkbox"]').parents("#time-block-1 .jcf-checkbox").toggleClass("jcf-checked").toggleClass("jcf-unchecked")
    }), $("#hour-2").on("click", function () {
        $('input[type="checkbox"]').parents("#time-block-2 .jcf-checkbox").toggleClass("jcf-checked").toggleClass("jcf-unchecked")
    }), $("#hour-3").on("click", function () {
        $('input[type="checkbox"]').parents("#time-block-3 .jcf-checkbox").toggleClass("jcf-checked").toggleClass("jcf-unchecked")
    }), $("#hour-4").on("click", function () {
        $('input[type="checkbox"]').parents("#time-block-4 .jcf-checkbox").toggleClass("jcf-checked").toggleClass("jcf-unchecked")
    }), $("#hour-5").on("click", function () {
        $('input[type="checkbox"]').parents("#time-block-5 .jcf-checkbox").toggleClass("jcf-checked").toggleClass("jcf-unchecked")
    }), $("#hour-6").on("click", function () {
        $('input[type="checkbox"]').parents("#time-block-6 .jcf-checkbox").toggleClass("jcf-checked").toggleClass("jcf-unchecked")
    })
});