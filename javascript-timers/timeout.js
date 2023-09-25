const $message = document.querySelector('.message');

setTimeout(hello, 2000);

function hello() {
  $message.textContent = 'Hello There';
}
