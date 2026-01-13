/**
 * ========================================
 * JavaScript General Practice
 * Topic: Mixed JavaScript concepts and exercises
 * ========================================
 */

console.log("===== JAVASCRIPT PRACTICE EXERCISES =====\n");

// ================================
// 1. WELCOME MESSAGE
// ================================

console.log("--- 1. WELCOME MESSAGE ---");
console.log("Welcome to JavaScript Practice!");
console.log("This file contains various practice exercises\n");

// ================================
// 2. VARIABLES AND BASIC OPERATIONS
// ================================

console.log("--- 2. VARIABLES AND BASIC OPERATIONS ---");

let firstName = "Bidhisha";
let lastName = "Mam";
let age = 25;
let salary = 50000;

console.log("Name: " + firstName + " " + lastName);
console.log("Age: " + age);
console.log("Salary: " + salary);

// Calculate annual income
let annualIncome = salary * 12;
console.log("Annual Income: " + annualIncome);

// ================================
// 3. CONDITIONAL PRACTICE
// ================================

console.log("\n--- 3. CONDITIONAL PRACTICE ---");

// Exercise 1: Check voting eligibility
function checkVotingEligibility(age) {
    if (age >= 18) {
        return "Eligible to vote";
    } else {
        return "Not eligible to vote";
    }
}

console.log("Age 20:", checkVotingEligibility(20));
console.log("Age 15:", checkVotingEligibility(15));

// Exercise 2: Grade calculator
function getGrade(marks) {
    if (marks >= 90) {
        return "A - Excellent";
    } else if (marks >= 80) {
        return "B - Good";
    } else if (marks >= 70) {
        return "C - Average";
    } else if (marks >= 60) {
        return "D - Pass";
    } else {
        return "F - Fail";
    }
}

console.log("Marks 85 =", getGrade(85));
console.log("Marks 75 =", getGrade(75));
console.log("Marks 92 =", getGrade(92));

// ================================
// 4. LOOP PRACTICE
// ================================

console.log("\n--- 4. LOOP PRACTICE ---");

// Exercise 1: Print numbers
console.log("Numbers from 1 to 5:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Exercise 2: Multiplication table
console.log("\n7 Times Table:");
for (let i = 1; i <= 10; i++) {
    console.log("7 × " + i + " = " + (7 * i));
}

// Exercise 3: Sum of numbers
console.log("\nSum from 1 to 100:");
let total = 0;
for (let i = 1; i <= 100; i++) {
    total += i;
}
console.log("Total: " + total);

// ================================
// 5. ARRAY PRACTICE
// ================================

console.log("\n--- 5. ARRAY PRACTICE ---");

let students = ["Bidhisha", "John", "Jane", "Mike", "Sarah"];
console.log("Students:", students);

// Exercise 1: Print all students
console.log("Student list:");
for (let i = 0; i < students.length; i++) {
    console.log((i + 1) + ". " + students[i]);
}

// Exercise 2: Calculate average of numbers
console.log("\nCalculate average:");
let scores = [85, 90, 78, 92, 88];
let sum = 0;
for (let score of scores) {
    sum += score;
}
let avg = sum / scores.length;
console.log("Scores:", scores);
console.log("Average:", avg.toFixed(2));

// Exercise 3: Find maximum
console.log("\nFind maximum:");
let numbers = [45, 23, 67, 12, 89, 34];
let max = numbers[0];
for (let num of numbers) {
    if (num > max) {
        max = num;
    }
}
console.log("Numbers:", numbers);
console.log("Maximum:", max);

// ================================
// 6. STRING PRACTICE
// ================================

console.log("\n--- 6. STRING PRACTICE ---");

let message = "JavaScript is Awesome";

// Exercise 1: String properties
console.log("Message:", message);
console.log("Length:", message.length);
console.log("Uppercase:", message.toUpperCase());
console.log("Lowercase:", message.toLowerCase());

// Exercise 2: String manipulation
console.log("\nString methods:");
console.log("First character:", message.charAt(0));
console.log("Substring 'Java':", message.substring(0, 4));
console.log("Index of 'is':", message.indexOf("is"));
console.log("Replace 'Awesome' with 'Great':", message.replace("Awesome", "Great"));

// Exercise 3: Palindrome check
function isPalindrome(str) {
    let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    let reversed = cleanStr.split("").reverse().join("");
    return cleanStr === reversed;
}

console.log("\nPalindrome check:");
console.log("'racecar' is palindrome:", isPalindrome("racecar"));
console.log("'hello' is palindrome:", isPalindrome("hello"));

// ================================
// 7. FUNCTION PRACTICE
// ================================

console.log("\n--- 7. FUNCTION PRACTICE ---");

// Exercise 1: Calculator function
function calculate(a, b, operation) {
    if (operation === "add") return a + b;
    if (operation === "subtract") return a - b;
    if (operation === "multiply") return a * b;
    if (operation === "divide") return a / b;
}

console.log("10 + 5 =", calculate(10, 5, "add"));
console.log("10 - 5 =", calculate(10, 5, "subtract"));
console.log("10 * 5 =", calculate(10, 5, "multiply"));
console.log("10 / 5 =", calculate(10, 5, "divide"));

// Exercise 2: Factorial
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log("\nFactorial:");
console.log("5! =", factorial(5));
console.log("6! =", factorial(6));

// Exercise 3: Check prime number
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log("\nPrime check:");
console.log("17 is prime:", isPrime(17));
console.log("20 is prime:", isPrime(20));

// ================================
// 8. OBJECT PRACTICE
// ================================

console.log("\n--- 8. OBJECT PRACTICE ---");

// Exercise 1: Create student object
let student = {
    name: "Bidhisha",
    age: 25,
    course: "Web Development",
    marks: 95,
    displayInfo: function() {
        console.log(this.name + " - " + this.course + " (Marks: " + this.marks + ")");
    }
};

console.log("Student object:", student);
student.displayInfo();

// Exercise 2: Create person constructor
function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
    
    this.greet = function() {
        console.log("Hello, I'm " + this.name + " from " + this.city);
    };
}

