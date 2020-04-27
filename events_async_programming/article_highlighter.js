document.addEventListener('click', e => {
  removeHighlight();
  highlightElement(e.target);
})

function highlightElement(target) {
  let node;
  if (target.tagName === 'A') {
    node = document.querySelector(target.hash)
  } else if (target.tagName === 'ARTICLE' || target.parentElement.tagName === 'ARTICLE') {
    node = target.tagName === 'ARTICLE' ? target : target.parentElement;
  } else {
    node = document.querySelector('main');
  }
  node.classList.add('highlight');
}

function removeHighlight() {
  let elements = document.querySelectorAll('.highlight');
  [].forEach.call(elements, element => element.classList.remove('highlight'));
}
