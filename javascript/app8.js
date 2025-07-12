// forEach function :
// let arr = [1, 2, 3, 4, 5, 6, 7];
// arr.forEach(function(el){
//     console.log(el);
// }
// );

// let arr = [{ 
//     name : "nikil",
//     marks : 98, 

// }, 
// {
//     name : "ketan",
//     marks : 99,
// }, 
// {
//     name : "darshana",
//     marks : 64,
// }];
// arr.forEach((student) => {
//     console.log(student.name);
// }
// );

// map function :
// let num = [1, 2, 3, 4, 5];
// let double = num.map((el) => {
//     return el*2;
// }
// )

// let students = [{ 
//         name : "nikhil",
//         marks : 99, 
    
//     }, 
//     {
//         name : "ketan",
//         marks : 99,
//     }, 
//     {
//         name : "darshana",
//         marks : 98,
//     }];
// let gpa = students.map((el) => {
//     return el.marks/10;
// }
// );

// let nums = [1,2,3,4,5,6,7,8,9,10,11,12];
// let ans =  nums.filter((el) => {
//     return el % 2 == 0;
// }
// ) ;

// reduce method :
// let nums = [1,2,3,4];
// let finalVal = nums.reduce((res, el) => {
//     return res+el;
// }
// );
// console.log(finalVal);

// let arr = [1,2,3,4,5,6,7,8,9];
// let max = arr.reduce((max, el) => {
//     if(max<el){
//         return el;
//     }else{
//         return max;
//     }
// });
// console.log(max);

// qs 1:
// let arr = [10,20,30,40,50];
// let res = arr.every((el) => {
//     return el%10 == 0;
// });
// console.log(res);

// qs 2 :
// let arr = [125,23,34,44,55,65,75,85,95];
// let min = arr.reduce((min,el) => {
//     if(min>el){
//         return el;
//     }else{
//         return min;
//     }
// });
// console.log(min);

// default parameters:
// function sum(a, b=3){
//     return a+b;
// }

// spread :
// console.log(..."apnacollege");
// let chars = [..."hello"];

// let odd = [1,3,5,7,9,11,13];
// let even = [2,4,6,8,10,12];
// console.log(...odd,...even);

// const data = {
//     email: "ironman@gmail.com",
//     password:"abcd",
// }
// const dataCopy = {...data , id: 123 , country : "india"};
// console.log(dataCopy);

let arr = [1,2,3,4,5];
let obj1 = {...arr};
console.log(obj1); 