function randomizer(...callbacks) {
  let maxTime = callbacks.length * 2;
  startTimer(maxTime);

  for (let i = 0; i < callbacks.length; i += 1) {
    setTimeout(callbacks[i], randomSecond(maxTime));
  }
}

function startTimer(maxTime) {
  let counter = 0;
  let timerLogger =  setInterval(() => {
    counter += 1;
    console.log(counter);
    if (counter >= maxTime) {
      clearInterval(timerLogger);
    }
  }, 1000)
}

function randomSecond(seconds) {
  return Math.floor(Math.random() * seconds) * 1000;
}

function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

randomizer(callback1, callback2, callback3);
