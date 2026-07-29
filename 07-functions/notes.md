# JavaScript Functions

## What is a Function?

A function is a reusable block of code that performs a specific task.

Instead of writing the same code multiple times, write it once inside a function and call it whenever needed.

Syntax:

```javascript
function functionName() {
  // code
}
```

Example:

```javascript
function greet() {
  console.log("Hello");
}

greet();
```

Output:

```
Hello
```

---

# Function Declaration

A Function Declaration is created using the `function` keyword.

Syntax:

```javascript
function greet() {
  console.log("Hello");
}
```

Example:

```javascript
function welcome() {
  console.log("Welcome to JavaScript");
}

welcome();
```

---

# Function Expression

A Function Expression stores a function inside a variable.

Syntax:

```javascript
const greet = function () {
  console.log("Hello");
};
```

Example:

```javascript
const add = function () {
  console.log(10 + 20);
};

add();
```

---

# Parameters vs Arguments

## Parameters

Variables written in the function definition.

```javascript
function greet(name) {
  console.log(name);
}
```

`name` is a parameter.

---

## Arguments

Values passed while calling the function.

```javascript
greet("Swati");
```

"Swati" is an argument.

Example:

```javascript
function add(a, b) {
  console.log(a + b);
}

add(10, 20);
```

Output:

```
30
```

---

# Return Statement

The `return` keyword sends a value back from the function.

Syntax:

```javascript
function add(a, b) {
  return a + b;
}
```

Example:

```javascript
function square(num) {
  return num * num;
}

const result = square(5);

console.log(result);
```

Output:

```
25
```

Without `return`, a function returns `undefined`.

---

# Default Parameters

Default parameters provide a value when no argument is passed.

Syntax:

```javascript
function greet(name = "Guest") {
  console.log(name);
}
```

Example:

```javascript
greet();
greet("Swati");
```

Output:

```
Guest
Swati
```

---

# Callback Functions

A callback function is a function passed as an argument to another function.

Example:

```javascript
function greet(name) {
  console.log("Hello " + name);
}

function processUser(callback) {
  callback("Swati");
}

processUser(greet);
```

Output:

```
Hello Swati
```

Callbacks are commonly used with:

- Event handling
- Timers
- Array methods
- Asynchronous programming

---

# Pure Functions

A pure function:

- Always returns the same output for the same input.
- Does not modify external data.
- Has no side effects.

Example:

```javascript
function add(a, b) {
  return a + b;
}
```

---

# Impure Functions

An impure function changes external data or depends on external values.

Example:

```javascript
let count = 0;

function increment() {
  count++;
}
```

This function modifies an external variable.

---

# Function Best Practices

- Use meaningful function names.
- Keep functions small.
- A function should perform one task.
- Use `return` when a value is needed.
- Avoid modifying global variables.
- Prefer pure functions whenever possible.

---

# Summary

- Functions make code reusable.
- Function Declaration uses the `function` keyword.
- Function Expression stores a function in a variable.
- Parameters receive values.
- Arguments pass values.
- `return` sends a value back.
- Default parameters provide fallback values.
- Callback functions are passed as arguments.
- Pure functions have no side effects.
- Impure functions modify external state.
