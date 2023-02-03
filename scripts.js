let myLibrary = []; 
let bookshelf = document.getElementById('bookshelf'); 

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages 
    this.read = read
}

Book.prototype.info = function () {
    if (this.read == true) {
        return this.title + " by " + this.author + ", " + this.pages + " pages, has been read"; 
    } else if (this.read == false) {
        return this.title + " by " + this.author + ", " + this.pages + " pages, not read yet";
    } else if ((this.read != true) && (this.read != false)) {
        return "Invalid read status. Has this book been read, true or false?"
    }
}

function addBookToLibrary(titleVal, authorVal, pageVal, readVal) {
    myLibrary.push(new Book(titleVal, authorVal, pageVal, readVal));    
}

function addCard() {
    bookshelf.createElement("div").classlist.add("library--card"); 
}

function renderBookshelf() {
    for (let i = 0; i < myLibrary.length; i++) {
        document.getElementById(`library--title[${i}]`).innerHTML = myLibrary[i].title; 
        document.getElementById(`library--author[${i}]`).innerHTML = myLibrary[i].author; 
        document.getElementById(`library--pages[${i}]`).innerHTML = myLibrary[i].pages; 
        document.getElementById(`library--read-status[${i}]`).innerHTML = myLibrary[i].read; 
    }; 
}

document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    let titleVal = document.getElementById('title').value; 
    let authorVal = document.getElementById('author').value; 
    let pageVal = document.getElementById('pages').value; 
    let readVal = document.getElementById('read-status').value; 

    addBookToLibrary(titleVal, authorVal, pageVal, readVal);
    renderBookshelf(); 
}); 

