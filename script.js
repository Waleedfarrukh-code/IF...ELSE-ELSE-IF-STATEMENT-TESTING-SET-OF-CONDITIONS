// ===============================
// 1. Check character type
// ===============================
let char = prompt("Q1: Enter a character (number or letter):");

if (char >= '0' && char <= '9') {
    alert("Input is a Number");
} else if (char >= 'A' && char <= 'Z') {
    alert("Input is an Uppercase Letter");
} else if (char >= 'a' && char <= 'z') {
    alert("Input is a Lowercase Letter");
} else {
    alert("Invalid input");
}

// ===============================
// 2. Compare two integers
// ===============================
let num1 = parseInt(prompt("Q2: Enter first integer:"));
let num2 = parseInt(prompt("Enter second integer:"));

if (num1 > num2) {
    alert(num1 + " is larger");
} else if (num2 > num1) {
    alert(num2 + " is larger");
} else {
    alert("Both numbers are equal");
}

// ===============================
// 3. Positive, Negative, Zero
// ===============================
let num = parseInt(prompt("Q3: Enter a number:"));

if (num > 0) {
    alert("Positive number");
} else if (num < 0) {
    alert("Negative number");
} else {
    alert("Zero");
}

// ===============================
// 4. Check if vowel
// ===============================
let ch = prompt("Q4: Enter a character:").toLowerCase();

if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
    alert("True → It's a vowel");
} else {
    alert("False → Not a vowel");
}

// ===============================
// 5. Password validation
// ===============================
let correctPassword = "hello123";
let userPassword = prompt("Q5: Enter your password:");

if (!userPassword) {
    alert("Please enter your password");
} else if (userPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password");
} else {
    alert("Incorrect password");
}

// ===============================
// 6. Fixed if/else statement
// ===============================
var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

alert("Q6: Greeting = " + greeting);

// ===============================
// 7. Time-based Greeting
// ===============================
let time = parseInt(prompt("Q7: Enter time in 24-hour format (e.g. 1900):"));

if (time >= 0 && time < 1200) {
    alert("Good morning!");
} else if (time >= 1200 && time < 1700) {
    alert("Good afternoon!");
} else if (time >= 1700 && time < 2100) {
    alert("Good evening!");
} else if (time >= 2100 && time <= 2359) {
    alert("Good night!");
} else {
    alert("Invalid time format!");
}
