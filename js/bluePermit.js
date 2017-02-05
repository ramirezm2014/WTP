function bluePark(map)
{
	var lot1 = new google.maps.Polygon({
		paths: [
			{lat: 26.371600, lng: -80.099704},
			{lat: 26.371600, lng: -80.098824},
			{lat: 26.369709, lng: -80.098824},	
			{lat: 26.369709, lng: -80.099274},
			{lat: 26.370076, lng: -80.099274},
			{lat: 26.370076, lng: -80.099367},
			{lat: 26.370680, lng: -80.099373},	
			{lat: 26.370680, lng: -80.099106},
			{lat: 26.371500, lng: -80.099106},
			{lat: 26.371500, lng: -80.099704}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'blue',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot1.setMap(map);
	
	var lot2a = new google.maps.Polygon({
		paths: [
			{lat: 26.373699, lng: -80.099492},
			{lat: 26.373699, lng: -80.099406},
			{lat: 26.373698, lng: -80.099359},
			{lat: 26.373688, lng: -80.099325},
			{lat: 26.373663, lng: -80.099300},
			{lat: 26.373638, lng: -80.099280},
			{lat: 26.373599, lng: -80.099270},
			{lat: 26.373599, lng: -80.099219},
			{lat: 26.373177, lng: -80.099208},
			{lat: 26.373177, lng: -80.099260},
			{lat: 26.373152, lng: -80.099267},
			{lat: 26.373116, lng: -80.099280},
			{lat: 26.373088, lng: -80.099312},
			{lat: 26.373073, lng: -80.099375},
			{lat: 26.373073, lng: -80.099479}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'blue',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot2a.setMap(map);
	var lot2b = new google.maps.Polygon({
		paths: [
			{lat: 26.372820, lng: -80.099475},
			{lat: 26.372820, lng: -80.099385},
			{lat: 26.372107, lng: -80.099369},	
			{lat: 26.372107, lng: -80.099461}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'blue',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot2b.setMap(map);
	
	var lotEEDrop = new google.maps.Polygon({
		paths: [
			{lat: 26.372327, lng: -80.098764},
			{lat: 26.372327, lng: -80.098667},
			{lat: 26.372081, lng: -80.098667},
			{lat: 26.372081, lng: -80.098764}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'blue',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lotEEDrop.setMap(map); // This parking lot contains Carpool spot and Hybrid car spot
	
	var lot4Left = new google.maps.Polygon({
		paths: [
			{lat: 26.374327, lng: -80.101343},
			{lat: 26.374327, lng: -80.101250},
			{lat: 26.373956, lng: -80.101244},
			{lat: 26.373956, lng: -80.101343}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'blue',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot4Left.setMap(map);
	var lot4Right = new google.maps.Polygon({
		paths: [
			{lat: 26.374412, lng: -80.100084},
			{lat: 26.374444, lng: -80.100071},
			{lat: 26.374455, lng: -80.100042},
			{lat: 26.374467, lng: -80.098911},
			{lat: 26.374461, lng: -80.098830},
			{lat: 26.374453, lng: -80.098765},
			{lat: 26.374440, lng: -80.098693},
			{lat: 26.374426, lng: -80.098623},
			{lat: 26.374407, lng: -80.098555},
			{lat: 26.374383, lng: -80.098482},
			{lat: 26.374358, lng: -80.098418},
			{lat: 26.374336, lng: -80.098364},
			{lat: 26.374305, lng: -80.098305},
			{lat: 26.374272, lng: -80.098246},
			{lat: 26.374213, lng: -80.098153},
			{lat: 26.374187, lng: -80.098112},
			{lat: 26.374133, lng: -80.098046},
			{lat: 26.374089, lng: -80.097997},
			{lat: 26.373630, lng: -80.097997},
			{lat: 26.373612, lng: -80.097986},
			{lat: 26.373498, lng: -80.097871},
			{lat: 26.373220, lng: -80.098181},
			{lat: 26.373206, lng: -80.098265},
			{lat: 26.373295, lng: -80.098265},
			{lat: 26.373295, lng: -80.098404},
			{lat: 26.373257, lng: -80.098446},
			{lat: 26.373257, lng: -80.098492},
			{lat: 26.373790, lng: -80.098492},
			{lat: 26.373771, lng: -80.100079}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'blue',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot4Right.setMap(map);
	
	var lot5 = new google.maps.Polygon({
		paths: [
			{lat: 26.382214, lng: -80.101854},
			{lat: 26.382214, lng: -80.101493},
			{lat: 26.377837, lng: -80.101441},
			{lat: 26.377837, lng: -80.101802}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'blue',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot5.setMap(map);
	
	var lot10 = new google.maps.Polygon({
		paths: [
			{lat: 26.372858, lng: -80.108751},
			{lat: 26.372858, lng: -80.107709},
			{lat: 26.372236, lng: -80.107709},
			{lat: 26.372236, lng: -80.108751}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'blue',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot10.setMap(map);
	
	var lot12 = new google.maps.Polygon({
		paths: [
			{lat: 26.373979, lng: -80.111197},
			{lat: 26.373991, lng: -80.109929},
			{lat: 26.373890, lng: -80.109929},
			{lat: 26.373890, lng: -80.110163},
			{lat: 26.373802, lng: -80.110163},
			{lat: 26.373802, lng: -80.110367},
			{lat: 26.373650, lng: -80.110367},
			{lat: 26.373650, lng: -80.111305},
			{lat: 26.373725, lng: -80.111305},
			{lat: 26.373725, lng: -80.111489}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'blue',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot12.setMap(map);
	
	var lot13 = new google.maps.Polygon({
		paths: [
			{lat: 26.373466, lng: -80.111866},
			{lat: 26.372851, lng: -80.110976},
			{lat: 26.372851, lng: -80.109984},
			{lat: 26.371965, lng: -80.109959},
			{lat: 26.371958, lng: -80.110421},
			{lat: 26.372224, lng: -80.110820},
			{lat: 26.372224, lng: -80.110561},
			{lat: 26.372307, lng: -80.110561},
			{lat: 26.372307, lng: -80.110932},
			{lat: 26.372407, lng: -80.111077},
			{lat: 26.372510, lng: -80.110987},
			{lat: 26.372566, lng: -80.111074},
			{lat: 26.372466, lng: -80.111162},
			{lat: 26.372677, lng: -80.111463},
			{lat: 26.372835, lng: -80.111321},
			{lat: 26.372915, lng: -80.111440},
			{lat: 26.372754, lng: -80.111578},
			{lat: 26.373168, lng: -80.112171}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'blue',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot13.setMap(map);
	
	var lot15 = new google.maps.Polygon({
		paths: [
			{lat: 26.371160, lng: -80.108779},
			{lat: 26.370954, lng: -80.108473},
			{lat: 26.371022, lng: -80.108413},
			{lat: 26.370426, lng: -80.107547},
			{lat: 26.370360, lng: -80.107600},
			{lat: 26.370586, lng: -80.107932},
			{lat: 26.370440, lng: -80.108056},
			{lat: 26.370137, lng: -80.107618},
			{lat: 26.369929, lng: -80.107786},
			{lat: 26.370712, lng: -80.108926},
			{lat: 26.370744, lng: -80.108959},
			{lat: 26.370771, lng: -80.108972},
			{lat: 26.370807, lng: -80.108987},
			{lat: 26.370842, lng: -80.108990},
			{lat: 26.370900, lng: -80.108978},
			{lat: 26.370941, lng: -80.108959},
			{lat: 26.370976, lng: -80.108938}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'blue',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot15.setMap(map);
	
	var lot16 = new google.maps.Polygon({
		paths: [
			{lat: 26.369498, lng: -80.107053},
			{lat: 26.369498, lng: -80.106299},
			{lat: 26.369406, lng: -80.106299},
			{lat: 26.369406, lng: -80.106532},
			{lat: 26.369318, lng: -80.106532},
			{lat: 26.369318, lng: -80.106254},
			{lat: 26.369406, lng: -80.106254},
			{lat: 26.369406, lng: -80.106299},
			{lat: 26.369406, lng: -80.106119},
			{lat: 26.369316, lng: -80.106119},
			{lat: 26.369316, lng: -80.106063},
			{lat: 26.369234, lng: -80.106063},
			{lat: 26.369234, lng: -80.106173},
			{lat: 26.369056, lng: -80.106173},
			{lat: 26.369056, lng: -80.106063},
			{lat: 26.368529, lng: -80.106063},
			{lat: 26.368529, lng: -80.106063},
			{lat: 26.368529, lng: -80.106317},
			{lat: 26.368615, lng: -80.106317},
			{lat: 26.368615, lng: -80.107005},
			{lat: 26.368706, lng: -80.107005},
			{lat: 26.368706, lng: -80.107057},
			{lat: 26.369498, lng: -80.107053}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'blue',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot16.setMap(map);
	var lot16CP = new google.maps.Polygon({
		paths: [
			{lat: 26.369498, lng: -80.106297},
			{lat: 26.369498, lng: -80.106054},
			{lat: 26.369408, lng: -80.106054},
			{lat: 26.369408, lng: -80.106297}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'blue',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot16CP.setMap(map);

	var lot17 = new google.maps.Polygon({
		paths: [
			{lat: 26.367966, lng: -80.106975},
			{lat: 26.367682, lng: -80.106459},
			{lat: 26.367626, lng: -80.106420},
			{lat: 26.367571, lng: -80.106414},
			{lat: 26.367529, lng: -80.106426},
			{lat: 26.367410, lng: -80.106507},
			{lat: 26.367383, lng: -80.106552},
			{lat: 26.367373, lng: -80.106592},
			{lat: 26.367376, lng: -80.106634},
			{lat: 26.367595, lng: -80.107053},
			{lat: 26.367663, lng: -80.107009},
			{lat: 26.367727, lng: -80.107125}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'blue',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot17.setMap(map);
	
	var lot19a = new google.maps.Polygon({
		paths: [
			{lat: 26.371377, lng: -80.104682},
			{lat: 26.371377, lng: -80.104229},
			{lat: 26.371298, lng: -80.104229},
			{lat: 26.371298, lng: -80.104682}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'blue',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot19a.setMap(map);
	var lot19b = new google.maps.Polygon({
		paths: [
			{lat: 26.371211, lng: -80.104407},
			{lat: 26.371211, lng: -80.104287},
			{lat: 26.371132, lng: -80.104287},
			{lat: 26.371132, lng: -80.104407}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'blue',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot19b.setMap(map);
	var lot19CP = new google.maps.Polygon({
		paths: [
			{lat: 26.371211, lng: -80.104161},
			{lat: 26.371211, lng: -80.104290},
			{lat: 26.371132, lng: -80.104290},
			{lat: 26.371132, lng: -80.104161},],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'blue',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot19CP.setMap(map); //Carpool	
	
	var lot25a = new google.maps.Polygon({
		paths: [
			{lat: 26.369312, lng: -80.099175},
			{lat: 26.369312, lng: -80.099125},
			{lat: 26.369510, lng: -80.099125},
			{lat: 26.369510, lng: -80.098804},
			{lat: 26.368947, lng: -80.098804},
			{lat: 26.368942, lng: -80.099175}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'blue',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot25a.setMap(map);
	var lot25b = new google.maps.Polygon({
		paths: [
			{lat: 26.368876, lng: -80.099165},
			{lat: 26.368877, lng: -80.098868},
			{lat: 26.368579, lng: -80.098865},
			{lat: 26.368574, lng: -80.099072},
			{lat: 26.368638, lng: -80.099072},
			{lat: 26.368638, lng: -80.099165}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'blue',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot25b.setMap(map);
	
	var lot27 = new google.maps.Polygon({
		paths: [
			{lat: 26.371475, lng: -80.098564},
			{lat: 26.371475, lng: -80.098507},
			{lat: 26.371528, lng: -80.098509},
			{lat: 26.371528, lng: -80.098326},
			{lat: 26.371518, lng: -80.098295},
			{lat: 26.371503, lng: -80.098270},
			{lat: 26.371503, lng: -80.098270},
			{lat: 26.371475, lng: -80.098250},
			{lat: 26.371223, lng: -80.098246},
			{lat: 26.371223, lng: -80.098146},
			{lat: 26.371206, lng: -80.098102},
			{lat: 26.371178, lng: -80.098078},
			{lat: 26.371149, lng: -80.098068},
			{lat: 26.371145, lng: -80.098014},
			{lat: 26.369752, lng: -80.098023},
			{lat: 26.369758, lng: -80.098519},
			{lat: 26.369829, lng: -80.098521},
			{lat: 26.369847, lng: -80.098482},
			{lat: 26.369901, lng: -80.098482},
			{lat: 26.369901, lng: -80.098390},
			{lat: 26.370215, lng: -80.098387},
			{lat: 26.370215, lng: -80.098569}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'blue',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot27.setMap(map);
	
	var lot30 = new google.maps.Polygon({
		paths: [
			{lat: 26.376880, lng: -80.096979},
			{lat: 26.376880, lng: -80.096795},
			{lat: 26.376634, lng: -80.096795},
			{lat: 26.376630, lng: -80.096979}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'blue',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot30.setMap(map);
}