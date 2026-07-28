# JavaScript Conditions

## What are Conditions?

Conditions allow a program to make decisions based on whether an expression is `true` or `false`.

### Real-World Example

If your age is 18 or above, you can vote.

```javascript
const age = 20;

if (age >= 18) {
  console.log("Eligible to Vote");
}
```

---

# Types of Conditional Statements

- if
- if...else
- if...else if...else
- switch
- Ternary Operator

---

## 1. if Statement

Executes a block of code only when the condition is `true`.

### Syntax

```javascript
if (condition) {
  // code
}
```

### Example

```javascript
const age = 20;

if (age >= 18) {
  console.log("Adult");
}
```

---

## 2. if...else Statement

Executes one block if the condition is `true`, otherwise executes another block.

### Syntax

```javascript
if (condition) {
  // code
} else {
  // code
}
```

### Example

```javascript
const age = 15;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

---

## 3. if...else if...else

Used when checking multiple conditions.

### Example

```javascript
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
```

---

## 4. switch Statement

Used when comparing one value against multiple possible values.

### Syntax

```javascript
switch (value) {
  case value1:
    // code
    break;

  case value2:
    // code
    break;

  default:
  // code
}
```

### Example

```javascript
const day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of Week");
    break;

  case "Friday":
    console.log("Weekend Soon");
    break;

  default:
    console.log("Normal Day");
}
```

---

## Why is break Important?

Without `break`, JavaScript continues executing the next cases.

Example

```javascript
const day = "Friday";

switch (day) {
  case "Friday":
    console.log("Weekend Soon");

  case "Saturday":
    console.log("Weekend");
}
```

Output

```
Weekend Soon
Weekend
```

---

## 5. Ternary Operator

A shorthand for simple `if...else` statements.

### Syntax

```javascript
condition ? valueIfTrue : valueIfFalse;
```

### Example

```javascript
const age = 20;

console.log(age >= 18 ? "Adult" : "Minor");
```

---

## Truthy and Falsy Values

### Falsy Values

- false
- 0
- ""
- null
- undefined
- NaN

Everything else is Truthy.

Example

```javascript
const username = "";

if (username) {
  console.log("Valid");
} else {
  console.log("Empty");
}
```

---

# Best Practices

- Use `===` instead of `==`.
- Keep conditions simple.
- Use `switch` when checking one variable against many values.
- Use the ternary operator only for simple conditions.
- Format nested conditions properly for readability.

---

# Common Beginner Mistakes

❌ Using `=` instead of `===`

```javascript
if (age = 18)
```

✅ Correct

```javascript
if (age === 18)
```

---

❌ Forgetting `break` in a `switch` statement.

---

❌ Writing overly complex ternary expressions.

---

# Interview Questions

1. What is a conditional statement?
2. What is the difference between `if` and `if...else`?
3. When should you use `switch`?
4. Why is `break` used in `switch`?
5. What is the ternary operator?
6. What are truthy and falsy values?
7. What happens if `break` is omitted?
8. Why should `===` be preferred over `==`?

---

# Quick Revision

- `if` → Execute when condition is true.
- `if...else` → Two possible paths.
- `if...else if...else` → Multiple conditions.
- `switch` → Multiple fixed values.
- `break` → Prevents fall-through.
- Ternary → Short `if...else`.
- Remember JavaScript truthy and falsy values.
