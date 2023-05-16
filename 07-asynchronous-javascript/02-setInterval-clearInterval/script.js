console.clear();
console.log('setInterval & clearInterval');

let startInterval;

function startChange() {
  if (!startInterval) {
    startInterval = setInterval(changeColor, 2000);
  }
}

function startRandomChange() {
  if (!startInterval) {
    startInterval = setInterval(changerandomColor, 2000);
  }
}

function changeColor() {
  if (document.body.style.backgroundColor !== 'black') {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
}

function changerandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = `#${randomColor}`;
}

function stopChange() {
  clearInterval(startInterval);
  
  // interval variable still holds the value after clearing
  // so manually setting it to null to toggle between blck/white & random colors
  startInterval = null;
}

document.getElementById('cancel').addEventListener('click', stopChange);
document.getElementById('start').addEventListener('click', startChange);
document.getElementById('random').addEventListener('click', startRandomChange);
