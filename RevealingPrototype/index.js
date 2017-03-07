function CustomElement({selector, className, id, innerText}) {
    this.selector = selector;
    this.class = className;
    this.id = id;
    this.context = innerText;
    this.opts = {}
}

CustomElement.prototype = (() => {
    let createHtmlElemet = function(opts) {
        let el = document.createElement(this.selector);
        el.className = this.class;
        el.id = this.id;
        el.innerHtml = this.context;

        for(let prop in this.opts) {
            el.style[prop] = this.opts[prop];
        }
    }

    let setColor = function(color) {
        this.opts["color"] = color;
        opts++;
    };

    let setFontSize = function(fontSize) {
        this.opts["font-size"] = fontSize + "px";
    };

    let setBackgroundColor = function(color) {
        this.opts["background-color"] = color;
    }

    return {
        constructor: CustomElement,
        create: createHtmlElemet,
        setColorText: setColor,
        setFontSize: setFontSize,
        setBackgroundColor: setBackgroundColor
    };
})();

let customDiv = new CustomElement({
    selector: "div",
    className: "my-div",
    innerText: "Lorem ipsum"
});


let customSpan = new CustomElement({
    selector: "span",
    className: "my-span",
    innerText: "Lorem ipsum"
});
