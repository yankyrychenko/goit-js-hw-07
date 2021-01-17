const userInputRef = document.querySelector('input[type="text"]');
const placeOutputRef = document.querySelector("#name-output");

userInputRef.addEventListener("input", (event) => {
  placeOutputRef.textContent =
    userInputRef.value.trim() === "" ? "незнакомец" : event.target.value.trim();
});
