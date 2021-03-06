document.addEventListener("touchstart", function () {}, true);
// Группы объектов

var groups = [{

    name: " Известные памятники",
    style: "islands#redIcon",
    items: [{
            center: [55.75, 37.62],
            name: "<span>Светлана Фролова</span>",
            description: "<p>г. Москва, м. Сокольники</p>",
            image: "<img src='../img/avatar-7.jpg'>",
            rating: "<div class='rating'>" + "<span>4,6</span>" + "<div class='stars'>" +
                " <i class='star active icon-icon1'>" + "</i>" +
                " <i class='star active icon-icon1'>" + "</i>" +
                " <i class='star icon-icon1'>" + "</i>" +
                " <i class='star icon-icon1'>" + "</i>" +
                " <i class='star icon-icon1'>" + "</i>" +
                "</div>" + "</div>",
            address: "<div class='address'>" + "<span class=''>Салон “Николь”</span>" + "<p class=''>Тверская ул. 42/6, угол Газетный</p>" + "<a href='#'>Выбрать</a>",
            style: "islands#blueIcon",
        },
        {
            center: [55.75, 40.62],
            name: "<span>Светлана Фролова</span>",
            description: "<p>г. Москва, м. Сокольники</p>",
            image: "<img src='../img/avatar-4.jpg'>",
            rating: "<div class='rating'>" + "<span>4,6</span>" + "<div class='stars'>" +
                " <i class='star active icon-icon1'>" + "</i>" +
                " <i class='star active icon-icon1'>" + "</i>" +
                " <i class='star icon-icon1'>" + "</i>" +
                " <i class='star icon-icon1'>" + "</i>" +
                " <i class='star icon-icon1'>" + "</i>" +
                "</div>" + "</div>",
            address: "<div class='address'>" + "<span class=''>Салон “Николь”</span>" + "<p class=''>Тверская ул. 42/6, угол Газетный</p>" + "<a href='#'>Выбрать</a>"
        },

        {
            center: [55.75, 39.62],
            name: "<span>Светлана Фролова</span>",
            description: "<p>г. Москва, м. Сокольники</p>",
            image: "<img src='../img/avatar-5.jpg'>",
            rating: "<div class='rating'>" + "<span>4,6</span>" + "<div class='stars'>" +
                " <i class='star active icon-icon1'>" + "</i>" +
                " <i class='star active icon-icon1'>" + "</i>" +
                " <i class='star icon-icon1'>" + "</i>" +
                " <i class='star icon-icon1'>" + "</i>" +
                " <i class='star icon-icon1'>" + "</i>" +
                "</div>" + "</div>",
            address: "<div class='address'>" + "<span class=''>Салон “Николь”</span>" + "<p class=''>Тверская ул. 42/6, угол Газетный</p>" + "<a href='#'>Выбрать</a>"
        },
        {
            center: [51.75, 31.62],
            name: "<span>Светлана Фролова</span>",
            description: "<p>г. Москва, м. Сокольники</p>",
            image: "<img src='../img/avatar-7.jpg'>",
            rating: "<div class='rating'>" + "<span>4,6</span>" + "<div class='stars'>" +
                " <i class='star active icon-icon1'>" + "</i>" +
                " <i class='star active icon-icon1'>" + "</i>" +
                " <i class='star icon-icon1'>" + "</i>" +
                " <i class='star icon-icon1'>" + "</i>" +
                " <i class='star icon-icon1'>" + "</i>" +
                "</div>" + "</div>",
            address: "<div class='address'>" + "<span class=''>Салон “Николь”</span>" + "<p class=''>Тверская ул. 42/6, угол Газетный</p>" + "<a href='#'>Выбрать</a>"
        },
        {
            center: [54.75, 33.62],
            name: "<span>Светлана Фролова</span>",
            description: "<p>г. Москва, м. Сокольники</p>",
            image: "<img src='../img/avatar-4.jpg'>",
            rating: "<div class='rating'>" + "<span>4,6</span>" + "<div class='stars'>" +
                " <i class='star active icon-icon1'>" + "</i>" +
                " <i class='star active icon-icon1'>" + "</i>" +
                " <i class='star icon-icon1'>" + "</i>" +
                " <i class='star icon-icon1'>" + "</i>" +
                " <i class='star icon-icon1'>" + "</i>" +
                "</div>" + "</div>",
            address: "<div class='address'>" + "<span class=''>Салон “Николь”</span>" + "<p class=''>Тверская ул. 42/6, угол Газетный</p>" + "<a href='#'>Выбрать</a>"
        },

        {
            center: [50.75, 30.62],
            name: "<span>Светлана Фролова</span>",
            description: "<p>г. Москва, м. Сокольники</p>",
            image: "<img src='../img/avatar-5.jpg'>",
            rating: "<div class='rating'>" + "<span>4,6</span>" + "<div class='stars'>" +
                " <i class='star active icon-icon1'>" + "</i>" +
                " <i class='star active icon-icon1'>" + "</i>" +
                " <i class='star icon-icon1'>" + "</i>" +
                " <i class='star icon-icon1'>" + "</i>" +
                " <i class='star icon-icon1'>" + "</i>" +
                "</div>" + "</div>",
            address: "<div class='address'>" + "<span class=''>Салон “Николь”</span>" + "<p class=''>Тверская ул. 42/6, угол Газетный</p>" + "<a href='#'>Выбрать</a>"
        },
        {
            center: [52.75, 27.62],
            name: "<span>Светлана Фролова</span>",
            description: "<p>г. Москва, м. Сокольники</p>",
            image: "<img src='../img/avatar-5.jpg'>",
            rating: "<div class='rating'>" + "<span>4,6</span>" + "<div class='stars'>" +
                " <i class='star active icon-icon1'>" + "</i>" +
                " <i class='star active icon-icon1'>" + "</i>" +
                " <i class='star icon-icon1'>" + "</i>" +
                " <i class='star icon-icon1'>" + "</i>" +
                " <i class='star icon-icon1'>" + "</i>" +
                "</div>" + "</div>",
            address: "<div class='address'>" + "<span class=''>Салон “Николь”</span>" + "<p class=''>Тверская ул. 42/6, угол Газетный</p>" + "<a href='#'>Выбрать</a>"
        },
    ]
}, ];

$(document).ready(function () {
    jcf.replaceAll();
    // Options for custom Select
    jcf.setOptions('Select', {
        wrapNative: false,
        wrapNativeOnMobile: false,
        fakeDropInBody: false,
        maxVisibleItems: 5
    });
})