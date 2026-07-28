# JavaScript Operators - Output Solutions

---

## Question 1

```javascript
console.log(15 + 5 * 2);
```

### Output

```text
25
```

### Explanation

Multiplication has higher precedence than addition.

`5 * 2 = 10`

`15 + 10 = 25`

---

## Question 2

```javascript
console.log((15 + 5) * 2);
```

### Output

```text
40
```

### Explanation

Parentheses execute first.

`15 + 5 = 20`

`20 * 2 = 40`

---

## Question 3

```javascript
let x = 10;
x += 5;
console.log(x);
```

### Output

```text
15
```

### Explanation

`+=` adds the value and stores the result.

---

## Question 4

```javascript
let y = 20;
y -= 8;
console.log(y);
```

### Output

```text
12
```

### Explanation

`20 - 8 = 12`

---

## Question 5

```javascript
let z = 5;
z *= 4;
console.log(z);
```

### Output

```text
20
```

### Explanation

`5 × 4 = 20`

---

## Question 6

```javascript
console.log(20 % 6);
```

### Output

```text
2
```

### Explanation

The remainder after dividing `20` by `6` is `2`.

---

## Question 7

```javascript
console.log(3 ** 3);
```

### Output

```text
27
```

### Explanation

`3³ = 27`

---

## Question 8

```javascript
console.log(10 == "10");
```

### Output

```text
true
```

### Explanation

`==` performs type coercion before comparing values.

---

## Question 9

```javascript
console.log(10 === "10");
```

### Output

```text
false
```

### Explanation

`===` compares both value and data type.

Number ≠ String.

---

## Question 10

```javascript
console.log(15 > 10);
```

### Output

```text
true
```

### Explanation

15 is greater than 10.

---

## Question 11

```javascript
console.log(15 <= 10);
```

### Output

```text
false
```

### Explanation

15 is not less than or equal to 10.

---

## Question 12

```javascript
console.log(true && false);
```

### Output

```text
false
```

### Explanation

`&&` returns `true` only if both operands are `true`.

---

## Question 13

```javascript
console.log(false || true);
```

### Output

```text
true
```

### Explanation

`||` returns `true` if at least one operand is `true`.

---

## Question 14

```javascript
console.log(!false);
```

### Output

```text
true
```

### Explanation

`!` (NOT) reverses a boolean value.

---

## Question 15

```javascript
const marks = 80;
console.log(marks >= 35 ? "Pass" : "Fail");
```

### Output

```text
Pass
```

### Explanation

The condition is `true`, so the first value is returned.

---

# Bonus Questions

## Question 16

```javascript
let a = 5;
let b = "5";
console.log(a == b);
```

### Output

```text
true
```

### Explanation

`==` converts the string `"5"` to the number `5` before comparison.

---

## Question 17

```javascript
let c = 5;
let d = "5";
console.log(c === d);
```

### Output

```text
false
```

### Explanation

Different data types.

---

## Question 18

```javascript
let data;
console.log(data == null);
```

### Output

```text
true
```

### Explanation

With loose equality (`==`), `undefined` is equal to `null`.

---

## Question 19

```javascript
let value2;
console.log(value2 === null);
```

### Output

```text
false
```

### Explanation

`undefined` is not strictly equal to `null`.

---

## Question 20

```javascript
console.log(typeof null);
```

### Output

```text
object
```

### Explanation

This is a historical JavaScript bug.

---

## Question 21

```javascript
console.log(12 % 5);
```

### Output

```text
2
```

### Explanation

The remainder after dividing `12` by `5` is `2`.

---

## Question 22

```javascript
console.log(2 ** 5);
```

### Output

```text
32
```

### Explanation

`2⁵ = 32`

---

## Question 23

```javascript
console.log(!(5 > 2));
```

### Output

```text
false
```

### Explanation

`5 > 2` is `true`, and `!true` becomes `false`.

---

## Question 24

```javascript
const userAge = 18;
console.log(userAge >= 18 ? "Eligible" : "Not Eligible");
```

### Output

```text
Eligible
```

### Explanation

The condition is `true`, so `"Eligible"` is printed.

---

## Question 25

```javascript
let finalScore = 40;
finalScore += 10;
console.log(finalScore);
```

### Output

```text
50
```

### Explanation

`+=` increases the value by `10`.
