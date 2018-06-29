import Component from "./component.js";
import draggable from "./draggable.js";

export default class Tile extends Component {
    constructor () {
        super();
        this.html.classList.add("Tile");
    }

    onAppend () {
        draggable(this.html);
    }
}
