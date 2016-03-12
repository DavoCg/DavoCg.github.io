mapboxgl.accessToken = 'pk.eyJ1IjoiZGF2b3N0eWxlOTMiLCJhIjoiY2lscWV3NHFqMDA0YXZmbHkwdzBjam9kZyJ9.YIBiN5VDTDVvkOIDn1KoKQ';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v8',
    center: [2.334883, 48.864536],
    zoom: 10,
    interactive: false
});