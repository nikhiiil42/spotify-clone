// let btns = document.querySelectorAll("button");
// console.dir(btns);

// for(btn of btns) {
//     // btn.onclick = sayHello;
//     // btn.addEventListener("click", sayHello);
//     // btn.addEventListener("click", sayName);
//     btn.addEventListener("dblclick", double);
// }

// function sayHello() {
//     alert("hello");
// };

// function sayName(){
//     alert("apna college");
// };

// function double(){
//     console.log("you double click");
// }
// ---------------------------------------------------------

let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.innerText = randomColor;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;
    console.log("generate random color");
});

function getRandomColor(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}

