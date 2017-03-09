function StudentsPool() {
    this.students = [];
    this.observers = [];
}

StudentsPool.prototype = (() => {
    let subscribe = function(observer) {
        this.observers.push(observer);
    };

    let notify = function(data) {
        this.observers.forEach((observer) => {
            observer.update(data);
        });
    };

    let unsubscribe = function(observer) {
        let index = this.observers.indexOf(observer);
        
        if (index > -1) {
            this.observers.slice(index, 1);
        }
    };

    let addStudent = function(student) {
        this.students.push(student);
        notify(student);
    };

    return {
        constructor: StudentsPool,
        subscribe: subscribe,
        unsubscribe: unsubscribe,
        add: addStudent
    };
})();

let JSManager = {
    update(student) {
        if (student.type.toLowerCase() === "javascript") {
            console.log("Wow, we have new javascript trainee")
        }
    }
};

let DotNetManager = {
    update(student) {
        if (student.type.toLowerCase() === ".net") {
            console.log("Wow, we have new .net trainee")
        }
    }
};

let JavaManager = {
    update(student) {
        if (student.type.toLowerCase() === "java") {
            console.log("Wow, we have new java trainee")
        }
    }
};

let studentPool = new StudentsPool();

studentPool.add({
    name: "Vasyl",
    type: "JavaScript"
});

studentPool.subscribe(JSManager);

studentPool.add({
    name: "Taras",
    type: "JavaScript"
});

studentPool.subscribe(JavaManager);

studentPool.subscribe(DotNetManager);

studentPool.add({
    name: "Oleg",
    type: "Java"
});

studentPool.add({
    name: "Iryna",
    type: ".Net"
});

studentPool.unsubscribe(JSManager);

studentPool.add({
    name: "Vasyl",
    type: "JavaScript"
});

