//****
var input = "trick or treat"
// function holloWeen () {
//     return input = ["trick", "or", "treat"];
// }
// console.log(holloWeen());
let arrayInput = input.split(" ")
arrayInput.forEach(function(element, index) {
    console.log("["+ index + "]" + element);
});

// Math.random()

let randomNum = Math.random() * 2;
console.log(randomNum);
// numberwithing a range 2000 min and 300 max
// let chosenNum = 2000 + Math.random()*(3000-2000);

// the first 2000 is adding so it doesnt go below it and it becomes the minimum, the other is subtracting the max we want minus the minimum so the range is added to the 2000.
// writing this in a function
function minRange (MIN, MAX){
    var numberRange = Math.random() * (1000, 500) + 500;
    return numberRange;
}
console.log(minRange);

// math.round()
let index = Math.round(randomNum);
console.log("normal rounding " + index);

let randomWord = arrayInput[index];
console.log(randomWord);

//math.floor()
index = Math.floor(randomNum);
console.log("rounding down: " + index);



//math ceil
index = Math.ceil(randomNum);
console.log("rounding up (with ceil): " + index);
randomWord = arrayInput[index];
console.log(randomWord);

//adding a constant to our random number// random num between 74 an 186
let numBetween = Math.ceil(Math.random() * 74) + 112;
console.log("using 74 as random base and adding 112: " + numBetween);

let numBetween1 = Math.ceil(Math.random() * 112) + 74;
console.log("using 112 as random base and adding 74: " + numBetween1);

//math.pow******
//used o raise a number to the power of another number
// i.e 4 ^ 2 = 16
let exponentResult = Math.pow(4, 2);
console.log("4 squared to the power of 2 = " + exponentResult);

// using a looop for the above
let base = 8;
let exponent = 6;
let result = base;
for(let i=1; i<exponent; i++){
    result = result * base;
}
console.log(base + " to the " + exponent + " power = " + result);

//Math.sqrt()
console.log("the square root of 16 = " + Math.sqrt(16));


//***** constants
// Math.PI
//used to calculate the circumfrence and area of a circle and can also be used to get the diameter and radius of a circle when you only have the circumfrance or the area of the circle.
// circumference = 2 * π * radius = π * diameter
let circumference = Math.PI * 5;
console.log(circumference);

// to find the area
let area = Math.PI * Math.pow(2.5, 2);
console.log(area);
