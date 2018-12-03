let map, service, infowindow;

function initMap() {
    let mapCenter = new google.maps.LatLng(-34.397, 150.644);
    let mapCCA = new google.maps.LatLng(39.7283, -104.8814);
    
    map = new google.maps.Map(document.getElementById('map'), {
        center: mapCCA,
        zoom: 15
    });
    
    infowindow = new google.maps.InfoWindow();
        service = new google.maps.places.PlacesService(map);
        service.nearbySearch({
          location: mapCCA,
          radius: 500,
          type: ['restaurant']
        }, callback);
      }

      function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
          }
        }
      }

      function createMarker(place) {
        let placeLoc = place.geometry.location;
        let marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent(place.name);
          infowindow.open(map, this);
        });
}