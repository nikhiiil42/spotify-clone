// let smallImages = document.getElementsByClassName("oldImg");

// for(let i = 0; i < smallImages.length; i++){
//     smallImages[i].src = "spiderman_img.png";
//     console.log(`value of image no. ${i} is changed.`);
// }

// query selector :
// console.dir(document.querySelector("p"));
// console.dir(document.querySelector(".0ldImg"));
// console.dir(document.querySelector("#description"));

// let img = document.querySelector('img');
// console.dir(img);
// console.dir(img.getAttribute('i'));

// let heading = document.querySelector('h1');
// console.dir(heading);

// let imgObj = document.getElementsByClassName("oldImg");

// for(i = 0; i < imgObj.length; i++){
//     imgObj[i].src = "spiderman_img.png";
// }

// console.dir(document.querySelectorAll("p"));

// practice qs 1:
let para1 = document.createElement("p");
para1.innerText = "Hi I'm Red!";
document.querySelector("body").append(para1);
para1.classList.add("red");

// practice qs 2:
let h3 = document.createElement("h3");
h3.innerText = "I am blue H3";
document.querySelector("body").append(h3);
h3.classList.add("blue");

// practice qs 3:
let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");
h1.innerText = "I'm in a div";
para2.innerText = "ME TOO";

div.append(h1);
div.append(para2);
div.classList.add("box");

document.querySelector("body").append(div);
// ----------------------------------------------------