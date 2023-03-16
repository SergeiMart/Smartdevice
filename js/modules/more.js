if (document.querySelector('[data-more="parent"]')) {
  const moreButton = document.querySelector('[data-more="button"]');
  const parent = document.querySelector('[data-more="parent"]');
  parent.classList.remove('company--no-js');

  moreButton.addEventListener('click', function () {
    if (parent.classList.contains('short')) {
      parent.classList.remove('short');
      moreButton.textContent = 'Свернуть';
    } else {
      parent.classList.add('short');
      moreButton.textContent = 'Подробнее';
    }
  });
}
