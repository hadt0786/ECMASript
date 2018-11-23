class Human {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
    toString() {
        return "Name " + this.name + "\nGender " + this.gender;
    }

}

class Student extends Human {
    constructor(name, gender, id, score){
        super(name, gender);
        this.id = id;
        this.score = score;
    }

    toString(){
        return super().toString()+"\nID: "+this.id+"\nScore : "+this.score;
    }
}

class Empployee extends Human {
    constructor(name, gender, id, salary){
        super(name, gender);
        this.id = id;
        this.salary = salary;
    }

    toString(){
        return super().toString()+"\nID: "+this.id+"\nSalary : "+this.salary;
    }
}

let student = new Student("name 1", "male", "st01", 7.0);
console.log("Student Info ");
console.log(student.toString());

let employee = new Employee("name 2", "male", "st02", 7000);
console.log("EMployee Info ");
console.log(student.toString());












