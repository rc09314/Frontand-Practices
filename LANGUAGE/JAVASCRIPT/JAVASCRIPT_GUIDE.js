/**
 * ============================================
 * JAVASCRIPT LEARNING GUIDE
 * Complete Frontend JavaScript Tutorial
 * ============================================
 * 
 * This guide contains all JavaScript fundamentals
 * organized by topics from beginner to intermediate level
 */

// ============================================
// FOLDER STRUCTURE & FILES
// ============================================

/*
JavaScript1/
├── Bm_JS/                          # Basic JavaScript Fundamentals
│   ├── 1_intro.js                  # Introduction to JavaScript
│   ├── 2_dataTypes.js              # Data Types (Number, String, Boolean, etc)
│   ├── 3_operators.js              # Operators (Arithmetic, Logical, Comparison)
│   ├── 4_conditionalStatements.js  # If, else if, switch statements
│   ├── 5_loops.js                  # for, while, do-while loops
│   ├── 6_array.js                  # Arrays and array methods
│   ├── 7_function.js               # Functions and arrow functions
│   ├── 8_object.js                 # Objects and OOP concepts
│   └── practice.js                 # Mixed practice exercises
│
└── Practies/
    └── object/
        ├── pract.html              # HTML file for datatype practice
        └── datatype.js             # Data type practice exercises
*/

// ============================================
// FILE DESCRIPTIONS
// ============================================

/**
 * 1_intro.js
 * -----------
 * Topics Covered:
 * - Console output (log, warn, error)
 * - Variable declaration (var, let, const)
 * - Basic operations
 * - Alert function
 * - Simple message handling
 * 
 * Learning Outcomes:
 * - Understand how to print output
 * - Declare variables with different keywords
 * - Perform basic arithmetic
 * - User interaction with alert()
 */

/**
 * 2_dataTypes.js
 * ---------------
 * Topics Covered:
 * - Primitive data types (Number, String, Boolean)
 * - Undefined and Null
 * - Objects and Arrays
 * - Type conversion and casting
 * - typeof operator
 * - String methods
 * 
 * Data Types:
 * - Number: integers, decimals, infinity, NaN
 * - String: text data with methods
 * - Boolean: true/false values
 * - Object: collection of key-value pairs
 * - Array: ordered collection of values
 * - Null: intentional absence of value
 * - Undefined: variable declared but not assigned
 * 
 * Learning Outcomes:
 * - Identify different data types
 * - Convert between types
 * - Use type-specific methods
 */

/**
 * 3_operators.js
 * ---------------
 * Topics Covered:
 * - Arithmetic operators (+, -, *, /, %, **)
 * - Assignment operators (=, +=, -=, etc)
 * - Comparison operators (==, ===, !=, <, >, <=, >=)
 * - Logical operators (&&, ||, !)
 * - Ternary operator (? :)
 * - Operator precedence
 * 
 * Operator Categories:
 * 1. Arithmetic: perform calculations
 * 2. Assignment: assign values to variables
 * 3. Comparison: compare values (true/false)
 * 4. Logical: combine conditions
 * 5. Ternary: conditional expression
 * 
 * Learning Outcomes:
 * - Use all types of operators correctly
 * - Understand operator precedence
 * - Loose vs strict equality (== vs ===)
 */

/**
 * 4_conditionalStatements.js
 * ---------------------------
 * Topics Covered:
 * - if statement
 * - if...else statement
 * - if...else if...else chain
 * - Nested if statements
 * - switch statement
 * - switch with break and default
 * - Practical use cases
 * 
 * Control Flow:
 * - Execute code based on conditions
 * - Handle multiple branches
 * - Default behavior handling
 * 
 * Learning Outcomes:
 * - Write conditional logic
 * - Handle multiple cases
 * - Use switch for cleaner code
 * - Nested conditions for complex logic
 */

/**
 * 5_loops.js
 * -----------
 * Topics Covered:
 * - for loop
 * - while loop
 * - do...while loop
 * - Nested loops
 * - break statement
 * - continue statement
 * - for...in loop (object iteration)
 * - for...of loop (array iteration)
 * - Array methods (forEach, map, filter)
 * 
 * Loop Types:
 * 1. for: iterate fixed number of times
 * 2. while: iterate while condition is true
 * 3. do...while: execute at least once
 * 4. for...in: iterate object properties
 * 5. for...of: iterate array values
 * 
 * Learning Outcomes:
 * - Choose appropriate loop type
 * - Control loop execution with break/continue
 * - Iterate over arrays and objects
 * - Use functional iteration methods
 */

