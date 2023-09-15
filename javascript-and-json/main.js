const books = [
  {
    isbn: '123',
    title: 'Cat in the Hat',
    author: 'Dr. Seuss',
  },
  {
    isbn: '456',
    title: 'Adventures of Huckleberry Finn',
    author: 'Mark Twain',
  },
  {
    isbn: '789',
    title: 'The Hobbit',
    author: 'J.R.R Tolkien',
  },
];

console.log('Books Array:', books);
console.log('typeof books:', typeof books);

const booksString = JSON.stringify(books);

console.log('JSON.stringify:', booksString);
console.log('typeof booksString:', typeof booksString);

const manualJSON = '{"id": "1", "name": "Mark"}';

console.log('manualJSON:', manualJSON);
console.log('typeof manualJSON:', typeof manualJSON);

const newObject = JSON.parse(manualJSON);

console.log('newObject:', newObject);
console.log('typeof newObject:', typeof newObject);
