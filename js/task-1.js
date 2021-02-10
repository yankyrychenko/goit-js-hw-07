const categRef = document.querySelector('#categories');
const itemRef = document.querySelectorAll('.item');

console.log(`В списке ${categRef.children.length} категории`);

itemRef.forEach(e =>
  console.log(
    `Категория: ${e.firstElementChild.textContent}\nКоличество элементов:${e.lastElementChild.children.length}`,
  ),
);
