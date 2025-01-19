let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // defining initial array

// 1 step of the task
let mutiplied = numbers.map(nums => nums * 2); // we go through the array and multyply by 2
console.log('step 1: Multiplied the nums by 2 ' + mutiplied); // print the array

let evenNumbers = numbers.filter(nums => nums % 2 == 0); // check if it is divisibale by 2
console.log('step 1: only even numbers ' + evenNumbers); // print the array

let allSum = numbers.reduce((total, num) => total + num, 0); 
console.log('step 1: get the total sum of numbers ' + evenNumbers); // prints the total sum

//2nd step of the task
let result = numbers
  .map(num => num * 2)         // doing all the tasks in one block
  .filter(num => num <= 10)     
  .reduce((total, num) => total + num, 0); 
console.log('step 2: Do all the previous tasks all at onece ' + result); // printing the result

//3rd step of the task
let products = [ // making an array of products
    { name: "Apple", price: 2, category: "Fruit" },
    { name: "Carrot", price: 1, category: "Vegetable" },
    { name: "Steak", price: 10, category: "Meat" },
    { name: "Banana", price: 1.5, category: "Fruit" },
  ];

let totalCostOfFruits = products 
    .filter(product => product.category == "Fruit") //1st get the Fruits only
    .map(product => product.price + 0.5) // 2nd increase the price by 0.5
    .reduce((total, num) => total + num, 0); // get the total value

    console.log('step 3: The total cost of fruits ' + totalCostOfFruits);

//4th step ot the task
let numbersTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let resultTwo = numbersTwo
  .map(num => (num % 2 === 0 ? num * 2 : num * 3)) // Double evens, triple odds
  .filter(num => num <= 20) // Keep numbers <= 20
  .reduce((total, num) => total + num, 0); // Sum them

console.log('step 4: some more dificult multiplications ' + resultTwo);

 // 5th step of the task

 let foodInFridge = [ // making an array of products
    { name: "Apple", category: "Tasty" },
    { name: "Carrot", category: "Ok" },
    { name: "Steak", category: "Tasty" },
    { name: "Banana", category: "NotTasty" },
    { name: "Cake", category: "Tasty" },
];

let hungerChecker;

function getRandomBoolean() {
    return Math.random() < 0.5; // 50% chance for true or false
}

function cleanNonTastyFood(foodInFridge) {
    return foodInFridge.filter(item => item.category !== "NotTasty");
}

function areYouHungry(foodInFridge,  hungerChecker = getRandomBoolean()) {
   
    if (hungerChecker) {
        foodInFridge = cleanNonTastyFood(foodInFridge); // Reassign the cleaned array
        console.log('step 5: Clean fridge, full tummy!');
    } else {
        console.log('step 5: Not hungry :)');
    }
}

// Call the function to test
areYouHungry(foodInFridge);

// 6th step of the task

function makeLouder(func) {
    return function(name) {
        const result = func(name); // Call the original function
        return result.toUpperCase(); // Make the result louder!
    };
}

function greet(name) {
    return `Hello, ${name}`;
}
console.log('spet 6:')

const loudGreet = makeLouder(greet);

console.log(loudGreet("Miri")); // HELLO, MIRI
console.log(loudGreet("Dean"));   // HELLO, DEAN

// 7th step

function runTwice(func, value) {
    return func(value) + " " + func(value); // we create a func that runs another func twice
}

runTwice(greet, "Alice"); // "Hello, Alice Hello, Alice"

console.log(runTwice(greet, "Suzie"));