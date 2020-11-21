$(document).ready(function () {



    mapboxgl.accessToken = mapboxToken;

    var triple = {
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v10', // stylesheet location
        center: [-96.7969, 32.7763], // starting position [lng, lat]
        zoom: 10
    }

    var map = new mapboxgl.Map(triple)

    var coordinates = document.getElementById('coordinates');

    var dallasLocation = new mapboxgl.Marker()
        .setLngLat([-96.7969, 32.7763])
        .setDraggable(true)
        .addTo(map);

    // $.get("http://api.openweathermap.org/data/2.5/weather", {
    //         APPID: OPEN_WEATHER_APPID,
    //         q: "london, uk",
    //         units: "imperial"
    //     }).done(function (data) {
    //         console.log(data);
    //     });

    $('#submitWeather').click(function() {
        var city = $("#userInput").val();
        if (city != '') {
            $.get("http://api.openweathermap.org/data/2.5/weather", {
                APPID: OPEN_WEATHER_APPID,
                q: city,
                units: "imperial"
            }).done( function (data) {
                    var widget = show(data);

                    $("#map").html(widget);

                    $("#city").val('');
                    console.log(data);
                }
            );
        } else {
            $('#error').html('Field cannot be empty');
        }

    });



        function show(data){
            var html = '<div id="weathercard" class="card" style="height: 18em; width: 18em; color: whitesmoke; border: 5px solid;">';
                html +='<h3 class="card-header justify-content-center"><strong>Weather</strong></h3>'
                html += "<li><strong>Temperature</strong>: " + data.main.temp + "</li>"
                html += "<li><strong>Humidity</strong>: " + data.main.humidity + "</li>"
                html += "<li class='justify-content-center'><strong>Pressure</strong>: " + data.main.pressure + "</li>"
                html += "<li><strong>Feels like</strong>: " + data.main.feels_like + "</li>"
                html +='</div>';

                $('#weathercard').append(html);

            }






    //
    // function onDragEnd() {
    //     var lngLat = dallasLocation.getLngLat();
    //     coordinates.style.display = 'block';
    //     coordinates.innerHTML =
    //         'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
    //     console.log(lngLat)
    // }
    //
    // dallasLocation.on('dragend', onDragEnd);

     });












