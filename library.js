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

/* function addBookToLibrary() {
     let title = prompt("What is your books title?");
  if (!title == "") {
    myLibrary.push(title);
    console.table(myLibrary);
  } else {
    console.table(myLibrary);
  }
}

addBookToLibrary(); */

const table = document.getElementById("table");
const title = document.getElementById("book_title").value;
const author = document.getElementById("book_author").value;
const pages = document.getElementById("book_pages").value;
const bookStatus = document.getElementById("book_status").value;

function displayBook() {
  createTableRow();
  console.log(bookStatus);
}

function createTableRow() {
  let row = document.createElement("tr");

  let c1 = document.createElement("td");
  let c2 = document.createElement("td");
  let c3 = document.createElement("td");
  let c4 = document.createElement("td");

  c1.innerText = title;
  c2.innerText = author;
  c3.innerText = pages;
  c4.innerText = bookStatus;

  row.appendChild(c1);
  row.appendChild(c2);
  row.appendChild(c3);
  row.appendChild(c4);

  table.appendChild(row);
}

const newBook = document.getElementById("submit");
newBook.addEventListener("submit", () => {
  e.preventDefault();
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
