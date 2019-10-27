(()=>{
    document.querySelector('[get-location]').onclick = (e) =>{
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position=>{
                alert(JSON.stringify(position));
            }, err =>{
                alert(`I'm going through changes!`);
            });
          } else {
            alert('Location access is not supported by this device.');
          }
    };
    
    mapboxgl.accessToken = 'pk.eyJ1IjoiemVuaXRoeSIsImEiOiJjazFqM2hmbXYwNzZlM2RwN3NkMXc1aGoyIn0.v5eUZQH9iRoiVrhAf3eegA';
    var map = new mapboxgl.Map({
    container: 'googleMap',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [6.45407, 3.39467],
    zoom: 3
    });

    // create a HTML element for each feature
  var el = document.createElement('div');
  el.className = 'marker';

  new mapboxgl.Marker(el)
    .setLngLat([6.45407, 3.39467])
    .addTo(map);

    
})();