let dragged = null;

/**
 * Add dragging interaction to an element
 * @param {HTMLElement} element
 * @param {Function} [onDrag]
 */
export default function draggable (element, onDrag) {
    element.classList.add("draggable");
    element.style.position = "absolute";
    element.style.cursor = "-webkit-grab";
    const { top, left } = element.getBoundingClientRect();

    element.addEventListener("mousedown", (event) => {
        element.classList.add("dragged");
        dragged = {
            element,
            onDrag,
            offsetX: event.offsetX,
            offsetY: event.offsetY,
            startX: left,
            startY: top,
        };
    }, {
        capture: true,
    });
}

document.body.addEventListener("mousemove", (event) => {
    event.preventDefault();
    if (dragged) {
        const x = event.clientX - dragged.offsetX - dragged.startX;
        const y = event.clientY - dragged.offsetY - dragged.startY;
        dragged.element.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        dragged.onDrag && dragged.onDrag(x, y);
    }
});
document.body.addEventListener("mouseup", () => {
    if (dragged) {
        dragged.element.classList.remove("dragged");
        dragged = null;
    }
});
