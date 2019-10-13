class Course {
    constructor(title, semester, grade){
        this._title = title;
        this._semester = semester;
        this._grade = grade;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get semester() {
        return this._semester;
    }

    set semester(value) {
        this._semester = value;
    }

    get grade() {
        return this._grade;
    }

    set grade(value) {
        this._grade = value;
    }
}