// let btn = document.querySelector("button");

// btn.addEventListener("click",async () => {
//    let fact = await getFacts();
//    let p = document.querySelector("#result");
//    p.innerText = fact;

// });


// let url = "https://catfact.ninja/fact";

// async function getFacts(){
//     try{
//         let res = await axios.get(url); 
//         return res.data.fact;

//     }
//     catch(error){
//         console.log("error", error);
//     }
//     }
// --------------------------------------------------------

// url = "https://dog.ceo/api/breeds/image/random";

// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//     let link = await getImg();
//     let img = document.querySelector("#result");
//     img.setAttribute("src", link);
//     console.log(link);
// });

// async function getImg(){
//     try{
//         let res = await axios.get(url);
//         return res.data.message;
//     }catch(e){
//         console.log("error",error);
//         return "/";
//     }
// }

// ---------------------------------------------------
url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    console.log(country);

let colArr = await getColleges(country);
console.log("colArr", colArr);
show(colArr);

});

function show(colArr){
    let li = document.querySelector("#list");
    list.innerHtml = '';
    for(let col of colArr){
        console.log(col.name);
        let li = document.createElement("li"); 
        li.innerText = col.name;
        list.appendChild(li);
   }
}

async function getColleges(country){
    try{
        let res = await axios.get(url + country);
        console.log(res.data);
        return res.data;
    }catch(e){
        console.log("error", e);
        return [];
    }
}

// let url = "http://universities.hipolabs.com/search?name=";

// let btn = document.querySelector("button");
// btn.addEventListener("click", async () => {
//     let country = document.querySelector("input").value;
//     console.log(country);

//     let colArr = await getColleges(country);
//     console.log("colArr", colArr);
//     show(colArr);
// });

// function show(colArr){
//     let list = document.querySelector("#list"); // Ensure there's a list with id "list" in your HTML
//     list.innerHTML = ''; // Clear the list before adding new items

//     for (let col of colArr) {
//         console.log(col.name);
//         let li = document.createElement("li"); // Create a new list item
//         li.innerText = col.name; // Set the name of the college as the text
//         list.appendChild(li); // Append the list item to the list
//     }
// }

// async function getColleges(country) {
//     try {
//         let res = await axios.get(url + country);
//         console.log(res.data);
//         return res.data; // Return the array of colleges from the API response
//     } catch (e) {
//         console.log("Error:", e);
//         return []; // Return an empty array in case of an error
//     }
// }
