const library = [];

function Book(title, author, numPages, isRead) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.isRead = isRead;

  this.info = function () {
    let readString = isRead ? "already read" : "not read yet";
    return title + " by " + author + ", " + numPages + " pages, " + readString;
  };
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
