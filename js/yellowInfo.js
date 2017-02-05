function yellowinfo(map,parkingZonesY){
var infowindow = new google.maps.InfoWindow();
google.maps.event.addListener(parkingZonesY[0], 'click', showInfoLot1);  
function showInfoLot1(event) {
  
    var contentString = "<b>Test</b><br />";
    contentString += "Test";
    infowindow.setContent(contentString);
    infowindow.setPosition(event.latLng);
    infowindow.open(map); 
  
}


google.maps.event.addListener(parkingZonesY[1], 'click', showInfoLot8);  
function showInfoLot8(event) {
    var contentString = "<b>Test</b><br />";
    contentString += "Test";
    infowindow.setContent(contentString);
    infowindow.setPosition(event.latLng);
    infowindow.open(map); 
   
   }
   }