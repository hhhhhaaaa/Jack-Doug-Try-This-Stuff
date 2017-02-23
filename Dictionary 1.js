function dictionary() {
    var page = [];
    var words = prompt("Write a new word!");
    if (words === "" || morewords === "") {
        console.log("Your dictionary is empty!");
		for (i = 0; i < page.length; i++) {
			console.log(page[i]);
        }
	} else {
        page.push(words);
		while ( morewords !== "" ) {
            var morewords = prompt("Write more new words!");
            page.push(morewords);
		}
        console.log("Congrats! Your dictionary has " + (page.length - 1) + " words!");
		for (i = 0; i < page.length; i++) {
            page.sort(); 
			console.log(page[i]);
			}
	}
}

dictionary();