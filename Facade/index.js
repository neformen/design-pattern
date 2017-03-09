let figureDraw = (() => {
    let body = document.body;

    let createElementWithClassOrId = ({className, id}) => {
        let el = document.createElement("div");
        el.className = className;
        el.id = id;
        return el;
    };

    let attachElement = (element) => {
        body.appendChild(element);
    };

    let setColor = (element, color) => {
        element.style.color = color;
    };

    let setSize = (element, {width, height}) => {
        element.style.width = width;
        element.style.height = height;
    };

    let createRectangle = ({className, id, color, width, height}) => {
        let el = createElementWithClassOrId({className, id});
        setColor(el, color);
        setSize(el, {height, width});
        return el;
    };

    let createSquare = ({className, id, color, width}) => {
        let el = createElementWithClassOrId({className, id});
        setColor(el, color);
        setSize(el, {width, width});
        return el;
    };

    return {
        rectangle: createRectangle,
        square: createSquare,
        attach: attachElement
    }
})();