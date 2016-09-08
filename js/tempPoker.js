function determineHighestHand () {
	var highestStrength = 0;
	var highestPlayers = [];
	console.log();
    
	for (i = 0; i < players.length; i++) {
		if (!players[i].out) {
			if (hands[i].strength > highestStrength) {
				highestStrength = hands[i].strength;
				highestPlayers = [i];
			} else if (hands[i].strength == highestStrength) {
				highestPlayers.push(i);
			}
		}
	}
    console.log("Start of highest hand determination, currently: "+highestPlayers);
	
	if (highestPlayers.length == 1) {
		return highestPlayers[0];
	} else {
		/* need to break a tie */
		if (highestStrength > TWO_PAIR) {
			/* anything higher than two pair only has one tie breaker */
			var highestValue = 0;
            var highestPlayer = -1;
			var tiedPlayers = highestPlayers;
            
            for (var i = 0; i < highestPlayers.length; i++) {
                if (hands[tiedPlayers[i]].value > highestValue) {
                    highestValue = hands[tiedPlayers[i]].value;
                    highestPlayer = highestPlayers[i];
                }
            }
            
            if (highestPlayer != -1) {
				return highestPlayer;
			} else {
				/* unresolvable tie */
				return -1;
			}
		} else {
			/* two pair, pair, and high card have multiple tie breakers */
			var highestValue = 15;
			var currentTieBreaker = 0;
			var tiedPlayers = highestPlayers;
			var failSafe = 0;
			
			while (highestPlayers.length > 1 && currentTieBreaker < hands[highestPlayers[0]].value.length && failSafe <= hands[highestPlayers[0]].cards.length) {
				highestValue = 0;
				tiedPlayers = highestPlayers;
				console.log("Players Tied: "+tiedPlayers+" failSafe: "+failSafe);
				
				for (var i = 0; i < tiedPlayers.length; i++) {
					if (hands[tiedPlayers[i]].value[currentTieBreaker] > highestValue) {
						highestValue = hands[tiedPlayers[i]].value[currentTieBreaker];
						console.log("Player "+tiedPlayers[i]+" is the new highest with: "+hands[tiedPlayers[i]].value[currentTieBreaker]);
						highestPlayers = [tiedPlayers[i]];
					} else if (hands[tiedPlayers[i]].value[currentTieBreaker] == highestValue) {
						highestPlayers.push(tiedPlayers[i]);
						console.log("Player "+tiedPlayers[i]+" is tied with: "+hands[tiedPlayers[i]].value[currentTieBreaker]);
					}
				}
				
				currentTieBreaker++;
				failSafe++;
			}
			
			if (highestPlayers.length == 1) {
				return highestPlayers[0];
			} else {
				/* unresolvable tie */
				return -1;
			}
		}
	}
}