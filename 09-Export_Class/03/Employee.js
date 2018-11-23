var human = require('./../01/human');

class Employee {
    constructor(name, gender, id, salary) {
        super(name, gender);
        this.id= id;
        this.salary = salary;
    }

    toString(){
        return super.toString()+"\nid "+this.id+"\nSalary "+this.salary;
    }
    
}
module.exports = Employee;