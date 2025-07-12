// async function greet(){
//     // throw "404 error page not found";
//     return "hello world";
// }
// greet()
// .then((result) => {
//     console.log("promise was resolved");
//     console.log("result was :", result);
// })
// .catch((error) =>{
//     console.log("promise is rejected with the error :", error);
// })
// ---------------------------------------------

// function getNum(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random()*10) + 1;
//             console.log(num);
//             resolve();
//         },1000);
//     });
// }

// async function demo(){
//     await getNum();
//     await getNum();
//     await getNum();
//     getNum();
// }
// -------
// let h1 = document.querySelector("h1");

//  function changeColor(color, delay){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             h1.style.color = color;
//             console.log(`color changed to ${color}`);
//             resolve("color changed!");
//         }, delay);
//     });
//  }

//  async function demo(){
//     await changeColor("red",1000);
//     await changeColor("green",1000);
//     await changeColor("orange",1000);
//     await changeColor("blue",1000);

//  }

// ---------------------------------------------------------------

// let jsonRes = '{"fact":"approximately 1/3 of cat owners think thier pets are able to read their minds.","length":78}';

// let validRes = JSON.parse(jsonRes);
// console.log(validRes);

// let student = {
//     name : "nikhil",
//     marks : "97",
// }
// JSON.stringify(student);

// ------------------------------------------------------

// let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((res) => {
//     return res.json();
// })
// .then((data) => {
//     console.log("data 1:",data.fact);
//     return fetch(url);
// })
// .then((res) => {
//     return res.json();
// })
// .then((data2) => {
//     console.log("data2 :", data2.fact);
// })
// .catch((err) => {
//     console.log("error :", err);
// })
// ------------------------------------------

let url = "https://catfact.ninja/fact";

async function getFacts(){
    try{
        let res = await fetch(url);
        let data = await res.json(); 
        console.log(data.fact);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log(data2.fact);
    }
    catch(error){
        console.log("error", error);
    }
        
        console.log("bye");
    }
