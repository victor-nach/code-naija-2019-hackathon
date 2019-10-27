(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiemVuaXRoeSIsImEiOiJjazFqM2hmbXYwNzZlM2RwN3NkMXc1aGoyIn0.v5eUZQH9iRoiVrhAf3eegA';

    const map = new mapboxgl.Map({
        container: 'googleMap',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [3.39467, 6.45407],
        zoom: 3
    });

    // disable map zoom when using scroll
    map.scrollZoom.disable();

    const add_marker = (coords) => {
        // create a HTML element for each feature
        var el = document.createElement('div');
        el.className = 'marker';

        new mapboxgl.Marker(el)
            .setLngLat(coords)
            .addTo(map);
    };

    const add_photo_display = (file, container, img_col_class) => {
        const reader = new FileReader();

        reader.onload = e => {
            $(container).append('<div class="'+img_col_class+'"><img src="' + e.target.result + '" /></div>');
        };

        reader.readAsDataURL(file);
    };

    document.querySelector('[get-location]').onclick = (e) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                add_marker([position.coords.longitude, position.coords.latitude]);
            }, err => {
                alert(`I'm going through changes!`);
            });
        } else {
            alert('Location access is not supported by this device.');
        }
    };

    document.querySelector('[cover-photo-button]').onclick = (e) => document.querySelector('[cover-photo-file]').click();

    document.querySelector('[cover-photo-file]').onchange = (e) => {
        const files = e.target.files;

        if (files && files[0] && (files[0].type==='image/jpg' || files[0].type==='image/jpg' || files[0].type==='image/jpeg' || files[0].type==='image/png')) {
            add_photo_display (files[0], document.querySelector('[cover-photo-container]'), 'col-xs-12 col-md-4');
        }else{
            alert(`Photo must be an image`);
        }

        document.querySelector('[cover-photo-button]').disabled = 'disabled';
    };

    document.querySelector('[gallery-photo-button]').onclick = (e) => document.querySelector('[gallery-photo-file]').click();

    document.querySelector('[gallery-photo-file]').onchange = (e) => {
        const files = e.target.files;

        if (files && files[0] && (files[0].type==='image/jpg' || files[0].type==='image/jpg' || files[0].type==='image/jpeg' || files[0].type==='image/png')) {
            add_photo_display (files[0], document.querySelector('[gallery-photo-container]'),'col-xs-12 col-md-2');
        }else{
            alert(`Photo must be an image`);
        }
    };

    document.querySelector('[add-property-form]')
})();