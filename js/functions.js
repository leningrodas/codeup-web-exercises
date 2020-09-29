"use strict";

                //** my attempts.
/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
                // ** my solution ***
// function sayHello(name){
//     var greeting = "hello " + name;
//     return greeting;
// }
// console.log(sayHello("lening"));
//

            //***** walk through with instructor ****
// function sayhello(name){
//     return "hello, " + name;
// }



/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
                //** solution ***
// function sayHello(lening){
//     let helloMessage = Hello lening;
// }
// helloMessage();

            //****** walk through with instructor ****
// let helloMessage = sayHello(name:"lening");
// console.log(helloMessage);
//


/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
        //*** my solution ****
// var myName = Lening;
// function sayHello() {
//     console.log(myName);
// }

                //**** walk through with instructor ****
//     var myName = "lening";
// console.log(sayHello(myName));
//


// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.


 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
//***** My solution***
 //     function isTwo(x){
 //     return (x == 2);
 // }
 // console.log(isTwo(random));

//********
// walk through with instructor
// function isTwo(num){
//     return num === 2;
// }
//
// console.log(isTwo(random));

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */
                        //*** my solution***
    // function calculateTip(x, y){
    // return (x + y);
    //    }


                //**walk through with instructor**

// function calculateTip(percentage, total) {
//         return percentage * total;
// }
//
// console.log(calculateTip(percentage 0.20, total:20)):
// console.log(calculateTip(percentage 0.25, total: 25.50));
//

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
                //**my solution**
// var tip = Number.parseFloat(prompt( "enter the percentage you want to tip"));
// var bill = Number.parseFloat(prompt( "enter the total bill: "));
//
// alert("amount to tip is: $" + calculateTip(tip, bill));


            //****instructor walk through***
// var billTotal = Number(prompt(message:"what is your total bill?"));
// var tip = Number(prompt(message:"how much would you like to tip?"));
// var tipPercentage = tip/100:
// var tipDollars = calculateTip(tipPercentage, billTotal).tofixed(fractionDigits: 2);
//
// alert("you will neeed to tip $" + tipDollars);


/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */
                //*****my solutions****
// function applyDiscount(x, y) {
//     var discountedPrice = x - y;
//     return x - discountedPrice;
// }
//     var discount = Number.parseFloat(prompt("enter discount percentage: "));
//     var originalPrice = Number.parseFloat(prompt("enter original price: "));
//
//     alert("discountedPrice price equates to: $" + applyDiscount(discount, originalPrice));

                //*** instructor walk through***

// function applyDiscount(originalPrice, discountPercent){
//     var discountAmount = originalPrice * discountPercent;
//     return (originalPrice - discountAmount).toFixed(fractionDigits: 2);
// }
// console.log(applyDiscount(originalPrice: 100, discountPercent: .3));
// console.log(applyDiscount(original price: 59.99, discountPercent: .15));
