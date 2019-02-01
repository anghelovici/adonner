function findinbbd(POSX, POSY, WHAT, fuck) {
				
				var min = null,
				max = null,
				dist = null,
				best=null,
					
					
	for (var i = 0; i < idn; i++) {

		//seulement ceux qui nous intérésse: les mêmes objets
		if (need[i] == 0 && need_object[i] == WHAT) {


			if (fuck == 0) {
				goal_idn++;
			}


			//calcul de la distance via pythagore
			dist = Math.sqrt((need_y[i] - POSY) * (need_y[i] - POSY) + (need_x[i] - POSX) * (need_x[i] - POSX));


			//cherche le minimum
			if ((min === null) || (dist < min)) {
				min = dist;
				best = i;
			}


		}

	}



	var adj = temp_y - need_y[best];
	var op = temp_x - need_x[best];



	if (adj < 0) {
		angle = Math.abs((Math.acos(op / min)) * 180 / Math.PI - 180);
	} else {
		angle = Math.abs((Math.acos(op / min)) * 180 / Math.PI) + 180;
	}


}


	
