class Kindle {
	constructor() {
		this.readBooks = 0;
		this.notYetReadBooks = 0;
		this._current = null;
		this._next = null;
		this._last = null;
		this._library = [];
	}
	add(eBook) {
		if (this._library.some(x => x.title == eBook.title)) {
			console.warn(`"${eBook.title}" already exists in library`);
		} else {
			this._library.push(eBook);
			this.notYetReadBooks++;
			if(this._current === null){
				this._current = eBook;
            		} else if(this._next === null){
				this._next = eBook;
			}
	}
}

class Ebook {
	constructor(title, genre, author, cover) {
		this.title = title;
		this.genre = genre;
		this.author = author;
		this.cover = cover;
		this.read = false;
		this.readDate = null;
	}
}

let kindle = new Kindle();

kindle.add(
	new Ebook(
		"Drive",
		"Psychology",
		"Daniel H. Pink",
		"https://i.imgur.com/B3XpOxl.jpg"
	)
);
kindle.add(
	new Ebook(
		"Futuro Pop",
		"Science Fiction",
		"Luciano Banchero",
		"https://i.imgur.com/uYOy55M.jpg"
	)
);
kindle.add(
	new Ebook(
		"The Lord of the Rings - The Fellowship of the Ring",
		"Fantasy",
		"J. R. R. Tolkien",
		"https://i.imgur.com/OwMUnQu.jpg"
	)
);
kindle.add(
	new Ebook(
		"The Principles Of Object-oriented Javascript",
		"Programming",
		"Nicholas C. Zakas",
		"https://i.imgur.com/Iktw1ps.jpg"
	)
);
kindle.add(
	new Ebook(
		"Harry Potter and the Philosopher's Stone",
		"Fantasy",
		"J. K. Rowling",
		"https://i.imgur.com/PH1aXaP.jpg"
	)
);
kindle.add(
	new Ebook(
		"Eloquent JavaScript",
		"Programming",
		"Marijn Haverbeke",
		"https://i.imgur.com/F4NQlvx.jpg"
	)
);
kindle.add(
	new Ebook(
		"Eloquent JavaScript",
		"Programming",
		"Marijn Haverbeke",
		"https://i.imgur.com/F4NQlvx.jpg"
	)
);
