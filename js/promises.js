

// TODO: if aPromise resolves, console.log 'VALUE_HERE is an even number!'
// TODO: if aPromise rejects, console.error 'VALUE_HERE is an odd number!'



// fetch(url, {headers: {'Authorization': '960c15ca35844e409811ff1f4815697b3680bc20'}})

// ///walk-through
// function wait (num){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve();
//         }, num)
//     });
// }
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
//
//
//




fetch("https://api.github.com/users/:username/received_events/public",{headers: {'Authorization': 'token ' + github_API}})
    .then(res => res.json())
    .then(console.log)
    .catch(console.log)





// fetch('https://swapi.dev/api/people/1')
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch(console.log);
