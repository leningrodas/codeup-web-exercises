/* ***************************************************************
* 							INTRO TO ARRAYS
*************************************************************** */


// An array is a data structure that holds an ordered list of items
// Each slot in a JavaScript array can hold any type of data



/* ***************************************************************
* 					DECLARING AN ARRAY
*************************************************************** */
// We declare an array with square brackets ==> []

// an empty array ==> []

//An array with one element ==> [1]

// An array with 5 elements ==> [1, 2, 3, 4, 5]

// An array with 3 elements all of different types ==> 	["one", 42, [8, 9, 10]]
// Notice that the array above does *not* have 5 elements, rather the last element is itself an array with 3 elements in it

//TODO TOGETHER: Declare an empty array set equal to the variable `pies` - then console.log `pies`
    let pies = [];
    // console.log(pies);



//TODO TOGETHER: Set the following array equal to `pies` - then console.log `pies`
// ["apple", "cherry", "key lime", "huckleberry"];

pies = ["apple", "cherry", "key lime", "huckleberry"]
// console.log(pies);

// TODO TOGETHER: Set the following array equal to variable called `shapes`. Console.log the variable
//  ['square', 'rectangle', 'circle', 'triangle'];

let shapes = ['square', 7, 'rectangle', 'circle', 'triangle'];
// console.log(shapes);


// TODO: Set the following array equal to a variable called `instructors` - then console.log the variable
//  ["sophie", "vivian", "david", "justin", "daniel", "fernando", "trant"]

let instructors = ["sophie", "vivian", "david", "justin", "daniel", "fernando", "trant"];
// console.log(instructors);


// TODO: Set the following array equal to a variable called `daysOfTheWeek` - then console.log the variable
//  ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]


let dasyOfTheWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
// console.log(dasyOfTheWeek);


// TODO: create an array of favorite foods and set to a variable called `favoriteFoods` - then console.log the variable
let favoriteFoods = ["tamales", "enchiladas", "posole", "empanadas", "tapas"];
// console.log(favoriteFoods);


/* ***************************************************************
* 					COUNTING AN ARRAY
*************************************************************** */

//We can also count the length of an array by using the `.length` property

// TODO TOGETHER: Log the length of shapes array
// console.log("the length of shapes " + shapes.length);

// TODO: console.log the length of the instructors array
// console.log("the length of instructors " + instructors.length);
// TODO: console.log the length of the daysOfTheWeek array
// console.log("typo but days of the week length is " + dasyOfTheWeek.length);
// TODO: console.log the length of the favoriteFoods array
// console.log("length of favorite foods " + favoriteFoods.length);


/* ***************************************************************
* 				ACCESSING ARRAY ELEMENTS
*************************************************************** */
// ** NOTE ** Arrays are zero-indexed, which means the first slot in an array is 0.

// TODO TOGETHER: What do we expect the following to output?
// TODO: console.log each element of the instructors array

//     console.log(instructors[0]);
//     console.log(instructors[1]);
//     console.log(instructors[2]);
//     console.log(instructors[3]);
//     console.log(instructors[4]);
//     console.log(instructors[5]);
//     console.log(instructors[6]);

// TODO: console.log the first three elements of the daysOfTheWeek array

//     console.log(dasyOfTheWeek[0]);
// console.log(dasyOfTheWeek[1]);
// console.log(dasyOfTheWeek[2]);
// console.log(dasyOfTheWeek[3]);
// console.log(dasyOfTheWeek[4]);
// console.log(dasyOfTheWeek[5]);
// console.log(dasyOfTheWeek[6]);
//

// TODO: console.log the first three elements of the favoriteFoods array
// console.log(favoriteFoods[0]);
// console.log(favoriteFoods[2]);
// console.log(favoriteFoods[3]);
// console.log(favoriteFoods[4]);
// console.log(favoriteFoods[5]);
// console.log(favoriteFoods[6]);

// TODO: create a function called `returnLastElement` that accepts an array and returns the last element of that array

// function returnLastElement(array){
//     return array[array.length - 1];
//
// }
//
// console.log(returnLastElement(instructors));
// console.log(returnLastElement(dasyOfTheWeek));

/* ***************************************************************
* 					ITERATING ARRAYS
*************************************************************** */
//  TODO TOGETHER: Log each element of the shapes array


// TODO TOGETHER: Using a for loop, iterate through the shapes array and log each shape

    // var shapes = ['square', 'rectangle', 'circle', 'triangle'];
    // for (var i = 2; i < shapes.length; i++){
    //     console.log("current iterations " + 1);
    //     console.log(shapes[1]);
    // }

// TODO TOGETHER: Alert "that's my favorite shape!" when your favorite shape is iterated over in the loop.

// for(var i = 0; i <shapes.length; i++){
//     if(shapes[i] === "triangle"){
//         alert(shapes[i] + " fav shape");
//     }
// }
//

// TODO: What happens if we change var i = 1? or var i = 2;
// begins in the indeces of 2 or what ever value we put on i


// TODO: What are benefits of using loops to iterate?
//makes coding easier and shorter

// TODO: How does the loop know when to stop iterating?
//when it reaches the condition or if we put break

// TODO: Using a for loop, iterate through the instructors array and console.log each instructor
// for(var i = 0; i <instructors.length; i++){
//     console.log("current interations " + 1);
//     console.log(instructors[i])
// }

// TODO: Using a for loop, iterate through the daysOfTheWeek array and console.log each day of the week
//
// for (var i = 0; i < dasyOfTheWeek.length; i++){
//     console.log("===========")
//     console.log(dasyOfTheWeek[i])
// }

// TODO: Using a for loop, iterate through the favoriteFoods array and console.log each favorite food

// for (var i = 0; i < favoriteFoods.length; i++){
//     console.log("++++==++==+++");
//     console.log(favoriteFoods[i]);
// }

// TODO: Refactoring the instructor loop, alert "hey, I know <INSTRUCTOR NAME HERE>" if you have had class with that instructor. If you have not had class with that instructor, alert "I haven't had class with <INSTRUCTOR NAME HERE> yet!"
// for(var i = 0; i <instructors.length; i++){
//     alert("i have had class with " + instructors[0]); break;
// } alert("i have not had class with " + instructors[4]);
//
//
//
// /* ***************************************************************
//* 						FOR EACH ARRAY
//*************************************************************** */

// TODO TOGETHER: Using a for each loop, console.log each shape from the shapes array

shapes.forEach(function (shape,arr, index ) {
    console.log(index);
    console.log(arr);
    console.log(shape);
})

// TODO TOGETHER: Using a for each loop, console.log each element from the following array:

// TODO TOGETHER: Using a for each loop, console.log each element from the following array:
// var pies = ["apple", "cherry", "key lime", "huckleberry"];


// TODO: Using a for each loop, iterate through the instructors array and console.log each instructor

// instructors.forEach(function(instructors, array, index){
//     console.log(index);
//     console.log(instructors);
//     console.log(array);
// })

// TODO: Using a for each loop, iterate through the daysOfTheWeek array and console.log each day of the week

// dasyOfTheWeek.forEach(function (dasyOfTheWeek, array, index){
//     console.log(index);
//     console.log(dasyOfTheWeek);
// })
// TODO: Using a for each loop, iterate through the favoriteFoods

//  favoriteFoods.forEach(function (favoriteFoods, array, index){
//      console.log(index);
//      console.log(favoriteFoods);
//  })
