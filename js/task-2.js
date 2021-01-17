const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsRef = document.querySelector("#ingredients");

const createItemIngredient = (ingredient) => {
  const itemRef = document.createElement("li");
  itemRef.textContent = ingredient;

  return itemRef;
};

const ingredientCard = ingredients.map((ingredient) =>
  createItemIngredient(ingredient)
);

ingredientsRef.append(...ingredientCard);
