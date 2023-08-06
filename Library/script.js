let myLibrary = [];

function Book(title = '', author = '', pages = 0, isRead = false) {
    this.title = title
    this.author = author
    this.pages = Number(pages)
    this.isRead = Boolean(isRead);
}


const form = document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault()
    const title = document.querySelector("#bookTitle").value;
    const author = document.querySelector("#bookAuthor").value;
    const isRead = document.querySelector("#isRead").checked;
    const pages = document.querySelector("#bookPages").value;
    addBookToLibrary(title, author, pages, isRead);
    addBooksToDOM();
});

function addBookToLibrary(title, author, pages, isRead) {
    const book = new Book(title, author, pages, isRead);
    myLibrary.push(book);
    console.table(myLibrary);
}

function addBooksToDOM() {
    const table = document.querySelector("#libraryTable");
    table.innerHTML = "<tr class='thead'><th> Title</th> <th>Author</th> <th>Number of pages</th><th>Status</th><th></th></tr > ";
    myLibrary.forEach((book) => {
        table.innerHTML += "<tr>"
            + '<td class="bookTitle">' + book.title + '</td>'
            + '<td class="bookAuthor">' + book.author + '</td>'
            + '<td class="bookPages">' + book.pages + '</td>'
            + '<td class="bookIsRead"> <button class="' + book.isRead + '">' + ((book.isRead) ? "Read" : "Not Read") + '</td>'
            + '<td> <button class="deleteBtn">Delete</button> </td> </tr>';
    })

    const deleteBtns = document.querySelectorAll(".deleteBtn");
    deleteBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            const row = btn.parentElement.parentElement; // Get the parent tr element
            const title = row.querySelector(".bookTitle").textContent;
            const author = row.querySelector(".bookAuthor").textContent;
            const pages = row.querySelector(".bookPages").textContent;
            const book = findBook(title, author, pages);
            deleteBookFromLibrary(book);
        })
    })

    const notReadBtns = document.querySelectorAll(".false");
    notReadBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            const row = btn.parentElement.parentElement; // Get the parent tr element
            const title = row.querySelector(".bookTitle").textContent;
            const author = row.querySelector(".bookAuthor").textContent;
            const pages = row.querySelector(".bookPages").textContent;
            const book = findBook(title, author, pages);
            book.isRead = true;
            addBooksToDOM();
        })
    })

    const readBtns = document.querySelectorAll(".true");
    readBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            const row = btn.parentElement.parentElement; // Get the parent tr element
            const title = row.querySelector(".bookTitle").textContent;
            const author = row.querySelector(".bookAuthor").textContent;
            const pages = row.querySelector(".bookPages").textContent;
            const book = findBook(title, author, pages);
            book.isRead = false;
            addBooksToDOM();
        })
    })

}

function findBook(title, author, pages) {
    for (const book of myLibrary) {
        if (book.title === title && book.author === author && book.pages === Number(pages)) {
            return book;
        }
    }
    return null;
}

function deleteBookFromLibrary(bookToDelete) {
    const index = myLibrary.indexOf(bookToDelete);
    if (index !== -1) {
        myLibrary.splice(index, 1);
        addBooksToDOM();
    }
}
