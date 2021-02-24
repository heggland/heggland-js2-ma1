import variables from "../variables.js";
import indexHtml from "../writeHtml/indexHtml.js";

import displayMessage from "./displayMessage.js";

async function api(value = ``) {
  try {
    const getUrl = variables(`url`);
    const response = await fetch(getUrl);
    const result = await response.json();

    const intel = result.data;

    if (value == `wishlist`) {
      indexHtml(intel, value);
    } else {
      indexHtml(intel);
    }
  } catch (error) {
    console.log(error);
    variables(`write`).innerHTML = displayMessage("error", error);
  }
}

export default api;
