

// Practice exercise 5.1

// 1. Create a variable to be used as the max value for the number guessing game.
const maxValue = 5;


// 2. Generate a Random number for the solution using Math.Random() and
// Math.floor(). You will also need to add 1 so that the value is returned as
// 1-[whatever the set max value is]. You can log this value to the console for
// development to see the value as you create the game, then when the game is
// complete you can comment out this console output.
const solution = Math.floor(Math.Random() * maxValue) + 1;
console.log(solution);


// 3. Create a variable that will be used for tracking whether the answer is correct
// or not and set it to a default Boolean value of false. We can update it to be
// true if the user guess is a match.
let isCorrect = false;


//4. Use a while loop to iterate a prompt that asks the user to enter a number
//between 1 and 5, and convert the response into a number in order to match
//the data type of the Random number.
while (!isCorrect) {
    let userInput = prompt(`Enter a number between 1 and ${maxValue}:`);
    let userGuess = parseInt(userInput);
if (userGuess >= 1 && userGuess <= maxValue) {


// 5. Inside the while loop, check using a condition to see if the prompt value is
// equal to the solution number. Apply logic such that if the number is correct,
// you set the status to true and break out of the loop. Provide the player with
// some feedback as to whether the guess was high or low, and initiate another
// prompt until the user guesses correctly. In this way we use the loop to keep
// asking until the solution is correct, and at that point we can stop the iteration
// of the block of code.
if (userGuess === solution) {
    isCorrect = true;
    alert('Congratulations! You guessed the correct number.');
}
else if (userGuess < solution) {
    alert('Try again! This number is wrong.');
} 
else {
    alert('Try again! This number is not right.');
}
   }
    else {
    alert(`Please enter a valid number between 1 and ${maxValue}.`);
}
 }




//  Practice exercise 5.2


// 1. Set the starting counter to 0
let counter = 0;


// 2. Create a variable, step, to increase your counter by
let step = 20;


// 3. Add a do while loop, printing the counter to the console and incrementing it
// by the step amount each loop
do {
  console.log("Counter:", counter);
  counter += step;
} 


// 4. Continue to loop until the counter is equal to 100 or more than 100
while (counter < 100);
if (counter >= 100) {
  console.log("Counter reached 100 or more.");
}




// Practice exercise 5.3



// 1. Setup a blank array, myWork.
let myWork = [];


// 2. Using a for loop, create a list of 10 objects, each of which is a numbered
// lesson (e.g. Lesson 1, Lesson 2, Lesson 3....) with an alternating true/false
// status for every other item to indicate whether the class will be running this
// year. For example:
// name: 'Lesson 1', status: true
for (let i = 1; i <= 10; i++) {
   

// 3. You can specify the status by using a ternary operator that checks whether
// the modulo of the given lesson value is equal to zero and by setting up a
// Boolean value to alternate the values each iteration.
let status = i % 2 === 0 ? false : true; 


// 4. Create a lesson using a temporary object variable, containing the name
// (lesson with the numeric value) and predefined status (which we set up in
// the previous step).
let lesson = {
    name: `Lesson ${i}`,
    status: status
  };


    // 5. Push the objects to the myWork array.
    myWork.push(lesson);
  }


// 6. Output the array to the console.
  console.log(myWork);






// Practice exercise 5.4


// 1. To create a table generator, first create an empty array, myTable, to hold your
// table data.
let Table = [];


// 2. Set variable values for the number of rows and columns. This will allow us
// to dynamically control how many rows and columns we want within the
// table. Separating the values from the main code helps make updates to the
// dimensions easier.
const numberRows = 4;
const numberColumns = 3;


// 3. Set up a counter variable with an initial value of 0. The counter will be used
// to set the content and count the values of the cells within the table.
   let myCounter = 0;


// 4. Create a for loop with conditions to set the number of iterations, and to
// construct each row of the table. Within it, set up a new temporary array
// (tempTable) to hold each row of data. The columns will be nested within
// the rows, generating each cell needed for the column.
for (let m = 0; m < numberRows; m++) {
    let temporaryTable = [];

    
// 5. Nest a second loop within the first to count the columns. Columns are run
// within the row loop so that we have a uniform number of columns within
// the table.
for (let n = 0; n < numberColumns; n++) {
    temporaryTable.push(myCounter);


// 6. Increment the main counter each iteration of the inner loop, so that we track
// a master count of each one of the cells and how many cells are created.
   myCounter++;
}


// 7. Push the counter values to the temporary array, tempTable. Since the array is
// a nested array representing a table, the values of the counter can also be used
// to illustrate the cell values next to each other in the table. Although these are
// separate arrays representing new rows, the value of the counter will help
// illustrate the overall sequence of cells in the final table.



// 8. Push the temporary array to the main table. As each iteration builds a new
// row of array items, this will continue to build the main table in the array.
Table.push(temporaryTable);
}


