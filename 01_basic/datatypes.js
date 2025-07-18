// ******************** Primitive Data Types ********************



// Declare a variable named 'num' and initialize it with the number 12.
let num = 12;

// Declare a variable named 'fname' and initialize it with the string "Narendra".
let fname = "Narendra";

// Declare a variable named 'bool' and initialize it with the boolean value true.
let bool = true;

// Declare a variable named 'email' and initialize it with the special value null,
// indicating an intentional absence of any object value.
let email = null;

// Declare a variable named 'contact' without initializing it.
// When a variable is declared but not initialized, it automatically gets the value 'undefined'.
let contact;

// The following lines print the value of each variable to the console,
// followed by its data type.

// Log the value of 'num' (which is 12).
console.log(num);
// Log the data type of 'num' (which is 'number').
console.log(typeof num);

// Log the value of 'fname' (which is "Narendra").
console.log(fname);
// Log the data type of 'fname' (which is 'string').
console.log(typeof fname);

// Log the value of 'bool' (which is true).
console.log(bool);
// Log the data type of 'bool' (which is 'boolean').
console.log(typeof bool);

// Log the value of 'email' (which is null).
console.log(email);
// Log the data type of 'email' (which is 'object').
// Note: 'typeof null' in JavaScript returns 'object', which is a historical bug,
// but it's important to be aware of this behavior.
console.log(typeof email);

// Log the value of 'contact' (which is undefined).
console.log(contact);
// Log the data type of 'contact' (which is 'undefined').
console.log(typeof contact);

// The commented-out line below would log all the variables in a table format,
// which can be useful for inspecting multiple variables simultaneously.
// console.table([num, fname, bool, email, contact]);

// Declare a variable named 'symbols' and initialize it with the symbol "70",

let symbols = Symbol(70)
console.log(symbols)

// Log the data type of 'symbols' (which is 'symbol').
console.log(typeof(symbols))

// ******************** Non Primitive Data Types ********************

// Object: 'student' is an object that stores key-value pairs representing student information.
let student = {
    student_name: 'Narendra', // Property: student_name with a string value
    student_id: "01253",       // Property: student_id with a string value
    contact_number: 9800000000 // Property: contact_number with a number value
};
console.log(student); // Output: The entire student object
console.log(student.student_name); // Output: Accessing the 'student_name' property of the student object

console.log(typeof student); // Output: "object" - confirms that 'student' is an object

// Array: 'list_of_fruit' is an array, which is an ordered list of values.
list_of_fruit = ["apple", "banana", "orange", "mango"];
console.log(list_of_fruit); // Output: The entire array
console.log(typeof list_of_fruit); // Output: "object" - in JavaScript, arrays are a type of object
console.log(list_of_fruit[2]); // Output: Accessing the element at index 2 (third element) of the array

// Function: 'employee' is a function. Functions are callable objects that encapsulate code.
function employee() { // Parentheses after function name are required
    let employee_id = 5266; // Declaring 'employee_id' with 'let' for proper scope
    console.log(employee_id); // Example: To see the value inside the function
}
// You would need to call the function to execute its code:
 employee();