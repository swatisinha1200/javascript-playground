// =======================================
// JavaScript Loops - Output Questions
// =======================================

// Question 1
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// ---------------------------------------

// Question 2
for (let i = 5; i >= 1; i--) {
  console.log(i);
}

// ---------------------------------------

// Question 3
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

// ---------------------------------------

// Question 4
let i = 1;

while (i <= 3) {
  console.log(i);
  i++;
}

// ---------------------------------------

// Question 5
let j = 5;

while (j > 0) {
  console.log(j);
  j--;
}

// ---------------------------------------

// Question 6
let k = 1;

do {
  console.log(k);
  k++;
} while (k <= 3);

// ---------------------------------------

// Question 7
let m = 5;

do {
  console.log(m);
} while (m < 5);

// ---------------------------------------

// Question 8
for (let n = 1; n <= 5; n++) {
  if (n === 3) {
    break;
  }

  console.log(n);
}

// ---------------------------------------

// Question 9
for (let p = 1; p <= 5; p++) {
  if (p === 3) {
    continue;
  }

  console.log(p);
}

// ---------------------------------------

// Question 10
for (let q = 1; q <= 3; q++) {
  console.log("Hello");
}

// ---------------------------------------

// Question 11
for (let r = 0; r < 5; r++) {
  console.log(r);
}

// ---------------------------------------

// Question 12
for (let s = 1; s <= 5; s++) {
  console.log(s * 2);
}

// ---------------------------------------

// Question 13
let t = 3;

while (t >= 1) {
  console.log(t);
  t--;
}

// ---------------------------------------

// Question 14
let u = 1;

while (u < 1) {
  console.log(u);
  u++;
}

// ---------------------------------------

// Question 15
for (let v = 1; v <= 5; v++) {
  if (v % 2 === 0) {
    console.log(v);
  }
}

// ---------------------------------------

// Question 16
for (let row = 1; row <= 3; row++) {
  for (let col = 1; col <= 2; col++) {
    console.log(row, col);
  }
}

// ---------------------------------------

// Question 17
for (let x = 1; x <= 3; x++) {
  console.log(x);

  if (x === 2) {
    break;
  }
}

// ---------------------------------------

// Question 18
for (let y = 1; y <= 3; y++) {
  if (y === 2) {
    continue;
  }

  console.log(y);
}

// ---------------------------------------

// Question 19
let z = 1;

while (z <= 5) {
  if (z === 4) {
    break;
  }

  console.log(z);
  z++;
}

// ---------------------------------------

// Question 20
let count = 0;

do {
  console.log(count);
  count++;
} while (count < 3);

// ---------------------------------------
// Bonus Question 21
// ---------------------------------------

for (let a = 1; a <= 3; a++) {
  console.log(a);

  if (a === 2) {
    continue;
  }

  console.log("JavaScript");
}

// ---------------------------------------
// Bonus Question 22
// ---------------------------------------

for (let a = 1; a <= 2; a++) {
  for (let b = 1; b <= 2; b++) {
    console.log(a + b);
  }
}

// ---------------------------------------
// Bonus Question 23
// ---------------------------------------

let num = 1;

while (num <= 3) {
  console.log(num);
  num += 2;
}
