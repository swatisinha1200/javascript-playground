// ===============================================================
// 📘 JavaScript Functions – Output Prediction (20 Questions)
// Predict the output before running the code.
// ===============================================================

// ===============================================================
// Question 1 - Function Declaration
// ===============================================================
function greet() {
  console.log("Hello");
}
greet();
// ===============================================================
// Question 2 - Function with Parameters
// ===============================================================
function greet(name) {
  console.log("Hello " + name);
}
greet("Swati");
// ===============================================================
// Question 3 - Arguments
// ===============================================================
function add(a, b) {
  console.log(a + b);
}
add(10, 20);
// ===============================================================
// Question 4 - Return Statement
// ===============================================================
function square(num) {
  return num * num;
}
console.log(square(5));
// ===============================================================
// Question 5 - Return + Variable
// ===============================================================
function multiply(a, b) {
  return a * b;
}
const result = multiply(4, 6);
console.log(result);
// ===============================================================
// Question 6 - Function Expression
// ===============================================================
const greet = function () {
  console.log("Welcome");
};
greet();
// ===============================================================
// Question 7 - Function Expression with Parameters
// ===============================================================
const subtract = function (a, b) {
  return a - b;
};
console.log(subtract(20, 8));
// ===============================================================
// Question 8 - Default Parameter
// ===============================================================
function greet(name = "Guest") {
  console.log("Hello " + name);
}
greet();
// ===============================================================
// Question 9 - Default Parameter Override
// ===============================================================
function greet(name = "Guest") {
  console.log("Hello " + name);
}
greet("JavaScript");
// ===============================================================
// Question 10 - Missing Argument
// ===============================================================
function add(a, b) {
  console.log(a + b);
}
add(10);
// ===============================================================
// Question 11 - Return Stops Execution
// ===============================================================
function test() {
  return "Done";
  console.log("Hello");
}
console.log(test());
// ===============================================================
// Question 12 - Function Calling Another Function
// ===============================================================
function first() {
  console.log("First");
}
function second() {
  first();
  console.log("Second");
}
second();
// ===============================================================
// Question 13 - Callback Function
// ===============================================================
function greet() {
  console.log("Hello");
}
function execute(callback) {
  callback();
}
execute(greet);
// ===============================================================
// Question 14 - Callback with Parameter
// ===============================================================
function display(name) {
  console.log("Welcome " + name);
}
function process(callback) {
  callback("Swati");
}
process(display);
// ===============================================================
// Question 15 - Pure Function
// ===============================================================
function add(a, b) {
  return a + b;
}
console.log(add(5, 10));
console.log(add(5, 10));
// ===============================================================
// Question 16 - Impure Function
// ===============================================================
let count = 0;
function increment() {
  count++;
}
increment();
increment();
console.log(count);
// ===============================================================
// Question 17 - Function Returning Boolean
// ===============================================================
function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(8));
// ===============================================================
// Question 18 - Nested Function Calls
// ===============================================================
function double(num) {
  return num * 2;
}
console.log(double(double(5)));
// ===============================================================
// Question 19 - Function without Return
// ===============================================================
function greet() {
  console.log("Hello");
}
console.log(greet());
// ===============================================================
// Question 20 - Callback Execution Order
// ===============================================================
function taskCompleted() {
  console.log("Task Completed");
}
function startTask(callback) {
  console.log("Task Started");
  callback();
}
startTask(taskCompleted);
