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
        let item = document.getElementById(`library--card[${i}]`);
        bookshelf.removeChild(item);
    }
}

function addCard() {
    for (let i = 0; i < myLibrary.length; i++) {
        let card = document.createElement("div");
        card.setAttribute("id", `library--card[${i}]`);
        card.setAttribute("class", `library--card`);
        bookshelf.appendChild(card);

        let clear = document.createElement("button"); 
        clear.setAttribute("id", `library--clear[${i}]`);
        clear.setAttribute("class", `library--clear button-close` );
        card.appendChild(clear);

        let cross = document.createElement("img"); 
        cross.setAttribute("src", "./icons/close-icon.svg");
        cross.setAttribute("class", `library--clear "button-close--icon"` );
        clear.appendChild(cross);

        let title = document.createElement("h2");
        title.setAttribute("id", `library--title[${i}]`);
        title.setAttribute("class", `library--title`);
        card.appendChild(title);

        let author = document.createElement("p");
        author.setAttribute("id", `library--author[${i}]`);
        author.setAttribute("class", `library--author`);
        card.appendChild(author);

        let pages = document.createElement("p");
        pages.setAttribute("id", `library--pages[${i}]`);
        pages.setAttribute("class", `library--pages`);
        card.appendChild(pages);

        let read = document.createElement("p");
        read.setAttribute("id", `library--read-status[${i}]`);
        read.setAttribute("class", `library--read-status`);
        card.appendChild(read);
    }
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
    clearBookshelf();

    let titleVal = document.getElementById('title').value; 
    let authorVal = document.getElementById('author').value; 
    let pageVal = document.getElementById('pages').value; 
    let readVal = document.getElementById('read-status').value; 

    addBookToLibrary(titleVal, authorVal, pageVal, readVal);
    addCard(); 
    renderBookshelf(); 
}); 

document.getElementById('modal-btn').addEventListener('click', (e) => {
    let modal = document.getElementById('modal--block');
    modal.classList.remove('hidden');
});

document.getElementById('btn-close').addEventListener('click', (e) => {
    let modal = document.getElementById('modal--block');
    modal.classList.add('hidden');
});

document.getElementById('btn--read-status').addEventListener('click', (e) => {
    let readbtn = document.getElementById('btn--read-status');
    readbtn.classList.add('read');
});
