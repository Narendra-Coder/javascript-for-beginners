let new_str = "narendra learn javascript";

// Log the original string to the console
console.log(new_str);

// Log the data type of new_str (which will be 'string')
console.log(typeof(new_str));

// Log the length of the string (number of characters)
console.log(new_str.length);

// Log the string converted to uppercase
console.log(new_str.toUpperCase());

// Log the string converted to lowercase
console.log(new_str.toLowerCase());

// Split the string into an array of substrings based on the space character
let split_str = new_str.split(" ");
// Log the resulting array
console.log(split_str);

// Log the data type of split_str (which will be 'object', as arrays are objects in JavaScript)
console.log(typeof(split_str));

// Log the index of the first occurrence of the substring "learn"
console.log(new_str.indexOf("learn"));

// Extract and log a substring from index 0 up to (but not including) index 8
console.log(new_str.substring(0,8));

// Extract and log a slice of the string from index 0 up to (but not including) index 9
console.log(new_str.slice(0,9));

// Log the character at index 5 of the string
console.log(new_str.charAt(5));

// Declare a new string with leading and trailing whitespace
let new_str1 = "     narendra learn javascript";
// Log the string with whitespace
console.log(new_str1);

// Log the string after removing leading and trailing whitespace using trim()
console.log(new_str1.trim());

// Check if the string starts with "narendra" and log the boolean result
console.log(new_str.startsWith("narendra"));

// Check if the string ends with "hello" and log the boolean result
console.log(new_str.endsWith("hello"));

// Declare two string variables for first name and last name
let fname = "Narendra";
let lname = "Kathayat";

// Concatenate fname and lname using the '+' operator with a space in between
console.log(fname + " "+lname);

// Concatenate fname and lname using the concat() method with a space in between
console.log(fname.concat(" ", lname));

// Use a template literal to create and log a string with embedded variables
console.log(`My name is ${fname} ${lname}`);