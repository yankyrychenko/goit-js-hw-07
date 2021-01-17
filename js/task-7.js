const inputRef = document.querySelector("#font-size-control");
const textChange = document.querySelector("#text");

inputRef.addEventListener("input", (event) => {
  textChange.style.fontSize = event.currentTarget.value + "px";
});
