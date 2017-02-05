
<?php
require_once './index.php';


$result = mysqli_query($db,"SELECT * FROM geolocations");



while($row = mysqli_fetch_array($result))
{

$path=$row['coordinates'];
echo "</tr>";
break;
}
echo "</table>";

mysqli_close($db);

/*[
			{lat: 26.370073, lng: -80.099367},
			{lat: 26.370073, lng: -80.099277},
			{lat: 26.369709, lng: -80.099277},
			{lat: 26.369709, lng: -80.099367}]*/
$return="[";

$superpath=explode(";", $path);

     for   ($i = 0; $i < count($superpath); $i++) {
         $val1=explode(",",$superpath[$i])[0];
         $val2=explode(",",$superpath[$i])[1];
         
         $return=$return."{lat: ".$val1.", lng: ".$val2."},";
         
}
$return=rtrim($return, ",");
$return=$return."]";
echo $return;
?>