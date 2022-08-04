const bookTitle = document.getElementById('book-title');
const authorName = document.getElementById('book-author');
const button = document.getElementById('submit');
const list = document.querySelector('#books-ul');

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
    this.display(book, author);
  }

  display(book, author) {
    const li = document.createElement('li');
    const removebtn = document.createElement('button');
    li.setAttribute('id', `${this.counter}`);
    li.className = 'lists';
    li.textContent = `${book} by ${author}`;
    // REMOVE BUTTON
    removebtn.className = 'removebuttons';
    removebtn.textContent = 'Remove';
    li.appendChild(removebtn);
    list.appendChild(li);
  }

  removeBook() {
    const buttons = document.querySelectorAll('.removebuttons');
    buttons[buttons.length - 1].addEventListener('click', (e) => {
      e.preventDefault();
      const elid = e.target.parentNode.id;
      const remotion = e.target.parentNode;
      const localcount = (elid - this.delcounter);
      list.removeChild(remotion);
      this.bookArray.splice(localcount, 1);
      this.delcounter += 1;
      this.dataLog();
    });
  }

  dataLog() {
    localStorage.setItem('data', JSON.stringify(this.bookArray));
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
  books.removeBook();
  // RESET-VALUES
  authorName.value = '';
  bookTitle.value = '';
  // LOCAL-STORAGE
  dataform();
  // COUNTER-TRACKER
  books.counter += 1;
});

const mystorage = JSON.parse(localStorage.getItem('data').split(','));
document.addEventListener('DOMContentLoaded', () => {
  mystorage.forEach((element) => {
    const { title, author } = element;
    books.addBook(title, author);
    books.removeBook();
    books.counter += 1;
  });
});

// document.addEventListener('click', (e) => {})