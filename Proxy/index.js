function Math() {}

Math.prototype = {
    constructor: Math,
    add: function(a, b) {
        return a + b;
    },
    sub: function(a, b) {
        return a - b;
    },
    mult: function(a, b) {
        return a * b;
    },
    div: function(a, b) {
        return a / b;
    }   
};

function ProxyMath() {};

ProxyMath.prototype = (() => {
    let math = new Math();
    let numberObject = {
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five" : 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9,
        "zero": 0
    };

    let checkNumber = (number) => {
        return Number(number) || numberObject[number] || 1;
    };

    let proxyAdd = (a, b) => {
        let newA = checkNumber(a);
        let newB = checkNumber(b);

        return math.add(newA, newB);
    };

    let proxySub = (a, b) => {
        let newA = checkNumber(a);
        let newB = checkNumber(b);

        return math.sub(newA, newB);
    };

    let proxyMult = (a, b) => {
        let newA = checkNumber(a);
        let newB = checkNumber(b);

        return math.mult(newA, newB);
    };

    let proxyDiv = (a, b) => {
        let newA = checkNumber(a);
        let newB = checkNumber(b);

        return math.div(newA, newB);
    };

    return {
        constructor: ProxyMath,
        add: proxyAdd,
        div: proxyDiv,
        sub: proxySub,
        mult: proxyMult
    };
})();