import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { LayoutComponent } from './app/components/layout/layout/layout.component';

bootstrapApplication(LayoutComponent, appConfig)
  .catch((err) => console.error(err));


// const arr = [10, 20, 30 , 40, 50, 60, 70, 10000000000]

// // newArray [20, 40, 60, 80]
// let sum = 0;
// for (const item of arr) {
//   sum += item
// }

// let result = 1
// for (const item of arr) {
//   result *= item
// }

// let str = ''
// for (const item of arr) {
//   str += item
// }

// arr.reduce((sum , item) => {
//   return sum += item
// }, 0)

// arr.reduce((str , item) => {
//   return str += item
// }, '')


// const newArray = arr.map(item => item * 2)

// class A {
//   counter: number

//   constructor(counter: number) {
//     this.counter = counter
//   }
// }
