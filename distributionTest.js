function getRandInt(max){
	return Math.floor(Math.random()*Math.floor(max));
};

function generateDistribution(margin, nDistricts){
	//Generates n districts with a mean distribution of margin
	//All districts size s.
	
	var s = 101;
	
	var nA = (s-margin)/2*nDistricts;
		
	var n = s*nDistricts;
	var districts = [];
	
	var r, i, newDistrict;
	
	while(n > 0){
		newDistrict = {
			a : 0,
			b : 0
		};
		
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
		
		districts.push(newDistrict);
	}
	
	return districts;
}

function getDistributionStats = function(dist){
	var stats = {
		voteResults : {
			winsA : 0,
			winsApct : 0,
			winsB : 0,
			winsBpct : 0,
			totalWins : 0
		},
		general : {
			
		}
	};
	
	dist.forEach(function(thisDist){
		if(thisDist.a > thisDist.b){
			stats.voteResults.winsA += 1;
			
		} else {
			
		}
		
		stats.voteResults.totalWins += 1;
	});
	
	return stats;
};