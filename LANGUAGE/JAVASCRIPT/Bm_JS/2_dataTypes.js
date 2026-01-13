/**
 * ========================================
 * JavaScript Data Types
 * Topic: Primitive and Complex Data Types
 * ========================================
 */

console.log("===== JAVASCRIPT DATA TYPES =====\n");

// ========================
// 1. PRIMITIVE DATA TYPES
// ========================

console.log("--- 1. NUMBER ---");
let age = 25;
let price = 99.99;
let negative = -50;
let decimal = 3.14159;

console.log("Age (integer):", age, typeof age);
console.log("Price (decimal):", price, typeof price);
console.log("Negative number:", negative, typeof negative);
console.log("Pi value:", decimal, typeof decimal);

// Number Operations
console.log("\nNumber Operations:");
console.log("25 + 10 =", 25 + 10);
console.log("25 - 10 =", 25 - 10);
console.log("25 * 2 =", 25 * 2);
console.log("25 / 5 =", 25 / 5);
console.log("25 % 3 =", 25 % 3);

// ========================
// 2. STRING DATA TYPE
// ========================

console.log("\n--- 2. STRING ---");
let firstName = "Bidhisha";
let lastName = "Mam";
let fullName = firstName + " " + lastName;

console.log("First Name:", firstName, typeof firstName);
console.log("Last Name:", lastName, typeof lastName);
console.log("Full Name:", fullName);

// String Methods
console.log("\nString Methods:");
console.log("Length of fullName:", fullName.length);
console.log("Uppercase:", fullName.toUpperCase());
console.log("Lowercase:", fullName.toLowerCase());
console.log("First character:", fullName.charAt(0));
console.log("Substring:", fullName.substring(0, 8));

// ========================
// 3. BOOLEAN DATA TYPE
// ========================

console.log("\n--- 3. BOOLEAN ---");
let isStudent = true;
let isPassed = false;
let isAdult = age >= 18;

console.log("Is Student:", isStudent, typeof isStudent);
console.log("Is Passed:", isPassed, typeof isPassed);
console.log("Is Adult (age >= 18):", isAdult, typeof isAdult);

// ========================
// 4. UNDEFINED
// ========================

console.log("\n--- 4. UNDEFINED ---");
let undefinedVar;
console.log("Undefined variable:", undefinedVar, typeof undefinedVar);

// ========================
// 5. NULL
// ========================

console.log("\n--- 5. NULL ---");
let nullVar = null;
console.log("Null variable:", nullVar, typeof nullVar);

// ========================
// 6. OBJECT
// ========================

console.log("\n--- 6. OBJECT ---");
let student = {
    name: "Bidhisha",
    age: 25,
    course: "Web Development",
    marks: 95
};

console.log("Student object:", student);
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Type of object:", typeof student);

// ========================
// 7. ARRAY
// ========================

console.log("\n--- 7. ARRAY ---");
let colors = ["Red", "Green", "Blue", "Yellow"];
let numbers = [10, 20, 30, 40, 50];

console.log("Colors array:", colors);
console.log("Numbers array:", numbers);
console.log("First color:", colors[0]);
console.log("Array length:", colors.length);
console.log("Type of array:", typeof colors);

// ========================
// 8. SPECIAL VALUES
// ========================

console.log("\n--- 8. SPECIAL VALUES ---");
console.log("Infinity:", Infinity, typeof Infinity);
console.log("NaN (Not a Number):", NaN, typeof NaN);
console.log("String to Number:", Number("123"), typeof Number("123"));

// ========================
// 9. TYPE CONVERSION
// ========================

console.log("\n--- 9. TYPE CONVERSION ---");
let stringNum = "42";
let convertedNum = Number(stringNum);
console.log("String '42' to Number:", convertedNum, typeof convertedNum);

let num = 100;
let convertedStr = String(num);
console.log("Number 100 to String:", convertedStr, typeof convertedStr);

let boolVal = Boolean(1);
console.log("1 to Boolean:", boolVal, typeof boolVal);

console.log("\n===== DATA TYPES COMPLETE =====");
