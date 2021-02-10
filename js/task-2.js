const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients');

const itemsCreate = ingredients.map(e => {
  const itemRef = document.createElement('li');
  itemRef.textContent = e;
  return itemRef;
});

ingredientsRef.append(...itemsCreate);
