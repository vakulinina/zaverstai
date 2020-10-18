// Подсчет символов в форме

// ТЗ показалось нелогичным, сделала так: прикрутила счетчик символов, 
// при вводе меньше минимума текст подсвечивается красным, и блокируется кнопка отправки. 
// На ввод больше максимума уже стоит ограничение в атрибуте элемента.

let emailText = document.querySelector('.email-text');
let charCounter = document.querySelector('.char-counter');
let contactForm = document.querySelector('.contact-form');
let contactSubmit = document.querySelector('.contact-submit');

emailText.oninput = function () {
  charCounter.textContent = emailText.value.length;
  if (emailText.value.length < 10) {
    emailText.style.color = 'red';
    contactSubmit.disabled = true;
  } else {
    emailText.style.color = '#202117';
    contactSubmit.disabled = false;
  }
}