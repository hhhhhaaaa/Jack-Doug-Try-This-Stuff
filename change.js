var words = "";

while (words != "I") {
	words = prompt("What ya want to say to grandma?");
	if (words != words.toUpperCase()) {
		console.log("HUH?! SPEAK UP, SONNY!");
	} else if (words != words.toLowerCase()) {
		console.log("NO, NOT SINCE 1983!"); 
	}
};