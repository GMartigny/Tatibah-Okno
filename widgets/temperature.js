import Tile from "./tile.js";

export default class Temperature extends Tile {
    constructor () {
        super();
    }

    onAppend () {
        this.html.dataset.title = "25°";
        return super.onAppend();
    }
}