// =========================================
// Exercise 1: Arithmetic Operators

// Create two variables:

// num1
// num2

// Print the result of:

// Addition
// Subtraction
// Multiplication
// Division
// Modulus
// Exponent

// Example output (your numbers can be different):
// ===========================================================

let num1 = 8,
  num2 = 7;
console.log("Addition:" + (num1 + num2));
console.log("Subtraction:" + (num1 - num2));
console.log("Multiplication:" + num1 * num2);
console.log("Division:" + num1 / num2);
console.log("Modulus:" + (num1 % num2));
console.log("Exponent::" + num1 ** num2);

// =======================================================
// // Exercise 2: Assignment Operators

// Create a variable:

// let score = 50;

// Perform the following operations one by one:

// Add 20
// Subtract 10
// Multiply by 2
// Divide by 4
// Find the remainder when divided by 3

// Print the value after each operation.
// ===============================================================
let score = 50;
console.log("score", (score += 20));
console.log("score", (score -= 10));
console.log("score", (score *= 2));
console.log("score", (score /= 4));
console.log("score", (score %= 3));
// =======================================================================
// Exercise 3: Comparison Operators

// Create two variables:

// age
// minimumAge

// Print the result of:

// Is age greater than minimumAge?
// Is age less than minimumAge?
// Is age greater than or equal to minimumAge?
// Is age equal to minimumAge?
// Is age strictly equal to minimumAge?
// Is age not equal to minimumAge?
// =======================================================================
let age = 34;
let minimumAge = 18;
console.log("Is age greater than minimumAge?", age > minimumAge);
console.log("Is age less than minimumAge?", age < minimumAge);
console.log("Is age greater than or equal to minimumAge?", age >= minimumAge);
console.log("Is age equal to minimumAge?", age == minimumAge);
console.log("Is age strictly equal to minimumAge?", age === minimumAge);
console.log("Is age not equal to minimumAge?", age !== minimumAge);

// =======================================================================
// Exercise 4: Logical Operators

// Create three variables:

// isLoggedIn
// isAdmin
// hasSubscription

// Print the result of:

// User is logged in AND admin.
// User is logged in OR has subscription.
// User is NOT logged in.
// User is admin AND has subscription.
// =======================================================================
let isLoggedIn = true,
  isAdmin = false,
  hasSubscription = true;
console.log("User is logged in AND admin", isLoggedIn && isAdmin);
console.log(
  "User is logged in OR has subscription",
  isLoggedIn || hasSubscription,
);
console.log("User is NOT logged in", !isLoggedIn);
console.log("User is admin AND has subscription", isAdmin && hasSubscription);

// =======================================================================
// Exercise 5: Ternary Operator

// Create a variable:

// const marks = 72;

// Using the ternary operator, print:

// "Pass" if marks are 35 or above.
// "Fail" otherwise.
// ============================================================================

const marks = 72;
console.log(marks >= 35 ? "pass" : "fail");

// =============================================================================
// 🎯 Mini Challenge

// A shopping website gives a discount.

// Create variables:

// price
// discountPercentage

// Calculate:

// Discount amount
// Final price after discount
// Print:

// Original Price:
// Discount:
// Final Price:
// ===============================================================

let price = 500;
let discountPercentage = 20;
let discountAmount = (discountPercentage / 100) * price;
let finalPrice = price - discountAmount;
console.log("Original Price:" + price);
console.log("Discount" + discountAmount);
console.log("Final Price" + finalPrice);

// =================================================================
// 💼 Real-World Assignment

// An employee works 8 hours per day.

// Create variables:

// hoursPerDay
// workingDays
// hourlyRate

// Calculate:

// Total working hours
// Total salary

// Print both values.

// Example (don't use these exact values):

// Total Hours:
// Total Salary:
// =============================================================

let hoursPerDay = 8;
let workingDays = 22;
let hourlyRate = 125;
let totalWorkingHours = hoursPerDay * workingDays;
let totalSalary = totalWorkingHours * hourlyRate;
console.log("Total Hours:" + totalWorkingHours);
console.log("Total Salary:" + totalSalary);
