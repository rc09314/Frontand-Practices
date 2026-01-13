/**
 * ========================================
 * JavaScript Objects
 * Topic: Object creation, properties, methods, and manipulation
 * ========================================
 */

console.log("===== JAVASCRIPT OBJECTS =====\n");

// ================================
// 1. OBJECT CREATION
// ================================

console.log("--- 1. OBJECT CREATION ---");

// Object literal
let student = {
    name: "Bidhisha",
    age: 25,
    course: "Web Development",
    marks: 95,
    semester: 4
};

console.log("Student object:", student);
console.log("Student name:", student.name);
console.log("Student age:", student.age);

// Empty object
let emptyObj = {};
console.log("Empty object:", emptyObj);

// ================================
// 2. ACCESSING PROPERTIES
// ================================

console.log("\n--- 2. ACCESSING PROPERTIES ---");

let person = {
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    phone: "1234567890"
};

// Dot notation
console.log("First name:", person.firstName);
console.log("Last name:", person.lastName);

// Bracket notation
console.log("Email:", person["email"]);
console.log("Phone:", person["phone"]);

// ================================
// 3. MODIFYING PROPERTIES
// ================================

console.log("\n--- 3. MODIFYING PROPERTIES ---");

let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    color: "Blue"
};

console.log("Original car:", car);

// Update existing property
car.color = "Red";
car["year"] = 2023;
console.log("Updated car:", car);

// Add new property
car.mileage = 15000;
car["price"] = 2500000;
console.log("Car with new properties:", car);

// Delete property
delete car.mileage;
console.log("After deleting mileage:", car);

// ================================
// 4. OBJECT METHODS
// ================================

console.log("\n--- 4. OBJECT METHODS ---");

// Object.keys() - get all property names
let user = {
    username: "user123",
    password: "secure123",
    email: "user@example.com",
    active: true
};

console.log("User object:", user);
console.log("Keys:", Object.keys(user));

// Object.values() - get all property values
console.log("Values:", Object.values(user));

// Object.entries() - get key-value pairs
console.log("Entries:", Object.entries(user));

// Object.assign() - copy/merge objects
let defaults = { theme: "light", language: "en" };
let settings = { theme: "dark" };
let merged = Object.assign({}, defaults, settings);
console.log("Merged settings:", merged);

// ================================
// 5. OBJECT METHODS (Functions in Objects)
// ================================

console.log("\n--- 5. OBJECT METHODS ---");

let calculator = {
    value: 0,
    add: function(num) {
        this.value += num;
        return this;
    },
    subtract: function(num) {
        this.value -= num;
        return this;
    },
    multiply: function(num) {
        this.value *= num;
        return this;
    },
    getResult: function() {
        return this.value;
    }
};

console.log("Calculator:");
calculator.add(10);
console.log("After add(10):", calculator.value);
calculator.subtract(3);
console.log("After subtract(3):", calculator.value);
calculator.multiply(2);
console.log("After multiply(2):", calculator.value);

// ================================
// 6. THIS KEYWORD
// ================================

console.log("\n--- 6. THIS KEYWORD ---");

let book = {
    title: "JavaScript Basics",
    author: "Bidhisha",
    year: 2024,
    displayInfo: function() {
        console.log("Title: " + this.title + ", Author: " + this.author);
    }
};

book.displayInfo();

// ================================
// 7. CONSTRUCTOR FUNCTIONS
// ================================

console.log("\n--- 7. CONSTRUCTOR FUNCTIONS ---");

// Constructor function
function Student(name, age, course, marks) {
    this.name = name;
    this.age = age;
    this.course = course;
    this.marks = marks;
    
    this.displayInfo = function() {
        console.log(this.name + " - " + this.course + " (Marks: " + this.marks + ")");
    };
}

let student1 = new Student("Bidhisha", 25, "Web Dev", 95);
let student2 = new Student("John", 24, "Android", 88);
let student3 = new Student("Jane", 26, "Data Science", 92);

student1.displayInfo();
student2.displayInfo();
student3.displayInfo();

// ================================
// 8. PROTOTYPE
// ================================

console.log("\n--- 8. PROTOTYPE ---");

function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// Add method to prototype
Car.prototype.getFullName = function() {
    return this.brand + " " + this.model;
};

Car.prototype.honk = function() {
    console.log("Beep! Beep!");
};

