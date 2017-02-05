function motorPark(map)
{
	var lot2 = new google.maps.Polygon({
		paths: [
			{lat: 26.373731, lng: -80.099273},
			{lat: 26.373684, lng: -80.099228},
			{lat: 26.373639, lng: -80.099279},
			{lat: 26.373664, lng: -80.099299},
			{lat: 26.373689, lng: -80.099323}],
		strokeColor: 'orange',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'orange',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot2.setMap(map);
	
	var lot6 = new google.maps.Polygon({
		paths: [
			{lat: 26.373778, lng: -80.102484},
			{lat: 26.373778, lng: -80.102402},
			{lat: 26.373729, lng: -80.102402},
			{lat: 26.373729, lng: -80.102484}],
		strokeColor: 'orange',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'orange',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot6.setMap(map);
	
	var lot13 = new google.maps.Polygon({
		paths: [
			{lat: 26.372494, lng: -80.111134},
			{lat: 26.372564, lng: -80.111074},
			{lat: 26.372510, lng: -80.110990},
			{lat: 26.372438, lng: -80.111053}],
		strokeColor: 'orange',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'orange',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot13.setMap(map);	
	
	var lot19 = new google.maps.Polygon({
		paths: [
			{lat: 26.371132, lng: -80.104159},
			{lat: 26.371132, lng: -80.104070},			
			{lat: 26.371211, lng: -80.104070},			
			{lat: 26.371211, lng: -80.104159}],
		strokeColor: 'orange',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'orange',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot19.setMap(map); //Carpool
	
	var lot21 = new google.maps.Polygon({
		paths: [
			{lat: 26.367367, lng: -80.104728},
			{lat: 26.367367, lng: -80.104637},
			{lat: 26.367320, lng: -80.104637},			
			{lat: 26.367320, lng: -80.104695}],
		strokeColor: 'orange',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'orange',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot21.setMap(map);
	
	var lot22 = new google.maps.Polygon({
		paths: [
			{lat: 26.367828, lng: -80.102838},
			{lat: 26.367828, lng: -80.102755},
			{lat: 26.367749, lng: -80.102755},			
			{lat: 26.367749, lng: -80.102838}],
		strokeColor: 'orange',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'orange',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot22.setMap(map);
	
	var lot35 = new google.maps.Polygon({
		paths: [
			{lat: 26.375491, lng: -80.097805},
			{lat: 26.375491, lng: -80.097715},
			{lat: 26.375411, lng: -80.097715},			
			{lat: 26.375411, lng: -80.097805}],
		strokeColor: 'orange',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'orange',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot35.setMap(map);
}