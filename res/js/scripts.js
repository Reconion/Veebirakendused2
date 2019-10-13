function coursesList() {
    let course1 = new Course("Agile software development vol2", 3, 85);
    let course2 = new Course("System modeling vol2", 3, 82);
    let course3 = new Course("Object-oriented programming vol2", 4, 99);
    let course4 = new Course("Estonian language Level B2", 4, 70);
    return [course1, course2, course3, course4]
}
function populateHTML() {
    //initialize user and courses
    let user = new User("John", "Doe", "11-10-1990", "Software Engineering", 2.75);
    let courses = coursesList();

    //populate Profile
    // language=JQuery-CSS
    $("#name").text(user.firstname + " " + user.lastname);
    $("#birthdate").text(user.birthdate);
    $("#faculty").text(user.faculty);
    $("#gpa strong").text(user.gpa);
    //populate Courses
    $(courses).each(function () {
        var rowCount = $("#courses tr").length;
        $("#courses tbody").append(
            "<tr>" +
            "<td>" + rowCount +"</td>" +
            "<td>" + this.title +"</td>" +
            "<td>" + this.semester +"</td>" +
            "<td>" + this.grade +"</td>" +
            "</tr>"
        )
    });
}