import variables from "../variables.js";
import getItem from "../eventListener/storage/getItem.js";
import { removeLocalStorage } from "../eventListener/eventListener.js";

function wishlistHtml(intel) {
  variables(`write`).innerHTML = ``;

  variables(`write`).innerHTML = `
  <h3>Wishlist</h3> 
  <table>
  <tr>
  <th class="product-name table-title">Product name</th>
  <th class="product-price table-title">Price</th>
  </tr>
  <table class="product-content"></table>
  <table> `;

  const get = getItem();

  if (get.length === 0) {
    variables(`write`).innerHTML = "No items added to wishlist";
  }

  for (let i = 0; i < get.length; i++) {
    const getId = get[i].id;
    let getName = get[i].name;

    for (let i = 0; i < intel.length; i++) {
      let price = intel[i].price;
      let id = intel[i].id;

      if (id == getId) {
        var itemPrice = price;
        write(getName, itemPrice);
      }
    }
  }
}

function write(getName, itemPrice) {
  document.querySelector(".product-content").innerHTML += `
  <table class="marked-list">
  <tr>
  <td class="product-name">${getName}</td>
  <td class="product-price">${itemPrice}</td>
  </tr>
  <div class="remove"></div>
  <table>
 
  `;

  document.querySelector(
    ".reset"
  ).innerHTML = `<button class="reset">Remove localStorage</button>
`;
  removeLocalStorage();
}

export default wishlistHtml;
