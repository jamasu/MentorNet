(function() {
  mapController.$inject = ['$scope', '$routeParams'];
  function mapController($scope, $routeParams) {
    $scope.initialize = function() {

  var myLatlng = new google.maps.LatLng(59.93039062291619, 10.885745286941528);
  var mapOptions = {
    zoom: 10,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Hello World!'
  });
 }
$scope.locationName = $routeParams.locationName;
}
  angular.module("scotchApp").controller("mapController", mapController);
 //google.maps.event.addDomListener(window, 'load', initialize);
}());
