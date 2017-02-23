function dictionary() {
    var page = [];
    var words = prompt("Write a new word!");
	page.push(words);
	for (i = 0; i < page.length; i++) {
        console.log(page[i]);
        }
}

dictionary();