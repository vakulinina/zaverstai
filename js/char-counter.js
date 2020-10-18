// Подсчет символов в форме

// ТЗ показалось нелогичным, сделала так: прикрутила счетчик символов, 
// при вводе меньше минимума текст подсвечивается красным, и блокируется кнопка отправки. 
// На ввод больше максимума уже стоит ограничение в атрибуте элемента.

let messageText = document.querySelector('textarea');
let charCounter = document.querySelector('.char-counter');
let contactForm = document.querySelector('form');
let contactSubmit = document.querySelector('.contact-submit');

messageText.oninput = function () {
  charCounter.textContent = messageText.value.length;
  if (messageText.value.length < 10) {
    messageText.style.color = 'red';
    contactSubmit.disabled = true;
  } else {
    messageText.style.color = '#202117';
    contactSubmit.disabled = false;
  }
}