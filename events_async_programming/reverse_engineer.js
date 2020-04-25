let container = document.querySelector('#container');

document.querySelector('html').addEventListener('click', function(e) {
  if (!container.contains(e.target)) {
    container.style = 'display: none';
  }
});