/**
 * 6_array.js
 * -----------
 * Topics Covered:
 * - Array creation and access
 * - Array methods (push, pop, shift, unshift)
 * - Search methods (indexOf, includes, find)
 * - Modification methods (slice, concat, splice)
 * - Sorting and reversing
 * - Iteration methods (forEach, map, filter, reduce)
 * - Multi-dimensional arrays
 * - Array destructuring
 * 
 * Important Methods:
 * - Mutating: push, pop, shift, unshift, splice, sort, reverse
 * - Non-mutating: slice, concat, map, filter, reduce
 * - Search: indexOf, lastIndexOf, includes, find
 * 
 * Learning Outcomes:
 * - Create and manipulate arrays
 * - Use appropriate array methods
 * - Transform arrays with map/filter
 * - Understand mutating vs non-mutating methods
 */

/**
 * 7_function.js
 * ---------------
 * Topics Covered:
 * - Function declaration
 * - Function expression
 * - Arrow functions
 * - Parameters and arguments
 * - Default parameters
 * - Rest parameters
 * - Return statements
 * - Callback functions
 * - Higher order functions
 * - Recursive functions
 * - Function scope and closures
 * - IIFE (Immediately Invoked Function Expression)
 * 
 * Function Types:
 * 1. Declaration: function name() {}
 * 2. Expression: let func = function() {}
 * 3. Arrow: const func = () => {}
 * 
 * Advanced Concepts:
 * - Closures: functions with access to outer scope
 * - Higher order: functions that work with functions
 * - Recursion: function calling itself
 * 
 * Learning Outcomes:
 * - Define and call functions
 * - Use different function syntaxes
 * - Handle parameters and return values
 * - Work with closures and higher order functions
 */

/**
 * 8_object.js
 * -----------
 * Topics Covered:
 * - Object creation and properties
 * - Accessing properties (dot and bracket notation)
 * - Modifying and adding properties
 * - Deleting properties
 * - Object methods (keys, values, entries, assign)
 * - Methods within objects
 * - this keyword
 * - Constructor functions
 * - Prototypes
 * - ES6 Classes
 * - Class inheritance
 * - Object destructuring
 * - Spread operator for objects
 * - JSON serialization
 * 
 * Object-Oriented Concepts:
 * - Encapsulation: grouping data and methods
 * - Inheritance: reusing code from parent class
 * - Polymorphism: different implementations
 * 
 * Learning Outcomes:
 * - Create and manipulate objects
 * - Use constructor functions and classes
 * - Understand prototypal inheritance
 * - Work with object methods
 */

/**
 * practice.js
 * -----------
 * Topics Covered:
 * - Mixed exercises combining multiple concepts
 * - Variables and operations
 * - Conditionals and grades
 * - Loops and calculations
 * - String manipulation
 * - Array operations
 * - Function creation
 * - Object creation
 * - Practical problems (BMI, palindrome, etc)
 * 
 * Contains:
 * - Welcome messages and basic practice
 * - Voting eligibility checker
 * - Grade calculator
 * - Multiplication tables
 * - Sum calculations
 * - Array manipulation
 * - String operations
 * - FizzBuzz problem
 * - Real-world scenarios
 * 
 * Learning Outcomes:
 * - Combine multiple JavaScript concepts
 * - Solve practical problems
 * - Write clean, commented code
 */

/**
 * datatype.js (Practies/object/)
 * ------
 * Topics Covered:
 * - Number type practice
 * - String type practice
 * - Boolean type practice
 * - Array operations
 * - Object manipulation
 * - Type conversion
 * - Special values (null, undefined)
 * - typeof operator
 * - Practice problems
 * 
 * Practical Exercises:
 * - BMI calculation
 * - Prime number checking
 * - Largest number finder
 * - Vowel counter
 * 
 * Learning Outcomes:
 * - Master all data types
 * - Practice type conversions
 * - Solve common problems
 */

// ============================================
// HOW TO USE THESE FILES
// ============================================

