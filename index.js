/* eslint-disable semi */
const form = document.getElementsByTagName('form');
const bookTitle = document.getElementById('book-title');
const authorName =document.getElementById('book-author');
const button = document.getElementById('submit');
const list = document.querySelector('#books-ul');


// let array = new Array();
let counter = 0;

let library = [];

function displayElement () {
  let htmlContent = '';
  for (let item of library) {
    htmlContent += `<li id='${item.id}' class = 'book-item'> 
    <p>${item.book}</p>
    <p>${item.author}</p>
    <button id= '${item.id}_button' type = 'submit' class='button' value="${item.id}">Remove</button>
  </li>`
  }
  list.innerHTML = htmlContent;
}

function getButtons() {
  const buttons = document.querySelectorAll('.button');
  buttons.forEach(element => {
    const id = element.id;
    element.addEventListener('click', () => {
      console.log(id);
      library = library.filter((item) => {
        item.id !== id;
      });
      console.log('Im here')
      displayElement();
    })
  });
} 

function createElement(bookname, authorname, id_no) {
  let element = {id: id_no, book: bookname, author: authorname}
  library.push(element);
  displayElement ();
}
 
// function remove (id) {
//     buttonEl.addEventListener('click', () => {
//       console.log('text')
//     });
// }

button.addEventListener('click', (e) => {
    e.preventDefault();
    const book = bookTitle.value;
    const author = authorName.value;
  //   const li = document.createElement('li');
  //   const removebtn = document.createElement('button');
  //   array.push(`${book} by ${author} `)
  //   li.textContent = `${array[counter]}`;
  //   removebtn.className = 'removebuttons'
  //   removebtn.textContent = 'Remove';
  //   removebtn.setAttribute('id', `removeid_${counter}`);
  //   li.appendChild(removebtn);
  //   list.appendChild(li);
  //   counter++;
    createElement (book, author, counter);
    counter += 1;
    bookTitle.value = '';
    authorName.value  = '';
    getButtons();
  });

