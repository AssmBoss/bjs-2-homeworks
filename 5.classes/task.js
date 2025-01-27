class PrintEditionItem{
	constructor(name, releaseDate, pagesCount){
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this._state = 100;
		this.type = null;
	}

    fix(){
		this._state*=1.5;
        if (this._state > 100) {
            this._state = 100
        }
    }

    set state (newState){
        if (newState < 0) {
            this._state = 0
        } else if (newState > 100) {
            this._state = 100
        } else {this._state = newState}
    }

    get state() {
        return this._state
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
        super (name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount){
        super (name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super (author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super (author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super (author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    constructor(name){
        this.name = name;
        this.books = [];
    }
    addBook(book){
        if (book.state > 30) {
            this.books.push(book);
        }
    }
    findBookBy(type, value) {
        debugger;
        for (let book of this.books) {
            for (let prop in book) {
                if (prop === type && book[prop] === value) {
                    return book;
                }
            }
        }
        return null;
    }

    giveBookByName(bookName) {
        let givenBook = this.findBookBy("name", bookName);
        if (givenBook !== null) {
            this.books.splice(this.books.indexOf(givenBook), 1);
        }
        return givenBook;
    }

}