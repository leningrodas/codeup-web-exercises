"use strict";

/*****************************
 *    VAR VS. LET VS. CONST
 *****************************/
//
// function checkWeather(isRaining) {
// 	if (isRaining) {
// 		var umbrella = "Get an umbrella"
// 	} else {
// 		var sunglasses = "Grab your glasses!"
// 		console.log(umbrella);
// 	}
//
// }

// checkWeather(false); //undefined
//


// function checkWeatherTwo(isRaining) {
// 	if (isRaining) {
// 		const umbrella = "Get an umbrella"
// 	} else {
// 		const sunglasses = "Grab your glasses!"
// 		console.log(umbrella);
// 	}
//
// }
//
// checkWeatherTwo(true) //Uncaught ReferenceError: umbrella is not defined


/*==============================================*/


// let instructor = 'Vivian';
// instructor = 'Sophie';
// console.log(instructor); //Sophie
//



// const instructor = 'Vivian';
// console.log(instructor); // Vivian
// instructor = 'Sophie';
// console.log(instructor); // Uncaught TypeError: Assignment to constant variable.
//


/*==============================================*/




/*
* let and const (block scope vs. function scope)
*/
//
// {
//     var a = 10;
// }
// {
//     let b = 20;
// }
//
// const c = 30;
//
// console.log(a); // 10
// console.log(b); // Uncaught ReferenceError: b is not defined
// console.log(c += 3); //Uncaught TypeError: Assignment to constant variable.
//




/*==============================================*/




// if (false) {
//    var x = 2; //Undefined
// }

// if (false) {
//     let x = 2; //Uncaught ReferenceError: x is not defined
// }

// console.log(x);




/*****************************
 *    Template Strings
 *****************************/
//
// //oldway
// let firstName = "Vivian";
// let lastName = "Canales";
// let greeting = "Hello my name is " + firstName + ' ' + lastName + '.';
//
// // console.log(greeting);
//
// //TODO: Refactor code from above, using template strings.
//
// let newGreeting = `"hello my name is" ${firstName} ${lastName}.`
//
//



/*==============================================*/

//TODO: Create an HTML string that contains the following items in an unordered list

// let items = ['apple', 'grape', 'orange'];
//
//
// //old way
// let itemsHtml = "";
// itemsHtml += "<ul>";
// itemsHtml += "<li>" + items[0]+ "</li>"
// itemsHtml += "<li>" + items[1]+ "</li>"
// itemsHtml += "<li>" + items[2]+ "</li>"
// itemsHtml += "</ul>";
//
// console.log(itemsHtml);
//
//
//
// //new way

//
// let newItems = `
// 	<ul>
// 		<li>${items[0]}</li>
// 		<li>${items[0]}</li>
// 		<li>${items[0]}</li>
// 	</ul>
// `;
// console.log(newItems);



/*==============================================*/

//TODO: Create a paragraph from the following program object
//
// let program = {
// 	name: "Codeup",
// 	location: "Dallas and San Antonio",
// 	length: "20 weeks",
// 	technology: "HTML, CSS, JS, Java"
// }
//
//
//
//
//
// let programLetter = `Hello and thank you ${program.name}
//
// our program is located in ${program.location}
//
// and the time frame is ${program.length}
// `;
// console.log(programLetter);
//
//
//
//

/*****************************
 *       For Of Loops
 *****************************/


const arr = ["one", "two", "three"];
for (let ele of arr) {
    console.log(ele);
}





/*==============================================*/
//TODO: Using for of loops, log each instructors name

const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
for (let day of days) {
	console.log(day);
}





/*==============================================*/

//TODO: Using for of loops, log each instructors name

const instructors = ["Vivian", "Sophie", "Justin", "Casey", "David"]
for (let arr of instructors) {
	console.log(arr);
}




/* ****************************
 *       Arrow Functions
 *****************************/
//TODO TOGETHER: Rewrite the following function using arrow function syntax


function sayHello(name){
	return `Hello ${name}`;
}


const sayhey = (name) => {
	return `hello there $(name.)`
}
sayhey('bob')
//wokrs



// console.log(sayHelloAgain("Vivian")); //Hello Vivian
// console.log(sayHelloAgain("Justin")); //Hello Justin
// console.log(sayHelloAgain("Sophie")); //Hello Sophie



/*==============================================*/
//TODO TOGETHER: Rewrite the following function using arrow function syntax

function sum(a,b){
	return a + b;
}


const sumOfNum = (a,b) =>{
	return a + b;
}




// console.log(sum(5, 3)); //8
// console.log(sum(5, 20)); //25
// console.log(sum(1, 9)); //10




/*==============================================*/
//TODO: Rewrite the following function using arrow function syntax

function addOne(arg1) {
    return arg1 + 1;
}

const sumaddOne = (arg1) =>{
	return arg1 + 1;
}


// console.log(addOneA(2));
// console.log(addOneB(2));
// console.log(addOneC(2));
// console.log(addOneD(2));






/* ****************************
 *       Default Function
 *       Parameter Values
 *****************************/
//TODO Together: Refactor the following using ES6

// old way
function sayHello(name) {
	if (typeof name === 'undefined') {
		name = 'World';
	}
	return 'Hello, ' + name + '!';
}

const sayHelloTHere = (name = "world") =>{
	return `hello $(name)`
}



// console.log(sayHello());; // "Hello, World!"
// console.log(sayHello('codeup'));; // "Hello, codeup!"



/*==============================================*/

// TODO: Refactor the following function using arrow syntax, default function parameter values, and template strings.

function helloCohort(greeting, cohort){
	if(typeof greeting === "undefined"){
		greeting = "Good Morning";
	}
	if(typeof cohort === "undefined"){
		cohort = "Jupiter";
	}

	return greeting + " " + cohort;
}


const helloJupiter= (greeting = "GOod MOrning", cohort = "Jupiter") =>{
	return `hello ${greeting} the best ${cohort}`;
}