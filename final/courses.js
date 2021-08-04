// Declare a constructor Course
function Course(department, courseNumber, title, year, semester, credit, capacity, enrollment) {
    this.department = department;
    this.courseNumber = courseNumber;
    this.title = title;
    this.year = year;
    this.semester = semester;
    this.credit = credit
    this.capacity = capacity;
    this.enrollment = enrollment;

    // Method
    this.seatsAvailable = function() {
        return this.capacity - this.enrollment;
    };

    // Instantiate five instances
    var course1 = new Course('Math', 'M100', 'College Math Refresher', 2018, 'Spring', 1, 25, 20);
    var course2 = new Course('English', 'W131', 'Literary Composition', 2018, 'Fall', 3, 25, 10);
    var course3 = new Course('Computer Science', 'Intro to Computers', 2018, 'Summer', 3, 28, 5);
    var course4 = new Course('Computer Science', 'Web Development', 2018, 'Spring', 3, 30, 29);
    var course5 = new Course('Fine Arts', 'Graphic Design', 2018, 'Summer', 3, 35, 25)

    // Declare arrays
    var courses = [course1, course2, course3, course4, course5];

    // Declare variables
    var department = '';
    var courseNumber = '';
    var title = '';
    var year = '';
    var semester = '';
    var credit = '';
    var capacity = '';
    var enrollment = '';
}