let car1 = new Car("Toyota", "Camry");
let car2 = new Car("Honda", "Civic");

console.log(car1.getFullName());
console.log(car2.getFullName());
car1.honk();

// ================================
// 9. CLASS SYNTAX (ES6)
// ================================

console.log("\n--- 9. CLASS SYNTAX ---");

class Person {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    
    greet() {
        console.log("Hello, I'm " + this.name + " from " + this.city);
    }
    
    getAge() {
        return this.age;
    }
}

let person1 = new Person("Bidhisha", 25, "Delhi");
let person2 = new Person("John", 28, "New York");

person1.greet();
person2.greet();
console.log("Person1 age:", person1.getAge());

// ================================
// 10. INHERITANCE
// ================================

console.log("\n--- 10. INHERITANCE ---");

class Animal {
    constructor(name) {
        this.name = name;
    }
    
    eat() {
        console.log(this.name + " is eating");
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    
    bark() {
        console.log(this.name + " is barking: Woof! Woof!");
    }
}

let myDog = new Dog("Max", "Golden Retriever");
myDog.eat();
myDog.bark();

// ================================
// 11. OBJECT DESTRUCTURING
// ================================

console.log("\n--- 11. OBJECT DESTRUCTURING ---");

let employee = {
    empId: 101,
    empName: "John",
    empDept: "IT",
    empSalary: 50000
};

// Destructuring
let { empId, empName, empDept } = employee;
console.log("ID:", empId);
console.log("Name:", empName);
console.log("Department:", empDept);

// With renaming
let { empName: name, empSalary: salary } = employee;
console.log("Employee:", name, "Salary:", salary);

// ================================
// 12. OBJECT SPREAD OPERATOR
// ================================

console.log("\n--- 12. OBJECT SPREAD OPERATOR ---");

let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };

// Spread operator
let combined = { ...obj1, ...obj2 };
console.log("Combined:", combined);

// Spread with override
let override = { ...obj1, b: 20, e: 5 };
console.log("With override:", override);

// ================================
// 13. COMPUTED PROPERTY NAMES
// ================================

console.log("\n--- 13. COMPUTED PROPERTY NAMES ---");

let propName = "age";
let propValue = 25;

let dynamicObj = {
    name: "Bidhisha",
    [propName]: propValue,
    [propName + "Group"]: "Adults"
};

console.log("Dynamic object:", dynamicObj);
console.log("Age:", dynamicObj.age);
console.log("AgeGroup:", dynamicObj.ageGroup);

// ================================
// 14. JSON (JavaScript Object Notation)
// ================================

console.log("\n--- 14. JSON ---");

// Object to JSON string
let product = {
    id: 1,
    name: "Laptop",
    price: 50000,
    inStock: true
};

let jsonString = JSON.stringify(product);
console.log("JSON string:", jsonString);

// JSON string to object
let jsonData = '{"id":2,"name":"Mobile","price":20000,"inStock":true}';
let parsedObj = JSON.parse(jsonData);
console.log("Parsed object:", parsedObj);
console.log("Product name:", parsedObj.name);

// ================================
// 15. PRACTICAL EXAMPLES
// ================================

console.log("\n--- 15. PRACTICAL EXAMPLES ---");

// Example 1: Bank Account
console.log("\nExample 1: Bank Account");
let bankAccount = {
    accountHolder: "John Doe",
    balance: 10000,
    deposit: function(amount) {
        this.balance += amount;
        console.log(amount + " deposited. Balance: " + this.balance);
    },
    withdraw: function(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(amount + " withdrawn. Balance: " + this.balance);
        } else {
            console.log("Insufficient balance");
        }
    },
    getBalance: function() {
        return this.balance;
    }
};

bankAccount.deposit(5000);
bankAccount.withdraw(3000);
console.log("Final balance:", bankAccount.getBalance());

// Example 2: Product Inventory
console.log("\nExample 2: Product Inventory");
function Product(id, name, quantity, price) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.price = price;
    
    this.getTotalValue = function() {
        return this.quantity * this.price;
    };
}

let product1 = new Product(1, "Book", 50, 200);
let product2 = new Product(2, "Pen", 100, 10);

console.log(product1.name + " - Total Value: " + product1.getTotalValue());
console.log(product2.name + " - Total Value: " + product2.getTotalValue());

console.log("\n===== OBJECTS COMPLETE =====");
