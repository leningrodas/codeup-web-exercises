//  console.log("Hello from external Javascript");
//
// //question 2
//
//  alert("welcome to my website");
//
//  var favoritecolor = prompt("What is your favorite color?");
//
//  console.log(favoritecolor);
//
//  alert(favoritecolor + " is the user favorite color");
 // walk through with instructor
 /* var userColor = prompt(message:"what is your favorite color?")
    var alertMessage = "Great " + userColor + "favorite color too";
    alert(alertMessage);
  */

 /* question 3-1 You have rented some movies for your kids: The little mermaid (for 3 days),
    Brother Bear (for 5 days, they love it), and Hercules
   (1 day, you don't know yet if they're going to like it).
/* If price for a movie per day is $3, how much will you have to pay?

 // var mermaid = prompt("how many days did you rent little mermaid?");
 // console.log(mermaid);
 //
 // var bear = prompt("how many days did you rent brother bear for?");
 // console.log(bear);
 //
 // var hercules = prompt("how many days did you rent out hercules for?");
 // console.log(hercules);
 //
 // alert(console.log((mermaid * 3) + (bear * 5) + (hercules * 1)))

// walk through with instructor

 // var dailyRentalRate = Number(prompt(message:"how much is the daily rate"));
 // var bortherbeardaysrented = Number(prompt(message:"how long are you rentig brother bear for?"));
 // var herculesdaysrented = Number(prompt(message:"how long are you rentig hercules for?"));
 // var mermaiddaysrented = Number(prompt(message:"how long are you rentig mermaid for?"));
 //
 // var totalCost = (mermaiddaysrented + bortherbeardaysrented + herculesdaysrented) * dailyRentalRate;
 // var alertMessage = "you owe $" + totalCost.toFixed(fractionDigits:2);

/*  Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook,
    they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350.
    How much will you receive in payment for this week? You worked 10 hours for Facebook,
/*  6 hours for Google and 4 hours for Amazon.


// var facebookHours = prompt("how many hours worked for facebook?");
// console.log((facebookHours * 350));
//
// var googleHours = prompt("how many hours worked for google?");
// console.log(googleHours * 400);
// var amazonHours = prompt("how many hours worked for amazon?");
// console.log(amazonHours * 380);
//
// alert("total for the week is 7,420 dollars")

/*  exercise 3-3 A student can be enrolled in a class only
/*  if the class is not full and the class schedule does not conflict with her current schedule.


var classFull = confirm("if the class is not full press ok");
console.log(classFull);

var noConflict = confirm("does the class conflict with the rest of the schedule?", "no");
console.log(noConflict);

if (classFull && noConflict === true) {
    alert("you can successfully enroll in class");
}

// instructor walk through

var classIsNotFull = confirm("Class is not full");
var classScheduleDoesNotConflict = confirm("Schedules do not conflict");

var studentenrolled = classIsNotFull && classScheduleDoesNotConflict
var alertMessage = "student enrolled: " + studentenrolled

alert(alertMessage);

/* A product offer can be applied only if a person buys more than 2 items,
   and the offer has not expired. Premium members do not need to buy a specific amount of products.
*/

//  walk through with instructor

var numberofItems = Number(prompt(message:"how any items for checkout?"));
var offerisValid = confirm("is the offer valid?");
var isPremiumMember = confirm("are you a premium member?");

var discountApplied = offerisValid && (isPremiumMember || numberofItems > 2);

alert("product discount: " + discountApplied);



























