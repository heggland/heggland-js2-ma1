import api from "./api/api.js";

function run() {
  if (window.location.toString().includes("wishlist")) {
    api(`wishlist`);
  } else {
    api();
  }
}

export default run;
