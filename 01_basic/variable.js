// Method 1: Declaring a constant variable using 'const'
// 'const' is used for variables whose values are not expected to change.
// Once assigned, a 'const' variable cannot be reassigned.
const studentId = 2234;

// Method 2: Declaring mutable variables using 'let'
// 'let' is used for variables whose values might change later in the program.
// You can reassign a 'let' variable.
let studentName = "Narendra";
let studentContact = "9848000000";
let studentEmail = "narendra@gamil.com";

// Using console.table() to display the variables in a tabular format.
// This is useful for inspecting multiple variables at once in the browser's developer console.
console.table([studentId, studentName, studentContact, studentEmail]);

