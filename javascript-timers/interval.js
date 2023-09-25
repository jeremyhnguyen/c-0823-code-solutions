const $h1 = document.querySelector('.countdown-display');

const interval = setInterval(countdown, 1000);

let count = 3;
function countdown() {
  $h1.textContent = count;
  count--;

  if (count === -1) {
    $h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(interval);
  }
}
