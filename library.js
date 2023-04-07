let myLibrary = [
  {
    title: "The Toll",
    author: "Neal Shusterman",
    pages: "640",
    status: "read",
  },
  {
    title: "The Denial of Death",
    author: "Ernest Becker",
    pages: "336",
    status: "not read",
  },
  {
    title: "With the Old Breed: At Peleliu and Okinawa",
    author: "Euguene B. Sledge",
    pages: "402",
    status: "read",
  },
];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  /*   this.info = function () {
    return title + author + pages + read;
  }; */
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
const title = document.getElementById("book_title");
const author = document.getElementById("book_author");
const pages = document.getElementById("book_pages");
const bookStatus = document.getElementById("book_status");

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  /* displayBook(); */
  addBookToLibrary();
});

function addBookToLibrary() {
  const newBook = new Book(
    title.value,
    author.value,
    pages.value,
    bookStatus.value
  );
  myLibrary.push(newBook);
  console.table(myLibrary);
}

function displayBook() {
  createTableRow();
  console.log("this works");
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

/* const theHobbit = new Book(
  "The Hobbit ",
  "by J.R.R. Tolkien, ",
  "295 pages, ",
  "not read yet "
);
console.log(theHobbit.info());
console.log(5); */
