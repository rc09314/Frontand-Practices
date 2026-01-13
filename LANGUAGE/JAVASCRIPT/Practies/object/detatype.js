/**
 * ========================================
 * JavaScript Data Type Practice
 * Topic: Practice various JavaScript data types
 * ========================================
 */

console.log("===== DATA TYPE PRACTICE =====\n");

// ================================
// 1. NUMBER TYPE PRACTICE
// ================================

console.log("--- 1. NUMBER TYPE PRACTICE ---");

// Basic numbers
let age = 25;
let price = 99.56;

console.log("Age:", age, "Type:", typeof age);
console.log("Price:", price, "Type:", typeof price);

// Mathematical operations
let num1 = 100;
let num2 = 25;

console.log("\nMath operations:");
console.log("num1:", num1, "num2:", num2);
console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Modulus:", num1 % num2);
console.log("Power:", num1 ** 2);

// ================================
// 2. STRING TYPE PRACTICE
// ================================

console.log("\n--- 2. STRING TYPE PRACTICE ---");

let str1 = "Hello";
let str2 = "JavaScript";
let name = "Bidhisha";

console.log("str1:", str1, "Type:", typeof str1);
console.log("str2:", str2, "Type:", typeof str2);

// String concatenation
let fullMessage = str1 + " " + name;
console.log("Concatenation:", fullMessage);

// String methods
console.log("\nString methods:");
console.log("Length of 'Hello':", str1.length);
console.log("Uppercase:", str1.toUpperCase());
console.log("Lowercase:", str1.toLowerCase());
console.log("First char:", str1.charAt(0));
console.log("Index of 'l':", str1.indexOf('l'));
console.log("Substring(1,3):", str1.substring(1, 3));

// ================================
// 3. BOOLEAN TYPE PRACTICE
// ================================

console.log("\n--- 3. BOOLEAN TYPE PRACTICE ---");

let isStudent = true;
let isMarried = false;

console.log("Is Student:", isStudent, "Type:", typeof isStudent);
console.log("Is Married:", isMarried, "Type:", typeof isMarried);

// Boolean comparisons
console.log("\nBoolean comparisons:");
console.log("25 > 18:", 25 > 18);
console.log("25 < 18:", 25 < 18);
console.log("25 === 25:", 25 === 25);

// Logical operations
console.log("\nLogical operations:");
console.log("true && true:", true && true);
console.log("true || false:", true || false);
console.log("!true:", !true);

// ================================
// 4. ARRAY TYPE PRACTICE
// ================================

console.log("\n--- 4. ARRAY TYPE PRACTICE ---");

let fruits = ["apple", "banana", "cherry"];
let numbers = [10, 20, 30, 40, 50];
let mixed = [1, "hello", true, 3.14];

console.log("Fruits array:", fruits);
console.log("Numbers array:", numbers);
console.log("Mixed array:", mixed);
console.log("Array type:", typeof fruits);

// Array access
console.log("\nArray access:");
console.log("First fruit:", fruits[0]);
console.log("Last number:", numbers[numbers.length - 1]);
console.log("Array length:", fruits.length);

// Array methods
console.log("\nArray methods:");
fruits.push("date");
console.log("After push('date'):", fruits);
console.log("Pop:", fruits.pop());
console.log("Includes('banana'):", fruits.includes("banana"));

// ================================
// 5. OBJECT TYPE PRACTICE
// ================================

console.log("\n--- 5. OBJECT TYPE PRACTICE ---");

let student = {
    name: "Bidhisha",
    age: 25,
    course: "Web Development",
    marks: 95
};

console.log("Student object:", student);
console.log("Type:", typeof student);
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Object keys:", Object.keys(student));

// ================================
// 6. NULL AND UNDEFINED
// ================================

console.log("\n--- 6. NULL AND UNDEFINED ---");

let undefinedVar;
let nullVar = null;
let definedVar = "defined";

console.log("Undefined:", undefinedVar, "Type:", typeof undefinedVar);
console.log("Null:", nullVar, "Type:", typeof nullVar);
console.log("Defined:", definedVar, "Type:", typeof definedVar);

// ================================
// 7. TYPE CONVERSION
// ================================

console.log("\n--- 7. TYPE CONVERSION ---");

// String to Number
console.log("String '42' to Number:", Number("42"), typeof Number("42"));
console.log("String '3.14' to Number:", Number("3.14"));

// Number to String
console.log("Number 42 to String:", String(42), typeof String(42));
console.log("Number 3.14 to String:", String(3.14));

// To Boolean
console.log("1 to Boolean:", Boolean(1));
console.log("0 to Boolean:", Boolean(0));
console.log("'hello' to Boolean:", Boolean("hello"));
console.log("Empty string to Boolean:", Boolean(""));

// ================================
// 8. PRACTICE PROBLEMS
// ================================

console.log("\n--- 8. PRACTICE PROBLEMS ---");

// Problem 1: Calculate average
console.log("\nProblem 1: Calculate Average");
let marks = [85, 90, 78, 92, 88];
let sum = 0;
for (let mark of marks) {
    sum += mark;
}
let average = sum / marks.length;
console.log("Marks:", marks);
console.log("Average:", average);

// Problem 2: Check if number is even
console.log("\nProblem 2: Check Even Number");
function isEven(num) {
    return num % 2 === 0;
}

console.log("Is 20 even?", isEven(20));
console.log("Is 15 even?", isEven(15));

// Problem 3: Count vowels
console.log("\nProblem 3: Count Vowels");
function countVowels(str) {
    let count = 0;
    for (let char of str.toLowerCase()) {
        if ("aeiou".includes(char)) count++;
    }
    return count;
}

console.log("Vowels in 'Hello World':", countVowels("Hello World"));

// Problem 4: Find maximum number
console.log("\nProblem 4: Find Maximum");
let numArray = [45, 23, 67, 12, 89, 34];
let max = Math.max(...numArray);
console.log("Numbers:", numArray);
console.log("Maximum:", max);

console.log("\n===== DATA TYPE PRACTICE COMPLETE =====");

