import Tile from "./tile.js";

export default class ThemeSelector extends Tile {
    constructor (themes) {
        super();
        this.themes = themes;
        themes.forEach((name) => {
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = `./themes/${name}.css`;
            document.head.appendChild(link);
        });
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
        super.onAppend();
        this.select(0);
    }

    select (index) {
        document.body.classList.remove(this.themes[this.current]);
        document.body.classList.add(this.themes[index]);
        this.current = index;
    }
}
