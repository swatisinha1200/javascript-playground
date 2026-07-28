# JavaScript Operators

## What is an Operator?

An operator performs an operation on one or more values.

Example:

```javascript
10 + 5;
```

`+` is the operator.

---

# Types of Operators

- Arithmetic
- Assignment
- Comparison
- Logical
- Ternary

---

## 1. Arithmetic Operators

| Operator | Meaning             |
| -------- | ------------------- |
| +        | Addition            |
| -        | Subtraction         |
| \*       | Multiplication      |
| /        | Division            |
| %        | Modulus (Remainder) |
| \*\*     | Exponent            |

Example

```javascript
const result = 10 + 5;
```

---

## 2. Assignment Operators

| Operator | Example |
| -------- | ------- |
| =        | x = 10  |
| +=       | x += 5  |
| -=       | x -= 2  |
| \*=      | x \*= 3 |
| /=       | x /= 2  |
| %=       | x %= 3  |

Example

```javascript
let score = 50;

score += 20;
```

---

## 3. Comparison Operators

| Operator | Meaning               |
| -------- | --------------------- |
| >        | Greater than          |
| <        | Less than             |
| >=       | Greater than or equal |
| <=       | Less than or equal    |
| ==       | Loose equality        |
| ===      | Strict equality       |
| !=       | Loose inequality      |
| !==      | Strict inequality     |

Example

```javascript
5 === "5";
```

Returns

```
false
```

---

## == vs ===

### ==

Compares values after type coercion.

```javascript
5 == "5";
```

Returns

```
true
```

---

### ===

Compares both value and data type.

```javascript
5 === "5";
```

Returns

```
false
```

Always prefer `===`.

---

## 4. Logical Operators

| Operator | Meaning |
| -------- | ------- |
| &&       | AND     |
| \|\|     | OR      |
| !        | NOT     |

Example

```javascript
isLoggedIn && isAdmin;
```

---

## 5. Ternary Operator

Short form of `if...else`.

Syntax

```javascript
condition ? value1 : value2;
```

Example

```javascript
const result = marks >= 35 ? "Pass" : "Fail";
```

---

## Operator Precedence

JavaScript follows mathematical precedence.

Example

```javascript
10 + 5 * 2;
```

Result

```
20
```

Parentheses execute first.

```javascript
(10 + 5) * 2;
```

Result

```
30
```

---

## Best Practices

- Prefer `===` over `==`.
- Use meaningful variable names.
- Use parentheses when expressions become complex.
- Use the ternary operator only for simple conditions.

---

## Common Beginner Mistakes

❌ Using `==`

```javascript
5 == "5";
```

Prefer

```javascript
5 === "5";
```

❌ Forgetting operator precedence

```javascript
10 + 5 * 2;
```

❌ Overusing nested ternary operators.

---

## Interview Questions

1. What is an operator?
2. What is the difference between `==` and `===`?
3. Why is `===` preferred?
4. What does `%` do?
5. What are logical operators?
6. What is the ternary operator?
7. When should you use the ternary operator?
8. What is operator precedence?

---

## Quick Revision

- Arithmetic → Mathematical operations
- Assignment → Update variable values
- Comparison → Returns true or false
- Logical → Combine conditions
- Ternary → Short `if...else`
- Prefer `===`
- Remember operator precedence
