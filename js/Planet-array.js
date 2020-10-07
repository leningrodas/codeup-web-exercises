(function() {
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */
    planets.unshift("the Sun");
    console.log('Adding "The Sun" to the beginning of the planets array.');
    console.log(planets);


    planets.push("Pluto");
    console.log('Adding "Pluto" to the end of the planets array.');
    console.log(planets);


    planets.shift("the Sun");
    console.log('Removing "The Sun" from the beginning of the planets array.');
    console.log(planets);

    planets.pop("Pluto");
    console.log('Removing "Pluto" from the end of the planets array.');
    console.log(planets);

    var index = planets.indexOf("Earth");
    console.log('Finding and logging the index of "Earth" in the planets array.');
    console.log(index);


    planets.reverse();
    console.log("Reversing the order of the planets array.");
    console.log(planets);


    planets.sort();
    console.log("Sorting the planets array.");
    console.log(planets);


    /*
    mutate....
    .push()
     */

    // TODO DEMONSTRATION: Create a function that will take in a formatted string of numbers
    // and return an array of phone numbers without any symbols. Log the output of the returned array.

    /* EXAMPLE...
        var phoneNumbers = '210-555-2020\n230-555-2020\n512-555-3030';
        cleanPhoneNumbers(phoneNumbers);
        the above code should output the following...
           2105552020
           2305552020
           5125553030
    */
    //
    // var phoneNumbers = '210-555-2020\n230-555-2020\n512-555-3030';
    //  var phoneNumSplit = phoneNumbers.split("/n");
    //
    //  phoneNumSplit.forEach(function (phoneNumbers) {
    //      phoneNumSplit = phoneNumbers.split('-');
    //  })
    // function cleanPhoneNumbers(phoneNums) {
    //
    // }
    //
    // console.log(phoneNumSplit);
    // // var cleanNumsArr = cleanPhoneNumbers(phoneNumbers);
    // //
    // // for (var i = 0; i < cleanNumsArr.length; i += 1) {
    // //     console.log(cleanNumsArr[i]);
    // // }
    //
    //    BONUS CHALLENGE (when finished with the exercise)...
    //    Create a phone number parser that will convert a string of numbers into a human readable format. The output should depend on the number of digits (account for 7, 10, 11 digit numbers):
    //    Using multiple functions will be helpful.
    //        input = 5552324343, output = 555-232-4343
    //    input = 5553434, output = 555-3434
    //    input = 18005552323, output = 1-800-555-2323
    //    Extra Challenge: account for invalid characters
    //    Extra Challenge: if the input is already formatted, output the unformatted version
    //    Extra Challenge: allow the parser to accept letters and convert them to the correct numbers

    var phoneOne = [5552324343];

    function combineNum(phoneOne) {
        var numCombineArr = phoneOne.splice(2, 3, "-");
        numCombineArr.for(phoneOne)
    }

    console.log(combineNum())

});
