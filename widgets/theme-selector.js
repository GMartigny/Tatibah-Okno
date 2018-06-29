import Tile from "./tile.js";

export default class ThemeSelector extends Tile {
    /**
     * @param {Array<String>} themes
     */
    constructor (themes) {
        super();
        this.themes = themes;
        this.current = null;
    }

    onAppend () {
        this.themes.forEach((name, index) => {
            const option = document.createElement("div");
            option.textContent = name;
            option.className = "option";
            this.html.appendChild(option);
            option.addEventListener("click", () => {
                this.select(index);
            });
        });
        this.select(0);
        return super.onAppend();
    }

    /**
     * @param {Number} index
     * @return {ThemeSelector}
     */
    select (index) {
        document.body.classList.remove(this.themes[this.current]);
        document.body.classList.add(this.themes[index]);
        this.current = index;
        return this;
    }
}
