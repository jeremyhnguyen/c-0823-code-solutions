const $tasklist = document.querySelector('.task-list');

$tasklist.addEventListener('click', completeTask);

function completeTask(event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);

  if (event.target && event.target.tagName === 'BUTTON') {
    const closest = event.target.closest('.task-list-item');
    console.log('closest:', closest);
    closest.remove();
  }
}
