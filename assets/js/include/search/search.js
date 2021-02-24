import eventListener from "../eventListener/eventListener.js";
import writeProducts from "../writeHtml/writeProducts/writeProducts.js";

function search(intel) {
  const filterSearch = document.querySelector(".filter-products");
  filterSearch.onkeyup = function key(event) {
    const searchValue = event.target.value;

    run(intel, searchValue);
  };
}

function run(intel, searchValue) {
  const filteredIntel = intel.filter(function (intel) {
    if (searchValue > parseFloat(intel.price)) {
      return true;
    }
  });

  if (searchValue == 0) {
    writeProducts(intel);
  } else {
    writeProducts(filteredIntel);
    eventListener(filteredIntel);
  }

  console.log(filteredIntel);

  if (document.querySelector(".product-content").innerHTML == ``) {
    /*  window.alert("none found"); */
    document.querySelector(
      ".product-content"
    ).innerHTML = `<span>none found</span>`;
  }
}

export default search;
