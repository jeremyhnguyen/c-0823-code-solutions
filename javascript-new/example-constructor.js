function ExampleConstructor() {}

console.log('value of EC.prototype:', ExampleConstructor.prototype);
console.log('typeof EC.prototype:', typeof ExampleConstructor.prototype);

const myFunction = new ExampleConstructor();

console.log('value of myFunction:', myFunction);

const isInstanceOf = myFunction instanceof ExampleConstructor;

console.log('value of isInstanceOf:', isInstanceOf);
