const bookshelf = [
  {
    isbn: '978-1491929483',
    title:
      'Introduction to JavaScript Object Notation: A To-the-Point Guide to JSON',
    author: 'Lindsay Bassett',
  },
  {
    isbn: '978-1484218624',
    title: 'JSON Quick Syntax Reference',
    author: 'Wallace Jackson',
  },
  {
    isbn: '978-0692232699',
    title:
      "Build APIs You Won't Hate: Everyone and their dog wants an API, so you should probably learn how to build them",
    author: 'Phil Sturgeon & Laura Bohill',
  },
];

const secondBookAuthorName = bookshelf[1].author;
const firstBookISBN = bookshelf[0].isbn;
const thirdBookTitle = bookshelf[2].title;

console.log('The name of the second author is:', secondBookAuthorName + '.');
console.log('The ISBN of the first book is:', firstBookISBN + '.');
console.log('The title of the third book is:', thirdBookTitle + '.');
