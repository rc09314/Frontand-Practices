/**
 * ========================================
 * JavaScript Arrays
 * Topic: Array creation, methods, and manipulation
 * ========================================
 */

console.log("===== JAVASCRIPT ARRAYS =====\n");

// ================================
// 1. ARRAY CREATION
// ================================

console.log("--- 1. ARRAY CREATION ---");

// Using array literal
let fruits = ["apple", "banana", "cherry", "date"];
console.log("Fruits array:", fruits);
console.log("Array length:", fruits.length);

// Using Array constructor
let numbers = new Array(1, 2, 3, 4, 5);
console.log("Numbers array:", numbers);

// Mixed data types
let mixed = [1, "hello", true, 3.14, null];
console.log("Mixed array:", mixed);

// ================================
// 2. ACCESSING ARRAY ELEMENTS
// ================================

console.log("\n--- 2. ACCESSING ARRAY ELEMENTS ---");

let colors = ["red", "green", "blue", "yellow", "purple"];
console.log("Colors array:", colors);

console.log("First element (index 0):", colors[0]);
console.log("Third element (index 2):", colors[2]);
console.log("Last element (index 4):", colors[4]);
console.log("Last element (using length-1):", colors[colors.length - 1]);

// ================================
// 3. MODIFYING ARRAY ELEMENTS
// ================================

console.log("\n--- 3. MODIFYING ARRAY ELEMENTS ---");

let vegetables = ["carrot", "potato", "tomato"];
console.log("Original array:", vegetables);

vegetables[0] = "lettuce";
console.log("After changing index 0:", vegetables);

vegetables[3] = "onion";
console.log("After adding new element:", vegetables);

// ================================
// 4. ARRAY METHODS - ADD ELEMENTS
// ================================

console.log("\n--- 4. ARRAY METHODS - ADD ELEMENTS ---");

let items = ["item1", "item2", "item3"];
console.log("Original:", items);

// push() - add to end
items.push("item4");
console.log("After push():", items);

items.push("item5", "item6");
console.log("After push multiple:", items);

// unshift() - add to beginning
items.unshift("item0");
console.log("After unshift():", items);

// ================================
// 5. ARRAY METHODS - REMOVE ELEMENTS
// ================================

console.log("\n--- 5. ARRAY METHODS - REMOVE ELEMENTS ---");

let arr = ["a", "b", "c", "d", "e"];
console.log("Original:", arr);

// pop() - remove from end
let popped = arr.pop();
console.log("After pop():", arr);
console.log("Popped element:", popped);

// shift() - remove from beginning
let shifted = arr.shift();
console.log("After shift():", arr);
console.log("Shifted element:", shifted);

// splice() - remove and insert
let arr2 = [1, 2, 3, 4, 5];
console.log("\nOriginal:", arr2);
let removed = arr2.splice(1, 2, "a", "b");
console.log("After splice(1, 2, 'a', 'b'):", arr2);
console.log("Removed elements:", removed);

// ================================
// 6. ARRAY METHODS - SEARCH
// ================================

console.log("\n--- 6. ARRAY METHODS - SEARCH ---");

let foods = ["apple", "banana", "cherry", "date", "apple"];
console.log("Foods array:", foods);

console.log("indexOf('cherry'):", foods.indexOf("cherry"));
console.log("indexOf('apple'):", foods.indexOf("apple"));
console.log("indexOf('grape'):", foods.indexOf("grape")); // -1 if not found

console.log("lastIndexOf('apple'):", foods.lastIndexOf("apple"));

console.log("includes('banana'):", foods.includes("banana"));
console.log("includes('grape'):", foods.includes("grape"));

// ================================
// 7. ARRAY METHODS - SLICE & CONCAT
// ================================

console.log("\n--- 7. ARRAY METHODS - SLICE & CONCAT ---");

let letters = ["a", "b", "c", "d", "e"];
console.log("Original array:", letters);

// slice() - get portion without modifying
let sliced = letters.slice(1, 4);
console.log("slice(1, 4):", sliced);
console.log("Original after slice:", letters);

// concat() - combine arrays
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combined = array1.concat(array2);
console.log("array1.concat(array2):", combined);

