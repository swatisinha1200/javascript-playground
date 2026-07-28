# JavaScript Loops

## What is a Loop?

A loop executes a block of code repeatedly until a condition becomes `false`.

### Real-World Example

Instead of writing:

```javascript
console.log(1);
console.log(2);
console.log(3);
```

Use:

```javascript
for (let i = 1; i <= 3; i++) {
  console.log(i);
}
```

---

# Types of Loops

- for
- while
- do...while

---

## 1. for Loop

Used when the number of iterations is known.

### Syntax

```javascript
for (initialization; condition; increment / decrement) {
  // code
}
```

### Example

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

---

## Parts of a for Loop

### Initialization

Runs once before the loop starts.

```javascript
let i = 1;
```

### Condition

Checked before every iteration.

```javascript
i <= 5;
```

### Increment / Decrement

Runs after every iteration.

```javascript
i++;
```

or

```javascript
i--;
```

---

## Execution Flow

```
Initialization
      ↓
Check Condition
      ↓
True
      ↓
Execute Code
      ↓
Increment
      ↓
Repeat
```

---

## 2. while Loop

Used when the number of iterations is unknown.

### Syntax

```javascript
while (condition) {
  // code
}
```

### Example

```javascript
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}
```

---

## 3. do...while Loop

Runs the code at least once before checking the condition.

### Syntax

```javascript
do {
  // code
} while (condition);
```

### Example

```javascript
let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 5);
```

---

## while vs do...while

### while

Checks the condition first.

May execute **0 times**.

### do...while

Executes once before checking.

Always executes **at least once**.

---

## break

Stops the loop immediately.

Example

```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }

  console.log(i);
}
```

---

## continue

Skips the current iteration.

Example

```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }

  console.log(i);
}
```

---

## Nested Loops

A loop inside another loop.

Example

```javascript
for (let row = 1; row <= 2; row++) {
  for (let col = 1; col <= 3; col++) {
    console.log(row, col);
  }
}
```

---

# Infinite Loop

Occurs when the condition never becomes `false`.

Example

```javascript
while (true) {
  console.log("Hello");
}
```

Or forgetting to update the loop variable:

```javascript
let i = 1;

while (i <= 5) {
  console.log(i);
}
```

---

# Best Practices

- Use `for` when the number of iterations is known.
- Use `while` when the number of iterations is unknown.
- Always update the loop variable.
- Use meaningful variable names.
- Avoid unnecessary nested loops.

---

# Common Beginner Mistakes

❌ Forgetting `i++`

❌ Creating infinite loops.

❌ Using `break` instead of `continue`.

❌ Modifying the wrong loop variable.

---

# Interview Questions

1. What is a loop?
2. What are the three types of loops in JavaScript?
3. What are the three parts of a `for` loop?
4. What is the difference between `for` and `while`?
5. What is the difference between `while` and `do...while`?
6. What is `break`?
7. What is `continue`?
8. What is an infinite loop?
9. Can a `while` loop execute zero times?
10. Can a `do...while` loop execute zero times?

---

# Quick Revision

- `for` → Known number of iterations.
- `while` → Unknown number of iterations.
- `do...while` → Executes at least once.
- `break` → Exit the loop.
- `continue` → Skip current iteration.
- Nested loop → Loop inside another loop.
- Always update the loop variable.
- Avoid infinite loops.