let person1 = new Person("John", 28, "New York");
let person2 = new Person("Jane", 25, "Los Angeles");

console.log("\nPerson objects:");
person1.greet();
person2.greet();

// ================================
// 9. MIXED EXERCISES
// ================================

console.log("\n--- 9. MIXED EXERCISES ---");

// Exercise 1: FizzBuzz
console.log("FizzBuzz (1-15):");
for (let i = 1; i <= 15; i++) {
    let output = "";
    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";
    if (output === "") output = i;
    console.log(output);
}

// Exercise 2: Count words in sentence
function countWords(sentence) {
    return sentence.trim().split(" ").length;
}

console.log("\nWord count:");
console.log("'JavaScript is Awesome' has", countWords("JavaScript is Awesome"), "words");

// Exercise 3: Remove duplicates from array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

let nums = [1, 2, 2, 3, 3, 3, 4, 4];
console.log("Original:", nums);
console.log("Without duplicates:", removeDuplicates(nums));

// Exercise 4: Reverse array
function reverseArray(arr) {
    return arr.reverse();
}

let arr = [1, 2, 3, 4, 5];
console.log("\nOriginal array:", arr);
console.log("Reversed:", reverseArray([...arr]));

// ================================
// 10. PRACTICAL PROBLEMS
// ================================

console.log("\n--- 10. PRACTICAL PROBLEMS ---");

// Problem 1: Calculate BMI
function calculateBMI(weight, height) {
    return (weight / (height * height)).toFixed(2);
}

console.log("BMI for 70kg, 1.75m height:", calculateBMI(70, 1.75));

// Problem 2: Check age group
function getAgeGroup(age) {
    if (age < 13) return "Child";
    if (age < 18) return "Teenager";
    if (age < 60) return "Adult";
    return "Senior";
}

console.log("Age 20 belongs to:", getAgeGroup(20));
console.log("Age 10 belongs to:", getAgeGroup(10));

// Problem 3: Calculate total price with discount
function calculateTotal(price, discountPercent) {
    let discount = (price * discountPercent) / 100;
    return price - discount;
}

console.log("\nPrice: 1000, Discount: 10%");
console.log("Total:", calculateTotal(1000, 10));

// Problem 4: Sort array of objects
let products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 20000 },
    { name: "Tablet", price: 35000 }
];

console.log("\nProducts by price (ascending):");
products.sort((a, b) => a.price - b.price);
for (let product of products) {
    console.log(product.name + ": " + product.price);
}

console.log("\n===== PRACTICE EXERCISES COMPLETE =====");