// ================================
// 8. ARRAY METHODS - SORT & REVERSE
// ================================

console.log("\n--- 8. ARRAY METHODS - SORT & REVERSE ---");

let nums = [3, 1, 4, 1, 5, 9, 2, 6];
console.log("Original:", nums);

// reverse()
nums.reverse();
console.log("After reverse():", nums);

// sort() - lexicographic (as strings)
let names = ["charlie", "alice", "bob"];
console.log("Names:", names);
names.sort();
console.log("After sort():", names);

// sort() with numbers
let numbers2 = [10, 5, 20, 1, 30];
console.log("Numbers:", numbers2);
numbers2.sort((a, b) => a - b); // ascending
console.log("After sort (ascending):", numbers2);

// ================================
// 9. ARRAY ITERATION METHODS
// ================================

console.log("\n--- 9. ARRAY ITERATION METHODS ---");

let numbers3 = [1, 2, 3, 4, 5];

// forEach()
console.log("\nforEach():");
numbers3.forEach(function(num, index) {
    console.log("Index " + index + ": " + num);
});

// map() - create new array
console.log("\nmap() - squared:");
let squared = numbers3.map(function(num) {
    return num * num;
});
console.log("Squared:", squared);

// filter() - create filtered array
console.log("\nfilter() - even numbers:");
let evens = numbers3.filter(function(num) {
    return num % 2 === 0;
});
console.log("Even numbers:", evens);

// find() - first element matching condition
console.log("\nfind() - first > 3:");
let found = numbers3.find(function(num) {
    return num > 3;
});
console.log("First number > 3:", found);

// ================================
// 10. ARRAY METHODS - REDUCE
// ================================

console.log("\n--- 10. ARRAY METHODS - REDUCE ---");

let values = [1, 2, 3, 4, 5];
console.log("Values:", values);

// Sum using reduce
let sum = values.reduce(function(total, current) {
    return total + current;
}, 0);
console.log("Sum using reduce:", sum);

// Product using reduce
let product = values.reduce(function(total, current) {
    return total * current;
}, 1);
console.log("Product using reduce:", product);

// ================================
// 11. MULTI-DIMENSIONAL ARRAYS
// ================================

console.log("\n--- 11. MULTI-DIMENSIONAL ARRAYS ---");

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Matrix:", matrix);
console.log("Element [0][0]:", matrix[0][0]);
console.log("Element [1][2]:", matrix[1][2]);
console.log("Element [2][1]:", matrix[2][1]);

// ================================
// 12. ARRAY DESTRUCTURING
// ================================

console.log("\n--- 12. ARRAY DESTRUCTURING ---");

let [first, second, third] = ["apple", "banana", "cherry"];
console.log("First:", first);
console.log("Second:", second);
console.log("Third:", third);

// With rest operator
let [a, b, ...rest] = [1, 2, 3, 4, 5];
console.log("a:", a);
console.log("b:", b);
console.log("rest:", rest);

// ================================
// 13. PRACTICAL EXAMPLES
// ================================

console.log("\n--- 13. PRACTICAL EXAMPLES ---");

// Example 1: Calculate average
console.log("\nExample 1: Calculate Average");
let scores = [85, 90, 78, 92, 88];
let total1 = scores.reduce((sum, score) => sum + score, 0);
let average = total1 / scores.length;
console.log("Scores:", scores);
console.log("Average:", average);

// Example 2: Get students with grade >= 80
console.log("\nExample 2: Filter high scores");
let passedStudents = scores.filter(score => score >= 80);
console.log("Scores >= 80:", passedStudents);

// Example 3: Double all numbers
console.log("\nExample 3: Double all numbers");
let originalNums = [1, 2, 3, 4, 5];
let doubled = originalNums.map(num => num * 2);
console.log("Original:", originalNums);
console.log("Doubled:", doubled);

// Example 4: Remove duplicates
console.log("\nExample 4: Remove duplicates");
let withDuplicates = [1, 2, 2, 3, 3, 3, 4];
let unique = [...new Set(withDuplicates)];
console.log("With duplicates:", withDuplicates);
console.log("Without duplicates:", unique);

console.log("\n===== ARRAYS COMPLETE =====");
