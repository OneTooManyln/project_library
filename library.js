let myLibrary = ["The Toll", "A New Hope", "The Adventurs of.."];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return title + author + pages + read;
  };
}

function addBookToLibrary() {
  /*   let title = prompt("What is your books title?");*/
  if (!title == "") {
    myLibrary.push(title);
    console.table(myLibrary);
  } else {
    console.table(myLibrary);
  }
}

addBookToLibrary();

const table = document.getElementById("table");

function displayBook() {
  let row = document.createElement("tr");
}

const newBook = document.querySelector("button");
newBook.addEventListener("click", () => {
  displayBook();
});

/* const theHobbit = new Book(
  "The Hobbit ",
  "by J.R.R. Tolkien, ",
  "295 pages, ",
  "not read yet "
);
console.log(theHobbit.info());
console.log(5); */
