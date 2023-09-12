const $lightbulb = document.querySelector('div');
const $body = document.querySelector('body');

$lightbulb.addEventListener('click', bulbPower);

function bulbPower() {
  if ($lightbulb.className === 'on') {
    $body.className = 'dark';
    $lightbulb.className = 'off';
  } else {
    $body.className = 'light';
    $lightbulb.className = 'on';
  }
}
