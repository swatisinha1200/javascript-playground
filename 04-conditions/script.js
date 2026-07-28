// =======================================================
// Exercise 1: Voting Eligibility
// Create a variable:
// const age = 20;
// Print:
// 	• "Eligible to Vote" if the age is 18 or above.
// 	• "Not Eligible to Vote" otherwise.
// Use if...else.
// =======================================================
const age = 20;
if (age >= 18) {
  console.log("Eligible to Vote");
} else {
  console.log("Not Eligible to Vote");
}
// ========================================================
// Exercise 2: Even or Odd
// Create:
// const number = 17;
// Print:
// 	• "Even" if the number is even.
// 	• "Odd" otherwise.
// Use if...else.
// ========================================================
const number = 17;
if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// =========================================================
// Exercise 3: Grade Calculator
// Create:
// const marks = 78;
// Print:
// 	• Grade A → 90 and above
// 	• Grade B → 75–89
// 	• Grade C → 50–74
// 	• Fail → Below 50
// Use if...else if...else.
// =========================================================

const marks = 78;
if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}
// ============================================================
// Exercise 4: Login System
// Create:
// const username = "admin";
// const password = "12345";
// Rules:
// 	• If username is "admin" and password is "12345"
// 		○ Print "Login Successful"
// 	• Otherwise
// 		○ Print "Invalid Credentials"
// Use logical operators.
// ============================================================
const username = "admin";
const password = "12345";
if (username === "admin" && password === "12345") {
  console.log("Login Successful");
} else {
  console.log("Invalid Credentials");
}
// ============================================================
// Exercise 5: Largest of Two Numbers
// Create:
// const num1 = 35;
// const num2 = 48;
// Print:
// 	• "num1 is larger"
// 	• "num2 is larger"
// 	• "Both numbers are equal"
// Use if...else if...else.
// =============================================================
const num1 = 35;
const num2 = 48;
if (num1 > num2) {
  console.log("num1 is larger");
} else if (num2 > num1) {
  console.log("num2 is larger");
} else {
  console.log("Both are equal");
}
// =============================================================
// Exercise 6: Positive, Negative or Zero
// Create:
// const number = -15;
// Print:
// 	• "Positive"
// 	• "Negative"
// 	• "Zero"
// Use if...else if...else.
// =============================================================

const number = -15;
if (number > 0) {
  console.log("Positive");
} else if (number < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

// =======================================================================
// Exercise 7: Day Checker (switch)
// Create:
// const day = "Tuesday";
// Print:
// Day	Output
// Monday	Start of the Week
// Tuesday	Keep Working
// Wednesday	Midweek
// Thursday	Almost Friday
// Friday	Weekend is Near
// Saturday	Weekend
// Sunday	Holiday
// Default	Invalid Day
// Use switch.
// =======================================================================

const day = "Tuesday";
switch (day) {
  case "Monday":
    console.log("Start of the Week");
    break;
  case "Tuesday":
    console.log("Keep Working");
    break;
  case "Wednesday":
    console.log("Midweek");
    break;
  case "Thursday":
    console.log("Almost Friday");
    break;
  case "Friday":
    console.log("Weekend is Near");
    break;
  case "Saturday":
    console.log("Weekend");
    break;
  case "Sunday":
    console.log("Holiday");
    break;

  default:
    console.log("Invalid Day");
    break;
}
// =========================================================
// Exercise 8: Traffic Signal
// Create:
// const signal = "Red";
// Rules:
// 	• Red → Stop
// 	• Yellow → Get Ready
// 	• Green → Go
// 	• Default → Invalid Signal
// Use switch.
// =============================================================
const signal = "Red";
switch (signal) {
  case "Red":
    console.log("stop");
    break;
  case "Yellow":
    console.log("Get Ready");
    break;
  case "Green":
    console.log("Go");
    break;
  default:
    console.log("Invalid signal");
    break;
}

// =============================================================
// 🎯 Mini Challenge 1: Movie Ticket Price
// Create:
// const age = 45;
// Rules:
// 	• Below 5 → Free Entry
// 	• 5–17 → Child Ticket
// 	• 18–59 → Adult Ticket
// 	• 60 and above → Senior Citizen Ticket
// Use if...else if...else.
// =================================================================

const age = 45;
if (age < 5) {
  console.log("free ticket");
} else if (age <= 17) {
  console.log("child ticket");
} else if (age <= 59) {
  console.log("adult ticket");
} else console.log("Senior Citizen Ticket");
// =======================================================================
// 🎯 Mini Challenge 2: Salary Bonus
// Create:
// const yearsOfExperience = 6;
// Rules:
// 	• 10 or more years → 20% Bonus
// 	• 5–9 years → 10% Bonus
// 	• Less than 5 years → No Bonus
// Print the bonus category.
// ===========================================================================
const yearsOfExperience = 6;
if (yearsOfExperience >= 10) {
  console.log("20% Bonus");
} else if (yearsOfExperience >= 5) {
  console.log("10% Bonus");
} else {
  console.log("no Bonus");
}

// ===========================================================================
// 💼 Real-World Assignment
// Online Shopping Discount
// Create:
// const purchaseAmount = 1200;
// const isMember = true;
// Rules:
// 	• Purchase amount is $1000 or more and customer is a member
// 		○ Print "20% Discount Applied"
// 	• Purchase amount is $1000 or more but not a member
// 		○ Print "10% Discount Applied"
// 	• Otherwise
// 		○ Print "No Discount"
// Use if...else if...else with logical operators.
// ===========================================================================
const purchaseAmount = 1200;
const isMember = true;
if (purchaseAmount >= 1000 && isMember) {
  console.log("20% Discount Applied");
} else if (purchaseAmount >= 1000 && !isMember) {
  console.log("10% Discount Applied");
} else {
  console.log("No discount");
}
// ============================================================================
// 🎤 Interview Coding Challenge
// Create:
// const role = "Manager";
// Using a switch statement:
// 	• Admin →
// 	• Manager → Limited Access
// 	• Employee → Basic Access
// 	• Guest → Read Only
// 	• Default → Invalid Role
// ===========================================================================
const role = "Manager";
switch (role) {
  case "Admin":
    console.log(" Full Access  ");
    break;
  case "Manager":
    console.log(" Limited  Access  ");
    break;
  case "Employee":
    console.log(" Basic Access  ");
    break;
  case "Guest":
    console.log(" Read Only");
    break;
  default:
    console.log("Invalid role");
    break;
}