// 9. Output into the console with console.table(myTable). This will show you a
// visual representation of the table structure.




// Practice exercise 5.5




// 1. Create a grid array variable.
let grid = [];


// 2. Set a value of 64 for the number of cells.
const numCells = 64;


// 3. Set a counter to 0.
let counting = 0;


// 4. Create a global variable to be used for the row array.
let row = [];


// 5. Create a loop that will iterate up to the number of cells you want in the array,
// plus one to include the zero value. In our example, we would use 64+1.
for (let i = 0; i < numCells + 1; i++) {


// 6. Add an outer if statement, which uses modulo to check if the main counter
// is divisible by 8 or whatever number of columns you want.
if (counting % 8 === 0) {


// 7. Inside the preceding if statement, add another if statement to check if the
// row is undefined, indicating whether it is the first run or whether the row
// is complete. If the row has been defined, then add the row to the main grid
// array.
if (typeof row !== 'undefined' && row.length > 0) {
    grid.push(row);
  }
  row = []; 
}


// 8. To finish off the outer if statement, if the counter is divisible by 8, clear the
// row array—it has already been added to the grid by the inner if statement.
// 9. At the end of the for loop, increment of the main counter by 1.
counting++;


// 10. Set up a temporary variable to hold the value of the counter and push it to
// the row array.
let temp = counting - 1; 
row.push(temp);


// 11. Within the loop iteration, check if the value of the counter is equal to the total
// number of columns you want; if it is, then add the current row to the grid.
if (counting === 8) {
    grid.push(row); 
  }
}


// 12. Please note that the extra cell will not be added to the grid since there aren't
// enough cells to make a new row within the condition that adds the rows to
// the grid. An alternative solution would be to remove the +1 from the loop
// condition and add grid.push(row) after the loop is completed, both of which
// will provide the same solution output.
// 13. Output the grid into the console.
console.log(grid);





// Practice exercise 5.6


// 1. Create an empty array
let Array = [];


// 2. Run a loop 10 times, adding a new incrementing value to the array
for (let i = 0; i < 10; i++) {
    Array.push(i + 1); // Add an incrementing value to the array
  }


// 3. Log the array into the console
console.log("Array:", Array);


// 4. Use the for loop to iterate through the array (adjust the number of iterations  
// to however many values are in your array) and output into the console
console.log("Iterating through array using for loop:");
for (let i = 0; i < Array.length; i++) {
  console.log(Array[i]);
}


// 5. Use the for of loop to output the value into the console from the array
console.log("Iterating through array using for...of loop:");
for (let value of Array) {
  console.log(value);
}



// Practice exercise 5.7


// 1. Create a simple object with three items in it.
let myObject = {
    item1: 'apple',
    item2: 'mango',
    item3: 'grapes'
  };


// 2. Using the for in loop, get the properties' names and values from the object
// and output them into the console.
console.log('Object properties and values:');
for (let key in myObject) {
  console.log(`${key}: ${myObject[key]}`);
}


// 3. Create an array containing the same three items. Using either the for loop or
// the for in loop, output the values from the array into the console.
let myArray = ['apple', 'mango', 'grapes'];
console.log('\nArray values:');
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
  }
    console.log('\nArray values using for...in loop:');
  for (let index in myArray) {
    console.log(myArray[index]);
  }




// Practice exercise 5.8


// 1. Set up a string variable to use as output.
let output = '';


// 2. Select a number to skip, and set that number as a variable.
const skipNumber = 5;


// 3. Create a for loop that counts to 10.
for (let i = 1; i <= 10; i++) {


    // 4. Add a condition to check if the value of the looped variable is equal to the
// number that should be skipped.
if (i === skipNumber) {
    
    
    // 5. If the number is to be skipped in the condition, continue to the next number.
    continue;
}


// 6. As you iterate through the values, append the new count value to the end of
// the main output variable.
output += `${i} `;
}


// 7. Output the main variable after the loop completes.
console.log("Output with 'continue':", output);


// 8. Reuse the code, but change the continue to break and see the difference. It
// should now stop at the skip value.
output = '';
for (let i = 1; i <= 10; i++) {
  if (i === skipNumber) {
    break;
  }
  output += `${i} `;
}
console.log("Output with 'break':", output);




// Chapter project
// Math multiplication table



// 1. Set up a blank array to contain the final multiplication table.
let multiplicationTable = [];


