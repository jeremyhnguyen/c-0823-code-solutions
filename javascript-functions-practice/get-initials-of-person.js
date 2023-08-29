/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  const i = person.firstName.charAt(0) + person.lastName.charAt(0);

  return i;
}
