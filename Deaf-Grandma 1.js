function deaf_grandma(words) {
	console.log(words);
	if (words === "I love ya, Grandma, but I've got to go.") {
		console.log("OKAY, BYE SONNY.")
		var finish = prompt("YA GOOD?")
		if (finish = "") {
			console.log("You have finished talking to your grandma simulator. Thank you.")
	} else { break;
	};
	} else if (words != words.toUpperCase()) {
		console.log("HUH?! SPEAK UP, SONNY!");
	} else if (words != words.toLowerCase()) {
		console.log("NO, NOT SINCE 1983!"); 
	}
	};
};

var words = prompt("What ya want to say to grandma?");
deaf_grandma(words);