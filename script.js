import Hour from "./widgets/hour.js";
import ThemeSelector from "./widgets/theme-selector.js";
import Temperature from "./widgets/temperature.js";

/**
 * @param {Component} component
 */
function add(component) {
    component.appendTo(document.body);
}

document.body.innerHTML = "";

const hour = new Hour();
add(hour);

const themes = new ThemeSelector([
    "forest",
    "beach",
]);
add(themes);

const temp = new Temperature();
add(temp);
