export default class Component {
    constructor () {
        this.html = this.toHTML();
    }

    /**
     * @return {HTMLElement}
     */
    toHTML () {
        const div = document.createElement("div");
        div.className = this.constructor.name;
        return div;
    }

    /**
     * @param {HTMLElement} parent
     * @return Component
     */
    appendTo (parent) {
        parent.appendChild(this.html);
        this.onAppend();
        return this;
    }

    /**
     * @return {Component}
     */
    remove () {
        this.html.remove();
        this.onDestroy();
        return this;
    }

    onAppend () {}

    onDestroy () {}
}
