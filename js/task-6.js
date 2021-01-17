const userInputRef = document.querySelector("#validation-input");
const validUserInput = Number(userInputRef.dataset.length);

userInputRef.addEventListener("blur", () => {
  if (userInputRef.value.length === validUserInput) {
    userInputRef.classList.add("valid");
    userInputRef.classList.remove("invalid");
  } else {
    userInputRef.classList.add("invalid");
    userInputRef.classList.remove("valid");
  }
});
