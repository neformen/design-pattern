let HostelModule = (() => {
    const MAXSTUDENTS = 100;
    let listOfStudents = [];

    let addStudent = (student) => {
        listOfStudents.push(student);
    };

    let isCanAdded = (student) => {
        return ((listOfStudents.length < MAXSTUDENTS) && student.name && student.age);
    };

    let generateRoom = (student) => {
        let numberRoom;

        switch (student.sex) {
            case "male" : {
                numberRoom = Math.floor((Math.random() * 25) + 1);
                student.room = numberRoom;
                break;
            };

            case "female" : {
                numberRoom = Math.floor((Math.random() * 25) + 26);
                student.room = numberRoom;
                break;
            };

            default : {
                numberRoom = Math.floor((Math.random() * 50) + 51);
                student.room = numberRoom;
                break;
            };
        };
    };

    let addedToHostel = (student, currSex) => {
        let newStudent;
        let sex = (typeof currSex === "string") ? currSex.toLowerCase() : "";

        if (isCanAdded(student)) {
            newStudent = Object.assign({sex}, student);
            generateRoom(newStudent);
            addStudent(newStudent);
            console.log("Student was added");
        } else {
            console.log("Somethis went wrong!");
        }
    };

    let getNumberOfStudents = () => listOfStudents.length;

    let numbersOfMaleOrFemale = function() {
        let sex = this.sex;
        let sum = 0;

        listOfStudents.forEach((student) => {
            if (student.sex === sex) {
                sum++;
            }
        });

        return sum;
    }

    return {
        addStudent: addedToHostel,
        getAllNumbers: getNumberOfStudents,
        getMaleNumbers: numbersOfMaleOrFemale.bind({sex: "male"}),
        getFemaleNumbers: numbersOfMaleOrFemale.bind({sex: "female"})
    };
})();

HostelModule.addStudent({
    name: "Alex",
    age: 21
}, "male"); //====> Student was added

console.log(HostelModule.getAllNumbers()); // ====> 1

HostelModule.addStudent({},{}); // =====> Somethis went wrong!

console.log(HostelModule.getAllNumbers()); // ====> 1

HostelModule.addStudent({
    name: "Ameli",
    age: 22
}, "female"); 

console.log(HostelModule.getAllNumbers()); // ====> 2

console.log(HostelModule.getFemaleNumbers()); // ====> 1

console.log(HostelModule.getMaleNumbers()); // ====> 1