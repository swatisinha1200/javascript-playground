// ===============================================
// Exercise 1: Print Numbers 1 to 10
// ===============================================
{
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}
// ================================================
// Exercise 2: Print Numbers 10 to 1
// ================================================
{
  for (let i = 10; i >= 1; i--) {
    console.log(i);
  }
}

// ================================================
// Exercise 3: Print Even Numbers
// ================================================
{
  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

// =================================================
// Exercise 4: Print Odd Numbers
// =================================================
{
  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
}
// =================================================
// Exercise 5: Multiplication Table
// Create:
// const number = 7;
// Using a for loop, print its multiplication table up to 10.
// Example format:
// 7 x 1 = 7
// 7 x 2 = 14
// ...
//  ========================================================
{
  const number = 7;
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
}
// ==========================================================
// Exercise 6: Countdown
// Using a while loop, print:
// 5
// 4
// 3
// 2
// 1
// Blast Off!
// ==============================================================
{
  let i = 5;
  while (i >= 1) {
    console.log(i);
    i--;
  }
  console.log("Blast Off!");
}
// ================================================================
// Exercise 7: Print Multiples of 5
// Using a for loop, print all multiples of 5 from 5 to 50.
// ================================================================
{
  for (let i = 5; i <= 50; i += 5) {
    console.log(i);
  }
}
// ==================================================================
// Exercise 8: do...while
// Using a do...while loop, print numbers from 1 to 5.
// ===================================================================
{
  let i = 1;
  do {
    console.log(i);
    i++;
  } while (i <= 5);
}
// ===============================================================
// 🎯 Mini Challenge 1: Skip Number
// Using a for loop:
// Print numbers from 1 to 10, but skip 6 using continue.

// ===============================================================
{
  for (let i = 1; i <= 10; i++) {
    if (i === 6) {
      continue;
    }
    console.log(i);
  }
}
// ===============================================================
// 🎯 Mini Challenge 2: Stop Early
// Using a for loop:
// Print numbers from 1 to 10, but stop the loop when the number becomes 7 using break.
// ===============================================================
{
  for (let i = 1; i <= 10; i++) {
    if (i === 7) {
      break;
    }
    console.log(i);
  }
}
// ===============================================================
// 💼 Real-World Assignment 1: Employee Attendance
// Create:
// const totalDays = 30;
// Using a for loop:
// Print:
// Day 1: Present
// Day 2: Present
// ...
// Day 30: Present
// ===============================================================
{
  const totalDays = 30;
  for (let i = 1; i <= 30; i++) {
    console.log(`Day ${i}:  Present`);
  }
}
// ===============================================================
// 💼 Real-World Assignment 2: Order Processing
// An online store has 10 orders.
// Using a for loop:
// Print:
// Processing Order #1
// Processing Order #2
// ...
// Processing Order #10
// ===============================================================
{
  for (let i = 1; i <= 10; i++) {
    console.log(`Processing Order #${i}`);
  }
}
//  ===============================================================

// 💼 Real-World Assignment 3: Login Attempts
// A user has 3 login attempts.
// Using a while loop, print:
// Login Attempt 1
// Login Attempt 2
// Login Attempt 3
// After the loop, print:
// Account Locked
//  ===============================================================
{
  let i = 1;
  while (i <= 3) {
    console.log(`Login Attempt ${i}`);
    i++;
  }
  console.log("Account Locked");
}
// ===============================================================

// 🎤 Interview Coding Challenge
// Create:
// const start = 1;
// const end = 20;
// Using a for loop:
// 	• Print "Fizz" for numbers divisible by 3.
// 	• Otherwise, print the number.
//  ===============================================================
{
  const start = 1;
  const end = 20;
  for (let i = start; i <= end; i++) {
    if (i % 3 === 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
}
