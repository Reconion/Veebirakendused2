function coursesList() {
    let course1 = new Course("Agile software development vol2", 3, 85);
    let course2 = new Course("System modeling vol2", 3, 82);
    let course3 = new Course("Object-oriented programming vol2", 4, 99);
    let course4 = new Course("Estonian language Level B2", 4, 70);
    return [course1, course2, course3, course4]
}
function populateHTML() {
    //initialize user and courses
    let courses = coursesList();

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

    let user = new User("John", "Doe", "11-10-1990", "Software Engineering", countGPA());
    //populate Profile
    // language=JQuery-CSS
    $("#name").text(user.firstname + " " + user.lastname);
    $("#birthdate").text(user.birthdate);
    $("#faculty").text(user.faculty);
    $("#gpa strong").text(user.gpa);
}
function contentSelector() {
    $(".controls button").click(function () {
        //change active button
        $(this).addClass("active");
        $(this).parent().children("button").not(this).removeClass("active");
        //change active div
        const contentIdString = this.id.split("-")[0];
        const content = $("[id^=" + contentIdString + "]");
        content.addClass("active");
        content.parent().children("div").not(content).removeClass("active");
    })
}
function toggle() {
    $("#add-course-button").click(function(){
        $("#add-course").toggle();
    });
}
function cancel(){
    $("#cancel-course").click(function () {
        $("#add-course").toggle();
        $("#title").val('');
        $("#semester").val('');
        $("#grade").val('');
    })
}

function saveCourse() {
    let title = $("#title").val();
    let semester = parseInt($("#semester").val());
    let grade = parseInt($("#grade").val());
    $(courses).each(function () {
        var rowCount = $("#courses tr").length;
        $("#courses tbody").append(
            "<tr>" +
            "<td>" + rowCount +"</td>" +
            "<td>" + title +"</td>" +
            "<td>" + semester +"</td>" +
            "<td>" + grade +"</td>" +
            "</tr>"
        )
    });
    $("#title").val('');
    $("#semester").val('');
    $("#grade").val('');
    $("#add-course").toggle();
    $("#gpa strong").text(countGPA());
}

function countGPA() {
    let allGrades = 0;
    $("#courses tbody tr td:nth-child(4)").each(function () {
        var grade = $(this).html();

        if(grade>90){
            allGrades += 4;
        }
        else if (grade>80){
            allGrades += 3;
        }
        else if (grade>70) {
            allGrades += 2;
        }
        else if (grade>60) {
            allGrades += 1;
        }
        else if (grade>50) {
            allGrades += 0.5;
        }
        else if (grade<=50) {
            allGrades += 0;
        }
    });
    return Math.round(allGrades/($("#courses tr").length-1)* 100) /100;
}