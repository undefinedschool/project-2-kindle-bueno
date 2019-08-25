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
			if (this._current === null) {
				this._current = eBook;
			} else if (this._next === null) {
				this._next = eBook;
			}
		}
	}
	// para q set currentEBOOK solo agregue eBooks del kindle, hay q usarla así: kindle.currentEBook = kindle._library[nro] o hay otra manera?
	set currentEBook(eBook) {
		if (this._current != eBook) {
			this._next = this._current;
			this._current = eBook;
		}
	}
	get currentEBook() {
		return this._current;
	}
	finishCurrentBook() {
		if (this._current == null) {
			console.error('There is no current book to finish, you must add one first.');
		} else {
			this._current.read = true;
			this._current.readDate = Date.now();
			this._last = this._current;
			this._current = this._next;
			this._next = this._library.find(x => !x.read && x != this._current);
			this.notYetReadBooks--;
			this.readBooks++;
		}
	}
	sortBy(criteria) {
		if (criteria === 'author') {
			return this._library.sort((a, b) =>
				a.author > b.author ? 1 : b.author > a.author ? -1 : 0
			);
		} else if (criteria === 'title') {
			return this._library.sort((a, b) =>
				a.title > b.title ? 1 : b.title > a.title ? -1 : 0
			);
		} else {
			return "only support 'author' or 'title' criteria";
		}
	}
	get library() {
		return { ...this._library };
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
	static isEqual(eBookA, eBookB) {
		return (
			eBookA.title === eBookB.title &&
			eBookA.genre === eBookB.genre &&
			eBookA.author === eBookB.author
		);
	}
}

let kindle = new Kindle();

kindle.add(
	new Ebook(
		'Drive',
		'Psychology',
		'Daniel H. Pink',
		'https://i.imgur.com/B3XpOxl.jpg'
	)
);
kindle.add(
	new Ebook(
		'Futuro Pop',
		'Science Fiction',
		'Luciano Banchero',
		'https://i.imgur.com/uYOy55M.jpg'
	)
);
kindle.add(
	new Ebook(
		'The Lord of the Rings - The Fellowship of the Ring',
		'Fantasy',
		'J. R. R. Tolkien',
		'https://i.imgur.com/OwMUnQu.jpg'
	)
);
kindle.add(
	new Ebook(
		'The Principles Of Object-oriented Javascript',
		'Programming',
		'Nicholas C. Zakas',
		'https://i.imgur.com/Iktw1ps.jpg'
	)
);
kindle.add(
	new Ebook(
		"Harry Potter and the Philosopher's Stone",
		'Fantasy',
		'J. K. Rowling',
		'https://i.imgur.com/PH1aXaP.jpg'
	)
);
kindle.add(
	new Ebook(
		'Eloquent JavaScript',
		'Programming',
		'Marijn Haverbeke',
		'https://i.imgur.com/F4NQlvx.jpg'
	)
);

console.log(kindle);
kindle.finishCurrentBook();
console.log(kindle);
