/* exported getStudentNames */
function getStudentNames(students) {
  const namesArr = [];

  for (let i = 0; i < students.length; i++) {
    namesArr.push(students[i].name);
  }
  return namesArr;
}
