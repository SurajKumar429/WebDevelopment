const input = document.getElementById("input")
input.onchange = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.type);
    console.log(e.target.value);
}

//? Event Listener



const button2 = document.querySelector(".button"
button2.addEventListener("click", handleclick)
)