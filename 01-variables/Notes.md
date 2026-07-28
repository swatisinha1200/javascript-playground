# JavaScript Variables

## What is a Variable?

A variable is a named container used to store data.

Example:

```javascript
let name = "Swati";
```

Here:

- `let` → Keyword
- `name` → Variable name
- `"Swati"` → Value

---

## Why Do We Need Variables?

Variables allow us to:

- Store data
- Reuse data
- Update data
- Make programs dynamic

---

## Types of Variables

### 1. let

- Can be reassigned
- Block scoped
- Preferred when the value changes

Example:

```javascript
let age = 25;
age = 26;
```

---

### 2. const

- Cannot be reassigned
- Block scoped
- Preferred by default

Example:

```javascript
const country = "India";
```

---

### 3. var

- Can be reassigned
- Function scoped
- Hoisted differently
- Avoid using in modern JavaScript

Example:

```javascript
var city = "Delhi";
```

---

## Variable Naming Rules

✅ Valid

```javascript
let firstName;
let age1;
let user_Name;
let $price;
```

❌ Invalid

```javascript
let 1name;
let first-name;
let let;
```

---

## Naming Convention

Use camelCase.

```javascript
let firstName;
let totalSalary;
let isLoggedIn;
```

---

## Best Practices

- Prefer `const` by default.
- Use `let` only when the value changes.
- Avoid `var`.
- Use meaningful variable names.

Good

```javascript
const firstName = "Swati";
```

Bad

```javascript
const x = "Swati";
```

---

## Common Beginner Mistakes

❌ Using `var`

❌ Using unclear variable names

```javascript
let a = 20;
```

Better

```javascript
let age = 20;
```

❌ Reassigning a `const`

```javascript
const age = 20;
age = 21;
```

---

## Interview Questions

1. What is a variable?
2. What is the difference between let, const, and var?
3. Why should var be avoided?
4. What are block scope and function scope?
5. Why should const be your default choice?

---

## Quick Revision

- Variable → Stores data.
- let → Reassignable.
- const → Cannot be reassigned.
- var → Avoid in modern JavaScript.
- Use camelCase.
- Prefer meaningful names.
