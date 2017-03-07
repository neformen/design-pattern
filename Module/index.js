let HostelModule = (() => {
    const MAXSTUDENT = 100;
    let listOfStudents = [];

    return {
        addStudent(student) {
            if ((listOfStudents.length < MAXSTUDENT) && student.name && student.age) {
                listOfStudents.push(student);
                console.log("Student was added");
            } else {
                console.log("Something went wrong");
            }
        },
        getListOfNames() {
            return listOfStudents.map((student) => student.name).join(", ");
        },
        getAvarageAge() {
            let allAges = listOfStudents.map((student) => student.age).reduce((prev, next) => prev + next);
            return allAges/listOfStudents.length;
        },
        resetHostel() {
            listOfStudents.length = 0;
        },
        getNumberOfStudents() {
            return listOfStudents.length;
        }
    }
})();

HostelModule.addStudent({
    name: "Vasyl",
    age: 22
}); //====> Student was added

HostelModule.addStudent({
    name: "Alex",
    age: 25
}); //====> Student was added

HostelModule.addStudent({
    name: "Uliana",
    age: 20
}); //====> Student was added

HostelModule.addStudent({
    name: "Taras"
}); //====> Somethis went wrong!

console.log();

console.log(HostelModule.getNumberOfStudents()); /// ===> 3

console.log(HostelModule.getAvarageAge()); // ====> 22.333333333333332

console.log(HostelModule.getListOfNames()); // ====> "Vasyl, Alex, Uliana"