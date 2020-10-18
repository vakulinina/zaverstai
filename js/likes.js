// Лайки

let likeButton = document.querySelector('.like-button');
console.log(likeButton);
let likesCounter = document.querySelector('.likes-counter');

let likes = document.querySelectorAll('.like');

likeButton.onclick = function () {
  for (let like of likes) {
    like.classList.toggle('active')
  }
  if (likeButton.classList.contains('liked')) {
    likesCounter.textContent--;
    likeButton.classList.remove('liked');
  } else {
    likesCounter.textContent++;
    likeButton.classList.add('liked');
  }
}