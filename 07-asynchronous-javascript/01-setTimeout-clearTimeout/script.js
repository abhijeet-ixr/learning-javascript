console.clear();
console.log('setTimeout & clearTimeout');

setTimeout(() => console.log('Hello 1'), 2000);
setTimeout(() => console.log('Hello 2'), 0);
console.log('Hello 3');

// hello 3 gets logged first as even though one of the timeout has 0 delay
// but it will be treated as normal callback
// and would go through call back queue and then to call stack for execution

const timer = setTimeout(
  () =>
    (document.querySelector('h1').textContent = 'Timeout call back executed'),
  3000
);

document.getElementById('cancel').addEventListener('click', () => {
  clearTimeout(timer);
  console.log('Timeout cancelled');
});