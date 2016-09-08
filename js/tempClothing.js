function showStrippingModal () {
    console.log("The stripping modal is being set up.");
    
    /* clear the area */
    $playerNameArea.html("");
    selectedPlayer = -1;
    
	
    /* determine the highest layer of clothing left */
	//var highestLayer = 0;
	//for (var i = 0; i < players[HUMAN_PLAYER].clothing.length; i++) {
	//	if (players[HUMAN_PLAYER].clothing[i]) {
	//		/* determine if this clothing has a higher layer */
	//		if (players[HUMAN_PLAYER].clothing[i].layer > highestLayer) {
	//			highestLayer = players[HUMAN_PLAYER].clothing[i].layer;
	//		}
	//	}
	//}
    
	
    /* load the current layer of clothing into the modal */
		for (i = 0; i < players.length; i++) {
		if (!players[i].out) {
			var playerCard =
				"<input type='submit' value='"+i+"'>"
		}
	}
	
	
    for (var i = 0; i < players[HUMAN_PLAYER].clothing.length; i++) {
        if (players[HUMAN_PLAYER].clothing[i]) {
		    if (players[HUMAN_PLAYER].clothing[i].layer == highestLayer) {
				var clothingCard = 
					"<input type='image' id='"+i+"' class='bordered modal-clothing-image' src="+
					players[HUMAN_PLAYER].clothing[i].image+" onclick='selectClothingToStrip("+i+")'/>";
				
				$stripClothing.append(clothingCard);
			}
        }
    }
    
    /* disable the strip button */
    $stripButton.attr('disabled', true);
    
    /* display the stripping modal */
    $stripModal.modal('show');
}