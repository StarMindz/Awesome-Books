/* eslint-disable semi */
const bookTitle = document.getElementById('book-title');
const authorName = document.getElementById('book-author');
const button = document.getElementById('submit');
const list = document.querySelector('#books-ul');
const array = [];
let counter = 0;
let delcounter = 0;

const dataform = () => {
  localStorage.setItem('data', JSON.stringify(array));
};

const removeBook = (e) => {
  e.preventDefault();
  const elid = e.target.parentNode.id
  const remotion = e.target.parentNode;
  const localcount = (elid - delcounter);
  list.removeChild(remotion);
  array.splice(localcount, 1);
  delcounter += 1;
  dataform();
}

button.addEventListener('click', (e) => {
  e.preventDefault();
  const book = bookTitle.value;
  const author = authorName.value;
  const li = document.createElement('li');
  const removebtn = document.createElement('button');
  const object = {};
  object.id = counter;
  object.title = book;
  object.author = author;
  array.push(object);
  li.setAttribute('id', `${counter}`);
  li.textContent = `${book} by ${author}`;
  // REMOVE BUTTON
  removebtn.className = 'removebuttons'
  removebtn.textContent = 'Remove';
  removebtn.addEventListener('click', removeBook);
  li.appendChild(removebtn);
  list.appendChild(li);
  // RESET-VALUES
  authorName.value = '';
  bookTitle.value = '';
  // LOCAL-STORAGE
  dataform();
  // COUNTER-TRACKER
  counter += 1;
})

const mystorage = JSON.parse(localStorage.getItem('data').split(','));
document.addEventListener('DOMContentLoaded', () => {
  mystorage.forEach(element => {
    const li = document.createElement('li');
    const removebtn = document.createElement('button');
    li.setAttribute('id', `${counter}`);
    li.textContent = `${element.title} by ${element.author}`;
    const object = {};
    object.id = counter;
    object.title = element.title;
    object.author = element.author;
    array.push(object);
    removebtn.className = 'removebuttons'
    removebtn.textContent = 'Remove';
    removebtn.addEventListener('click', removeBook);
    li.appendChild(removebtn);
    list.appendChild(li);
    delcounter += 1;
  });
})
