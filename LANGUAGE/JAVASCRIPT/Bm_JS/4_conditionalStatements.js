/**
 * ========================================
 * JavaScript Conditional Statements
 * Topic: if, else if, else, switch statements
 * ========================================
 */

console.log("===== CONDITIONAL STATEMENTS =====\n");

// ================================
// 1. IF STATEMENT
// ================================

console.log("--- 1. IF STATEMENT ---");
let age = 25;

if (age >= 18) {
    console.log("Age:", age);
    console.log("You are an adult");
}

// ================================
// 2. IF...ELSE STATEMENT
// ================================

console.log("\n--- 2. IF...ELSE STATEMENT ---");
let marks = 45;

if (marks >= 50) {
    console.log("Marks:", marks);
    console.log("Result: PASSED");
} else {
    console.log("Marks:", marks);
    console.log("Result: FAILED");
}

// ================================
// 3. IF...ELSE IF...ELSE STATEMENT
// ================================

console.log("\n--- 3. IF...ELSE IF...ELSE STATEMENT ---");
let score = 78;

if (score >= 90) {
    console.log("Score:", score);
    console.log("Grade: A (Excellent)");
} else if (score >= 80) {
    console.log("Score:", score);
    console.log("Grade: B (Good)");
} else if (score >= 70) {
    console.log("Score:", score);
    console.log("Grade: C (Satisfactory)");
} else if (score >= 60) {
    console.log("Score:", score);
    console.log("Grade: D (Average)");
} else {
    console.log("Score:", score);
    console.log("Grade: F (Failed)");
}

// ================================
// 4. NESTED IF STATEMENT
// ================================

console.log("\n--- 4. NESTED IF STATEMENT ---");
let isStudent = true;
let gpa = 3.8;

if (isStudent) {
    console.log("Is Student: Yes");
    
    if (gpa >= 3.5) {
        console.log("GPA:", gpa);
        console.log("Status: Honor Student");
    } else {
        console.log("GPA:", gpa);
        console.log("Status: Regular Student");
    }
} else {
    console.log("Is Student: No");
}

// ================================
// 5. SWITCH STATEMENT
// ================================

console.log("\n--- 5. SWITCH STATEMENT ---");
let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log("Day number:", day);
console.log("Day name:", dayName);

// ================================
// 6. SWITCH WITH STRING
// ================================

console.log("\n--- 6. SWITCH WITH STRING ---");
let color = "red";
let message;

switch (color) {
    case "red":
        message = "Color is Red - Stop";
        break;
    case "yellow":
        message = "Color is Yellow - Wait";
        break;
    case "green":
        message = "Color is Green - Go";
        break;
    default:
        message = "Invalid color";
}

console.log("Color:", color);
console.log("Signal:", message);

// ================================
// 7. MULTIPLE CONDITIONS (SWITCH)
// ================================

console.log("\n--- 7. MULTIPLE CONDITIONS ---");
let month = 2;
let daysInMonth;

switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        daysInMonth = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        daysInMonth = 30;
        break;
    case 2:
        daysInMonth = 28; // or 29 for leap year
        break;
    default:
        daysInMonth = "Invalid month";
}

console.log("Month:", month);
console.log("Days in month:", daysInMonth);

// ================================
// 8. PRACTICAL EXAMPLES
// ================================

console.log("\n--- 8. PRACTICAL EXAMPLES ---");

// Example 1: Student Pass/Fail
console.log("\nExample 1: Student Eligibility");
let attendance = 85;
let testScore = 60;

if (attendance >= 75 && testScore >= 50) {
    console.log("Attendance: " + attendance + "%, Test Score: " + testScore);
    console.log("Result: PASS");
} else {
    console.log("Attendance: " + attendance + "%, Test Score: " + testScore);
    console.log("Result: FAIL");
}

// Example 2: Login Validation
console.log("\nExample 2: Login Validation");
let username = "user123";
let password = "pass123";
let inputUsername = "user123";
let inputPassword = "pass123";

if (inputUsername === username && inputPassword === password) {
    console.log("Login successful!");
} else {
    console.log("Invalid username or password");
}

// Example 3: Age Category
console.log("\nExample 3: Age Category");
let personAge = 20;

if (personAge < 13) {
    console.log("Age: " + personAge + " - Child");
} else if (personAge < 18) {
    console.log("Age: " + personAge + " - Teenager");
} else if (personAge < 60) {
    console.log("Age: " + personAge + " - Adult");
} else {
    console.log("Age: " + personAge + " - Senior");
}

console.log("\n===== CONDITIONAL STATEMENTS COMPLETE =====");
