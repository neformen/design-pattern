let HostelModule = ( () => {
    const MAXSTUDENT = 100;
    let listOfStudents = [];

    return {
        addStudent(student) {
            if (listOfStudents.length < MAXSTUDENT && student.name && student.age) {
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
            let allAges = listOfStudents.reduce((prev, next) => prev.age + next.age);
            return allAges/listOfStudents.length;
        },
        resetHostel() {
            listOfStudents.length = 0;
        }
    }
})();