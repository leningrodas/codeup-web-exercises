//     function successIfEvenUTCSecond() {
//         return new Promise((resolve, reject) => {
//             setTimeout(function() {
//                 const second = new Date().getUTCSeconds();
//                 if (second % 2 === 0) {
//                     resolve(second);
//                 } else {
//                     reject(second);
//                 }
//             }, 200);
//         });
//     }
//
//     const aPromise = successIfEvenUTCSecond();
//
// // console.log(aPromise);
// //
//     aPromise.then((data) => {
//         console.log(data + " is an even number");
//     }).catch((err) => {
//         console.error(err + " is an odd number");
//     });

// TODO: if aPromise resolves, console.log 'VALUE_HERE is an even number!'
// TODO: if aPromise rejects, console.error 'VALUE_HERE is an odd number!'





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




// fetch("https://api.github.com/events",{headers: {'Authorization': 'token ' + github_API}})
//     .then(res => res.json())
//     .then(data)
//     .catch(console.log);


//
// fetch('https://api.github.com/users/username/events', {headers: {'Authorization': 'token ' + github_API}})
//     .then((response) => {
//         return response.json();
//     })
//     .then((PushEvents)=>{
//         console.log(PushEvents);
//     })
//     .then((type)=>{
//         console.log(type);
//     })


function dateofPushEvent(events){
    for(let event of events){
        if(event.type === "PushEvent"){
            return new Date(event.created_at).toDateString();
        }
    }
    return null;
}

function lastPush(username){
    const url= `https://api.github.com/users/${username}/events`;
    const options = {headers: {'authorization': 'token ' + github_API}};
    return fetch(url, options)
        .then(res => res.json())
        .then(dateofPushEvent)
        .catch(console.error);
}

lastPush('leningrodas').then(console.log);



//
// fetch('https://swapi.dev/api/people/1')
//     .then((response) => {
//         return response.json();
//     })
//     .then(({height}) => {
//         console.log(height);
//     })
//     .catch(console.log);
//

