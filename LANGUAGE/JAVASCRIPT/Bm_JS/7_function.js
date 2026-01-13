/**
 * ========================================
 * JavaScript Functions
 * Topic: Function declaration, arrow functions, parameters, return values
 * ========================================
 */

console.log("===== JAVASCRIPT FUNCTIONS =====\n");

// ================================
// 1. FUNCTION DECLARATION
// ================================

console.log("--- 1. FUNCTION DECLARATION ---");

// Basic function
function greet() {
    console.log("Hello, Welcome to JavaScript!");
}

greet(); // Call the function

// Function with parameters
function sayHello(name) {
    console.log("Hello, " + name + "!");
}

sayHello("Bidhisha");
sayHello("John");

// Function with multiple parameters
function add(a, b) {
    console.log(a + " + " + b + " = " + (a + b));
}

add(10, 20);
add(50, 30);

// ================================
// 2. RETURN STATEMENT
// ================================

console.log("\n--- 2. RETURN STATEMENT ---");

function multiply(x, y) {
    return x * y;
}

let result1 = multiply(5, 4);
console.log("5 * 4 = " + result1);

let result2 = multiply(12, 3);
console.log("12 * 3 = " + result2);

// Function returning string
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}

let name = fullName("John", "Doe");
console.log("Full Name: " + name);

// Function returning boolean
function isEven(num) {
    return num % 2 === 0;
}

console.log("Is 10 even?", isEven(10));
console.log("Is 15 even?", isEven(15));

// ================================
// 3. FUNCTION EXPRESSION
// ================================

console.log("\n--- 3. FUNCTION EXPRESSION ---");

// Anonymous function
let square = function(num) {
    return num * num;
};

console.log("5 squared:", square(5));
console.log("8 squared:", square(8));

// Function expression with name
let subtract = function minus(a, b) {
    return a - b;
};

console.log("20 - 8 =", subtract(20, 8));

// ================================
// 4. ARROW FUNCTIONS
// ================================

console.log("\n--- 4. ARROW FUNCTIONS ---");

// Single parameter
const cube = x => x * x * x;
console.log("2 cubed:", cube(2));
console.log("3 cubed:", cube(3));

// Multiple parameters
const divide = (a, b) => a / b;
console.log("100 / 4 =", divide(100, 4));

// With explicit return
const greetUser = (user) => {
    return "Welcome, " + user + "!";
};
console.log(greetUser("Mam"));

// No parameters
const getCurrentDate = () => new Date();
console.log("Current time:", getCurrentDate());

// ================================
// 5. DEFAULT PARAMETERS
// ================================

console.log("\n--- 5. DEFAULT PARAMETERS ---");

// Function with default parameters
function introduce(name, age = 18, city = "Unknown") {
    console.log("Name: " + name + ", Age: " + age + ", City: " + city);
}

introduce("Bidhisha", 25, "Delhi");
introduce("John", 30);
introduce("Jane");

// Arrow function with defaults
const calculateDiscount = (price, discountPercent = 10) => {
    let discount = (price * discountPercent) / 100;
    return price - discount;
};

console.log("Price 1000 with 10% discount:", calculateDiscount(1000));
console.log("Price 1000 with 20% discount:", calculateDiscount(1000, 20));

// ================================
// 6. REST PARAMETERS
// ================================

console.log("\n--- 6. REST PARAMETERS ---");

