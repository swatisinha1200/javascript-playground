# JavaScript Conditions - Solutions

## Question 1

```javascript
const age = 20;

if (age >= 18) {
  console.log("Adult");
}
```

### Output

```
Adult
```

✅ Correct

---

## Question 2

```javascript
const age = 15;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

### Output

```
Minor
```

✅ Correct

---

## Question 3

```javascript
const marks = 82;

if (marks >= 90) {
  console.log("A");
} else if (marks >= 75) {
  console.log("B");
} else {
  console.log("C");
}
```

### Output

```
B
```

✅ Correct

---

## Question 4

```javascript
const marks = 45;

if (marks >= 90) {
  console.log("A");
} else if (marks >= 75) {
  console.log("B");
} else if (marks >= 35) {
  console.log("C");
} else {
  console.log("Fail");
}
```

### Output

```
C
```

✅ Correct

---

## Question 5

```javascript
const isLoggedIn = true;

if (isLoggedIn) {
  console.log("Welcome");
} else {
  console.log("Login");
}
```

### Output

```
Welcome
```

✅ Correct

---

## Question 6

```javascript
const isAdmin = false;

if (isAdmin) {
  console.log("Admin");
}

console.log("User");
```

### Output

```
User
```

✅ Correct

---

## Question 7

```javascript
const number = 10;

if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
```

### Output

```
Even
```

✅ Correct

---

## Question 8

```javascript
const score = 90;

if (score > 90) {
  console.log("Excellent");
} else if (score >= 90) {
  console.log("Very Good");
}
```

### Output

```
Very Good
```

✅ Correct

---

## Question 9

```javascript
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
```

### Output

```
Middle
```

✅ Correct

---

## Question 10

```javascript
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
```

### Output

```
Unknown
```

✅ Correct

---

## Question 11

```javascript
const age = 25;

if (age >= 18) console.log("Adult");

console.log("Done");
```

### Output

```
Adult
Done
```

✅ Correct

---

## Question 12

```javascript
const username = "";

if (username) {
  console.log("Valid");
} else {
  console.log("Empty");
}
```

### Output

```
Empty
```

✅ Correct

---

## Question 13

```javascript
const value = null;

if (value) {
  console.log("Exists");
} else {
  console.log("No Value");
}
```

### Output

```
No Value
```

✅ Correct

---

## Question 14

```javascript
const value = "JavaScript";

if (value) {
  console.log("Learning");
}
```

### Output

```
Learning
```

❌ Your Answer

```
JavaScript
```

### Why?

The program prints the string inside `console.log()`, not the value of the variable.

---

## Question 15

```javascript
const age = 18;

console.log(age >= 18 ? "Eligible" : "Not Eligible");
```

### Output

```
Eligible
```

✅ Correct

---

## Question 16

```javascript
const isLoggedIn = true;
const isAdmin = false;

if (isLoggedIn && isAdmin) {
  console.log("Dashboard");
} else {
  console.log("Home");
}
```

### Output

```
Home
```

✅ Correct

---

## Question 17

```javascript
const isLoggedIn = false;
const hasSubscription = true;

if (isLoggedIn || hasSubscription) {
  console.log("Access Granted");
} else {
  console.log("Access Denied");
}
```

### Output

```
Access Granted
```

✅ Correct

---

## Question 18

```javascript
const isStudent = false;

if (!isStudent) {
  console.log("Employee");
}
```

### Output

```
Employee
```

✅ Correct

---

## Question 19

```javascript
const number = 0;

if (number) {
  console.log("True");
} else {
  console.log("False");
}
```

### Output

```
False
```

❌ Your Answer

```
True
```

### Why?

`0` is a **falsy** value in JavaScript.

---

## Question 20

```javascript
const day = "Friday";

switch (day) {
  case "Friday":
    console.log("Weekend Soon");

  case "Saturday":
    console.log("Weekend");
    break;

  default:
    console.log("Work");
}
```

### Output

```
Weekend Soon
Weekend
```

✅ Correct

### Why?

There is **no `break`** after the `"Friday"` case, so execution falls through into the `"Saturday"` case.

---

# Final Score

| Total Questions | Correct |           Score |
| --------------: | ------: | --------------: |
|              20 |      18 | **18/20 (90%)** |

---

# Common Interview Traps

- Forgetting `break` in a `switch` statement.
- Confusing **truthy** and **falsy** values (`0`, `""`, `null`, `undefined` are falsy).
- Thinking `console.log(variable)` prints the variable name instead of the string passed to it.
- Missing that an `if` without braces only applies to the next statement.
- Forgetting that `switch` statements continue executing without `break`.
