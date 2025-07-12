// objects
// let student ={
//     name: "nikhil",
//     age: 18,
//     marks: 91.60
// };
// console.log(student);

// const item ={
//     price:100.99,
//     discount:10,
//     colors : ["red","violet"],
// };
// console.log(item);

// const post ={
//     username: "nikhiiil42",
//     content: "these is my #first post",
//     likes: 150,
//     comments:3000,
//     tags: ["LBSNAA", "IAS","cabinet secretary"],
// };

// const obj = {
//     1: "a",
//     2: "b",
//     true:"c",
//     null:"d",
//     undefined:"e"
// };

// let classInfo = {
//     aman :{
//         marks : "A++",
//         city : "delhi"
//     },
//     shraddha :{
//         grade: "A",
//         city: "Pune",
//     },
//     karan:{
//         grade: "O",
//         city : "bengaluru",
//     }

// };

// let random = Math.floor(Math.random()*10) + 1;
// console.log(random);

// qs 1:
// let random = Math.floor(Math.random()*100) + 1;
// console.log(random);

// qs 2:
// let random = Math.floor(Math.random()*5) + 1;
// console.log(random);

// guess random number game
const max = prompt("enter the max number");
const random = Math.floor(Math.random() *max) + 1;
let guess = prompt("let guess the number");
while(true){
    if(guess == "quit"){
        console.log("user quit");
        break;
    }
    if(guess == random){
        console.log("you guessed right number",random);
        break;  
    }
    else if(guess < random){
        guess = prompt("your guess is to small , please try again");
    }
    else if(guess > random){
        guess = prompt("your guess is too large , please try again");
    }
    else{
        guess = prompt("wrong number entered,please try again");
    }
}