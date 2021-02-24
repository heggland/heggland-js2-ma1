import variables from "../variables.js";
import writeProducts from "./writeProducts/writeProducts.js";
import search from "../search/search.js";
import eventListener from "../eventListener/eventListener.js";
import wishlistHtml from "./wishlistHtml.js";

function indexHtml(intel, value = ``) {
  variables(`write`).innerHTML = ``;

  variables(`write`).innerHTML = `
  <h3>Products</h3> 
  <input class="filter-products" placeholder="Filter by price.." />
  <div class="load-product"></div>
`;

  document.querySelector(".load-product").innerHTML = `Loading...`;

  if (value == `wishlist`) {
    wishlistHtml(intel);
  } else {
    search(intel);
    writeProducts(intel);
    eventListener(intel);
  }
}

export default indexHtml;
