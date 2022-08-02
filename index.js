/* eslint-disable no-array-constructor */
/* eslint-disable semi */
const bookTitle = document.getElementById('book-title');
const authorName = document.getElementById('book-author');
const button = document.getElementById('submit');
const list = document.querySelector('#books-ul');
const array = new Array();
let counter = 0;

// eslint-disable-next-line no-unused-vars
const removeBook = (e) => {
  const remotion = e.target.parentNode;
  list.removeChild(remotion);
}

const dataform = () => localStorage.setItem('data', array);

button.addEventListener('click', (e) => {
  e.preventDefault();
  const book = bookTitle.value;
  const author = authorName.value;
  const li = document.createElement('li');
  const removebtn = document.createElement('button');
  array.push(`${book} by ${author} `)
  li.setAttribute('id', `book_${counter}`);
  li.textContent = `${array[counter]}`;
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
