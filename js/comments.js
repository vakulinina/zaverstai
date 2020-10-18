// Добавление нового комментария

let commentsForm = document.querySelector('.comments-form');
let commentName = document.querySelector('.comment-form-name');
let commentText = document.querySelector('.comment-form-text');
let commentList = document.querySelector('.comment-list');

commentsForm.onsubmit = function (evt) {
  evt.preventDefault();

  let newComment = document.createElement('li');
  newComment.classList.add('comment');
  commentList.append(newComment);

  let commentHeader = document.createElement('div');
  commentHeader.classList.add('comment-header');
  newComment.append(commentHeader);

  let avatar = document.createElement('img');
  avatar.classList.add('avatar');
  avatar.setAttribute('src', 'img/avatar-3.png');
  commentHeader.append(avatar);

  let name = document.createElement('p');
  name.textContent = commentName.value;
  commentHeader.append(name);  

  let text = document.createElement('p');
  text.classList.add('comment-text');
  text.textContent = commentText.value;
  newComment.append(text);

  commentText.value = '';
}