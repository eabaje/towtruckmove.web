import { docReady } from "./utils";
import navbarInit from "./bootstrap-navbar";
import detectorInit from "./detector";
import scrollToTop from "./scroll-to-top";

// /* -------------------------------------------------------------------------- */
// /*                            Theme Initialization                            */
// /* -------------------------------------------------------------------------- */
const themeInit = () => {
  docReady(navbarInit);
  docReady(detectorInit);
  docReady(scrollToTop);
};
export default themeInit;
