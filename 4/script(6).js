//6
function sixth_task() {
    class CoWorker {
        constructor(firstname, lastname, sex, age) {
            this.firstname = firstname;
            this.lastname = lastname;
            this.sex = sex;
            this.age = age;
        }

        showData() {
            console.log(this.firstname);
            console.log(this.lastname);
            console.log(this.sex);
            console.log(this.age);
        }
    }

    var CoWorkerOne = new CoWorker("Steve", "Johnson", "Male", 33);
    CoWorkerOne.showData();

    class Salary {
        constructor(position, rate) {
            this.position = position;
            this.rate = rate;
        }

        calculate_salary() {
            var month_salary = this.rate * 30;
            return month_salary;
        }

        change_rate() {
            var plus_to_salary = prompt("На скільки ви хочете підвищити ставку");
            var minus_to_salary = prompt("На скільки ви хочете понизити ставку");
            var final_rate = this.rate + parseInt(plus_to_salary) - parseInt(minus_to_salary);
            this.rate = final_rate;
        }

        output() {
            var month_salary = this.calculate_salary();
            console.log("Зарплата:");
            console.log(month_salary);
            console.log("Ставка:");
            console.log(this.rate);
        }
    }

    var SalaryOne = new Salary("Director", 300);
    SalaryOne.calculate_salary();
    SalaryOne.change_rate();
    SalaryOne.output();

    class Head extends CoWorker {
        constructor(firstname, lastname, sex, age, department) {
            super(firstname, lastname, sex, age);
            this.department = department;
        }

        showData() {
            super.showData();
            console.log(this.department);
        }
    }

    var HeadOne = new Head("Steve", "Johnson", "Male", 33, "Main");
    HeadOne.showData();
}