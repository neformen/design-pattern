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

        for(let prop in opts) {
            el.style[prop] = opts[prop];
        }
    }

    let setColor = (color) => {
        opts["color"] = color;
    };

    let setFontSize = (fontSize) => {
        opts["font-size"] = fontSize + "px";
    };

    let setBackgroundColor = (color) => {
        opts["background-color"] = color;
    }

    return {
        create: createHtmlElemet,
        setColorText: setColor,
        setFontSize: setFontSize,
        setBackgroundColor: setBackgroundColor
    };
})();

