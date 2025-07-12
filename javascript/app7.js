// const student = {
//     name :"nikhil",
//     age: 18,
//     eng:98,
//     math: 93,
//     phy: 93,
//     getAvg(){
//         let avg =(this.math + this.phy + this.eng)/3;
//         console.log(`${avg} this is marks of ${this.name}`);
        
//     }

// }

// try and catch:
// console.log("hello world");
// console.log("hello world");
// try{
//     console.log(a);
// }catch{
//     console.log("caught an error... a is not defined");
// }
// console.log("hello world");
// console.log("hello world");

// arrow functions:
// const sum = (a,b) => {
//     console.log(a+b);
// };

// const cube = (n) => {
//     return(n*n*n);
// };

// const pow = (a,b) => {
//     return(a**b);
// };

// setTimeout function:
// console.log("hi there")
// setTimeout(() => {
//     console.log("apna college");
// },4000);
// console.log("welcome to");

// setTime interval function:
//  let id =setInterval(() => {
//     console.log("hello world");
// }, 2000);

// console.log(id);

// qs 1:
// const square = (n) => {
//     return(n**2);
// };
// console.log(square(5));

// qs 2:
let id = setInterval(() => {
    console.log("hello world");
}, 2000);
setTimeout(() => {
    console.log(id);
},10000);