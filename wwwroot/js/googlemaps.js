

      function initialize() {
  var myLatlng = new google.maps.LatLng(59.93039062291619, 10.885745286941528);
  var mapOptions = {
    zoom: 10,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.HYBRID
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Hello World!'
  });
}
 google.maps.event.addDomListener(window, 'load', initialize);
