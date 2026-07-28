# JavaScript Data Types - Output Solutions

---

## Question 1

```javascript
console.log(typeof "Hello");
```

### Output

```text
string
```

### Explanation

`"Hello"` is a string.

---

## Question 2

```javascript
console.log(typeof 100);
```

### Output

```text
number
```

### Explanation

`100` is a number.

---

## Question 3

```javascript
console.log(typeof false);
```

### Output

```text
boolean
```

### Explanation

`false` is a boolean value.

---

## Question 4

```javascript
let city;
console.log(typeof city);
```

### Output

```text
undefined
```

### Explanation

The variable is declared but not assigned a value.

---

## Question 5

```javascript
let value = null;
console.log(typeof value);
```

### Output

```text
object
```

### Explanation

This is a well-known historical bug in JavaScript. Although `value` is `null`, `typeof null` returns `"object"`.

---

## Question 6

```javascript
const isStudent = true;
console.log(typeof isStudent);
```

### Output

```text
boolean
```

### Explanation

`true` is a boolean.

---

## Question 7

```javascript
console.log(typeof NaN);
```

### Output

```text
number
```

### Explanation

`NaN` stands for "Not a Number", but its data type is still `number`.

---

## Question 8

```javascript
console.log(typeof []);
```

### Output

```text
object
```

### Explanation

Arrays are a special type of object in JavaScript.

---

## Question 9

```javascript
console.log(typeof {});
```

### Output

```text
object
```

### Explanation

An object literal has the type `"object"`.

---

## Question 10

```javascript
console.log(typeof function () {});
```

### Output

```text
function
```

### Explanation

Functions have their own `typeof` result: `"function"`.
