let clickNumber = 0;

const $hotButton = document.querySelector('.hot-button');
// const $clickCount = document.querySelector('.click-count');

// function clicks(event) {
//   console.log('button clicked');
//   console.log('event:', event);
//   console.log('event target:', event.target);
//   clickNumber++;
// }

function userClicks($clickCount) {
  clickNumber++;
}

$hotButton.addEventListener('click', userClicks);

console.log(clickNumber);
// cool/tepid/warm/hot/nuclear
