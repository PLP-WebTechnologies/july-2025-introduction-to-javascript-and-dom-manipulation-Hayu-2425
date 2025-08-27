// =====================
// Part 1: Basics
// =====================

// Variable & Conditional Example
function checkNumber() {
  let number = parseInt(prompt("Enter a number: "));
  let result = "";

  if (number > 0) {
    result = `${number} is Positive 👍`;
  } else if (number < 0) {
    result = `${number} is Negative 👎`;
  } else {
    result = "The number is Zero 😐";
  }

  // Output result to DOM
  document.getElementById("numberResult").innerText = result;
}

// =====================
// Part 2: Functions
// =====================

// Function 1: Greeting
function showGreeting(name) {
  document.getElementById("greeting").innerText = `Hello, ${name}! 👋 Welcome to JavaScript.`;
}

// Function 2: Calculate total price
function calculateTotal(price, quantity) {
  return price * quantity;
}

// Example usage (check console)
console.log("Total price of 3 items at $15 each:", calculateTotal(15, 3));

// =====================
// Part 3: Loops
// =====================

// Loop Example 1: Countdown
function countdown() {
  let list = document.getElementById("countdownList");
  list.innerHTML = ""; // Clear old list

  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.innerText = i;
    list.appendChild(li);
  }
}

// Loop Example 2: Iterate through array
let fruits = ["🍎 Apple", "🍌 Banana", "🍇 Grapes"];
fruits.forEach(fruit => {
  console.log("Fruit:", fruit);
});

// =====================
// Part 4: DOM Manipulation
// =====================

let toggleBtn = document.getElementById("toggleBtn");
let toggleText = document.getElementById("toggleText");

toggleBtn.addEventListener("click", () => {
  toggleText.classList.toggle("highlight"); // Toggle text color
});

// Extra DOM Interaction: Dynamically add new element
let newElement = document.createElement("p");
newElement.innerText = "✅ This element was added dynamically with JS!";
document.body.appendChild(newElement);
