console.log("Hello World!");

// script.js
function greet() {
  console.log("Hello!");
}



//string datatype
let greeting = "Welcome to JavaScript!";
console.log(greeting);

//number datatype
let year = 2024;
console.log("Current Year:", year);

//boolean datatype
let isJavaScriptFun = true;
console.log("Is JavaScript fun?", isJavaScriptFun);

//undefined datatype
let undefinedVariable;
console.log("Undefined Variable:", undefinedVariable);

//null datatype
let nullVariable = null;
console.log("Null Variable:", nullVariable);

//object datatype
let person = {
    name: "Alice",
    age: 30
};
console.log("Person Object:", person);

//array datatype
let colors = ["Red", "Green", "Blue"];
console.log(colors);

//loops
for(let i= 5; i<5; i++){
    consile.log("iteration numeral: + i")
}

while(year<2025){
   console.log("Year is less than 2025:", year);
   year++;
}

do{
    console.log("This will run at least once. Year:", year);
    year++;
}


while(year<2026);

//functions
function add(a, b){
    return a + b;
}
let sum = add(5, 10);
console.log("Sum of 5 and 10 is:", sum);
function greet(name){
    console.log("Hello, " + name + "!");
}

//arrow function
const multiply = (x, y) => x * y;
let product = multiply(4, 5);
console.log("Product of 4 and 5 is:", product);

{/* <html>
    <body>
    <button onclick="console.log('Button Clicked!')">Click Me</button>
    </body>
</html>
*/}



