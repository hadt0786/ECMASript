var human = require('./../01/human');

class Student {
    constructor(name, gender, id, score) {
        super(name, gender);
        this.id= id;
        this.score = score;
    }

    toString(){
        return super.toString()+"\nid "+this.id+"\nScore "+this.score;
    }
    
}
module.exports = Student;