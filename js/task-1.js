const selectCategoriesById = document.querySelector("#categories");

const amountOfCategories = selectCategoriesById.children.length;
console.log(`В списке ${amountOfCategories} категории`);

const mainListItem = document.querySelectorAll(".item");

mainListItem.forEach((elem) =>
  console.log(
    `Категория: ${elem.firstElementChild.textContent}\nКоличество элементов:${elem.lastElementChild.children.length}`
  )
);
