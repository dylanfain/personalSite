import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
// import sliderEffect from "./scripts/slider.js";


import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

// Call the slider effect on the desired slider
// document.addEventListener('DOMContentLoaded', () => {
//     sliderEffect('.slider');
// });