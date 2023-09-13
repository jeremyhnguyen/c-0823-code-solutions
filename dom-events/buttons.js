function handleClick(event) {
  console.log('button clicked');
  console.log('event:', event);
  console.log('event.target:', event.target);
}

const $clickbutton = document.querySelector('.click-button');

$clickbutton.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log('event:', event);
  console.log('event.target:', event.target);
}

const $hoverbutton = document.querySelector('.hover-button');

$hoverbutton.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event:', event);
  console.log('event.target:', event.target);
}

const $doublebutton = document.querySelector('.double-click-button');

$doublebutton.addEventListener('dblclick', handleDoubleClick);
