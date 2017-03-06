let tasksRecoder = (() => {
    let instance;
    let tasks = [];

    let createInstance = () => {
        return {
            add: addTask,
            find: findTaskforDescription,
            getDoneTasks: getAllDoneTasks,
            reset: resetRecoder
        };
    };

    let addTask = ({priority, description, status}) => {
        tasks.push({priority, description, status});
    }

    let findTaskforDescription = (description) => {
        return tasks.find((task) => {
            return task.description.indexOf(description) != -1;
        });
    }

    let getAllDoneTasks = () => {
        return tasks.filter((task) => task.status.toLowerCase() == "done");
    };

    let resetRecoder = () => {
        tasks.length = 0;
    };

    return {
        getInstance() {
            if(!instance) {
                instance = createInstance();
            }

            return instance;
        }
    }
})();