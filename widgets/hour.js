import Tile from "./tile.js";

/**
 * @param {*} str
 * @return {String}
 */
function padToTwo(str) {
    return str.toString().padStart(2, "0");
}

/**
 * @return {String}
 */
function getNow() {
    const now = new Date();
    const hours = padToTwo(now.getHours());
    const minutes = padToTwo(now.getMinutes());
    const seconds = padToTwo(now.getSeconds());
    return `${hours}:${minutes}:${seconds}`;
}

export default class Hour extends Tile {
    constructor () {
        super();
        this.html.dataset.paragraph = "Nantes";
    }

    onAppend () {
        this.interval = setInterval(() => {
            this.update();
        }, 1000);
        this.update();
        super.onAppend();
    }

    update () {
        this.html.dataset.title = getNow();
    }

    onDestroy () {
        clearInterval(this.interval);
    }
}