// Rest parameters (...)
function sumAll(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

console.log("Sum of 1,2,3:", sumAll(1, 2, 3));
console.log("Sum of 5,10,15,20:", sumAll(5, 10, 15, 20));
console.log("Sum of 1,2,3,4,5,6,7,8,9,10:", sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// ================================
// 7. FUNCTION HOISTING
// ================================

console.log("\n--- 7. FUNCTION HOISTING ---");

// Function declarations are hoisted
console.log("Hoisted function works:", hoistedFunction());

function hoistedFunction() {
    return "This function is hoisted!";
}

// ================================
// 8. CALLBACK FUNCTIONS
// ================================

console.log("\n--- 8. CALLBACK FUNCTIONS ---");

function processData(data, callback) {
    console.log("Processing:", data);
    let result = data * 2;
    callback(result);
}

function displayResult(result) {
    console.log("Result:", result);
}

processData(5, displayResult);

// Inline callback
processData(10, function(result) {
    console.log("Processed result:", result);
});

// ================================
// 9. HIGHER ORDER FUNCTIONS
// ================================

console.log("\n--- 9. HIGHER ORDER FUNCTIONS ---");

// Function returning another function
function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

let double = multiplier(2);
let triple = multiplier(3);

console.log("Double of 5:", double(5));
console.log("Triple of 5:", triple(5));

// ================================
// 10. RECURSIVE FUNCTIONS
// ================================

console.log("\n--- 10. RECURSIVE FUNCTIONS ---");

// Factorial using recursion
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log("Factorial of 5:", factorial(5));
console.log("Factorial of 6:", factorial(6));

// Fibonacci sequence
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Fibonacci of 7:", fibonacci(7));

// ================================
// 11. FUNCTION SCOPE
// ================================

console.log("\n--- 11. FUNCTION SCOPE ---");

var globalVar = "Global";
let blockVar = "Block";

function scopeExample() {
    var localVar = "Local";
    let blockLocal = "Block Local";
    
    console.log("Inside function:");
    console.log("globalVar:", globalVar);
    console.log("localVar:", localVar);
    console.log("blockLocal:", blockLocal);
}

scopeExample();

console.log("Outside function:");
console.log("globalVar:", globalVar);
// console.log("localVar:", localVar); // Error - not accessible

// ================================
// 12. CLOSURES
// ================================

console.log("\n--- 12. CLOSURES ---");

function createCounter() {
    let count = 0;
    
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}

let counter = createCounter();
console.log("Count:", counter.getCount());
console.log("After increment:", counter.increment());
console.log("After increment:", counter.increment());
console.log("After decrement:", counter.decrement());

// ================================
// 13. IIFE (Immediately Invoked Function Expression)
// ================================

console.log("\n--- 13. IIFE ---");

// IIFE
(function() {
    console.log("This is an IIFE - runs immediately");
    let privateVar = "Private";
    console.log(privateVar);
})();

// IIFE with parameters
(function(name, age) {
    console.log("IIFE with parameters: " + name + ", " + age);
})("Bidhisha", 25);

// ================================
// 14. PRACTICAL EXAMPLES
// ================================

console.log("\n--- 14. PRACTICAL EXAMPLES ---");

// Example 1: Password validator
console.log("\nExample 1: Password Validator");
function isValidPassword(password) {
    return password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password);
}

console.log("Is 'Pass1234' valid?", isValidPassword("Pass1234"));
console.log("Is 'abc' valid?", isValidPassword("abc"));

// Example 2: Calculate grade
console.log("\nExample 2: Calculate Grade");
function getGrade(marks) {
    if (marks >= 90) return "A";
    else if (marks >= 80) return "B";
    else if (marks >= 70) return "C";
    else if (marks >= 60) return "D";
    else return "F";
}

console.log("Grade for 85:", getGrade(85));
console.log("Grade for 95:", getGrade(95));
console.log("Grade for 55:", getGrade(55));

// Example 3: Array manipulation
console.log("\nExample 3: Array Statistics");
function arrayStats(arr) {
    return {
        sum: arr.reduce((a, b) => a + b, 0),
        average: arr.reduce((a, b) => a + b, 0) / arr.length,
        max: Math.max(...arr),
        min: Math.min(...arr)
    };
}

let scores = [85, 90, 78, 92, 88];
let stats = arrayStats(scores);
console.log("Scores:", scores);
console.log("Statistics:", stats);

console.log("\n===== FUNCTIONS COMPLETE =====");
