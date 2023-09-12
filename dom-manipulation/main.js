let clickNumber = 0;

const $hotButton = document.querySelector('.hot-button');
const $clickCount = document.querySelector('.click-count');

$hotButton.addEventListener('click', userClicks);

function userClicks(event) {
  clickNumber++;
  let temp;
  if (clickNumber < 4) {
    temp = 'cold';
  } else if (clickNumber < 7) {
    temp = 'cool';
  } else if (clickNumber < 10) {
    temp = 'tepid';
  } else if (clickNumber < 13) {
    temp = 'warm';
  } else if (clickNumber < 16) {
    temp = 'hot';
  } else {
    temp = 'nuclear';
  }
  $hotButton.className = 'hot-button ' + temp;
  $clickCount.textContent = 'Clicks:' + clickNumber;
}

// cool/tepid/warm/hot/nuclear
