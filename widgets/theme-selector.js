import Component from "./component.js";

export default class ThemeSelector extends Component {
    /**
     * @param {Object} themes
     */
    constructor (themes) {
        super();
        this.themes = themes;
        this.current = null;
    }

    /**
     * @inheritDoc
     * @return {ThemeSelector}
     */
    onAppend () {
        Object.keys(this.themes).forEach((name) => {
            const category = document.createElement("div");
            category.className = `category ${name}`;
            category.dataset.icon = String.fromCharCode(parseInt(name, 16));
            this.html.appendChild(category);

            const themes = document.createElement("div");
            themes.className = "themes";
            category.appendChild(themes);

            this.themes[name].forEach((themeName) => {
                const option = document.createElement("div");
                option.className = `theme ${themeName}`;
                option.style.backgroundImage = `url("./assets/themes/${themeName}.jpg")`;
                option.addEventListener("click", () => {
                    this.select(themeName);
                });
                themes.appendChild(option);
            });
        });
        this.select(this.themes[Object.keys(this.themes)[0]][0]);
        return super.onAppend();
    }

    /**
     * @param {String} theme
     * @return {ThemeSelector}
     */
    select (theme) {
        document.body.style.backgroundImage = `url("./assets/themes/${theme}.jpg")`;
        document.body.classList.remove(this.current);
        document.body.classList.add(theme);
        this.current = theme;
        return this;
    }
}
