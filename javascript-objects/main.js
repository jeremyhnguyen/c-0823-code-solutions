const student = { firstName: 'Jeremy', lastName: 'Nguyen', age: 27 };
const fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName: ' + fullName);

student.livesInIrvine = true;
student.previousOccupation = 'Production Assistant';

console.log('value of student.livesInIrvine: ' + student.livesInIrvine);
console.log(
  'value of student.previousOccupation: ' + student.previousOccupation
);
console.log('value of student: ', student);

const vehicle = { make: 'Tesla', model: 'Y', year: 2023 };

vehicle['color'] = 'white';
vehicle['isConvertible'] = 'no';

console.log('value of vehicle: ', vehicle);

const pet = { name: 'Austin', type: 'dog' };

delete pet.name;
delete pet.type;

console.log('value of pet: ' + pet);
