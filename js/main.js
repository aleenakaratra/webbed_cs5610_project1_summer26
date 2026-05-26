import { initMetroLine } from "./metroLine.js";
import { updateFooterYear } from "./footer.js";

function init() {
  initMetroLine();
  updateFooterYear();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
