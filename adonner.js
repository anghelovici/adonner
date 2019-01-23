
	var c=0;

	var idG = [];
	var idH = [];
	
	var angle;
	var dist;
	var templeg;
	var action;
	var textemp;
	var lifetemp;	
	var color;	
	var es=0;
	//créer les listes des checkpoint
		var check = [];
		var check_x = [];
		var check_y = [];
		var check_loc = [];
		var check_life = [];
	var off=0;
	var radiuz=52120;
	
	
	//créer les listes des demandes
		var need = [];
		var need_x = [];
		var need_y = [];
		var need_loc = [];
		var need_life = [];
		//compteur de demande
		var idn=0;
		//compteur de demande résolue
		var idn_accomplish=0;
		
	
	//créer les variables du solveur (bateau)
		var temp_y=0;
		var temp_x=0;
		var temp_loc;
		var temp_life;
		//compteur de checkpoint
		var idc=0;
	
	
		var col=	['#f5a400','#00d0f5','#FF0000','#e7f500','#88e4ff','#f500ec','#2ef500','#ff88ed'];

	var colr=	['white','blue','red','yellow','#88e4ff','#f500ec','#2ef500','#ff88ed'];
	
	var sizeicon=0;
	var positionicon=10;
var ll;
	
	
	
	
	ll=0;
	
	
		//var defaultmessage = ["need:reims*10","need:sacy*8","need:chalons*10","need:biarritz*23","need:vrigny*10","have:lille*222","need:paris*100" ,"need:sacy*100","need:lille*10","check:france"];
	
	


