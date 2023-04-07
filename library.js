let myLibrary = [
  {
    title: "The Toll",
    author: "Neal Shusterman",
    pages: "640",
    status: "Read",
  },
  {
    title: "The Denial of Death",
    author: "Ernest Becker",
    pages: "336",
    status: "Not Read",
  },
  {
    title: "With the Old Breed: At Peleliu and Okinawa",
    author: "Euguene B. Sledge",
    pages: "402",
    status: "Read",
  },
];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

const table = document.getElementById("table");
const title = document.getElementById("book_title");
const author = document.getElementById("book_author");
const pages = document.getElementById("book_pages");
const bookStatus = document.getElementById("book_status");

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  displayUserBook();
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

myLibrary.forEach((myLibrary) => {
  createTableRow(
    myLibrary.title,
    myLibrary.author,
    myLibrary.pages,
    myLibrary.status
  );
});

function displayUserBook() {
  createTableRow(title.value, author.value, pages.value, bookStatus.value);
  console.log("this works");
}

function createTableRow(title, author, pages, status) {
  let row = document.createElement("tr");

  let c1 = document.createElement("td");
  let c2 = document.createElement("td");
  let c3 = document.createElement("td");
  let c4 = document.createElement("td");

  c1.innerText = title;
  c2.innerText = author;
  c3.innerText = pages;
  c4.innerText = status;

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
