const library = [];

function Book(title, author, numPages, isRead) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.isRead = isRead;
}

function addBookToLibrary(book) {
  library.push(book);
}

function removeBook(book) {
  library.splice(library.indexOf(book), 1);
}

function displayBooks() {
  console.table(library);
}

function createNewBook() {
  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  const numPages = document.querySelector("#numPages");
  const isRead = document.querySelector("#isRead");

  let newBook = new Book(
    title.value,
    author.value,
    numPages.value,
    isRead.checked
  );

  addBookToLibrary(newBook);
}

document.querySelector("button").addEventListener("click", createNewBook);
