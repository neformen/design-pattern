let person = {
    sayName: function (name) {
        return "My name is " + name;
    },
    sayAge: function (age) {
        return "My age is " + age;
    },
    sayGender: function (gender) {
        return "My gender is " + gender;
    }
}
person.execute = function (name) {
    return person[name] && person[name].apply(person, [].slice.call(arguments, 1));
}
console.log(person.execute("sayName", "Vasyl"));