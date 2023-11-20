//Ключові об'єкти
function createCoWorker() {
    var coWorker = {
        firstname: "Steve",
        lastname: "Johnson",
        sex: "male",
        age: 33
    };
    return coWorker;
}

function createSalaryObject() {
    var salary = {
        position: "Director",
        rate: 300,
        calculate_salary: function() {
            var month_salary = this.rate * 30;
            return month_salary;
        },
        change_rate: function() {
            var plus_to_salary = prompt("На скільки ви хочете підвищити ставку");
            var minus_to_salary = prompt("На скільки ви хочете понизити ставку");
            var final_rate = this.rate + parseInt(plus_to_salary) - parseInt(minus_to_salary);
            this.rate = final_rate;
        },
        output: function() {
            var month_salary = this.calculate_salary();
            console.log("Зарплата:");
            console.log(month_salary);
            console.log("Ставка:");
            console.log(this.rate);
        }
    };
    return salary;
}


// 1
function first_task() {
    var coworker = createCoWorker();
    console.log("Перше завдання");
    console.log(coworker);
}


// 2
function second_task() {
    first_task();
    console.log("Друге завдання");
    var createSalaryObj = createSalaryObject();

    createSalaryObj.calculate_salary();
    createSalaryObj.change_rate();
    createSalaryObj.output();
}


//3
function third_task() {
    second_task();
    var coWorkerCopy = {};
    var salaryCopy = {};

    var coWorker = createCoWorker();
    var salary = createSalaryObject();

    Object.assign(coWorkerCopy, coWorker);
    Object.assign(salaryCopy, salary);

    console.log("Третє завдання");
    console.log(coWorkerCopy);
    console.log(salaryCopy);
}


//4
function fourth_task() {
    third_task();

    var coWorker = createCoWorker();
    var ExtendedCoWorker = {
        __proto__: coWorker, 
        showData: function() {
            console.log(this.firstname);
            console.log(this.lastname);
            console.log(this.sex);
            console.log(this.age);
        }
    };
    

    console.log("Четверте завдання");
    ExtendedCoWorker.showData();
}




//5
function fifth_task() {
    fourth_task();
    
    var createHead = function() {
        var head = Object.create(createCoWorker());
        return head;
    }
    var Head = createHead();
    
    Head.firstname = "Paula";
    Head.lastname = "Johnson",
    Head.sex = "female";
    Head.age = 33;
    Head.department = "main";

    Head.showData = function() {
        console.log(this.firstname);
        console.log(this.lastname);
        console.log(this.sex);
        console.log(this.age);
        console.log(this.department);
    }
    console.log("П'яте завдання")
    Head.showData();

}
