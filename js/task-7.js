const rangeRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

rangeRef.addEventListener('input', fsControl);

function fsControl(e) {
  textRef.style.fontSize = e.currentTarget.value + 'px';
}
