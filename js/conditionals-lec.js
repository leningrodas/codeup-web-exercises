"use strict";

console.log("hello from conditionals lec.js!");

// ================ REAL WORLD SCENARIO ================
// If a user is an admin,show a specific navbar
// If weather is rainy, show rain icon
// If number of lives is 0, game is over


// ================ IF STATEMENT SYNTAX ================

// if(condition){
// code here runs if condition evaluates to true
// }


// ================ IF STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin

//   **         if(isAdmin){
                        //show admin navbar
//                  }           **
//TODO Together: Send a 20% off coupon if its users birthday

//  **       if(isBirthday){
//             //send coupon
//         }            **

//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true

//                 var isRaining = true;
//                     if(isRaining){
//                         alert("its raining");
//                     }

//TODO Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item. Assume there are no hidden fees or taxes.

//                             var itemCost = 100;
//                             var currentBalance = 50;
//                             if(itemCost > currentBalance){
//                                 alert("sorry not enough");
//                             }


//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0

//                                 var numberOfLives = 0;
//                                 var numberOfActivelives = 0;
//                                 if(numberOfActivelives === numberOfLives){
//                                     alert("Sorry, game over! would you like to try again?");
//                                 } else {
//                                     alert("keep going!");
//                                 }
//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"

//                         var snowing = true;
//                             if(snowing){
//                                 alert("It's snowing!");
//                             }


//TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10

//                             var notEqual = 10;
//                             var numberInput = 10;
//                             if(numberInput > notEqual){
//                                 alert(true);
//                             } else {
//                                 alert("number is equal or less than");
//                             }



//TODO: EXTRA BONUS - Refactor each of the previous statements as functions.





// =============== IF / ELSE SYNTAX ================

// if(condition){
//     // code here runs if condition evaluates to true
// } else {
//     // code here runs if condition evaluates to false
// }



// =============== IF / ELSE STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin, else show a different navbar

//               var isAdmin = true;
//                     if(isAdmin){
//                   alert("show admin navbar");
//               } else {
//                   alert("show user friendly navbar");
//               }

//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true, else return "have a nice day!"
//                 var isRainy = false;
//                 if(isRainy){
//                     alert("its raining");
//                 } else {
//                     alert("have a nice day");
//                 }
//
//

//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"

//                             var numberOfLives = 0;
//                             if(!numberOfLives === 0){
//                                 alert("sorry, game over");
//                             }  else {
//                                 alert("next Level!")
//                             }

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert "Check back later for more details!"

                                // var weather = true;
                                // if(weather){
                                //     alert("It's snowing!");
                                // }   else {
                                //     alert("Check back later for more details!")
                                // }


//TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less than 10"
//
//                                             var numberInput = 3;
//                                             if(numberInput < 10){
//                                                 alert("the number is less than 10");
//                                             }   else {
//                                                 alert("the number is over");
//                                             }

//TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!.

//                         function checkIfGameIsOver(numberOfLives){
//                             if(numberOfLives === 0){
//                                 return "sorry game is over";
//                             } else {
//                                 return "next level";
//                             }
//                         }
//                     console.log(checkIfGameIsOver(7));

//TODO: EXTRA BONUS - Refactor todo#2 from above as a function.



// SHOULD WE DELETE STUFF EXAMPLE

// var weShouldDeleteStuff = confirm('Are you sure you want to delete everything?');
//
// if (weShouldDeleteStuff) {
//     // delete all the things...
// } else {
//     alert("Operation Canceled!");
// }



//TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert "You may proceed", if they are not, alert "Sorry, you are not able to proceed"

//                             var userAge = confirm("are you over the age of 13?")
//                             if(userAge){
//                                 console.log("you are old enough");
//                                 alert("you may proceed");
//                             } else {
//                                 console.log("user is too young");
//                                 alert("sorry you are too young");
//                             }

// ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// if(condition1){
//     // code here runs if condition evaluates to true
// }else if (condition2){
//     // code here runs if condition1 is false *and* condition2 evaluates to true
// }else {
//     // code here gets executed if condition1 nor condition2 evaluate to true
// }



