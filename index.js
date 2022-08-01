const form = document.getElementsByTagName('form');
const bookTitle = document.getElementById('book-title');
const authorName =document.getElementById('book-author');
const button = document.getElementById('submit')

let name = "";
let book = "";

button.addEventListener('click', function (e) {
  name = form.author.value;
  book = form.title.value;

  console.log(name);
  e.preventDefault();
});
console.log("text")