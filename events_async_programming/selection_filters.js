let form = document.getElementById('selection-filters');
let selectClassifications = document.getElementById('animal-classifications');
let selectAnimals = document.getElementById('animals');
let resetButton = document.getElementById('clear');
let classToAnimals = {
  'Vertebrate': ['Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'],
  'Warm-blooded': ['Bear', 'Whale', 'Ostrich'],
  'Cold-blooded': ['Salmon', 'Turtle'],
  'Mammal': ['Bear', 'Whale'],
  'Bird': ['Ostrich']
};
let animalsToClasses = {
  'Bear':	['Vertebrate', 'Warm-blooded', 'Mammal'],
  'Turtle':	['Vertebrate', 'Cold-blooded'],
  'Whale':	['Vertebrate', 'Warm-blooded', 'Mammal'],
  'Salmon':	['Vertebrate', 'Cold-blooded'],
  'Ostrich':	['Vertebrate', 'Warm-blooded', 'Bird']
};

resetButton.addEventListener('click', e => {
  e.preventDefault();
  form.reset();
  showChildren(selectAnimals);
  showChildren(selectClassifications);
})

selectClassifications.addEventListener('input', e => {
  let classification = e.target.value;
  if (classification !== selectClassifications.firstElementChild.value) {
    hideChildren(selectAnimals, classToAnimals[classification]);
  } else {
    showChildren(selectAnimals);
  }
})

selectAnimals.addEventListener('input', e => {
  let animal = e.target.value;
  if (animal !== selectAnimals.firstElementChild.value) {
    hideChildren(selectClassifications, animalsToClasses[animal]);
  } else {
    showChildren(selectClassifications);
  }
})

function hideChildren(node, list) {
  [].forEach.call(node.children, child => {
    if (list.indexOf(child.value) >= 0) {
      child.hidden = false;
    } else {
      child.hidden = true;
    }
  })
  let firstVisibleChild = [].find.call(node.children, child => child.hidden === false);
  firstVisibleChild.selected = true;
}

function showChildren(node) {
  [].forEach.call(node.children, child => {
    child.hidden = false;
  })
  node.firstElementChild.selected = true;
}