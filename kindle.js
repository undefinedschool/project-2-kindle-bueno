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
		this._library.push(eBook);
		this.notRead++;
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

let eBook1 = new Ebook (

/*
{ 
    title: 'Drive', 
    genre: 'Psychology', 
    author: 'Daniel H. Pink', 
    cover: 'https://i.imgur.com/B3XpOxl.jpg'
  }

  { 
    title: 'Futuro Pop', 
    genre: 'Science Fiction', 
    author: 'Luciano Banchero', 
    cover: 'https://i.imgur.com/uYOy55M.jpg'
  }
  { 
    title: 'The Lord of the Rings - The Fellowship of the Ring', 
    genre: 'Fantasy', 
    author: 'J. R. R. Tolkien', 
    cover: 'https://i.imgur.com/OwMUnQu.jpg'
  }
  { 
    title: 'The Principles Of Object-oriented Javascript', 
    genre: 'Programming', 
    author: 'Nicholas C. Zakas', 
    cover: 'https://i.imgur.com/Iktw1ps.jpg'
  }
  { 
    title: "Harry Potter and the Philosopher's Stone", 
    genre: 'Fantasy', 
    author: 'J. K. Rowling', 
    cover: 'https://i.imgur.com/PH1aXaP.jpg'
  }
  { 
    title: 'Eloquent JavaScript', 
    genre: 'Programming', 
    author: 'Marijn Haverbeke', 
    cover: 'https://i.imgur.com/F4NQlvx.jpg'
  }

  */
