import Tile from "./tile.js";

export default class Electric extends Tile {
    /**
     * @param {Array<Number>} history
     */
    constructor (history) {
        super();
        this.history = history;
    }

    onAppend () {
        this.title = "32Kw";
        const history = document.createElement("div");
        history.className = "history";
        this.html.appendChild(history);
        this.history.forEach((value) => {
            const bar = document.createElement("div");
            bar.className = "bar";
            bar.style.height = `${value * 100}%`;
            history.appendChild(bar);
        });
        return super.onAppend();
    }
}