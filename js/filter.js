// Фильтрация

let filter = document.querySelector('.filter');
let cards = document.querySelectorAll('.card');

filter.onchange = function () {
  for (let card of cards) {
    if (card.dataset.category !== filter.value && filter.value !== 'all') {
      card.classList.add('hidden');
    } else {
      card.classList.remove('hidden');
    }
  } 
}