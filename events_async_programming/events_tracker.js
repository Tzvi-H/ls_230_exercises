let divRed = document.querySelector('#red');
let divBlue = document.querySelector('#blue');
let divOrange = document.querySelector('#orange');
let divGreen = document.querySelector('#green');

function trackerObject() {
  let targets = [];
  let events = [];
  return {
    list() {
      return events.slice();
    },
    elements() {
      return targets.slice();
    },
    clear() {
      events.length = 0;
      targets.length = 0;
      return 0;
    },
    addTarget(target) {
      targets.push(target);
    },
    addEvent(event) {
      events.push(event);
    }
  } 
}
let tracker = trackerObject();

function track(callback) {
  return function(event) {
    if (event.target === event.currentTarget) {
      tracker.addTarget(event.target);
      tracker.addEvent(event);
    }
    callback(event);
  }
}

divRed.addEventListener('click', track(function(event) {
  document.body.style.background = 'red';
}));

divBlue.addEventListener('click', track(function(event) {
  event.stopPropagation();
  document.body.style.background = 'blue';
}));

divOrange.addEventListener('click', track(function(event) {
  document.body.style.background = 'orange';
}));

divGreen.addEventListener('click', track(function(event) {
  document.body.style.background = 'green';
}));

function test() {
  console.log(tracker.list().length === 4);
  console.log(tracker.elements()) 
//= [div#blue, div#red, div#orange, div#green]
  console.log(tracker.elements()[0] === document.querySelector('#blue') === true);
  console.log(tracker.elements()[3] === document.querySelector('#green') === true);
  console.log(tracker.clear() === 0);
  console.log(tracker.list());
//= []
  tracker.list()[0] = 'abc'
  console.log(tracker.list().length === 0);
}