/*
STEP-BY-STEP LEARNING PATH:

1. Start with 1_intro.js
   - Learn basic console output
   - Understand variable declaration
   - Get comfortable with JS basics

2. Continue with 2_dataTypes.js
   - Understand different data types
   - Learn type conversion
   - Practice with examples

3. Move to 3_operators.js
   - Learn all operator types
   - Understand precedence
   - Practice operations

4. Study 4_conditionalStatements.js
   - Learn decision making
   - Understand control flow
   - Practice with examples

5. Practice 5_loops.js
   - Learn iteration methods
   - Understand loop types
   - Practice with patterns

6. Learn 6_array.js
   - Master array manipulation
   - Learn array methods
   - Practice transformations

7. Study 7_function.js
   - Learn function concepts
   - Understand scope
   - Practice closures

8. Learn 8_object.js
   - Learn OOP concepts
   - Understand classes
   - Practice inheritance

9. Practice with practice.js
   - Combine all concepts
   - Solve real problems
   - Build projects

10. Practice datatype.js
    - Reinforce concepts
    - Solve practice problems
    - Improve skills
*/

// ============================================
// TIPS FOR LEARNING
// ============================================

/*
1. READ THE CODE
   - Go through each file carefully
   - Read comments and explanations
   - Understand each example

2. RUN THE CODE
   - Open browser console (F12)
   - Run code in browser or Node.js
   - See the output

3. EXPERIMENT
   - Modify examples
   - Try different values
   - Break and fix code

4. PRACTICE
   - Solve practice problems
   - Write your own code
   - Build small projects

5. REVIEW
   - Go back to earlier files
   - Revisit difficult concepts
   - Reinforce learning
*/

// ============================================
// IMPORTANT CONCEPTS SUMMARY
// ============================================

/*
VARIABLES:
- var: function scoped (avoid in modern JS)
- let: block scoped (preferred)
- const: block scoped, cannot be reassigned (preferred)

DATA TYPES:
- Primitive: Number, String, Boolean, undefined, null, Symbol
- Complex: Object, Array

OPERATORS:
- Arithmetic: +, -, *, /, %, **
- Comparison: ==, ===, !=, <, >, <=, >=
- Logical: &&, ||, !
- Assignment: =, +=, -=, *=, /=

CONTROL FLOW:
- if...else: conditional execution
- switch: multiple conditions
- for/while/do-while: loops
- break/continue: loop control

FUNCTIONS:
- function declaration: hoisted
- function expression: not hoisted
- arrow functions: concise syntax
- callbacks: pass functions as arguments
- closures: access outer scope

OBJECTS:
- object literal: {}
- constructor function: new keyword
- class: ES6 syntax
- inheritance: extends keyword
- this: context binding

ARRAYS:
- methods: push, pop, map, filter, reduce
- iteration: forEach, for...of
- search: indexOf, includes, find
*/

// ============================================
// COMMON MISTAKES TO AVOID
// ============================================

/*
1. Using == instead of === (loose vs strict equality)
   - Always use === for comparison

2. Forgetting variable declaration
   - Always use let/const for variables

3. Confusing function declaration with expression
   - Know when functions are hoisted

4. Not understanding scope
   - Remember var is function-scoped, let is block-scoped

5. Mutating vs Non-mutating arrays
   - Be aware which methods change the original array

6. Not using return statements
   - Remember functions need return to give values

7. Forgetting this binding
   - Know what 'this' refers to in different contexts

8. Not using semicolons
   - Avoid relying on automatic semicolon insertion

9. Object comparison
   - Remember objects are compared by reference, not value

10. Not handling errors
    - Use try-catch for error handling
*/

// ============================================
// NEXT STEPS AFTER JAVASCRIPT
// ============================================

/*
After mastering JavaScript basics:

1. Learn the DOM (Document Object Model)
   - Interact with HTML elements
   - Handle user events
   - Manipulate page content

2. Learn ES6+ Features
   - let/const, arrow functions
   - Destructuring, spread operator
   - Promises, async/await
   - Classes, modules

3. Learn a Framework
   - React: component-based
   - Vue: progressive framework
   - Angular: complete framework

4. Learn Backend
   - Node.js: JavaScript on server
   - Express: web framework
   - Databases: MongoDB, MySQL

5. Advanced Concepts
   - Design patterns
   - Functional programming
   - Testing and debugging
   - Performance optimization
*/

console.log("===== JAVASCRIPT LEARNING GUIDE =====");
console.log("Welcome! Start with 1_intro.js and follow the learning path.");
console.log("Happy Learning! 🚀");
