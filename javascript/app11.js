// function hello(){
//     console.log("inside hello funx");
//     console.log("hello");
// }

// function demo(){
//     console.log("calling hello funx");
//     hello();
// }

// console.log("calling demo funx");
// demo();
// console.log("done , bye!");

// --------------------------------------------

// function one(){
//     return 1;
// }

// function two(){
//     return one() + one();
// }

// function three(){
//     let ans = two() + one();
//     console.log(ans);
// }

// three();

// -----------------------------

// setTimeout( function(){
//     console.log("hello world");
// }, 2000);

// console.log("hello");

// -------------------------------

//  let h1 = document.querySelector("h1");

//  function changeColor(color, delay, nextColorChange){
//     setTimeout(() => {
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange();
//     }, delay);
//  }

//  changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("green",1000, () => {
//             changeColor("yellow", 1000, () => {
//                 changeColor("blue", 1000);
//             });
//         });
//     });
//  });

// -------------------------------------------------

// function saveDb(data, success, failure){
//     let internetSpeed = Math.floor(Math.random()*10) + 1;
//     if(internetSpeed > 4){
//         success();
//     }else{
//         failure();
//     }
// }


// saveDb(
//     "apna college",
//     () => {
//         console.log("success: your data is saved");
//         saveDb(
//             "hello world",
//             () => {
//                 console.log("success2: your data is saved");
//                 saveDb(
//                     "Nikhil",
//                     () => {
//                         console.log("success3: your data is saved");
//                     },
//                     () => {
//                         console.log("failure3: your data is not saved due to weak connection");
//                     }
//                 );
//             },
//             () => {
//                 console.log("failure2: your data is not saved due to weak internet connection");
//             }
//         );
//     },
//     () => {
//         console.log("failure: your data is not saved due to low internet connection");
//     }
// );

// -----------------------------------------------------------------

function saveDb(data){
    return new Promise((resolve ,reject) => {
        let internetSpeed = Math.floor(Math.random()*10) + 1;
        if(internetSpeed > 4){
            resolve("success: your data is saved");
        }else{
            reject("failure: your data is not saved due to low internet connection");
        }
    })
}

saveDb("apna college")
.then((result) =>{
    console.log("data1 was saved");
    console.log("result of promise" , result);
    return saveDb("hello world");
})
.then((result) => {
    console.log("data2 is saved");
    console.log("result of promise", result);
    return saveDb("nikhil");
})
.then((result) => {
    console.log("data3 is saved");
    console.log("result of promise", result);
})
.catch((error) => {
    console.log("promise was rejected");
    console.log("error of promise", error);
});