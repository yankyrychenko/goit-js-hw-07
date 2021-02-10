const incrementRef = document.querySelector('button[data-action="increment"]');
const decrementRef = document.querySelector('button[data-action="decrement"]');
const valueRef = document.querySelector('#value');

incrementRef.addEventListener('click', increment);
decrementRef.addEventListener('click', decrement);

let counterValue = 0;

function increment() {
  counterValue += 1;
  valueRef.textContent = counterValue;
}

function decrement() {
  if (counterValue > 0) counterValue -= 1;
  valueRef.textContent = counterValue;
}