// =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
//TODO Together: Write an if/else if/else statement that alerts "It's snowing!"
// if weather is equal to "snowing", alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all other cases
//
//     var weather = "sunny";
//     if(weather === "snowing"){
//         alert("its snowing");
//     } else if (weather === "raining"){
//         alert("its raining");
//     }   else {
//         alert("welp its hot");
//     }
//TODO Together: refactor the above statement as a function

            // function checkWeather(weather) {
            //     if (weather === "sunny") {
            //         return "dang its a good day";
            //     } else if (weather === raining) {
            //         return "what do we do now";
            //     } else {
            //         return "lets go out";
            //     }
            // }
            //
            //         console.log(checkWeather(weather: "sunny"));
            //         console.log(checkWeather(weather: "windy"));
            //


// Together: PIZZA PREFERENCE EXAMPLE

// var pizzaPreference = prompt("What kind of pizza do you like?");
// console.log("User pizza input: " + pizzaPreference);
//
// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// }  else if (pizzaPreference === "ham"){
//     alert("Ham is easy to spell and awesome!");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }




//TODO: Write a function that accepts a string that is a traffic light
// color as an input. When this function is called, it should return a message
// informing the user what to do when approaching that color light at an intersection.

//                 function trafficLight(lightcolor){
//                     if(lightcolor === "red"){
//                         return "you need to stop";
//                     }   else if(lightcolor === "yellow"){
//                         return "YOU NEED TO SPEED UP, SON!"
//                     }   else if(lightcolor === "green"){
//                         return "you are good to go"
//                     }   else {
//                         return "proceed with caution"
//                     }
//                     }
//
// console.log(trafficLight(lightcolor: "red"));;
// console.log(trafficLight(lightcolor: "yellow"));;
// console.log(trafficLight(lightcolor: "green"));;

// ================ NESTED STATEMENTS ===============
//TODO Together: If user is under 15, they are not eligible for a learners permit,
// else they are. If they are eligible, check age. If they are 15 they are eligible
// for a learners permit, if they are 16 or older and have a permit, they are eligible
// for license, if they are 16 or older and do not have a permit, they are not eligble for a license.
//
//             var userAge = 16;
//             var hasPermit = true;
//             // are eligible due to being 16 && hasPermit === true
//     if(userAge < 15){
//         //this means that they are younger than 15 so 14 and below
//         alert("sucks to  suck");
//     }   else{
//         // 15 or older
//         //nested statement
//         if(userAge === 15){
//             alert("you are one of the chosen");
//         } else if (userAge >= 16 && hasPermit === true){
//             //user is greather than or equal to 16 AND has a permit
//                     alert("you are ascending padawan");
//         }   else if(userAge >= 16 && hasPermit === false){
//             //user is older or equal to 16 but has no permit
//             alert("almost made it son, get your permit");
//         } else {
//             alert("burn the system!");
//         }
//







// ================ TERNARY STATEMENT ================

//TODO Together: Regular way

var message;
var success = true;

if (success) {
    message = "Operation was successful.";
} else {
    message = "Oops, something went wrong.";
}
console.log(message);


// var success = true;
// var message = (success) ? "Operation was successful from tern." : "Oops, something went wrong from tern.";
// console.log(message)


//TODO: Refactor the following conditional as a ternary

// var weather = "sunny";
// var weatherMessage;

// if(weather === "rainy"){
//    weatherMessage = "It's raining!";
// } else {
//     weatherMessage = "Have a nice day!";
// }

//WRITE YOUR TERNARY STATEMENT HERE!



// =============== SWITCH STATEMENT ================
//TODO Together:

// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// switch(pizzaPreference) {
//     case "pineapple and hot sauce":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "cheese":
//         alert("Just plain cheese? Okay...");
//         break;
//     default:
//         alert(pizzaPreference + " isn't my favorite, but let's order some!");
//         break;
// }


//TODO: Write a switch statement that evaluates weather as the condition. Check for "rainy", "sunny", "snow", and a default case.


//TODO: Rewrite the intersection function from earlier as a switch statement.



// ================ REVERSE ENGINEERING =================
// Visit each of these links, outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output


// 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html


// 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html


// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html

