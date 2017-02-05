function redPark(map)
{
	var lot1 = new google.maps.Polygon({
		paths: [
			{lat: 26.371498, lng: -80.099659},
			{lat: 26.371498, lng: -80.099108},
			{lat: 26.370682, lng: -80.099108},
			{lat: 26.370682, lng: -80.099659}],
		strokeColor: 'red',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'red',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
   
        
	lot1.setMap(map);
	var lot1CP = new google.maps.Polygon({
		paths: [
			{lat: 26.371400, lng: -80.099754},
			{lat: 26.371400, lng: -80.099662},
			{lat: 26.371300, lng: -80.099662},
			{lat: 26.371300, lng: -80.099754}],
		strokeColor: 'red',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'red',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot1CP.setMap(map); //Carpool
	
	var lot2 = new google.maps.Polygon({
		paths: [
			{lat: 26.373598, lng: -80.099956},
			{lat: 26.373598, lng: -80.099898},
			{lat: 26.373635, lng: -80.099889},
			{lat: 26.373667, lng: -80.099864},
			{lat: 26.373688, lng: -80.099818},
			{lat: 26.373699, lng: -80.099494},
			{lat: 26.372107, lng: -80.099463},
			{lat: 26.372107, lng: -80.099554},
			{lat: 26.372347, lng: -80.099559},
			{lat: 26.372347, lng: -80.099756},
			{lat: 26.372394, lng: -80.099756},
			{lat: 26.372394, lng: -80.099756},
			{lat: 26.372400, lng: -80.099803},			
			{lat: 26.372422, lng: -80.099842},
			{lat: 26.372468, lng: -80.099873},
			{lat: 26.372505, lng: -80.099875},
			{lat: 26.372505, lng: -80.099929}],
		strokeColor: 'red',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'red',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot2.setMap(map);
	
	var lot4 = new google.maps.Polygon({
		paths: [
			{lat: 26.374444, lng: -80.101232},
			{lat: 26.374444, lng: -80.100437},
			{lat: 26.374437, lng: -80.100411},
			{lat: 26.374400, lng: -80.100400},
			{lat: 26.373863, lng: -80.100400},
			{lat: 26.373863, lng: -80.100612},
			{lat: 26.374036, lng: -80.100612},
			{lat: 26.374036, lng: -80.100821},
			{lat: 26.373859, lng: -80.100821},
			{lat: 26.373857, lng: -80.101224}],
		strokeColor: 'red',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'red',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot4.setMap(map);
	var lot4CP = new google.maps.Polygon({
		paths: [
			{lat: 26.373954, lng: -80.101342},
			{lat: 26.373954, lng: -80.101244},
			{lat: 26.373867, lng: -80.101244},
			{lat: 26.373867, lng: -80.101342}],
		strokeColor: 'red',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'red',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot4CP.setMap(map); //Carpool
	
	
	var lot8 = new google.maps.Polygon({
		paths: [
			{lat: 26.373628, lng: -80.107048},
			{lat: 26.373631, lng: -80.106482},
			{lat: 26.372892, lng: -80.106474},
			{lat: 26.372887, lng: -80.106964},
			{lat: 26.373084, lng: -80.106964},
			{lat: 26.373084, lng: -80.107022},
			{lat: 26.372887, lng: -80.107022},
			{lat: 26.372887, lng: -80.107059},
			{lat: 26.372902, lng: -80.107098},
			{lat: 26.372944, lng: -80.107129},
			{lat: 26.373319, lng: -80.107133},
			{lat: 26.373393, lng: -80.107122},
			{lat: 26.373481, lng: -80.107101},
			{lat: 26.373563, lng: -80.107073},
		],
		strokeColor: 'red',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'red',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot8.setMap(map);
	
	var lot15a = new google.maps.Polygon({
		paths: [
			{lat: 26.371515, lng: -80.109104},
			{lat: 26.371515, lng: -80.109012},
			{lat: 26.371468, lng: -80.109012},
			{lat: 26.371468, lng: -80.109104}],
		strokeColor: 'red',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'red',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot15a.setMap(map);
	var lot15b = new google.maps.Polygon({
		paths: [
			{lat: 26.371289, lng: -80.109104},
			{lat: 26.371289, lng: -80.109012},
			{lat: 26.371074, lng: -80.109012},
			{lat: 26.371074, lng: -80.109104}],
		strokeColor: 'red',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'red',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot15b.setMap(map);
	var lot15c = new google.maps.Polygon({
		paths: [
			{lat: 26.371169, lng: -80.108629},
			{lat: 26.371024, lng: -80.108416},			
			{lat: 26.370958, lng: -80.108473},
			{lat: 26.371101, lng: -80.108685}],
		strokeColor: 'red',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'red',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot15c.setMap(map);
	
	var lot16 = new google.maps.Polygon({
		paths: [
			{lat: 26.368612, lng: -80.107005},
			{lat: 26.368612, lng: -80.106319},
			{lat: 26.368356, lng: -80.106319},
			{lat: 26.368356, lng: -80.106210},
			{lat: 26.368266, lng: -80.106210},
			{lat: 26.368266, lng: -80.106673},
			{lat: 26.368438, lng: -80.106673},
			{lat: 26.368438, lng: -80.106819},
			{lat: 26.368528, lng: -80.106819},
			{lat: 26.368528, lng: -80.107005}],
		strokeColor: 'red',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'red',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot16.setMap(map);
	
	var lot19 = new google.maps.Polygon({
		paths: [
			{lat: 26.371296, lng: -80.105090},
			{lat: 26.371296, lng: -80.104167},			
			{lat: 26.371213, lng: -80.104167},
			{lat: 26.371213, lng: -80.104566},
			{lat: 26.371025, lng: -80.104566},
			{lat: 26.371025, lng: -80.104577},
			{lat: 26.370941, lng: -80.104577},
			{lat: 26.370941, lng: -80.105090}],
		strokeColor: 'red',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'red',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot19.setMap(map);
	
	var lot23a = new google.maps.Polygon({
		paths: [
			{lat: 26.368050, lng: -80.102505},
			{lat: 26.368050, lng: -80.102405},
			{lat: 26.368097, lng: -80.102405},
			{lat: 26.368097, lng: -80.102365},
			{lat: 26.368180, lng: -80.102365},
			{lat: 26.368180, lng: -80.102005},
			{lat: 26.368050, lng: -80.102005},
			{lat: 26.368050, lng: -80.101629},
			{lat: 26.367766, lng: -80.101629},
			{lat: 26.367766, lng: -80.101821},
			{lat: 26.367746, lng: -80.101821},
			{lat: 26.367746, lng: -80.102505}],
		strokeColor: 'red',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'red',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot23a.setMap(map);
	var lot23b = new google.maps.Polygon({
		paths: [
			{lat: 26.367634, lng: -80.101523},
			{lat: 26.367634, lng: -80.101348},
			{lat: 26.366776, lng: -80.101351},
			{lat: 26.366776, lng: -80.101526}],
		strokeColor: 'red',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'red',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot23b.setMap(map);
	
	var lot30 = new google.maps.Polygon({
		paths: [
			{lat: 26.377246, lng: -80.096985},
			{lat: 26.377246, lng: -80.096887},
			{lat: 26.377142, lng: -80.096887},
			{lat: 26.377142, lng: -80.096800},
			{lat: 26.376968, lng: -80.096797},
			{lat: 26.376968, lng: -80.096890},
			{lat: 26.376991, lng: -80.096890},
			{lat: 26.376991, lng: -80.096981}],
		strokeColor: 'red',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'red',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot30.setMap(map);
	
	var lot45 = new google.maps.Polygon({
		paths: [
			{lat: 26.378333, lng: -80.097786},
			{lat: 26.378333, lng: -80.097691},
			{lat: 26.377878, lng: -80.097684},
			{lat: 26.377878, lng: -80.097591},
			{lat: 26.377286, lng: -80.097583},
			{lat: 26.377286, lng: -80.097675},
			{lat: 26.377274, lng: -80.097675},
			{lat: 26.377274, lng: -80.097768}],
		strokeColor: 'red',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'red',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot45.setMap(map);
	
	var lot46 = new google.maps.Polygon({
		paths: [
			{lat: 26.378774, lng: -80.097733},
			{lat: 26.378811, lng: -80.097020},
			{lat: 26.378640, lng: -80.097002},
			{lat: 26.378604, lng: -80.097726}],
		strokeColor: 'red',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'red',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot46.setMap(map);
}