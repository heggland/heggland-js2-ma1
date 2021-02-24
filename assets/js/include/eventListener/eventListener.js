import getItem from "./storage/getItem.js";

function eventListener(intel) {
  const checkbox = document.querySelectorAll(".load-product input");

  checkbox.forEach((button) => {
    button.addEventListener("click", handleClick);
  });
}

function handleClick(checkbox) {
  const id = checkbox.srcElement.value;
  const name = checkbox.srcElement.name;

  const currentList = getItem();

  const productExists = currentList.find(function (list) {
    return list.id === id;
  });

  if (productExists === undefined) {
    const product = { id: id, name: name };
    console.log(product);
    currentList.push(product);
    saveFavs(currentList);
  } else {
    const newList = currentList.filter((list) => list.id !== id);
    saveFavs(newList);
  }
}

function saveFavs(list) {
  localStorage.setItem("wishlist", JSON.stringify(list));
}

export function removeLocalStorage() {
  document.querySelector(".reset").addEventListener("click", () => {
    localStorage.removeItem("wishlist");
    window.location.reload();
  });
}

export default eventListener;
