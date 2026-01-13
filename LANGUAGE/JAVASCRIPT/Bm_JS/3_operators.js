/**
 * ========================================
 * JavaScript Operators
 * Topic: Arithmetic, Logical, Comparison, Assignment
 * ========================================
 */

console.log("===== JAVASCRIPT OPERATORS =====\n");

// ================================
// 1. ARITHMETIC OPERATORS
// ================================

console.log("--- 1. ARITHMETIC OPERATORS ---");
let a = 20;
let b = 10;

console.log("a =", a, "b =", b);
console.log("Addition (a + b) =", a + b);
console.log("Subtraction (a - b) =", a - b);
console.log("Multiplication (a * b) =", a * b);
console.log("Division (a / b) =", a / b);
console.log("Modulus (a % b) =", a % b);
console.log("Exponentiation (a ** 2) =", a ** 2);

// Increment & Decrement
console.log("\nIncrement & Decrement:");
let x = 5;
console.log("x =", x);
console.log("x++ =", x++, "then x =", x);
console.log("++x =", ++x, "and x =", x);

let y = 10;
console.log("\ny =", y);
console.log("y-- =", y--, "then y =", y);
console.log("--y =", --y, "and y =", y);

// ================================
// 2. ASSIGNMENT OPERATORS
// ================================

console.log("\n--- 2. ASSIGNMENT OPERATORS ---");
let num = 100;
console.log("num = 100:", num);

num += 50;
console.log("num += 50:", num);

num -= 30;
console.log("num -= 30:", num);

num *= 2;
console.log("num *= 2:", num);

num /= 4;
console.log("num /= 4:", num);

// ================================
// 3. COMPARISON OPERATORS
// ================================

console.log("\n--- 3. COMPARISON OPERATORS ---");
let c = 20;
let d = "20";
let e = 30;

console.log("c =", c, "d =", d, "e =", e);

console.log("\nEquality Checks:");
console.log("c == d (loose equality):", c == d);  // true (value same)
console.log("c === d (strict equality):", c === d); // false (type different)
console.log("c != e (not equal):", c != e);        // true
console.log("c !== e (not strictly equal):", c !== e); // true

console.log("\nRelational Operators:");
console.log("c > e (greater than):", c > e);       // false
console.log("c < e (less than):", c < e);         // true
console.log("c >= d (greater or equal):", c >= d); // true
console.log("c <= e (less or equal):", c <= e);   // true

// ================================
// 4. LOGICAL OPERATORS
// ================================

console.log("\n--- 4. LOGICAL OPERATORS ---");

let isAdult = true;
let hasLicense = true;
let hasInsurance = false;

console.log("isAdult =", isAdult);
console.log("hasLicense =", hasLicense);
console.log("hasInsurance =", hasInsurance);

console.log("\nLogical AND (&&):");
console.log("isAdult && hasLicense =", isAdult && hasLicense);           // true
console.log("isAdult && hasInsurance =", isAdult && hasInsurance);       // false
console.log("Can drive?", isAdult && hasLicense && hasInsurance);        // false

console.log("\nLogical OR (||):");
console.log("isAdult || hasLicense =", isAdult || hasLicense);          // true
console.log("hasLicense || hasInsurance =", hasLicense || hasInsurance); // true
console.log("isAdult || hasInsurance =", isAdult || hasInsurance);      // true

console.log("\nLogical NOT (!):");
console.log("!isAdult =", !isAdult);              // false
console.log("!hasInsurance =", !hasInsurance);    // true

// ================================
// 5. TERNARY OPERATOR
// ================================

console.log("\n--- 5. TERNARY OPERATOR ---");
let age = 25;
let status = age >= 18 ? "Adult" : "Minor";
console.log("Age:", age);
console.log("Status:", status);

let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
console.log("Score:", score);
console.log("Grade:", grade);

// ================================
// 6. STRING OPERATORS
// ================================

console.log("\n--- 6. STRING OPERATORS ---");
let str1 = "Hello";
let str2 = "World";
let space = " ";

console.log("str1 =", str1);
console.log("str2 =", str2);
console.log("str1 + space + str2 =", str1 + space + str2);

let greeting = "Welcome";
greeting += " to JavaScript";
console.log("greeting after += =", greeting);

// ================================
// 7. OPERATOR PRECEDENCE
// ================================

console.log("\n--- 7. OPERATOR PRECEDENCE ---");
console.log("2 + 3 * 4 =", 2 + 3 * 4);           // 14 (* before +)
console.log("(2 + 3) * 4 =", (2 + 3) * 4);       // 20 (parentheses first)
console.log("10 - 5 + 3 =", 10 - 5 + 3);         // 8 (left to right)

console.log("\n===== OPERATORS COMPLETE =====");
