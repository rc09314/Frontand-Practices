/**
 * ========================================
 * JavaScript Introduction
 * Topic: JavaScript Basics and Fundamentals
 * ========================================
 */

// =================
// 1. CONSOLE OUTPUT
// =================

console.log("===== WELCOME TO JAVASCRIPT =====");
console.log("This is a simple console message");
console.warn("This is a warning message");
console.error("This is an error message");

// =================
// 2. VARIABLES
// =================

// Using var (old way - function scoped)
var name1 = "John";
console.log("var name1:", name1);

// Using let (modern way - block scoped)
let name2 = "Jane";
console.log("let name2:", name2);

// Using const (constant - cannot be reassigned)
const PI = 3.14159;
console.log("const PI:", PI);

// =================
// 3. BASIC DATA
// =================

console.log("\n===== BASIC INFORMATION =====");
console.log("Author: Learning JavaScript");
console.log("Date: " + new Date());
console.log("Time: " + new Date().toLocaleTimeString());

// =================
// 4. SIMPLE OPERATIONS
// =================

let x = 10;
let y = 20;
console.log("\n===== SIMPLE CALCULATIONS =====");
console.log("x = " + x);
console.log("y = " + y);
console.log("x + y = " + (x + y));
console.log("x * y = " + (x * y));

// =================
// 5. ALERT FUNCTION
// =================

// Uncomment to test alert (blocks execution)
// alert("Welcome to JavaScript!");

// =================
// 6. QUICK PRACTICE
// =================

let message = "JavaScript is awesome!";
console.log("\n===== MESSAGE =====");
console.log(message);

console.log("\n===== INTRO COMPLETE =====");
