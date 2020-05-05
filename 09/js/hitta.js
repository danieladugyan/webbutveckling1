// Initialize and add the map
function initMap() {
  // The location of Malmo
  var malmo = {lat: 55.604994, lng: 13.003824};
  // The map, centered at Malmo
  var map = new google.maps.Map(
      document.querySelector('.map'), {zoom: 12, center: malmo});
  // The marker, positioned at Malmo
  var marker = new google.maps.Marker({position: malmo, map: map});
}
