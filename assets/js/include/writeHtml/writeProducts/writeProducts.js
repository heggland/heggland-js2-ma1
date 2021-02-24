import getItem from "../../eventListener/storage/getItem.js";

function writeProducts(intel) {
  document.querySelector(".load-product").innerHTML = `
  <table>
  <tr>
  <th class="product-name table-title">Product name</th>
  <th class="product-price table-title">Price</th>
  <th class="table-title"></th>
  </tr>
  <table class="product-content"></table>
  <table> `;

  const wishlist = getItem();

  for (let i = 0; i < intel.length; i++) {
    let productName = intel[i].name;
    let productPrice = intel[i].price;
    let productId = intel[i].id;

    let checkboxClass = `product-${productId}`;

    const doesObjectExist = wishlist.find(function (list) {
      return parseInt(list.id) === productId;
    });

    let control;
    if (doesObjectExist) {
      control = "checked";
    }

    document.querySelector(".product-content").innerHTML += `
 <tr>
    <td class="product-name">${productName}</td>
    <td class="product-price">${productPrice}</td>
    <td class="check">
    <input type="checkbox" name="${productName}" class="${checkboxClass}" value="${productId}" ${control}>
    <label for="product-${productId}"> Add to wishlist</label>
    </td></tr>
  
  `;
  }
}

export default writeProducts;
