// --- Number to String and Boolean Conversion ---

// Declare a variable 'num' and initialize it with the number 12.
let num = 12;
// Log the value of 'num' (12).
console.log(num);
// Log the data type of 'num' (number).
console.log(typeof(num));

// Convert 'num' (12) to a string. The String() constructor converts any value to its string representation.
let strings = String(num);
// Log the string representation of 'num' ("12").
console.log(strings);
// Log the data type of 'strings' (string).
console.log(typeof strings);

// Convert 'num' (12) to a boolean. Any non-zero number is considered truthy.
let bool = Boolean(num);
// Log the boolean representation of 'num' (true).
console.log(bool);
// Log the data type of 'bool' (boolean).
console.log(typeof(bool));

// --- Empty String to String, Boolean, and Number Conversion ---

// Declare an empty string variable 'num2'.
let num2 = "";
// Log the value of 'num2' (an empty string).
console.log(num2);
// Log the data type of 'num2' (string).
console.log(typeof(num2));

// Convert 'num2' (empty string) to a string. It remains an empty string.
let str1 = String(num2);
// Log the value of 'str1' (empty string).
console.log(str1);

// Convert 'num2' (empty string) to a boolean. An empty string is considered falsy.
let bool1 = Boolean(num2);
// Log the value of 'bool1' (false).
console.log(bool1);

// Convert 'num2' (empty string) to a number. An empty string converts to 0.
let number1 = Number(num2);
// Log the value of 'number1' (0).
console.log(number1);


// --- String (non-empty) to Boolean and Number Conversion ---

// Declare a string variable 'fname'.
let fname = "Narendra";
// Log the value of 'fname' ("Narendra").
console.log(fname);
// Log the data type of 'fname' (string).
console.log(typeof(fname));

// Convert 'fname' (non-empty string) to a boolean. Any non-empty string is considered truthy.
let bool2 = Boolean(fname);
// Log the value of 'bool2' (true).
console.log(bool2);

// Convert 'fname' (string "Narendra") to a number. A string that cannot be parsed as a valid number converts to NaN (Not-a-Number).
let number2 = Number(fname);
// Log the value of 'number2' (NaN).
console.log(number2);

// --- Boolean to String and Number Conversion ---

// Declare a boolean variable 'bool3'.
let bool3 = true;
// Log the value of 'bool3' (true).
console.log(bool3);
// Log the data type of 'bool3' (boolean).
console.log(typeof(bool3));

// Convert 'bool3' (true) to a string.
let str2 = String(bool3);
// Log the value of 'str2' ("true").
console.log(str2);
// Log the data type of 'str2' (string).
console.log(typeof(str2));

// Convert 'bool3' (true) to a number. 'true' converts to 1.
let num3 = Number(bool3);
// Log the value of 'num3' (1).
console.log(num3);
// Log the data type of 'num3' (number).
console.log(typeof(num3));

// --- null to String, Boolean, and Number Conversion ---

// Declare a variable 'nullvalue' and assign it the null literal.
let nullvalue = null;
// Log the value of 'nullvalue' (null).
console.log(nullvalue);
// Log the data type of 'nullvalue' (object - this is a known quirk in JavaScript).
console.log(typeof nullvalue);

// Convert 'nullvalue' (null) to a string.
console.log(String(nullvalue)); // "null"
// Log the data type of the string conversion (string).
console.log(typeof String(nullvalue));

// Convert 'nullvalue' (null) to a boolean. 'null' is considered falsy.
console.log(Boolean(nullvalue)); // false
// Log the data type of the boolean conversion (boolean).
console.log(typeof Boolean(nullvalue));

// Convert 'nullvalue' (null) to a number. 'null' converts to 0.
console.log(Number(nullvalue)); // 0
// Log the data type of the number conversion (number).
console.log(typeof Number(nullvalue));

// --- undefined to String, Boolean, and Number Conversion ---

// Declare a variable 'nullvalue1' and assign it the undefined literal.
let nullvalue1 = undefined;
// Log the value of 'nullvalue1' (undefined).
console.log(nullvalue1);
// Log the data type of 'nullvalue1' (undefined).
console.log(typeof nullvalue1);

// Convert 'nullvalue1' (undefined) to a string.
console.log(String(nullvalue1)); // "undefined"
// Log the data type of the string conversion (string).
console.log(typeof String(nullvalue1));

// Convert 'nullvalue1' (undefined) to a boolean. 'undefined' is considered falsy.
console.log(Boolean(nullvalue1)); // false
// Log the data type of the boolean conversion (boolean).
console.log(typeof Boolean(nullvalue1));

// Convert 'nullvalue1' (undefined) to a number. 'undefined' converts to NaN (Not-a-Number).
console.log(Number(nullvalue1)); // NaN
// Log the data type of the number conversion (number).
console.log(typeof Number(nullvalue1));