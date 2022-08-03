/* eslint-disable semi */
const bookTitle = document.getElementById('book-title');
const authorName = document.getElementById('book-author');
const button = document.getElementById('submit');
const list = document.querySelector('#books-ul');
// const array = [];
// let counter = 0;
// let delcounter = 0;

class Collection {
  constructor() {
    this.bookArray = [];
    this.counter = 0;
    this.delcounter = 0;
  }
  
  addBook(book, author) {
    const object = {};
    object.id = this.counter;
    object.title = book;
    object.author = author;
    this.bookArray.push(object);
    // console.log(this.bookArray);
  }
  
  display(book, author) {
    const li = document.createElement('li');
    const removebtn = document.createElement('button');
    li.setAttribute('id', `${this.counter}`);
    li.textContent = `${book} by ${author}`;
    // REMOVE BUTTON
    removebtn.className = 'removebuttons'
    removebtn.textContent = 'Remove';
    removebtn.addEventListener('click', this.removeBook);
    li.appendChild(removebtn);
    list.appendChild(li);
  }

  removeBook (e) {
    e.preventDefault();
    const elid = e.target.parentNode.id
    const remotion = e.target.parentNode;
    const index = books.bookArray.indexOf(remotion)
    list.removeChild(remotion)
    books.bookArray.splice(index, 1);
    // console.log(books.bookArray);
    // books.delcounter += 1;
    dataform();
  }
}

const books = new Collection();

const dataform = () => {
  localStorage.setItem('data', JSON.stringify(books.bookArray));
};

button.addEventListener('click', (e) => {
  e.preventDefault();
  const book = bookTitle.value;
  const author = authorName.value;
  books.addBook(book, author);
  books.display(book, author);
  // RESET-VALUES
  authorName.value = '';
  bookTitle.value = '';
  // LOCAL-STORAGE
  dataform();
  // COUNTER-TRACKER
  books.counter += 1;
})

const mystorage = JSON.parse(localStorage.getItem('data').split(','));
document.addEventListener('DOMContentLoaded', () => {
  console.log(mystorage);
  mystorage.forEach((element) => {
    let book = element.title;
    let author = element.author;
    books.addBook(book, author);
    books.display(book, author);
    books.counter += 1;
  });
})
