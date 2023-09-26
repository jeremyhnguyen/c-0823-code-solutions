// ---Object---

function NewObj(value1, value2, value3) {
  this.key1 = value1;
  this.key2 = value2;
  this.key3 = value3;
}

const anObject = new NewObj(1, 2, 3);

console.log('value of anObject:', anObject);
console.log('typeof anObject:', typeof anObject);

// ---Array---

const anArray = new Array();

console.log('value of anArray:', anArray);
console.log('type of anArray:', typeof anArray);

// ---Function---

const aFunction = new Function();

aFunction();

console.log('values of aFunction:', aFunction);
console.log('type of aFunction:', typeof aFunction);

// ---String---

const aString = new String();

console.log('value of aString:', aString);
console.log('typeof aString:', typeof aString);

// ---Number---

const aNumber = new Number();

console.log('value of aNumber:', aNumber);
console.log('typeof aNumber:', typeof aNumber);

// ---Boolean---

const aBoolean = new Boolean();

console.log('value of aBoolean:', aBoolean);
console.log('typeof aBoolean:', typeof aBoolean);
