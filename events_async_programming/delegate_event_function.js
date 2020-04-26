var element1 = document.querySelector('table');
var element2 = document.querySelector('main h1');
var element3 = document.querySelector('main');

var callback = function(event) {
  alert('Target: ' + event.target.tagName + '\nCurrent Target: ' + event.currentTarget.tagName);
};

function delegateEvent(parentElement, selector, eventType, callback) {
   if (parentElement) {
     parentElement.addEventListener(eventType, e => {
       let delegators = Array.from(parentElement.querySelectorAll(selector));
       if (delegators.includes(e.target)) {
         callback(e);
       }
     })
     return true;
   }
}