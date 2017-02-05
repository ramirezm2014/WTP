function handicapPark(map)
{
	var lot1 = new google.maps.Polygon({
		paths: [
			{lat: 26.371297, lng: -80.099754},
			{lat: 26.371297, lng: -80.099662},
			{lat: 26.370800, lng: -80.099662},
			{lat: 26.370800, lng: -80.099754}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot1.setMap(map);
	
	var lot2a = new google.maps.Polygon({
		paths: [
			{lat: 26.372983, lng: -80.099477},
			{lat: 26.372983, lng: -80.099387},
			{lat: 26.372822, lng: -80.099385},
			{lat: 26.372822, lng: -80.099475}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot2a.setMap(map);
	
	var lotEEDrop = new google.maps.Polygon({
		paths: [
			{lat: 26.372457, lng: -80.098764},
			{lat: 26.372457, lng: -80.098667},
			{lat: 26.372329, lng: -80.098667},
			{lat: 26.372329, lng: -80.098764}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lotEEDrop.setMap(map);
	
	var lot4Right = new google.maps.Polygon({
		paths: [
			{lat: 26.373256, lng: -80.098445},
			{lat: 26.373293, lng: -80.098403},
			{lat: 26.373293, lng: -80.098267},
			{lat: 26.373206, lng: -80.098267},
			{lat: 26.373206, lng: -80.098445}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot4Right.setMap(map);
	
	var lot4Lefta = new google.maps.Polygon({
		paths: [
			{lat: 26.374316, lng: -80.101450},
			{lat: 26.374316, lng: -80.101345},
			{lat: 26.373918, lng: -80.101345},
			{lat: 26.373918, lng: -80.101450}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot4Lefta.setMap(map);
	var lot4Leftb = new google.maps.Polygon({
		paths: [
			{lat: 26.374033, lng: -80.100818},
			{lat: 26.374033, lng: -80.100614},
			{lat: 26.373863, lng: -80.100614},
			{lat: 26.373860, lng: -80.100818}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot4Leftb.setMap(map);
	
	var lot6a = new google.maps.Polygon({
		paths: [
			{lat: 26.373804, lng: -80.103583},
			{lat: 26.373804, lng: -80.103317},
			{lat: 26.373719, lng: -80.103317},
			{lat: 26.373719, lng: -80.103583}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot6a.setMap(map);
	var lot6b = new google.maps.Polygon({
		paths: [
			{lat: 26.373809, lng: -80.102799},
			{lat: 26.373809, lng: -80.102576},
			{lat: 26.373712, lng: -80.102576},
			{lat: 26.373712, lng: -80.102799}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot6b.setMap(map);
			
	var lot10 = new google.maps.Polygon({
		paths: [
			{lat: 26.372487, lng: -80.108915},
			{lat: 26.372487, lng: -80.108812},
			{lat: 26.372247, lng: -80.108812},
			{lat: 26.372247, lng: -80.108915}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot10.setMap(map);
	
	var lot12 = new google.maps.Polygon({
		paths: [
			{lat: 26.373888, lng: -80.110160},
			{lat: 26.373888, lng: -80.109929},
			{lat: 26.373802, lng: -80.109929},
			{lat: 26.373802, lng: -80.110160}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot12.setMap(map);		
	
	var lot13a = new google.maps.Polygon({
		paths: [
			{lat: 26.372784, lng: -80.111549},
			{lat: 26.372913, lng: -80.111440},
			{lat: 26.372835, lng: -80.111323},
			{lat: 26.372707, lng: -80.111438}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot13a.setMap(map);
	var lot13b = new google.maps.Polygon({
		paths: [
			{lat: 26.372306, lng: -80.110868},
			{lat: 26.372304, lng: -80.110564},
			{lat: 26.372226, lng: -80.110564},
			{lat: 26.372226, lng: -80.110756}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot13b.setMap(map);
	
	var lot15a = new google.maps.Polygon({
		paths: [
			{lat: 26.371466, lng: -80.109104},
			{lat: 26.371466, lng: -80.109012},
			{lat: 26.371291, lng: -80.109012},
			{lat: 26.371291, lng: -80.109104}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot15a.setMap(map);
	var lot15b = new google.maps.Polygon({
		paths: [
			{lat: 26.370584, lng: -80.107931},
			{lat: 26.370359, lng: -80.107602},
			{lat: 26.370209, lng: -80.107719},
			{lat: 26.370440, lng: -80.108054}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot15b.setMap(map);
	
	var lot16a = new google.maps.Polygon({
		paths: [
			{lat: 26.369589, lng: -80.107053},
			{lat: 26.369589, lng: -80.106054},
			{lat: 26.369500, lng: -80.106054},
			{lat: 26.369500, lng: -80.107053}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot16a.setMap(map);
	var lot16b = new google.maps.Polygon({
		paths: [
			{lat: 26.368620, lng: -80.105929},
			{lat: 26.368620, lng: -80.105694},
			{lat: 26.368440, lng: -80.105694},
			{lat: 26.368440, lng: -80.105929}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot16b.setMap(map);
	var lot16c = new google.maps.Polygon({
		paths: [
			{lat: 26.368618, lng: -80.105515},
			{lat: 26.368618, lng: -80.105335},
			{lat: 26.368531, lng: -80.105335},
			{lat: 26.368531, lng: -80.105515}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot16c.setMap(map);
	
	var lot19a = new google.maps.Polygon({
		paths: [
			{lat: 26.371465, lng: -80.104513},
			{lat: 26.371465, lng: -80.104056},
			{lat: 26.371379, lng: -80.104056},
			{lat: 26.371379, lng: -80.104513}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot19a.setMap(map);
	var lot19b = new google.maps.Polygon({
		paths: [
			{lat: 26.371023, lng: -80.104575},
			{lat: 26.371023, lng: -80.104466},
			{lat: 26.370941, lng: -80.104466},
			{lat: 26.370941, lng: -80.104575}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot19b.setMap(map);	
	
	var lot21 = new google.maps.Polygon({
		paths: [
			{lat: 26.367876, lng: -80.104729},
			{lat: 26.367876, lng: -80.104637},
			{lat: 26.367785, lng: -80.104637},
			{lat: 26.367785, lng: -80.104693},
			{lat: 26.367659, lng: -80.104693},
			{lat: 26.367659, lng: -80.104637},
			{lat: 26.367567, lng: -80.104637},
			{lat: 26.367567, lng: -80.104729}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot21.setMap(map);
	
	var lot22 = new google.maps.Polygon({
		paths: [
			{lat: 26.367934, lng: -80.103136},
			{lat: 26.367934, lng: -80.103042},
			{lat: 26.367593, lng: -80.103042},
			{lat: 26.367593, lng: -80.103136}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot22.setMap(map);
	
	var lot23 = new google.maps.Polygon({
		paths: [
			{lat: 26.368050, lng: -80.101627},
			{lat: 26.368050, lng: -80.101330},
			{lat: 26.367766, lng: -80.101330},
			{lat: 26.367766, lng: -80.101627}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot23.setMap(map);
	
	var lot30 = new google.maps.Polygon({
		paths: [
			{lat: 26.376587, lng: -80.097410},
			{lat: 26.376589, lng: -80.097357},
			{lat: 26.376509, lng: -80.097357},
			{lat: 26.376509, lng: -80.097410}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot30.setMap(map);
	
	var lot35a = new google.maps.Polygon({
		paths: [
			{lat: 26.375422, lng: -80.097966},
			{lat: 26.375422, lng: -80.097876},
			{lat: 26.375217, lng: -80.097876},
			{lat: 26.375217, lng: -80.097966}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot35a.setMap(map);
	var lot35b = new google.maps.Polygon({
		paths: [
			{lat: 26.374796, lng: -80.097966},
			{lat: 26.374796, lng: -80.097876},
			{lat: 26.374636, lng: -80.097876},
			{lat: 26.374636, lng: -80.097966}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot35b.setMap(map);
	
	var lot36a = new google.maps.Polygon({
		paths: [
			{lat: 26.376112, lng: -80.099610},
			{lat: 26.376112, lng: -80.099466},
			{lat: 26.376058, lng: -80.099466},
			{lat: 26.376028, lng: -80.099505},
			{lat: 26.376028, lng: -80.099610}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot36a.setMap(map);
	var lot36b = new google.maps.Polygon({
		paths: [
			{lat: 26.374998, lng: -80.099731},
			{lat: 26.374998, lng: -80.099555},
			{lat: 26.374909, lng: -80.099555},
			{lat: 26.374909, lng: -80.099731}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot36b.setMap(map);
	
	var lot45 = new google.maps.Polygon({
		paths: [
			{lat: 26.378038, lng: -80.097684},
			{lat: 26.378038, lng: -80.097593},
			{lat: 26.377880, lng: -80.097591},
			{lat: 26.377880, lng: -80.097681}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot45.setMap(map);			
}