function getRandInt(max){
	return Math.floor(Math.random()*Math.floor(max));
};

function generateDistribution(margin, nDistricts){
	//Generates n districts with a mean distribution of margin
	//All districts size s.
	
	var s = 101;
	
	var nA = (s+margin)/2*nDistricts;
		
	var n = s*nDistricts;
	var districts = [];
	
	var r, i, newDistrict;
	var districtNumber = 1;
	
	while(n > 0){
		newDistrict = {
			a : 0,
			b : 0,
			number: +districtNumber
		};
		
		districtNumber++;
		
		for(i = 0; i < s; i++){
			r = getRandInt(n);
			if(r < nA){
				nA--;
				newDistrict.a += 1;
			} else {
				newDistrict.b += 1;
			}
			
			n--;
		}
		
		newDistrict.winner = (newDistrict.a > newDistrict.b) ? 'a' :
			(newDistrict.b > newDistrict.a) ? 'b' : 'TIE';
		
		districts.push(newDistrict);
	}
	
	return districts;
}

function getDistributionStats(dist){
	var stats = {
		voteResults : {
			winsA : 0,
			winsApct : 0,
			winsB : 0,
			winsBpct : 0,
			ties : 0,
			tiesPct : 0,
			totalDists : 0
		},
		general : {
			
		}
	};
	
	dist.forEach(function(thisDist){
		if(thisDist.a > thisDist.b){
			stats.voteResults.winsA += 1;
		} else if (thisDist.b > thisDist.a){
			stats.voteResults.winsB += 1;
		} else {
			stats.voteResults.ties += 1;
		}
		
		stats.voteResults.totalDists += 1;
	});
	
	var voteResults = stats.voteResults;
	
	voteResults.winsApct = voteResults.winsA / voteResults.totalDists;
	voteResults.winsBpct = voteResults.winsB / voteResults.totalDists;
	voteResults.tiesPct = voteResults.ties / voteResults.totalDists;
	
	return stats;
};