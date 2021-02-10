const inputRef = document.querySelector('input');
const renderRef = document.querySelector('button[data-action="render"]');
const destroyRef = document.querySelector('button[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');

renderRef.addEventListener('click', render);
destroyRef.addEventListener('click', destroy);

function render() {}

function destroy() {
  boxesRef.textContent = '';
}

function generateRandomColor() {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}
