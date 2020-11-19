$(document).ready(function () {

    "use strict";

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

    $.get("http://api.openweathermap.org/data/2.5/weather", {
            APPID: OPEN_WEATHER_APPID,
            q: "San Antonio, US",
            units: "imperial"
        }).done(function (data) {
            console.log(data);
        });

     });











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
