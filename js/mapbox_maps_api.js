mapboxgl.accessToken = mapboxToken;


var triple = {
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [-96.7969, 32.7763], // starting position [lng, lat]
    zoom: 19
}

var map = new mapboxgl.Map(triple)




var markerOptions = {
    color: "#FF0000",

}
//*** first
var TempleBarRes =  new mapboxgl.Marker(markerOptions)
    .setLngLat([-6.263485,  53.3455165])
    .addTo(map);

document.getElementById('temple').addEventListener('click', function () {
    map.flyTo({
        center: [ -6.263485, 53.3455165 ]
    })
})

var templePopup = new mapboxgl.Popup()
    .setHTML("<p>Temple res/bar</p>")
    .addTo(map);
TempleBarRes.setPopup(templePopup)



//*** second

var haciendaReal = new mapboxgl.Marker(markerOptions)
    .setLngLat([-87.190658, 14.088421])
    .addTo(map);

document.getElementById('hacienda').addEventListener('click', function () {
    map.flyTo({
        center: [ -87.190658, 14.088421]
    })
})

var haciendaPopup = new mapboxgl.Popup()
    .setHTML("<p>hacienda real restaurant</p>")
haciendaReal.setPopup(haciendaPopup)


//*** third
var jaxonRes = new mapboxgl.Marker(markerOptions)
    .setLngLat([-96.799444, 32.7786])
    .addTo(map);

document.getElementById('jaxon').addEventListener('click', function () {
    map.flyTo({
        center: [-96.799444, 32.7786]
    })
})

var jaxonPopup = new mapboxgl.Popup()
    .setText('Jaxon restaurant')
jaxonRes.setPopup(jaxonPopup)



