<?php
require_once './index.php';


$result = mysqli_query($db,"SELECT * FROM geolocations");



while($row = mysqli_fetch_array($result))
{

$path=$row['coordinates'];
$infowindow=$row['name'];
echo "</tr>";
break;
}
echo "</table>";

mysqli_close($db);


$return="[";

$superpath=explode(";", $path);

     for   ($i = 0; $i < count($superpath); $i++) {
         $val1=explode(",",$superpath[$i])[0];
         $val2=explode(",",$superpath[$i])[1];
         
         $return=$return."{lat: ".$val1.", lng: ".$val2."},";
         
}
$return=rtrim($return, ",");
$return=$return."]";

?>
<html>
  <head>
    <title>Simple Map</title>
    <meta name="viewport" content="initial-scale=1.0">
    <meta charset="utf-8">
    <style>
      /* Always set the map height explicitly to define the size of the div
       * element that contains the map. */
      #map {
        height: 100%;
      }
      /* Optional: Makes the sample page fill the window. */
      html, body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
    </style>
  </head>
  <body>
    <div id="map"></div>
    <script>
      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center:  {lat: 26.370653, lng: -80.102302},
          zoom: 20
        });
        
        
        var Poli =<?php echo $return;?>;
	var lot1 = new google.maps.Polygon({
		paths: Poli,
		strokeColor: 'yellow',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'yellow',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot1.setMap(map);
        lot1.addListener('click',info);
        
    function info(event) {
    var infowindow = new google.maps.InfoWindow();    
    var contentString = "<?php echo $infowindow;?>";
    infowindow.setContent(contentString);
    infowindow.setPosition(event.latLng);
    infowindow.open(map); 
   
   }
      }
    </script>
     <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAYDeKa_ljpXZo-FgO84uOEuMuDZdDY1bY&callback=initMap"></script>
  </body>
</html>

