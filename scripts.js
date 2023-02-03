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

function clearBookshelf() {
    for (let i = 0; i < myLibrary.length; i++) {
        let reset = bookshelf.getElementsByClassName(`library--card`);
        console.log(reset); 
        reset.remove();
    }
}

function addCard() {
    for (let i = 0; i < myLibrary.length; i++) {
        let card = document.createElement("div");
        card.setAttribute("id", `library--card[${i}]`);
        card.setAttribute("class", `library--card`);
        bookshelf.appendChild(card);

        
    }
        
        //bookshelf.getElementById(`library--card[${i}]`).createElement("h4").classlist.add("library--title").setAttribute("id", `library--title[${i}]`);
        //bookshelf.getElementById(`library--card[${i}]`).createElement("p").classlist.add("library--author").setAttribute("id", `library--author[${i}]`);
        //bookshelf.getElementById(`library--card[${i}]`).createElement("p").classlist.add("library--pages").setAttribute("id", `library--pages[${i}]`);
        //bookshelf.getElementById(`library--card[${i}]`).createElement("p").classlist.add("library--read-status").setAttribute("id", `library--read-status[${i}]`);
}

function renderBookshelf() {
    for (let i = 0; i < myLibrary.length; i++) {
        addCard(); 
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
    console.log(myLibrary); 
    clearBookshelf();
    renderBookshelf(); 

}); 

