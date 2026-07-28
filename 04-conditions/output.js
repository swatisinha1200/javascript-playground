// =======================================
// JavaScript Conditions - Output Questions
// =======================================

// Question 1
const age = 20;

if (age >= 18) {
  console.log("Adult");
}

// ---------------------------------------

// Question 2
const age2 = 15;

if (age2 >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// ---------------------------------------

// Question 3
const marks = 82;

if (marks >= 90) {
  console.log("A");
} else if (marks >= 75) {
  console.log("B");
} else {
  console.log("C");
}

// ---------------------------------------

// Question 4
const marks2 = 45;

if (marks2 >= 90) {
  console.log("A");
} else if (marks2 >= 75) {
  console.log("B");
} else if (marks2 >= 35) {
  console.log("C");
} else {
  console.log("Fail");
}

// ---------------------------------------

// Question 5
const isLoggedIn = true;

if (isLoggedIn) {
  console.log("Welcome");
} else {
  console.log("Login");
}

// ---------------------------------------

// Question 6
const isAdmin = false;

if (isAdmin) {
  console.log("Admin");
}

console.log("User");

// ---------------------------------------

// Question 7
const number = 10;

if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// ---------------------------------------

// Question 8
const score = 90;

if (score > 90) {
  console.log("Excellent");
} else if (score >= 90) {
  console.log("Very Good");
}

// ---------------------------------------

// Question 9
const day = "Wednesday";

switch (day) {
  case "Monday":
    console.log("Start");
    break;

  case "Wednesday":
    console.log("Middle");
    break;

  default:
    console.log("Other");
}

// ---------------------------------------

// Question 10
const color = "Blue";

switch (color) {
  case "Red":
    console.log("Stop");
    break;

  case "Green":
    console.log("Go");
    break;

  default:
    console.log("Unknown");
}

// ---------------------------------------

// Question 11
const age3 = 25;

if (age3 >= 18) console.log("Adult");

console.log("Done");

// ---------------------------------------

// Question 12
const username = "";

if (username) {
  console.log("Valid");
} else {
  console.log("Empty");
}

// ---------------------------------------

// Question 13
const value = null;

if (value) {
  console.log("Exists");
} else {
  console.log("No Value");
}

// ---------------------------------------

// Question 14
const language = "JavaScript";

if (language) {
  console.log("Learning");
}

// ---------------------------------------

// Question 15
const votingAge = 18;

console.log(votingAge >= 18 ? "Eligible" : "Not Eligible");

// ---------------------------------------

// Question 16
const loggedIn = true;
const admin = false;

if (loggedIn && admin) {
  console.log("Dashboard");
} else {
  console.log("Home");
}

// ---------------------------------------

// Question 17
const logged = false;
const hasSubscription = true;

if (logged || hasSubscription) {
  console.log("Access Granted");
} else {
  console.log("Access Denied");
}

// ---------------------------------------

// Question 18
const isStudent = false;

if (!isStudent) {
  console.log("Employee");
}

// ---------------------------------------

// Question 19
const value2 = 0;

if (value2) {
  console.log("True");
} else {
  console.log("False");
}

// ---------------------------------------

// Question 20
const day2 = "Friday";

switch (day2) {
  case "Friday":
    console.log("Weekend Soon");

  case "Saturday":
    console.log("Weekend");
    break;

  default:
    console.log("Work");
}
