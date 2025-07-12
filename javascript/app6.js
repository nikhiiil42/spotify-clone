// function hello(){
//     console.log("hello world");
// }
// hello()

// function print1To5(){
//     for(i = 1; i<=5; i++){
//         console.log(i);
//     }
// }
// print1To5()


// function isAdult(){
//     let age = 12;
//     if(age >= 18){
//         console.log("you are adult");
//     }
//     else{
//         console.log("you are not adult");
//     }
// }
// isAdult()

// qs 1:
// function printPoem(){
//     console.log("twinkle twinkle little star");
//     console.log("how i wonder what you are");
// }
// printPoem();

// qs 2:
// function dice(){
//     let random = Math.floor(Math.random()*6) + 1;
//     console.log(random);
// }
// dice();

// function arguments
// function Info(name, age){
//     console.log(`${name}'s age is ${age}`);
// }
// Info("nikhil", 18);

// function add(a,b){
//     console.log(a+b);
// }
// add(4,6);
// add(7,2);

// qs 3:
// function average(a,b,c){
//     console.log((a+b+c)/3);
// }
// average(5,2,5);

// qs 4:
// function table(num){
//     for(i=1; i<=10; i++){
//         console.log(i*num);
//     }
// }
// table(5);
// table(99);

// multiplegreet
// function multipleGreet(func,count){
//     for(i=1; i<=count; i++){
//         func();
//     }
// }
// let greet = function(){
//     console.log("hello");
// }
// multipleGreet(greet,5);

// assignment qs 1:
let arr = [8,9,10,1,2,3,4,5,6,7];
let num = 5;
function getElement(arr,num){
    for(let i=0; i<arr.length; i++){
        if(arr[i]>num){
            console.log(arr[i]);
        }
    }

}
getElement(arr,num);