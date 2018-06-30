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
    }

    /**
     * @inheritDoc
     * @return {Hour}
     */
    onAppend () {
        this.interval = setInterval(() => {
            this.update();
        }, 1000);
        this.paragraph = "Nantes";
        this.update();
        return super.onAppend();
    }

    /**
     * @return {Hour}
     */
    update () {
        this.title = getNow();
        return this;
    }

    /**
     * @inheritDoc
     * @return {Hour}
     */
    onDestroy () {
        clearInterval(this.interval);
        return super.onDestroy();
    }
}