// 2. Set a value variable to specify how many values you want to multiply with
// one another and show the results for.
const mymyValue = 10;


// 3. Create an outer for loop to iterate through each row and a temp array to store
// the row values. Each row will be an array of cells that will be nested into the
// final table.
for (let i = 1; i <= myValue; i++) {
    let row = [];


// 4. Add an inner for loop for the column values, which will push the multiplied
// row and column values to the temp array.
for (let j = 1; j <= myValue; j++) {
    row.push(i * j);
  }


// 5. Add the temporary row data that contains the calculated solutions to the
// main array of the final table. The final result will add a row of values for the
// calculations.
multiplicationTable.push(row);
}
console.log("Multiplication Table:");
console.table(multiplicationTable);





// Practice exercise 6.1



// 1. Create a function that takes two parameters, adds the parameters together,
// and returns the result.
function addNumbers(a, b) {
    return a + b;
  }


// 2. Set up two different variables with two different values.
let firstValue = 5;
let secondValue = 7;


// 3. Use your function on the two variables, and output the result using
// console.log.
let result1 = addNumbers(firstValue, secondValue);
console.log(`Result of adding ${firstValue} and ${secondValue}: ${result1}`);


// 4. Create a second call to the function using two more numbers as arguments
// sent to the function.
let thirdValue = 10;
let fourthValue = 3;

let result2 = addNumbers(thirdValue, fourthValue);
console.log(`Result of adding ${thirdValue} and ${fourthValue}: ${result2}`);





// Practice exercise 6.2

// 1. Create an array of descriptive words.
const descriptiveWords = ['awesome', 'amazing', 'fantastic', 'incredible', 'wonderful'];


// 2. Create a function that contains a prompt asking the user for a name.
function getRandomWord() {
    let userName = prompt("Please enter your name:");


// 3. Select a Random value from the array using Math.Random.
    let RandomIndex = Math.floor(Math.Random() * descriptiveWords.length);
    let RandomWord = descriptiveWords[RandomIndex];


// 4. Output into the console the prompt value and the Randomly selected array
// value.
    console.log(`Hello, ${userName}! You are ${RandomWord}.`);
}


// 5. Invoke the function.
getRandomWord();




// Practice exercise 6.3


// 1. Set up two variables containing number values.
let number1 = 8;
let number2 = 3;


// 2. Set up a variable to hold an operator, either + or -.
let operator = '+';


// 3. Create a function that retrieves the two values and the operator string value
// within its parameters. Use those values with a condition to check if the
// operator is + or -, and add or subtract the values accordingly (remember if
// not presented with a valid operator, the function should default to addition).
function performOperation(value1, value2, operation) {
  if (operation === '+' || operation === undefined) {
    return value1 + value2;
  } else if (operation === '-') {
    return value1 - value2;
  } else {
    return "Invalid operator"; 
  }
}


// 4. Within console.log(), call the function using your variables and output
// the response to the console.
console.log(`Result of ${number1} ${operator} ${number2}: ${performOperation(number1, number2, operator)}`);


// 5. Update the operator value to be the other operator type—either plus or
// minus—and call to the function again with the new updated arguments.
operator = '-';
console.log(`Result of ${number1} ${operator} ${number2}: ${performOperation(number1, number2, operator)}`);





// Practice exercise 6.4


// 1. Set up an empty array to store the values that will be calculated within the
// loop.
let calculatedValues = [];


// 2. Create a loop that runs 10 times, incrementing by 1 each time, creating two
// values each iteration. For the first value, multiply the value of the loop count
// by 5. For the second value, multiply the value of the loop counter by itself.
for (let i = 0; i < 10; i++) {
  let value1 = i * 5; 
  let value2 = i * i;
  
  
  // 3. Create a function that returns the value of the two parameters passed into the
// function when it is called. Add the values together, returning the result.
function calculation(param1, param2) {
  return param1 + param2;
}


// 4. Within the loop, call the calculation function, passing in the two values as
// arguments into the function and storing the returned result in a response
// variable.
let response = calculation(value1, value2);


// 5. Still within the loop, push the result values into the array as it iterates
// through the loop.
calculatedValues.push(response);
}


// 6. After the loop is complete, output the value of the array into the console.
// 7. You should see the values [0, 6, 14, 24, 36, 50, 66, 84, 104, 126] for
// the array in the console.
console.log(calculatedValues);





// Practice exercise 6.5

// 1. Create a variable value with let and assign a string value of 1000 to it.
let value = '1000';


// 2. Create an IIFE function and within this function scope assign a new value to
// a variable of the same name. Within the function, print the local value to the
// console.
(function() {
  let value = 'Local value within IIFE';
  console.log('Local value within IIFE:', value);
})()


