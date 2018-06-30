import Component from "./component.js";
import draggable from "./draggable.js";

export default class Tile extends Component {
    constructor () {
        super();
        this.html.classList.add("Tile");
    }

    /**
     * @inheritDoc
     * @return {Tile}
     */
    onAppend () {
        draggable(this.html);
        return super.onAppend();
    }

    set title (value) {
        this.html.dataset.title = value.toString();
    }

    get title () {
        return this.html.dataset.title;
    }

    set paragraph (value) {
        this.html.dataset.paragraph = value.toString();
    }

    get paragraph () {
        return this.html.dataset.paragraph;
    }
}
