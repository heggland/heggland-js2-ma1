function getItem() {
  const list = localStorage.getItem("wishlist");

  if (list === null) {
    return [];
  } else {
    return JSON.parse(list);
  }
}

export default getItem;
