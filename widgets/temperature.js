import Tile from "./tile.js";

export default class Temperature extends Tile {
    constructor () {
        super();
    }

    toHTML () {
        const div = super.toHTML();



        return div;
    }

    onAppend () {
        this.title = "25°";
        this.paragraph = "\uf0c2";
        return super.onAppend();
    }
}