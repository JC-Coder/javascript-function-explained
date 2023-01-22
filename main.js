/**
 * javascript function 
 */


// function sayHello(arg1, arg2, arg3){
//     // code to be executed
// }

// sayHello(parameters )


// function sayHello(name){
//     if(name == 'joseph'){
//         console.log('hello ' + name + ' youre welcome to my website')
//     }else {
//         console.log('hello welcome ' + name)
//     }
// }

// sayHello('mike');


// basic calculator using the javascript function 
/**
 * 1. accept two numbers
 * 2. get the sum of the two numbers 
 * 3. display
 */

// function additionCalculator(num1, num2){
//     let result = num1 + num2;
//     console.log(result);
// }

// additionCalculator(5, 5);


// function and conditionals 
/**
 * 1. asks user for their name
 * 2. run through some conditions 
 * 3. print result 
 */

function printUserName(userInput){
    let name = 'mike';

    if(userInput == name){
        console.log('Hello ' + userInput + ' welcome to my website')
    } else {
        console.log('Hello ' + userInput)
    }
}

let userInput = prompt('enter your name');

printUserName(userInput)



/**
 * Common naming conventions for function / variable etc.
 * 
 * snake case = addition_calculator
 * camel case = additionCalculator
 */