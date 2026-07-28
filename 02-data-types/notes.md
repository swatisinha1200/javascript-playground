# JavaScript Data Types

## What is a Data Type?

A data type defines what kind of value a variable stores.

Example:

```javascript
const age = 25;
```

`25` is a Number.

---

## Primitive Data Types

### 1. String

Stores text.

```javascript
const name = "Swati";
```

Type:

```javascript
typeof name;
```

Returns

```
string
```

---

### 2. Number

Stores integers and decimals.

```javascript
const age = 30;
const price = 99.99;
```

---

### 3. Boolean

Stores true or false.

```javascript
const isLoggedIn = true;
```

---

### 4. Undefined

A variable declared but not assigned.

```javascript
let city;
```

Returns

```
undefined
```

---

### 5. Null

Represents an intentional empty value.

```javascript
const salary = null;
```

Important:

```javascript
typeof null;
```

Returns

```
object
```

This is a historical JavaScript bug.

---

### 6. Symbol

Unique identifier.

```javascript
const id = Symbol();
```

---

### 7. BigInt

Stores very large integers.

```javascript
const bigNumber = 12345678901234567890n;
```

---

## Non-Primitive Data Types

### Object

```javascript
const person = {
  name: "Swati",
  age: 30,
};
```

---

### Array

```javascript
const colors = ["Red", "Blue"];
```

---

### Function

```javascript
function greet() {}
```

---

## typeof Operator

Checks the data type.

Example

```javascript
typeof "Hello";
```

Returns

```
string
```

---

## Best Practices

- Use meaningful variable names.
- Understand the difference between `null` and `undefined`.
- Use `typeof` when debugging.

---

## Common Beginner Mistakes

❌ Thinking arrays are a separate type.

```javascript
typeof [];
```

Returns

```
object
```

❌ Expecting

```javascript
typeof null;
```

to return

```
null
```

It actually returns

```
object
```

---

## Interview Questions

1. What are JavaScript data types?
2. What is the difference between primitive and non-primitive types?
3. What is `typeof`?
4. What is the difference between `null` and `undefined`?
5. Why does `typeof null` return `"object"`?

---

## Quick Revision

- String → Text
- Number → Numeric values
- Boolean → true/false
- Undefined → Declared but not assigned
- Null → Intentionally empty
- Object → Key-value pairs
- Array → Ordered collection
- Function → Reusable block of code