var defaultmessage = [
			
			"need:tour effeil*10"
			,"check:montparnasse"
			,"need:parc de la vilette*10"
			,"need:vincennes*10"
			,"need:place de la concorde*10"
			,"need:chemin vert*10"
			,"need:grenelle*10"
			,"need:unesco*10"
					,"need:pantheon*10"
			
							    ,"need:gentilly*10"
							
							  ,"need:aubervilliers*10"
							   ,"need:saint ouen*10"
			  
			 ,"need:chaillot*3"
			 ,"need:montrouge*3"
							    
							  ,"need:marais*10"
							   ,"need:rivoli*10"
							  ,"need:voltaire*10"
							  ,"need:reuilly diderot*10"
			 ,"need:ivry sur seine*10"
			 ,"have:paris*10"
			
			 ,"have:paris*20"
				 ,"have:paris*10"
				 ,"have:paris*10"
			
				 ,"have:paris*30"
				 ,"have:paris*10"
			 ,"have:paris*10"
				 ,"have:paris*10"
				 ,"have:paris*10"
				 ,"have:paris*10"
			 ,"have:paris*10"
			 ,"have:paris*10"
				 ,"have:paris*10"
				 ,"have:paris*10"
			
			
		
			
							 ];



	var star;
	
	
	
	
	
	
	//initialiser la carte
    function initAutocomplete() {
		var markers = [];
		
		
		
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -33.8688, lng: 151.2195},
          zoom: 13,
          mapTypeId: 'satellite',
			
        });
		
		

		
        // Create the search box and link it to the UI element.
        var input = document.getElementById('pac-input');
        var searchBox = new google.maps.places.SearchBox(input);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function() {
          searchBox.setBounds(map.getBounds());
        });

		  
		
				 			
		
		
				 
	
		  
			$("#custom-button").click(function() {
			

			star=0;

		//lecture du message
		var message=$('#fo').val();
			
			
		//si le message est une demande
		if( message.slice(0,5)=='need:'   ){
			
		
			
			action=0;
			//initialiser la demande (1 == résolue)
			need[idn]=0;
			//décomposer le message
			need_loc[idn] =  message.substring(message.lastIndexOf(":") + 1, message.lastIndexOf("*"));
			need_life[idn] = parseInt(message.substring(message.lastIndexOf("*") + 1, message.lastIndexOf("")));
			//retenir la localisation
			textemp = need_loc[idn];
			
			

	lifetemp = need_life[idn].toString();
			
			
		
			
				idG[idn]=randLetter()+randLetter()+randLetter();
				  templeg=idG[idn];
			
			//optionnel
			$( ".consol" ).append( "<li>("+templeg +") "+ message +"</li>" );
			

		
		
		}
			
			
					  
					  
			//si le message est un avoir
		else if( message.slice(0,5)=='have:'   ){
			
			templeg=randLetter()+randLetter()+randLetter();
			
			
			action=1;
			//décomposition
			temp_life = parseInt(message.substring(message.lastIndexOf("*") + 1, message.lastIndexOf("")));
			temp_loc= message.substring(message.lastIndexOf(":") + 1, message.lastIndexOf("*"));	
			//retenir la localisation
			textemp = temp_loc;
				
			//optionnel
			$( ".consol" ).append( "<li>("+templeg +") "+ message +"</li>" );
			
			lifetemp = temp_life.toString();
			color=Math.random()*200;

		}	  
					  
					  
  
			//si le message est un checkpoint
		else if( message.slice(0,6)=='check:'   ){
			
			templeg=randLetter()+randLetter()+randLetter();
	
			action=2;
			//décomposition
			check_loc[idc] =  message.substring(message.lastIndexOf(":") + 1, message.lastIndexOf(""));
			//retenir la localisation
			textemp = check_loc[idc];
				
			//optionnel
			$( ".consol" ).append( "<li>("+templeg +") "+ message +"</li>" );		
				
		}	  
					  
					  

		//envoyer la requete à googlemap -> get lat,lan		  
		$('#pac-input').val(textemp);
   		google.maps.event.trigger(input, 'focus', {});
   		google.maps.event.trigger(input, 'keydown', { keyCode: 13 });	
			

		
		});
					 
					 
					 
		  		
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function() {
					
			star=1;
		
	
				
		
          var places = searchBox.getPlaces();

          if (places.length == 0) {
            return;
          }

			
			
			var bug=0;
			
				  


          // For each place, get the icon, name and location.
          var bounds = new google.maps.LatLngBounds();
			
          places.forEach(function(place) {
			     if(bug>0){return;}
			    bug++;


			  
            if (!place.geometry) {
              console.log("Returned place contains no geometry");
              return;
            }
			  

	  
			  if(action==0){
				  
				  
				  
			 need_x[idn]= place.geometry.location.lat();
			   need_y[idn]= place.geometry.location.lng();
				  

	
				$( "table" ).append( "<tr>"
									+"<td>"+idG[idn]+"</td>"
									+"<td>"+need_loc[idn]+"</td>"
									+"<td>"+need_x[idn]+"<br>"+need_y[idn]+"</td>"
									+"<td class='life'>"+need_life[idn]+"</td>"
									+"<td class='solver'></td>"+
									"</tr>" );
				  
				  
				  $( "tr:last" ).attr('id', idG[idn]);
				 

				  	  
            var icon = {
              url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Christian_cross_%28red%29.svg/2000px-Christian_cross_%28red%29.svg.png',
              size: new google.maps.Size(sizeicon, sizeicon),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(positionicon, positionicon),
              scaledSize: new google.maps.Size(25, 25)
            };
				  
				  
				  
				 
				  	idn++;
			  }
			  
			  
			  
			  
			  else if(action==2){
			 check_x[idc]= place.geometry.location.lat();
			   check_y[idc]= place.geometry.location.lng();
				  
				  
				  
				  		  	  
            var icon = {
              url: 'https://i.pinimg.com/originals/80/61/4a/80614a7d2863c53df0fa242c2967d3a5.png',
              size: new google.maps.Size(sizeicon, sizeicon),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(positionicon, positionicon),
              scaledSize: new google.maps.Size(25, 25)
            };
				  
				  
				  
				  
				  idc++;
				  
				  
				  templeg=templeg+":checkpoint";
				  
				  
			  }
			  

			    
			 else if(action==1){
				 
				 			ll++;
				 
				 if(ll==col.length	){ll=0;}
					
				 
			 temp_x= place.geometry.location.lat();
			   temp_y= place.geometry.location.lng();
			
				 	off=off+(1/radiuz);
				 			  	  
            var icon = {
              url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/220px-SNice.svg.png',
              size: new google.maps.Size(sizeicon, sizeicon),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(positionicon, positionicon),
              scaledSize: new google.maps.Size(25, 25)
            };
				  
				  
				  
				  //début de la fonction de recherche du plus proche
			var min=null, max=null, dist=null;
			var best;
				 	
				
				for (var z=0; z<=temp_life; z++){
					
					for (var i=0; i<idn; i++){
					
						if(need[i] ==0){
							
						//calcul de la distance via pythagore
						dist = Math.sqrt((need_y[i]-temp_y)*(need_y[i]-temp_y) + (need_x[i]-temp_x)*(need_x[i]-temp_x));

						
						//cherche le minimum
						if ((min===null) || (dist < min)) { min = dist; best=i; }
						
					}
				
				
					
					
					}
					
					
				
				//si il y a une demande dans le coin 
				if (best>=0){
		

					
							var adj=temp_y-need_y[best];
					
						var op=temp_x-need_x[best];
					
					
					if(adj<0){ 
						
						
								angle=Math.abs((Math.acos(op/dist))*180/Math.PI-180);
					}
							
						else{  angle=Math.abs((Math.acos(op/dist))*180/Math.PI)+180; }	
					
					
					
					
					//optionnel
					$( ".consol" ).append( Math.round((angle))+"deg-"+(dist*100).toFixed(2)+"km ("+need_loc[best]+")<br>" );
					

					//impacter les points de quantités (horrible..)
					if (need_life[best]<=temp_life){
							
							temp_life= temp_life-need_life[best];
						
					
						
						need[best]=1;
						need_life[best]=0;
					
						
						//ajouter le score
						idn_accomplish++;
						
						//optionnel
						$('.n_info2').text(idn_accomplish);
			
						
							$("#" + idG[best]).find("td.life").text(need_life[best]);
						
						$("#" + idG[best]).find("td.solver").append(templeg+"<br>");
						
					
					}
					
	
					else  {
						
				
						
						need_life[best]=need_life[best]-temp_life;
						temp_life=0;
						
					
						
			
	
						$("#" + idG[best]).find("td.life").text(need_life[best]);
						
						$("#" + idG[best]).find("td.solver").append(templeg+"<br>");
						

						
					}
					
					
					
					
					
						
						
					
				
					colortemp=col[ll];
						
				
		
			
					
					
					
					
					
					if(temp_life==0 || idn_accomplish==idn){
						
					
						
													  //début de la fonction de recherche du plus proche
			var min2=null, max2=null, dist=null;
			var best2;
						
							var adj;
	var op;
					for (var i=0; i<idc; i++){
					
					
							
						//calcul de la distance via pythagore
						 dist = Math.sqrt((need_y[best]-check_y[i])*(need_y[best]-check_y[i]) + (need_x[best]-check_x[i])*(need_x[best]-check_x[i]));
						
					

						//cherche le minimum
						if ((min2===null) || (dist < min2)) { min2 = dist; best2=i; }
						
						
						
						 adj=need_y[best]-check_y[best2];
						 op=need_x[best]-check_x[best2];
	
					}
						
					
						
						
						
						
						
								
					
					
					if(adj<0){ 
						
						
								angle=Math.abs((Math.acos(op/dist))*180/Math.PI-180);
					}
							
						else{  angle=Math.abs((Math.acos(op/dist))*180/Math.PI)+180; }	
						
						
						

						
			     var flightPlanCoordinates = [
          {lat: need_x[best]+off, lng:need_y[best]+off},
          {lat: check_x[best2]+off, lng:check_y[best2]+off}
        ];
        var flightPath = new google.maps.Polyline({
          path: flightPlanCoordinates,
          geodesic: true,
          strokeColor: colortemp,
          strokeOpacity: 1.0,
          strokeWeight: 2
        });

        flightPath.setMap(map);
						
						if(dist !==null){
					
								$( ".consol" ).append(Math.round(angle) +"deg-"+ (dist*100).toFixed(2)+"km ("+check_loc[best2]+"):finish" );
						
						}
						
					}
					
					

						  
			  
			     var flightPlanCoordinates = [
          {lat: temp_x+off, lng:temp_y+off},
          {lat: need_x[best]+off, lng: need_y[best]+off}
        ];
        var flightPath = new google.maps.Polyline({
          path: flightPlanCoordinates,
          geodesic: true,
          strokeColor: colortemp,
          strokeOpacity: 1.0,
          strokeWeight: 2
        });

        flightPath.setMap(map);
					
					
					
					
					
					
				//mettre à jour la position du bateau
				temp_x = need_x[best];
				temp_y = need_y[best];
				
				//remettre les compteurs à 0.
				min=null, max=null;
					
									
					
					
					
		
				
					
					
					
			//si il n'y a plus de demande on quitte la fonction
				if(idn_accomplish==idn){
	
					
					break;}
					
					
				

				}		
					
					

				
				}
				
				  
				  	templeg=templeg+":have";
				  
				  
			  }
			
		
			  
			  
	
	
			  
			  
			  $('.n_info').text(idn);
			  
			  
			 
		if(action==1){

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
              map: map,
              icon: icon,
				 label: {text:templeg, color: colr[ll]},
			
              title: place.name,
              position: place.geometry.location
            }));

            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          }
			  
			  
			  	if(action==2){

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
              map: map,
              icon: icon,
				 label: {text:templeg, color: "white"},
			
              title: place.name,
              position: place.geometry.location
            }));

            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          }
			  
			  
			  
			  
			  
			  if(action==0){

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
              map: map,
              icon: icon,
				 label: {text:templeg, color: "white"},
			
              title: place.name,
              position: place.geometry.location
            }));

            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          }
			  
			  
			  
			  
			  
			  
		  
		  });
			  
			  
			  
			  
          map.fitBounds(bounds);
			
			
			
			
        });
		 	
	
		
		
		
		function explode(){
  

		
		
		
	
		var helloEverySecond = setInterval(function() {
			if(es==0){star=1}
		
			if (star==1){
			
				$('#fo').val(defaultmessage[es]);
		$("#custom-button").trigger('click');  
		
		
				es++;
				
				
				}
				
				
				
			if(es==defaultmessage.length){clearInterval(helloEverySecond);}
		
		
		}, 322);
		
		
		
}
setTimeout(explode, 800);
			
			
			
		
      }

	
	

	
	function randLetter() {
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var letter = letters[Math.floor(Math.random() * letters.length)];
    return letter
}
	

