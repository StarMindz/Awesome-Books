/* eslint-disable semi */
const form = document.getElementsByTagName('form');
const bookTitle = document.getElementById('book-title');
const authorName =document.getElementById('book-author');
const button = document.getElementById('submit');
const list = document.querySelector('#books-ul');


let array = new Array();
let counter = 0;

button.addEventListener('click', (e) => {
  e.preventDefault();
  const book = bookTitle.value;
  const author = authorName.value;
  const li = document.createElement('li');
  const removebtn = document.createElement('button');
  array.push(`${book} by ${author} `)
  li.textContent = `${array[counter]}`;
  removebtn.className = 'removebuttons'
  removebtn.textContent = 'Remove';
  removebtn.setAttribute('id', `removeid_${counter}`);
  li.appendChild(removebtn);
  list.appendChild(li);
  counter++;
})

