const $tabContainer = document.querySelector('.tab-container');

const $tab = document.querySelectorAll('.tab');
const $view = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', tabClicked);

function tabClicked(event) {
  if (event.target.matches('.tab')) {
    console.log('event.target:', event.target);
    console.log('tab:', $tab);

    const $dataView = event.target.getAttribute('data-view');

    console.log('view:', $view);
    console.log('data view:', $dataView);

    for (let i = 0; i < $view.length; i++) {
      const $viewDataView = $view[i].getAttribute('data-view');
      if ($viewDataView !== $dataView) {
        $view[i].classList.add('hidden');
      } else {
        $view[i].classList.remove('hidden');
      }
    }

    for (let i = 0; i < $tab.length; i++) {
      if ($tab[i] !== event.target) {
        $tab[i].classList.remove('active');
      } else {
        $tab[i].classList.add('active');
      }
    }
  }
}
