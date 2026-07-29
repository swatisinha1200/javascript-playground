# JavaScript Arrays

## What is an Array?

An array is a collection of multiple values stored in a single variable.

Instead of creating many variables, use one array to store related data.

Syntax:

```javascript
const fruits = ["Apple", "Banana", "Mango"];
```

---

# Creating Arrays

Arrays are created using square brackets `[]`.

Example:

```javascript
const numbers = [10, 20, 30, 40];
```

Mixed data types are also allowed.

```javascript
const data = ["JavaScript", 25, true];
```

---

# Accessing Elements

Array indexing starts from **0**.

Example:

```javascript
const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
```

Output:

```
Apple
Banana
Mango
```

Last element:

```javascript
console.log(fruits[fruits.length - 1]);
```

---

# Updating Elements

Use the index to change an element.

Example:

```javascript
const fruits = ["Apple", "Banana", "Mango"];

fruits[1] = "Orange";

console.log(fruits);
```

Output:

```
["Apple", "Orange", "Mango"]
```

---

# Looping Through Arrays

## Using for Loop

```javascript
const fruits = ["Apple", "Banana", "Mango"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

---

## Using for...of Loop

```javascript
const fruits = ["Apple", "Banana", "Mango"];

for (const fruit of fruits) {
  console.log(fruit);
}
```

---

# Array Basics

## length

Returns the number of elements.

```javascript
const numbers = [10, 20, 30];

console.log(numbers.length);
```

Output:

```
3
```

---

## Array.isArray()

Checks whether a value is an array.

```javascript
const numbers = [1, 2, 3];

console.log(Array.isArray(numbers));
```

Output:

```
true
```

Example:

```javascript
console.log(Array.isArray("JavaScript"));
```

Output:

```
false
```

---

# Nested Arrays

An array can contain other arrays.

Example:

```javascript
const matrix = [
  [1, 2],
  [3, 4],
];

console.log(matrix[0][1]);
console.log(matrix[1][0]);
```

Output:

```
2
3
```

---

# Real-World Examples

## Student Names

```javascript
const students = ["Amit", "Rahul", "Priya"];
```

## Shopping Cart

```javascript
const cart = ["Laptop", "Mouse", "Keyboard"];
```

## Employee Departments

```javascript
const departments = ["HR", "Sales", "IT"];
```

---

# Common Mistakes

❌ Accessing an invalid index

```javascript
const arr = [10, 20];

console.log(arr[5]);
```

Output:

```
undefined
```

---

❌ Forgetting arrays start at index 0

```javascript
const fruits = ["Apple", "Banana"];

console.log(fruits[1]);
```

Output:

```
Banana
```

---

# Best Practices

- Use descriptive array names.
- Access the last element using `length - 1`.
- Use loops for repetitive operations.
- Use `Array.isArray()` to verify arrays.
- Keep related data together in an array.

---

# Summary

- Arrays store multiple values in one variable.
- Arrays use zero-based indexing.
- Elements are accessed using indexes.
- Elements can be updated using their index.
- Use `length` to get the number of elements.
- Use `Array.isArray()` to check if a value is an array.
- Use `for` or `for...of` to iterate through arrays.
- Arrays can contain other arrays (nested arrays).
