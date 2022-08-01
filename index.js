const form = document.getElementsByTagName('form');
const bookTitle = document.getElementById('book-title');
const authorName =document.getElementById('book-author');
const button = document.getElementById('submit')
const listDisplay = document.querySelector('#book-list');

let array = new Array();
let counter = 0;

button.addEventListener('click', (e) => {
  e.preventDefault();
  const book = bookTitle.value;
  const author = authorName.value;
  const ul = document.createElement('ul');
  const li = document.createElement('li');
  const removebtn = document.createElement('button');
  array.push(`${book} by ${author} `)
  li.textContent = `${array[counter]}`;
  removebtn.textContent = 'Remove';
  li.appendChild(removebtn);
  ul.appendChild(li);
  listDisplay.appendChild(ul);
  counter++;
})

