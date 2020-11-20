const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


// 2. Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

const createNew = users.filter(function (obj){
    return obj.languages.length >= 3;
});

console.log(createNew);

// 3.Use .map to create an array of strings where each element is a user's email address

let emailArr = users.map(function (x){
    return x.email;

})
console.log(emailArr)
let emailArray = users.map(x => x.email);
console.log(emailArray)


// 4. Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

    const totalYrs  = users.reduce(function (currentSum, {yearsOfExperience}){
    return currentSum + yearsOfExperience;
}, 0);

console.log(totalYrs);

// 5. Use .reduce to get the longest email from the list of users.

let longestemail = users.reduce(function (currentemail, users){
    if (users.email.length > currentemail.length){
        currentemail = users.email
    }
    return currentemail;
},'')

console.log(longestemail);

// 6. Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

// const oneLine = lyrics.reduce(function (currentstring, word){
//     return `${currentstring} ${word}`;
// })

const singleString = users.reduce(function (currentstring, instructors){
    return ` ${currentstring}  ${instructors.name}`
}, 'your instructors are')

console.log(singleString)