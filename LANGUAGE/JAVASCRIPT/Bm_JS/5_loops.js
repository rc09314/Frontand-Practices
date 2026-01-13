/**
 * ========================================
 * JavaScript Loops
 * Topic: for, while, do-while, for-in, for-of loops
 * ========================================
 */

console.log("===== JAVASCRIPT LOOPS =====\n");

// ================================
// 1. FOR LOOP
// ================================

console.log("--- 1. FOR LOOP ---");

console.log("\nPrinting numbers 1 to 5:");
for (let i = 1; i <= 5; i++) {
    console.log("Number:", i);
}

console.log("\nPrinting even numbers from 2 to 10:");
for (let i = 2; i <= 10; i += 2) {
    console.log("Even number:", i);
}

console.log("\nCounting down from 5 to 1:");
for (let i = 5; i >= 1; i--) {
    console.log("Countdown:", i);
}

// ================================
// 2. WHILE LOOP
// ================================

console.log("\n--- 2. WHILE LOOP ---");

console.log("\nPrinting numbers 1 to 5 (while loop):");
let count = 1;
while (count <= 5) {
    console.log("Count:", count);
    count++;
}

console.log("\nSimple multiplication table (5):");
let multiplier = 1;
while (multiplier <= 10) {
    let result = 5 * multiplier;
    console.log("5 × " + multiplier + " = " + result);
    multiplier++;
}

// ================================
// 3. DO...WHILE LOOP
// ================================

console.log("\n--- 3. DO...WHILE LOOP ---");

console.log("\nPrinting numbers 1 to 5 (do-while loop):");
let num = 1;
do {
    console.log("Num:", num);
    num++;
} while (num <= 5);

console.log("\nDo-While executes at least once:");
let x = 10;
do {
    console.log("Value:", x); // This will print even though x is not <= 5
} while (x <= 5);

// ================================
// 4. NESTED FOR LOOP
// ================================

console.log("\n--- 4. NESTED FOR LOOP ---");

console.log("\nMultiplication Table (3x3):");
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(i + " × " + j + " = " + (i * j));
    }
    console.log("---");
}

console.log("\nPattern with asterisks:");
for (let i = 1; i <= 5; i++) {
    let pattern = "";
    for (let j = 0; j < i; j++) {
        pattern += "* ";
    }
    console.log(pattern);
}

// ================================
// 5. BREAK STATEMENT
// ================================

console.log("\n--- 5. BREAK STATEMENT ---");

console.log("\nFind first number > 3:");
for (let i = 1; i <= 10; i++) {
    if (i > 3) {
        console.log("Found:", i);
        break; // Exit the loop
    }
}

console.log("\nSearch in array:");
let fruits = ["apple", "banana", "cherry", "date"];
for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === "cherry") {
        console.log("Found:", fruits[i]);
        break;
    }
}

// ================================
// 6. CONTINUE STATEMENT
// ================================

console.log("\n--- 6. CONTINUE STATEMENT ---");

console.log("\nPrint only odd numbers from 1 to 10:");
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue; // Skip even numbers
    }
    console.log("Odd number:", i);
}

console.log("\nSkip specific value:");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log("Value:", i);
}

// ================================
// 7. FOR...IN LOOP
// ================================

console.log("\n--- 7. FOR...IN LOOP ---");

let student = {
    name: "Bidhisha",
    age: 25,
    course: "Web Development",
    marks: 95
};

console.log("\nObject properties using for...in:");
for (let key in student) {
    console.log(key + ": " + student[key]);
}

// ================================
// 8. FOR...OF LOOP
// ================================

console.log("\n--- 8. FOR...OF LOOP ---");

let colors = ["red", "green", "blue", "yellow"];
console.log("\nArray elements using for...of:");
for (let color of colors) {
    console.log("Color:", color);
}

let numbers = [10, 20, 30, 40];
console.log("\nSum of array elements:");
let sum = 0;
for (let num of numbers) {
    sum += num;
}
console.log("Sum:", sum);

// ================================
// 9. ARRAY ITERATION METHODS
// ================================

console.log("\n--- 9. ARRAY ITERATION METHODS ---");

let items = [1, 2, 3, 4, 5];

console.log("\nUsing forEach:");
items.forEach(function(item, index) {
    console.log("Index " + index + ": " + item);
});

console.log("\nUsing map:");
let squared = items.map(function(item) {
    return item * item;
});
console.log("Squared values:", squared);

console.log("\nUsing filter:");
let evenNumbers = items.filter(function(item) {
    return item % 2 === 0;
});
console.log("Even numbers:", evenNumbers);

// ================================
// 10. PRACTICAL EXAMPLES
// ================================

console.log("\n--- 10. PRACTICAL EXAMPLES ---");

// Example 1: Factorial
console.log("\nExample 1: Factorial of 5");
let num1 = 5;
let factorial = 1;
for (let i = 1; i <= num1; i++) {
    factorial *= i;
}
console.log("5! = " + factorial);

// Example 2: Sum of numbers
console.log("\nExample 2: Sum of 1 to 100");
let total = 0;
for (let i = 1; i <= 100; i++) {
    total += i;
}
console.log("Sum = " + total);

// Example 3: Times table
console.log("\nExample 3: 7 Times Table");
for (let i = 1; i <= 10; i++) {
    console.log("7 × " + i + " = " + (7 * i));
}

// Example 4: Find prime numbers
console.log("\nExample 4: Prime numbers from 2 to 20");
for (let i = 2; i <= 20; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log("Prime: " + i);
    }
}

console.log("\n===== LOOPS COMPLETE =====");
