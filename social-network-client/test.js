// const { Observable } = require ("rxjs");

// const notifier = new Observable((observer) => {
//     setInterval(() => {
//         observer.next('the paper is at your door step')
//     }, Math.floor(Math.random() * 1000))
// }) 

// notifier.subscribe((message) => {
//     console.log(message)
// })

const { v4 } = require('uuid')
console.log(v4()) 