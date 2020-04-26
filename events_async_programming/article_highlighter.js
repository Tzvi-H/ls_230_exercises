let main;
let articles = [];
let links = [];

document.addEventListener('DOMContentLoaded', e => {
  main = document.querySelector('main');
  articles = Array.from(document.querySelectorAll('article'));
  links = Array.from(document.querySelectorAll('li > a'));

  document.body.addEventListener('click', addHighlight);
})

function removeHighlight() {
  main.classList.remove('highlight');
  articles.forEach(article => article.classList.remove('highlight'));
}

function addHighlight(event) {
  event.stopPropagation();
  removeHighlight();
  let node = calculateNode(event.target);
  node.classList.add('highlight');
}

function calculateNode(target) {
  let node;
  if (target.tagName === 'A') {
    node = document.querySelector(target.getAttribute('href'));
  } else if (target.parentNode.tagName === 'ARTICLE') {
    node = target.parentNode;
  } else {
    node = main;
  }
  return node;
}