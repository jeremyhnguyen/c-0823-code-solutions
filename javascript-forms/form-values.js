const $form = document.querySelector('#contact-form');

$form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const name = $form.elements.name.value;
  const email = $form.elements.email.value;
  const message = $form.elements.message.value;
  const messageData = {
    name,
    email,
    message,
  };
  console.log('messageData:', messageData);
  $form.reset();
}
