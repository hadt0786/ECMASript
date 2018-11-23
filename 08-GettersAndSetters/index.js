class Student {
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }

    toString() {
        return 'Id: ' + this._id + "\nName " + this._name;
    }

}

let student = new Student();
student._id = '01';
student._name = 'Name 01';
console.log(student.toString());