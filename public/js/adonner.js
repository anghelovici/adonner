 var waypts = [];

 var action;

//ARRAY NEED
 var need_statut = "?";
 var need_lat = [];
 var need_lon = [];
 var need_object = [];
 var need_life = [];
 var need_id = [];
 var need_message = [];

 var need_life_start = [];

 var path2;
 var path = [];
 var polyline2 = [];
 var polyline3 = [];
 var roadother = [];
 var markers2 = [
 	[]
 ];
 var varinit = 0;
 var idp = 0;
 var distmax;
 var check;

 var pathing = [
 	["helo"]
 ];

 var col = ["#e7f500",
 	"#00d0f5",
 	'#FF0000',
 	'#f500ec',
 	'#00fb5e',
 	'#ff9307',
 		'#2b1bff',
 ];

 var urhave;
var me=0;

 var life_temp;

 var fixed = 0;
 var markersNEED = [];
 var markersHAVE = [];
 var idn = 0;
 var ll = 0;
 var idh = 0;

 //LECTURE





 function initMap() {

 	//CONTROL
 	$("#need").click(function () {
 		action = "need";
 	});
 	$("#have").click(function () {
 		varinit = 1;
 		action = "have";
 	});
 	$("#check").click(function () {
 		action = "check";
 	});
	 
	 //INITIALIZE THE VIEWVER
 	$("#clearall").click(function () {

 		socket.emit('console', 0);
		
 		waypts = [];
 		need_statut = "?";
 		need_lat = [];
 		need_lon = [];
 		need_object = [];
 		need_life = [];
 		need_id = [];
 		total = 0;
 		need_message = [];
 		need_life_start = [];

 		idp = 0;
 		idn = 0;


 		for (var r = 0; r < polyline3.length; r++) {
 			polyline3[r].setMap(null);

 		}
 		for (var r = 0; r < polyline2.length; r++) {

 			polyline2[r].setMap(null);


 		}
 		for (var r = 0; r < markersNEED.length; r++) {

 			markersNEED[r].setMap(null);


 		}
 		for (var r = 0; r < markersHAVE.length; r++) {

 			markersHAVE[r].setMap(null);


 		}


 		polyline3 = [];
 		polyline2 = [];
 		markersNEED = [];
 		markersHAVE = [];


 	});
 	$("#reso").click(function () {

 		socket.emit('console', 1);
 		waypts = [];
 		idp = 0;

 		for (var r = 0; r < polyline3.length; r++) {
 			polyline3[r].setMap(null);

 		}
 		for (var r = 0; r < polyline2.length; r++) {

 			polyline2[r].setMap(null);

 		}
 		for (var r = 0; r < markersHAVE.length; r++) {
 			markersHAVE[r].setMap(null);
 		}

 		for (var r = 0; r < markersNEED.length; r++) {
 			markersNEED[r].setMap(null);
 		}

 		markersNEED = [];

 		for (var r = 0; r < need_id.length; r++) {

 			need_life[r] = need_life_start[r];
 			drawNEED(need_id[r], need_lat[r], need_lon[r], need_life[r], need_life_start[r]);

 		}


 		polyline3 = [];
 		polyline2 = [];
 		markersHAVE = [];


 	});
 	$("#hide").click(function () {



 		for (var r = 0; r < markersHAVE.length; r++) {
 			markersHAVE[r].setMap(null);
 		}
 		for (var r = 0; r < markersNEED.length; r++) {
 			markersNEED[r].setMap(null);

 		}

 		markersNEED = [];
 		markersHAVE = [];


 	});




 	function drawNEED(idi, lati, lato, life, life_start) {

 		var icon = {
 			url: '/img/7.png',
 			size: new google.maps.Size(7, 7),
 			origin: new google.maps.Point(0, 0),
 			anchor: new google.maps.Point(0, 0),
 			labelOrigin: new google.maps.Point(20, 20),
 			scaledSize: new google.maps.Size(25, 25)
 		};


var calc = life_start-life;
 		var loctemp = {
 			lat: lati,
 			lng: lato
 		};

 		markersNEED.push(new google.maps.Marker({
 			position: loctemp,
 			map: map,
 			icon: icon,
 			label: {
 				text: idi + ":" + calc + "/" + life_start,
 				fontSize: "10px",
 				color: "white",
 			},
 			title: 'Hello World!'
 		}));

 	}

 	function drawHAVE(idi, lati, lato, life) {

 		var loctemp = {
 			lat: lati,
 			lng: lato
 		};

 		var size = 7;



 		if (ll == 0) {

 			icon = {
 				url: '/img/0.png',
 				size: new google.maps.Size(size, size),
 				origin: new google.maps.Point(0, 0),
 				anchor: new google.maps.Point(0, 0),
 				labelOrigin: new google.maps.Point(20, 20),
 				scaledSize: new google.maps.Size(25, 25)
 			};
 		}
 		if (ll == 1) {

 			icon = {
 				url: '/img/1.png',
 				size: new google.maps.Size(size, size),
 				origin: new google.maps.Point(0, 0),
 				anchor: new google.maps.Point(0, 0),
 				labelOrigin: new google.maps.Point(20, 20),
 				scaledSize: new google.maps.Size(25, 25)
 			};


 		}
 		if (ll == 2) {

 			icon = {
 				url: '/img/2.png',
 				size: new google.maps.Size(size, size),
 				origin: new google.maps.Point(0, 0),
 				anchor: new google.maps.Point(0, 0),
 				labelOrigin: new google.maps.Point(20, 20),
 				scaledSize: new google.maps.Size(25, 25)
 			};


 		}

 		if (ll == 3) {

 			icon = {
 				url: '/img/3.png',
 				size: new google.maps.Size(size, size),
 				origin: new google.maps.Point(0, 0),
 				anchor: new google.maps.Point(0, 0),
 				labelOrigin: new google.maps.Point(20, 20),
 				scaledSize: new google.maps.Size(25, 25)
 			};


 		}
		if (ll == 4) {

 			icon = {
 				url: '/img/4.png',
 				size: new google.maps.Size(size, size),
 				origin: new google.maps.Point(0, 0),
 				anchor: new google.maps.Point(0, 0),
 				labelOrigin: new google.maps.Point(20, 20),
 				scaledSize: new google.maps.Size(25, 25)
 			};


 		}
		if (ll == 5) {

 			icon = {
 				url: '/img/5.png',
 				size: new google.maps.Size(size, size),
 				origin: new google.maps.Point(0, 0),
 				anchor: new google.maps.Point(0, 0),
 				labelOrigin: new google.maps.Point(20, 20),
 				scaledSize: new google.maps.Size(25, 25)
 			};


 		}

if (ll == 6) {

 			icon = {
 				url: '/img/6.png',
 				size: new google.maps.Size(size, size),
 				origin: new google.maps.Point(0, 0),
 				anchor: new google.maps.Point(0, 0),
 				labelOrigin: new google.maps.Point(20, 20),
 				scaledSize: new google.maps.Size(25, 25)
 			};


 		}




 		markersHAVE.push(new google.maps.Marker({
 			position: loctemp,
 			map: map,
 			icon: icon,
 			opacity: "0.3",
 			label: {
 				text: "[" + idi + "]:" + life,
 				fontSize: "10px",
 				color: col[ll]
 			},
 			title: 'Hello World!',

 		}));

 	}

 	function drawAFTER(idi, lati, lato, life) {

 		var loctemp = {
 			lat: lati,
 			lng: lato
 		};

 		markersHAVE.push(new google.maps.Marker({
 			position: loctemp,
 			map: map,
 			icon: icon,
 			label: {
 				text: idi + ":" + life,
 				fontSize: "10px",
 				color: col[ll]
 			},
 			title: 'Hello World!',

 		}));

 	}

 	function drawROAD(paths) {

//ROAD TRACING
 		

 		polyline3.push(new google.maps.Polyline({
 			path: paths,
 			geodesic: true,
 			strokeColor: col[ll],
 			strokeOpacity: 0.6,
 			strokeWeight: 4
 		}));


 		for (var i = 0; i < polyline3.length; i++) {
 			polyline3[i].setMap(map);
 		}


 	}

 	function drawROADfix(paths) {

 		polyline3.push(new google.maps.Polyline({
 			path: paths,
 			geodesic: true,
 			strokeColor: col[ll],
 			strokeOpacity: 0.6,
 			strokeWeight: 4
 		}));


 		for (var i = 0; i < polyline3.length; i++) {
 			polyline3[i].setMap(map);
 		}


 	}


 socket.on('lecture_road2', function  (message){
		 
		 
		 	drawROAD(JSON.parse(message));
		 
	 });


 	socket.on('console', function (message) {
 		$("#total").text(message);

 	});

 	var directionsService = new google.maps.DirectionsService;
 	var directionsDisplay = new google.maps.DirectionsRenderer;
 	var map = new google.maps.Map(document.getElementById('map'), {
 		zoom: 14,
 		center: {
 			lat: 48.86494061,
 			lng: 2.2542572
 		},
 		disableDefaultUI: true,

 		mapTypeId: 'satellite'
 	});



 	directionsDisplay.setMap(map);

 	//CLIENT SENDER
 	var temp_x, temp_y, temp_id, temp_object, temp_life, temp_object, temp_statut, temp_choice;
 	google.maps.event.addListener(map, 'click', function (event) {

		
		
 		temp_statut = "?";
 		temp_life = $("#life option:selected").val();
 		temp_object = $("#object option:selected").text();
 		distmax = $("#distance option:selected").val();
 		temp_choice = $("#value option:selected").text();

 		if (temp_life == "quantity" || distmax == "distance") {
 			return;
 		}


 		if (temp_choice == "need") {


 			temp_x = event.latLng.lat();
 			temp_y = event.latLng.lng();
 			temp_id = randLetter();

 			socket.emit('need_add', '' + temp_id + '/' + temp_x + '/' + temp_y + '/' + temp_life + '/' + temp_statut + '/' + temp_object + '');



 		}

 		if (temp_choice == "have") {
me=1;
 			varinit = 1;
 			action = "have";

 			waypts = [];
 			directionsDisplay.setDirections({
 				routes: []
 			});



 			temp_x = event.latLng.lat();
 			temp_y = event.latLng.lng();
 			temp_id = randLetter();

 			socket.emit('have_add', '' + temp_id + '/' + temp_x + '/' + temp_y + '/' + temp_life + '/' + temp_statut + '/' + temp_object + '/' + distmax + '');




 		}

 	});

	
 	socket.on('response_have', function (message) {
		
		

 		var res = message.split('/');

 		var road_fix = res[3].replace(",null", "");
 		var road = road_fix.split(",");
 		var templng = parseFloat(res[2]);
 		var templat = parseFloat(res[1]);
 		var road = road_fix.split(",");

 		var road_life_fix = res[5].substring(1, res[5].length);
 		var road_life = road_life_fix.split(",");

 		ll++;
 		if (ll > 6) {
 			ll = 0
 		}


 		//ROAD TRACING
 		var path = [];



 		if (res[4] != "undefined") {

 			drawROAD(JSON.parse(res[4]));

 		}



 		drawHAVE(res[0], parseFloat(res[1]), parseFloat(res[2]), res[6]);


 		path.push(new google.maps.LatLng(templat, templng));

 		if (action == "have" && me==1) {
 			urhave = new google.maps.LatLng(templat, templng);
 		}
 		if (road != "null") {



 			check = new google.maps.LatLng(markersNEED[road[road.length - 1]].getPosition().lat(), markersNEED[road[road.length - 1]].getPosition().lng());


 			for (var z = 0; z < road.length; z++) {



 				var loctemp2 = {
 					lat: markersNEED[road[z]].getPosition().lat(),
 					lng: markersNEED[road[z]].getPosition().lng()
 				};

 				path.push(new google.maps.LatLng(markersNEED[road[z]].getPosition().lat(), markersNEED[road[z]].getPosition().lng()));


 				markersNEED[road[z]].setMap(null);

				var calc = need_life_start[road[z]]-road_life[z];
				
 				markersNEED[road[z]] =
 					new google.maps.Marker({
 						position: loctemp2,
 						map: map,
 						icon: icon,
 						label: {
 							text: need_id[road[z]] + ":" + calc + "/" + need_life_start[road[z]],
 							fontSize: "10px",
 							color: col[ll],
 						},


 					});



 				waypts.push({
 					location: new google.maps.LatLng(markersNEED[road[z]].getPosition().lat(), markersNEED[road[z]].getPosition().lng()),
 					stopover: true
 				});





 			}


 			if (varinit == 1 && me==1) {


 				calculateAndDisplayRoute(directionsService, directionsDisplay);
	

 			}	
	
 			polyline2.push(new google.maps.Polyline({
 				map: map,
 				path: path,
 				strokeColor: col[ll],
 				strokeOpacity: 0.3,
 				strokeWeight: 1

 			}));



 		}
 		if (varinit == 1) {

 			if (road == "null") {


 				socket.emit('roadwrite', "undefined");
 			}

 		}



	me=0;

 	});
 	//RECEPTION
 	socket.on('response', function (message) {

 		var res = message.split('/');


 		need_id.push(res[0]);
 		need_lat.push(parseFloat(res[1]));
 		need_lon.push(parseFloat(res[2]));

 		need_life.push(parseFloat(res[3]));
 		//need_life.push(parseFloat(res[3]));

 		need_life_start.push(res[6]);



 		drawNEED(res[0], parseFloat(res[1]), parseFloat(res[2]), res[3], res[6]);

 	});


	 

 	function calculateAndDisplayRoute(directionsService, directionsDisplay) {
 		var path2 = 0;



 		directionsDisplay.setOptions({
 			suppressMarkers: true,
 			strokeOpacity: 0
 		});


 		directionsService.route({
 			origin: urhave,
 			destination: check,
 			waypoints: waypts,
 			optimizeWaypoints: true,
 			travelMode: 'WALKING'
 		}, function (response, status) {
 			if (status === 'OK') {


 				path = response.routes[0].overview_path;



 			} else {

 			}


 			var myJSON = JSON.stringify(path);

 			socket.emit('roadwrite', myJSON);

 			drawROAD(path);



 		});




 	}

 	function randLetter() {
 		var temp = "";
 		var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 		for (var i = 0; i < 3; i++) {
 			var letter = letters[Math.floor(Math.random() * letters.length)];
 			temp = letter + temp;

 		}
 		return temp.toUpperCase();
 	}


 }
