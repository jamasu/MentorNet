  function initialize() {
        var mapCanvas = document.getElementById('map-canvas');
        var mapOptions = {
          center: new google.maps.LatLng(59.93039062291619, 10.885745286941528),
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.HYBRID
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
      }
      google.maps.event.addDomListener(window, 'load', initialize);