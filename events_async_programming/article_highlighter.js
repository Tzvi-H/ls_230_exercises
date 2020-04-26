document.addEventListener('DOMContentLoaded', e => {
  document.body.addEventListener('click', addHighlight);
})

function removeHighlight() {
  let highlighted = document.querySelector('.highlight');
  if (highlighted) {
    highlighted.classList.remove('highlight');
  }
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
    node = document.querySelector('main');;
  }
  return node;
}