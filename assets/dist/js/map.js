document.addEventListener("touchstart", function () {}, true);

$(document).ready(function () {
    var geoObjectsQuery;
    var map;
    var polygonOptions = {
        strokeColor: '#0000ff',
        fillColor: '#8080ff',
        interactivityModel: 'default#transparent',
        strokeWidth: 4,
        opacity: 0.7
    };

    var canvasOptions = {
        strokeStyle: '#0000ff',
        lineWidth: 4,
        opacity: 0.7
    };

    ymaps.ready(['Map', 'geoQuery'])
        .then(function () {
            map = new ymaps.Map('map', {
                center: [55.75, 37.62],
                zoom: 9,
                controls: []
            });

            // Создадим коллекцию геообъектов и зададим опции.
            var geoObjects = new ymaps.GeoObjectCollection({}, {
                preset: "islands#redCircleIcon",
                strokeWidth: 4,
                geodesic: true,
                visible: true,
            });

            map.geoObjects.add(geoObjects);

            // Создаем geoQuery для запросов к гео-объектам.
            geoObjectsQuery = ymaps.geoQuery(geoObjects);

            geoObjectsQuery = ymaps.geoQuery(groups);

            // Контейнер для меню.
            menu = $('<ul class="menu"/>');

            for (var i = 0, l = groups.length; i < l; i++) {
                createMenuGroup(groups[i]);
            }

            function createMenuGroup(group) {
                // Пункт меню.
                var menuItem = $('<li><a href="#">' + group.name + group.image + '</a></li>'),
                    // Коллекция для геообъектов группы.
                    collection = new ymaps.GeoObjectCollection(null, {
                        preset: group.style
                    }),

                    // Контейнер для подменю.
                    submenu = $('<ul class="submenu"/>');

                // Добавляем коллекцию на карту.
                map.geoObjects.add(collection);
                // Добавляем подменю.
                menuItem
                    .append(submenu)
                    // Добавляем пункт в меню.
                    .appendTo(menu)
                    // По клику удаляем/добавляем коллекцию на карту и скрываем/отображаем подменю.
                    .find('a')
                    .bind('click', function () {
                        if (collection.getParent()) {
                            map.geoObjects.remove(collection);
                            submenu.hide();
                        } else {
                            map.geoObjects.add(collection);
                            submenu.show();
                        }
                    });
                for (var j = 0, m = group.items.length; j < m; j++) {
                    createSubMenu(group.items[j], collection, submenu);
                }
            }

            function createSubMenu(item, collection, submenu) {
                // Пункт подменю.
                var submenuItem = $('<li><a href="#">' + item.image + "<div class='title'>" + item.name + item.description + "</div>" + '</a></li>'),
                    // Создаем метку.
                    placemark = new ymaps.Placemark(item.center, {
                        balloonContent: "<div class='header_balloon'>" + item.image + "<div class='title'>" + item.rating + item.name + item.description + "</div>" + item.address + "</div>"
                    }, {
                        balloonMinHeight: 235,
                        balloonMaxWidth: 255,
                        balloonMaxHeight: 235,
                        balloonOffset: [53, 265],
                        hideIconOnBalloonOpen: false,
                    });

                map.geoObjects.add(placemark);
                // Добавляем метку в коллекцию.
                collection.add(placemark);

                placemark.events.add('mouseenter', function (e) {
                        // Ссылку на объект, вызвавший событие,
                        // можно получить из поля 'target'.
                        e.get('target').options.set('preset', 'islands#redIcon');
                    })

                    .add('mouseleave', function (e) {
                        e.get('target').options.unset('preset');
                    });

                // Добавляем пункт в подменю.
                submenuItem
                    .appendTo(submenu)
                    // При клике по пункту подменю открываем/закрываем баллун у метки.
                    .find('a')

                    .bind('click', function () {
                        if (!placemark.balloon.isOpen()) {
                            placemark.balloon.open();
                            $(this).addClass("active");
                        } else {
                            placemark.balloon.close();
                            $(this).removeClass("active");
                        }
                        return false;
                    });

                map.geoObjects.add(collection);
                map.geoObjects.add(placemark);
            }

            // Добавляем меню в тэг BODY.
            menu.appendTo($('#visible'));
            // Выставляем масштаб карты чтобы были видны все группы.
            map.setBounds(map.geoObjects.getBounds());

            var storage = ymaps.geoQuery(map.geoObjects);

            // Создаем geoQuery для запросов к гео-объектам.
            geoObjectsQuery = ymaps.geoQuery(storage);

            var polygon = null;

            var drawButton = document.querySelector('#draw');

            drawButton.onclick = function () {
                // drawButton.disabled = true;

                drawLineOverMap(map)
                    .then(function (coordinates) {
                        // Переводим координаты из 0..1 в географические.
                        var bounds = map.getBounds();
                        coordinates = coordinates.map(function (x) {
                            return [
                                // Широта (latitude).
                                // Y переворачивается, т.к. на canvas'е он направлен вниз.
                                bounds[0][0] + (1 - x[1]) * (bounds[1][0] - bounds[0][0]),
                                // Долгота (longitude).
                                bounds[0][1] + x[0] * (bounds[1][1] - bounds[0][1]),
                            ];
                        });

                        // Тут надо симплифицировать линию.
                        // Для простоты я оставляю только каждую третью координату.
                        coordinates = coordinates.filter(function (_, index) {
                            return index % 3 === 0;
                        });

                        // Удаляем старый полигон.
                        if (polygon) {
                            map.geoObjects.remove(polygon);
                        }

                        // Создаем новый полигон
                        polygon = new ymaps.Polygon([coordinates], {}, polygonOptions);
                        map.geoObjects.add(polygon);

                        polygon.options.setParent(map.options);
                        polygon.geometry.setMap(map);

                        // Объекты, попадающие в круг, будут становиться красными.
                        var objectsInsidepolygon = storage.searchInside(polygon);

                        objectsInsidepolygon.setOptions('preset', 'islands#redIcon');

                    });
            };

            function drawLineOverMap(map) {
                var canvas = document.querySelector('#draw-canvas');
                var ctx2d = canvas.getContext('2d');
                var drawing = false;
                var coordinates = [];

                // Задаем размеры канвасу как у карты.
                var rect = map.container.getParentElement().getBoundingClientRect();
                canvas.style.width = rect.width + 'px';
                canvas.style.height = rect.height + 'px';
                canvas.width = rect.width;
                canvas.height = rect.height;

                // Применяем стили.
                ctx2d.strokeStyle = canvasOptions.strokeStyle;
                ctx2d.lineWidth = canvasOptions.lineWidth;
                canvas.style.opacity = canvasOptions.opacity;

                ctx2d.clearRect(0, 0, canvas.width, canvas.height);

                // Показываем канвас. Он будет сверху карты из-за position: absolute.
                canvas.style.display = 'block';

                canvas.onmousedown = function (e) {
                    // При нажатии мыши запоминаем, что мы начали рисовать и координаты.
                    drawing = true;
                    coordinates.push([e.offsetX, e.offsetY]);
                };

                canvas.onmousemove = function (e) {
                    // При движении мыши запоминаем координаты и рисуем линию.
                    if (drawing) {
                        var last = coordinates[coordinates.length - 1];
                        ctx2d.beginPath();
                        ctx2d.moveTo(last[0], last[1]);
                        ctx2d.lineTo(e.offsetX, e.offsetY);
                        ctx2d.stroke();

                        coordinates.push([e.offsetX, e.offsetY]);
                    }
                };

                return new Promise(function (resolve) {
                    // При отпускании мыши запоминаем координаты и скрываем канвас.
                    canvas.onmouseup = function (e) {
                        coordinates.push([e.offsetX, e.offsetY]);
                        canvas.style.display = 'none';
                        drawing = false;

                        coordinates = coordinates.map(function (x) {
                            return [x[0] / canvas.width, x[1] / canvas.height];
                        });

                        resolve(coordinates);

                    };
                });
            }
        })

        .catch(console.error);
})
