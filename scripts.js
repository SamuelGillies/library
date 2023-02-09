let myLibrary = []; 
let bookshelf = document.getElementById('bookshelf'); 

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages 
    this.read = read
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

        let closeBox = document.createElement("div");
        closeBox.setAttribute("id", `library--closeBox[${i}]`);
        closeBox.setAttribute("class", `library--closeBox`);
        card.appendChild(closeBox);

        let clear = document.createElement("button"); 
        clear.setAttribute("id", `library--clear[${i}]`);
        clear.setAttribute("class", `library--clear button-close`);
        clear.setAttribute("onclick", `removeBook(${i})`);
        closeBox.appendChild(clear);

        let cross = document.createElement("img"); 
        cross.setAttribute("src", "./icons/close-icon.svg");
        cross.setAttribute("class", `library--x "button-close--icon"`);
        clear.appendChild(cross);

        let bookBox = document.createElement("div");
        bookBox.setAttribute("id", `library--bookBox[${i}]`);
        bookBox.setAttribute("class", `library--bookBox`);
        card.appendChild(bookBox);

        let titleBox = document.createElement("div");
        titleBox.setAttribute("id", `library--titleBox[${i}]`);
        titleBox.setAttribute("class", `library--titleBox`);
        bookBox.appendChild(titleBox);

        let title = document.createElement("h2");
        title.setAttribute("id", `library--title[${i}]`);
        title.setAttribute("class", `library--title`);
        titleBox.appendChild(title);

        let infoBox = document.createElement("div");
        infoBox.setAttribute("id", `library--infoBox[${i}]`);
        infoBox.setAttribute("class", `library--infoBox`);
        bookBox.appendChild(infoBox);

        let author = document.createElement("p");
        author.setAttribute("id", `library--author[${i}]`);
        author.setAttribute("class", `library--author`);
        infoBox.appendChild(author);

        let pages = document.createElement("p");
        pages.setAttribute("id", `library--pages[${i}]`);
        pages.setAttribute("class", `library--pages`);
        infoBox.appendChild(pages);

        let read = document.createElement("button");
        read.setAttribute("id", `library--read-status[${i}]`);
        read.setAttribute("class", `library--read-status`);
        infoBox.appendChild(read);
    }
}

function removeBook(index) {
    clearBookshelf();
    myLibrary.splice(index, 1); 
    addCard(); 
    renderBookshelf(); 
}

function renderBookshelf() {
    for (let i = 0; i < myLibrary.length; i++) {
        document.getElementById(`library--title[${i}]`).innerHTML = myLibrary[i].title; 
        document.getElementById(`library--author[${i}]`).innerHTML = myLibrary[i].author; 
        document.getElementById(`library--pages[${i}]`).innerHTML = myLibrary[i].pages; 

        if (myLibrary[i].read == true) {
            document.getElementById(`library--read-status[${i}]`).innerHTML = 'read';
            document.getElementById(`library--read-status[${i}]`).classList.add("form--read");
        } else if (myLibrary[i].read == false) {
            document.getElementById(`library--read-status[${i}]`).innerHTML = 'not read';
            document.getElementById(`library--read-status[${i}]`).classList.add("form--unread");
        }
    }; 
}

document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    clearBookshelf();

    let titleVal = document.getElementById('title').value; 
    let authorVal = document.getElementById('author').value; 
    let pageVal = document.getElementById('pages').value + ' pages'; 

    if (document.getElementById('read-status').checked == true) {
            readVal = true;
        } else if (document.getElementById('read-status').checked == false) {
            readVal = false;
    }; 

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

//let toggle = true; 


bookshelf.addEventListener('click', function(event) {
        for (let i = 0; i < myLibrary.length; i++) {
            if (event.target.id ===`library--read-status[${i}]`) {
                myLibrary[i].read = !myLibrary[i].read;
                if (myLibrary[i].read == true) {
                    event.target.classList.remove('form--unread');
                    event.target.classList.add('form--read');
                } else if (myLibrary[i].read == false) {
                    event.target.classList.remove('form--unread');
                    event.target.classList.add('form--read');
                }
            }
        clearBookshelf();
        addCard(); 
        renderBookshelf(); 
    }
});

// bookshelf.addEventListener('click', function(event) {
//     if (event.target.matches('.library--read-status')) {

//         console.log(event.target); 

//         // event.target.className = toggle ? 'library--read-status form--read' : 'library--read-status form--unread';
//         // event.target.textContent = toggle ? 'read' : 'not read';
//         // toggle = !toggle;
//     }
// });