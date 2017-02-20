var words = "";

while (words != "AM DEAD"){
    words = prompt ("What are you going to say to grandma?");
	console.log(words);
	if (words === "I love ya, Grandma, but I've got to go.") {
		console.log("OKAY, BYE SONNY.");
		words = prompt("What say grandma");
		if(words === ""){
			words = prompt("WHAT GRANDMA");
			console.log("WHERE U AT MAH BOI");
			if(words === ""){
				console.log("AM LOST WHERE U");
				words = "AM DEAD";
			}
		}
	} else if (words != words.toUpperCase()) {
		console.log("HUH?! SPEAK UP, SONNY!");
	} else if (words != words.toLowerCase()) {
		console.log("NO, NOT SINCE 1983!"); 
	}
};