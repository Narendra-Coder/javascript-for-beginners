// Declare two variables, num1 and num2
let num1, num2; 

// Assign numerical values to num1 and num2
num1 = 3;
num2 = 2;

// --- Basic Arithmetic Operations ---

// Addition: Adds num1 and num2
console.log(num1 + num2); // Output: 5

// Subtraction: Subtracts num2 from num1
console.log(num1 - num2); // Output: 1

// Multiplication: Multiplies num1 by num2
console.log(num1 * num2); // Output: 6

// Division: Divides num1 by num2
console.log(num1 / num2); // Output: 1.5

// Modulus: Returns the remainder of num1 divided by num2
console.log(num1 % num2); // Output: 1 (3 divided by 2 is 1 with a remainder of 1)

// Exponentiation: Raises num1 to the power of num2
console.log(num1 ** num2); // Output: 9 (3 raised to the power of 2, i.e., 3*3)

// --- Type Coercion Examples ---

// Declare two variables, num3 and num4
let num3, num4;

// Assign a string value to num3 and a numerical value to num4
num3 = "5"; // num3 is a string
num4 = 3;  // num4 is a number

// String Concatenation: When using '+' with a string, JavaScript converts the number to a string and concatenates them.
console.log(num3 + num4); // Output: "53" (string "5" concatenated with string "3")

// String Concatenation: The order doesn't change the behavior here, as one operand is a string.
console.log(num4 + num3); // Output: "35" (string "3" concatenated with string "5")

// Mixed Operations with Type Coercion:
// num1 (number) + num2 (number) results in 5.
// Then, 5 (number) + num3 (string) results in string concatenation.
console.log(num1 + num2 + num3); // Output: "55" (5 + "5" -> "55")

// Mixed Operations with Type Coercion (order matters for initial numeric operations):
// num3 (string) + num1 (number) results in string concatenation first ("53").
// Then, "53" (string) + num2 (number) results in further string concatenation.
console.log(num3 + num1 + num2); // Output: "532" ("5" + 3 -> "53"; "53" + 2 -> "532")

// Another example illustrating explicit number conversion for arithmetic
console.log(Number(num3) + num4); // Output: 8 (Converts num3 to a number first, then adds)