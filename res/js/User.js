class User {
    constructor(firstname, lastname, birthdate, faculty, gpa){
        this._firstname = firstname;
        this._lastname = lastname;
        this._birthdate = birthdate;
        this._faculty = faculty;
        this._gpa = gpa;
    }

    get firstname() {
        return this._firstname;
    }

    set firstname(value) {
        this._firstname = value;
    }

    get lastname() {
        return this._lastname;
    }

    set lastname(value) {
        this._lastname = value;
    }

    get birthdate() {
        return this._birthdate;
    }

    set birthdate(value) {
        this._birthdate = value;
    }

    get faculty() {
        return this._faculty;
    }

    set faculty(value) {
        this._faculty = value;
    }

    get gpa() {
        return this._gpa;
    }

    set gpa(value) {
        this._gpa = value;
    }
}