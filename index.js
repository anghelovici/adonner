// app.js
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var mysql = require('mysql');
var stay = 0;
var road;

var http = require('http');
var fs = require('fs');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
	password: "root",
	database: "adonner2"
});



var googleMapsClient = require('@google/maps').createClient({
	key: 'YOUR API KEY'
});

var road_life = "";
var need_statut = [];
var need_lat = [];
var need_lon = [];
var need_object = [];
var need_life = [];
var need_id = [];
var need_message = [];
var need_adress = [];
var life_text;
var result_comp=0;
var result_accomplish;
var complete=0;


var need_life_start = [];
var have_road_life = [];

var have_lat = [];
var have_lon = [];
var have_id = [];
var have_life = [];
var have_road = [];
var goal_total_object;

var have_road2 = [];

var statut;
var co=0;

var temp_x, temp_y, temp_q;

var idn = 0;
var idh = 0;


// LE SERVER SE CONNECTE a la bdd
con.connect(function (err) {
	if (err) throw err;
	console.log("");
	console.log("**ADONNER.COM IS UP**");
	console.log("anghelovici thomas, anouck Daguin, tefeil Jean");


	con.query("SELECT * FROM bdd_need", function (err, result, fields) {
		if (err) throw err;
		var resultat = result.length;


		console.log("---------------------");
		console.log("lecture bdd réussie" + resultat);
		for (var a = 0; a < resultat; a++) {

			need_id[a] = result[a].id;
			need_lat[a] = result[a].lat;
			need_lon[a] = result[a].lon;
			need_life[a] = result[a].life;
			need_statut[a] = result[a].statut;
			need_object[a] = result[a].object;
			need_adress[a] = result[a].adress;
			need_life_start[a] = need_life[a];

			idn++;

		}
		console.log(need_id.length);

	});

	// SI QUELQU'UN SE CONNECTE
	io.sockets.on('connection', function (socket, pseudo) {
		co++;
		//send information
		socket.emit("console", complete +"/"+ need_id.length +" accomplish, "+ co +" user now");
		//send information
		socket.broadcast.emit("console", complete +"/"+ need_id.length +" accomplish, "+ co +" user now");
		
		
		socket.on('disconnect', function() {
			//send information
			co--;
		socket.broadcast.emit("console", complete +"/"+ need_id.length +" accomplish, "+ co +" user now");

});
		

		
		//TRONQUER LA BDD
		socket.on('console', function (message) {

			if (message == "0") {
				
				console.log("deletbbd");
				
				con.query("TRUNCATE TABLE bdd_have");
				con.query("TRUNCATE TABLE bdd_need");

				need_statut = [];
				need_lat = [];
				need_lon = [];
				need_object = [];
				need_life = [];
				need_id = [];
				need_message = [];
				need_adress = [];
				have_road2 = [];
				have_lat = [];
				have_lon = [];
				have_id = [];
				have_road = [];
				need_life_start = [];
				complete=0;
				idn = 0;
				idh = 0;
			socket.emit("console", need_id.length +"/"+ complete);

			}
			
			
			
				if (message == "1") {
				console.log("deletbbd");
				con.query("TRUNCATE TABLE bdd_have");

						
						for(var i=0; i< need_life.length; i++){
							
							need_life[i] =need_life_start[i];
							
						}
						
				have_road2 = [];
				have_lat = [];
				have_lon = [];
				have_id = [];
				have_road = [];
				complete=0;
				idh = 0;
			socket.emit("console", need_id.length +"/"+ complete);

			}
			
			
			

		});
		
		console.log(">quelqu'un ce connecte");

		//LECTURE
		//init need
		for (var a = 0; a < idn; a++) {

			socket.emit('response', '' + need_id[a] + '/' + need_lat[a] + '/' + need_lon[a] + '/' + need_life[a] + '/' + need_object[a] + '/' + need_life[a] + '/' + need_life_start[a] + '');
		}
		//init have
		for (var a = 0; a < idh; a++) {

			socket.emit('response_have', '' + have_id[a] + '/' + have_lat[a] + '/' + have_lon[a] + '/' + have_road[a] + '/' + have_road2[a] + '/' + have_road_life[a] + '/' + have_life[a]);

			console.log(need_life_start[a]);

		}
		//init road
		for (var a = 0; a < have_road2.length; a++) {

			socket.emit('lecture_road', have_road2[a]);
		


		}

		//WRITE ROAD
		socket.on('roadwrite', function (message) {
			
			have_road2.push(message);

	socket.broadcast.emit('lecture_road2', message);
			return have_road2;
		});

		//ECRITURE NEED
		socket.on('need_add', function (message) {
		
			console.log('NEED(' + idn + '):' + message);


			var res = message.split('/');
			var sql = "INSERT INTO bdd_need (id, lat, lon, life, statut, object, adress) VALUES ('" + res[0] + "', '" + res[1] + "','" + res[2] + "','" + res[3] + "',' " + 0 + "',' " + res[5] + "',' " + 0 + " ')";



			con.query(sql, function (err, result) {
				if (err) throw err;
			});


			need_lat[idn] = parseFloat(res[1]);
			need_lon[idn] = parseFloat(res[2]);
			need_life[idn] = parseFloat(res[3]);
			need_object[idn] = res[5];
			need_id[idn] = res[0];
			need_statut[idn] = 0;
			need_life_start[idn] = parseFloat(res[3]);


			socket.emit('response', '' + need_id[idn] + '/' + need_lat[idn] + '/' + need_lon[idn] + '/' + need_life[idn] + '/' + 0 + '/' + 0 + '/' + need_life_start[idn]);

			socket.emit("console", need_id.length);
			
			socket.broadcast.emit("console", need_id.length);
			socket.broadcast.emit('response', '' + need_id[idn] + '/' + need_lat[idn] + '/' + need_lon[idn] + '/' + need_life[idn] + '/' + 0 + '/' + 0 + '/' + need_life_start[idn]);
			
			
			idn++;
			return idn, need_id[idn], need_lat[idn], need_lon[idn], need_object[idn], need_life[idn], need_statut[idn], need_life_start[idn];
			


		});
		//ECRITURE HAVE
		socket.on('have_add', function (message) {
			var res = message.split('/');
			console.log("");
			console.log("** ADONNER REQUEST**");
			console.log('HAVE(' + idh + '):' + message);


			adonner(res[1], res[2], res[5], 0, parseFloat(res[3]), parseFloat(res[6]));
		

			have_life[idh] = res[3];
			have_id[idh] = res[0];
			have_lat[idh] = res[1];
			have_lon[idh] = res[2];



			have_road[idh] = road;
			have_road_life[idh] = road_life;


			//need_life[idh] = res[2];



			socket.emit('response_have', '' + res[0] + '/' + res[1] + '/' + res[2] + '/' + road + '/' + statut + '/' + road_life + '/' + res[3]);
			
			socket.broadcast.emit('response_have', '' + res[0] + '/' + res[1] + '/' + res[2] + '/' + road + '/' + statut + '/' + road_life + '/' + res[3]);


			console.log(road_life);
			idh++;


			return idh, have_id[idh], have_lat[idh], have_lon[idh], have_road[idh], have_life[idh];

		});
		
		
		function adonner(TEMP_x, TEMP_y, WHAT, fuck, TEMP_life, TEMP_DIST) {

			console.log("object:" + WHAT);
			var goal_start = 0;
			var goal = 0,
				idn_accomplish = 0;
			road_life = "";

			statut = 1;


			//MAXIMUM VALUE COUTDONW
			for (var z = 0; z < 100; z++) {

				goal = 0;
				var goal_quantity = 0;
				var min = 0,
					max = 0,
					dist = 0,
					best = null;


				//BEST FONCTION
				for (var i = 0; i < idn; i++) {
					var test = need_object[i].replace(/ /g, "");


					//calcul de la distance via pythagore
					dist = Math.sqrt((need_lon[i] - TEMP_y) * (need_lon[i] - TEMP_y) + (need_lat[i] - TEMP_x) * (need_lat[i] - TEMP_x));

					if (need_life[i] > 0 && test == WHAT && dist * 100 < TEMP_DIST) {





						if (z == 0) {
							goal_start++;
							goal_quantity = goal_quantity + parseFloat(need_life[i]);
						}


						if (fuck == 0) {
							goal++;

						}



						if ((min == 0) || (dist < min)) {
							min = dist;
							best = i;
						}

					}



				}




				//INIT START
				if (z == 0) {
					console.log("find:" + goal_start + " request for this object");
					console.log("quantity:" + goal_quantity);
					road = best;
				} else {
					road = road + "," + best;

				};


				console.log("---------------------");




				if (goal == 0) {
					if (z == 0) {

						console.log("nothing, sorry..");
						road = "null";


					} else {
						var result = goal_start - idn_accomplish;
						console.log("road_life:" + road_life);
						console.log("road:" + road);
						console.log("u accomplish:" + idn_accomplish);
						complete=complete+idn_accomplish;
						socket.emit("console", complete +"/"+ need_id.length +" accomplish, "+ co +" user now");
		//send information
		socket.broadcast.emit("console", complete +"/"+ need_id.length +" accomplish, "+ co +" user now");
					}

					return;
				}


				var templife = need_life[best];

				//LIFE COUTONDOWN
				//U AND I KILL
				if (need_life[best] == TEMP_life) {
					console.log("(" + z + "): i&u death");

					TEMP_life = 0;
					need_life[best] = 0;
					need_statut[best] = 1;
					idn_accomplish++;
				}
				// U KILL
				else if (need_life[best] > TEMP_life) {
					console.log("(" + z + "): i death");

					need_life[best] = need_life[best] - TEMP_life;
					TEMP_life = 0;
					need_statut[best] = 0;


				}
				// U ROX
				else if (need_life[best] < TEMP_life) {
					console.log(z + ":u win");

					TEMP_life = TEMP_life - need_life[best];
					need_life[best] = 0;
					need_statut[best] = 1;
					idn_accomplish++;
				}




				road_life = road_life + "," + need_life[best];

				TEMP_x = need_lat[best];
				TEMP_y = need_lon[best];

				//CONSOLE
				console.log("---------------------");
				console.log("number:" + best);
				console.log("id:" + need_id[best]);
				console.log("life:" + templife + "->" + need_life[best]);
				console.log("dist:" + min * 100);



				//GAME OVER
				if (TEMP_life == 0) {


					var result = goal_start - idn_accomplish;

					console.log("---------------------");


					console.log("road_life:" + road_life);
					console.log("road:" + road);
					console.log("u accomplish:" + idn_accomplish);
					console.log("goal:" + goal_start + "->" + result);
					console.log("ITS OVER FUCKING BITCH");
					complete=complete+idn_accomplish;
					socket.emit("console", complete +"/"+ need_id.length +" accomplish, "+ co +" user now");
		//send information
		socket.broadcast.emit("console", complete +"/"+ need_id.length +" accomplish, "+ co +" user now");
					return;

				}

			}
			return road, need_life[best], road_life;
		}
	});


	app.use(express.static('public'));
	app.use(express.static(__dirname + '/node_modules'));


	app.get('/', function (req, res, next) {
		res.sendFile(__dirname + '/views/index.html');
	});
	app.get('/phone', function (req, res, next) {
		res.sendFile(__dirname + '/views/phone.html');
	});
	app.get('/smartphone', function (req, res, next) {
		res.sendFile(__dirname + '/views/smartphone.html');
	});


});


server.listen(80);
