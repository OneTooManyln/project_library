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
const removeBtn = document.querySelectorAll(".remove");

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  displayUserBook();
  addBookToLibrary();
});

removeBtn.forEach((removeBtn) => {
  removeBtn.addEventListener("click", (e) => {
    const bookTitle =
      e.currentTarget.parentNode.parentNode.childNodes[1].innerText;
    const bookAtr = e.currentTarget.closest("[data-id]");
    console.log(bookTitle);
    removeBook(bookAtr);
  });
});

function removeBook(book) {
  if (typeof book == "number") {
    myLibrary.splice(book, book + 1);
    console.table(myLibrary);
  } else if (typeof book == "object") {
    book.remove();
  }
}

function getBook(title) {
  for (book of myLibrary) {
    if (book.title === title) {
      return myLibrary.indexOf(book);
    }
  }
}

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

function addArrayBook() {
  while (table.children.length > 1) {
    table.innerHTML = "";
  }
  myLibrary.forEach((myLibrary) => {
    createTableRow(
      myLibrary.title,
      myLibrary.author,
      myLibrary.pages,
      myLibrary.status
    );
  });
}

function displayUserBook() {
  createTableRow(title.value, author.value, pages.value, bookStatus.value);
  console.log("this works");
}

let domBooks;

function createTableRow(title, author, pages, status) {
  let row = document.createElement("tr");
  row.dataset.id = title;

  let c1 = document.createElement("td");
  let c2 = document.createElement("td");
  let c3 = document.createElement("td");
  let c4 = document.createElement("td");
  let c5 = document.createElement("td");

  c1.innerText = title;
  c2.innerText = author;
  c3.innerText = pages;
  c4.innerText = status;
  c5.innerHTML = '<button class = "remove">Remove</button>';

  row.appendChild(c1);
  row.appendChild(c2);
  row.appendChild(c3);
  row.appendChild(c4);
  row.appendChild(c5);

  table.appendChild(row);
  setListener(c5);
}

function setListener(element) {
  element.addEventListener("click", (e) => {
    const bookTitle = e.currentTarget.parentNode.childNodes[0].innerText;
    removeBook(getBook(bookTitle));
    let domBooks = document.getElementById("dom-books");
    console.log(domBooks.getAttribute("data-id"));
    addArrayBook();
  });
}
addArrayBook();
