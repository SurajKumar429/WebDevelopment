//! Attribute Manipulation
const headingEl = document.getElementById("heading")
// console.log(headingEl);

console.log(headingEl.getAttribute("class"));

const subhead = document.getElementById("subhead")
subhead.setAttribute("class", "subhead p1 p2 p3")
console.log(subhead);

let imageEl = document.getElementById("productImg")
imageEl.setAttribute("src","https://cdn.pixabay.com/photo/2025/08/15/07/25/ai-generated-9776380_1280.jpg")
imageEl.setAttribute("src","https://cdn.pixabay.com/photo/2022/12/01/04/42/man-7628305_1280.jpg")

//? InnerHTML
//? InnerText
//? TextContent

subhead.innerHTML = "Inner HTML Property"
subhead.innerText = "Inner Text Property"
subhead.innerHTML = "Inner HTML Property"

