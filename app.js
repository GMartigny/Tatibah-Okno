import Hour from "./widgets/hour.js";
import ThemeSelector from "./widgets/theme-selector.js";
import Temperature from "./widgets/temperature.js";
import Electric from "./widgets/electric.js";

/**
 * @param {Component} component
 */
function add(component) {
    component.appendTo(document.body);
}

document.body.innerHTML = "";

const hour = new Hour();
add(hour);

const themes = new ThemeSelector({
    f1bb: [
        "wilderness",
        "journey",
        "dew",
    ],
    f5ca: [
        "amber",
        "cotton",
        "dream"
    ],
    f185: [
        "bright",
        "eternity",
        "lost",
    ],
});
add(themes);

const temp = new Temperature();
add(temp);

const electric = new Electric([
    0.1, 0.5, 0.6, 0.3, 0.2, 0.3
]);
add(electric);