// 3. Create an IIFE expression, assigning it to a new result variable, and assign
// a new value to a variable of the same name within this scope. Return this
// local value to the result variable and invoke the function. Print the result
// variable, along with the variable name you've been using: what value does it
// contain now?
let myResult = (function() {
  let value = 'New value within IIFE expression';
  return value;
})();

console.log('Value of result variable:', myResult);


// 4. Lastly, create an anonymous function that has a parameter. Add logic that
// will assign a passed-in value to the same variable name as the other steps,
// and print it as part of a string sentence. Invoke the function and pass in your
// desired value within the rounded brackets.
let anonymousFunction = function(newValue) {
  value = newValue;
  console.log('Value within anonymous function:', value);
};
anonymousFunction('Updated value through anonymous function');





// Practice exercise 6.6


// 1. Create a function that contains a condition within it checking if the argument
// value is 0.
// 2. If the parameter is equal to 0, it should return the value of 1. Otherwise, it
// should return the value of the argument multiplied by the value returned
// from the function itself, subtracting one from the value of the argument
// that is provided. This will result in running the block of code until the value
// reaches 0.
// 3. Invoke the function, providing an argument of whatever number you want
// to find the factorial of. The code should run whatever number is passed
// initially into the function, decreasing all the way to 0 and outputting the
// results of the calculation to the console. It could also contain a console.log()
// call to print the current value of the argument in the function as it gets
// invoked.
// 4. Change and update the number to see how it affects the results.
function calculateFactorial(number) {
  if (number === 0) {
    return 1;
  } else {
    console.log(`Current value of argument: ${number}`);
    return number * calculateFactorial(number - 1);
  }
}

let result = calculateFactorial(5);
console.log(`Factorial result: ${result}`);






// Practice exercise 6.7


// 1. Set the start variable at a value of 10, which will be used as the starting
// value for the loop.
let start = 10;


// 2. Create a function that takes one argument, which is the countdown value.
function countdown(value) {


  // 3. Within the function, output the current value of the countdown into the
// console.
console.log(`Current countdown value: ${value}`);


// 4. Add a condition to check if the value is less than 1; if it is, then return the
// function.
if (value < 1) {
  return;
}


// 5. Add a condition to check if the value of the countdown is not less than 1,
// then continue to loop by calling the function within itself.
// 6. Make sure you add a decrement operator on the countdown so the preceding
// condition eventually will be true to end the loop. Every time it loops, the
// value will decrease until it reaches 0.
countdown(value - 1); 


// 7. Update and create a second countdown using a condition if the value is
// greater than 0. If it is, decrease the value of the countdown by 1.
// 8. Use return to return the function, which then invokes it again and again
// until the condition is no longer true.
// 9. Make sure, when you send the new countdown value as an argument into
// the function, that there is a way out of the loop by using the return keyword
// and a condition that continues the loop if met.
if (value > 0) {
  return countdown(value - 1);
}
}
countdown(start);





// Practice exercise 6.8


// 1. Set a variable name and assign a function to it. Create a function expression
// with one parameter that outputs a provided argument to the console.
let nameFunction = function(arg) {
  console.log("Function expression argument:", arg);
};


// 2. Pass an argument into the function.
nameFunction("Hello, world!");


// 3. Create the same function as a normal function declaration.
function normalFunction(arg) {
  console.log("Normal function declaration argument:", arg);
}

normalFunction("Goodbye!");




// Chapter projects
// Create a recursive function


// Create a recursive function that counts up to 10. Invoke the function with different
// start numbers as the arguments that are passed into the function. The function
// should run until the value is greater than 10.
function countUp(value) {
  if (value > 10) {
    return; 
  }

  console.log(`Current value: ${value}`);
  countUp(value + 1);
}


countUp(7); 
console.log('---');
countUp(11); 
console.log('---');
countUp(4);




// Set timeout order


// Use the arrow format to create functions that output the values one and two to the
// console. Create a third function that outputs the value three to the console, and then
// invokes the first two functions.
// Create a fourth function that outputs the word four to the console and also use
// setTimeout() to invoke the first function immediately and then the third function.
// Function 1: Outputs the value one to the console
const outputOne = () => {
  console.log('One');
};

const outputTwo = () => {
  console.log('Two');
};

const outputThree = () => {
  console.log('Three');
  outputOne();
  outputTwo();
};

const outputFour = () => {
  console.log('Four');
  setTimeout(() => {
    outputOne();
  }, 0);
  setTimeout(outputThree, 0);
};

outputThree();
outputFour();










