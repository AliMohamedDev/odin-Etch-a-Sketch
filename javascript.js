const container = document.querySelector("#container");

for (let i = 1; i <= 16; i++) {
    const div = document.createElement("div");
    div.style.backgroundColor = "red";
    div.style.height = "150px";
    div.style.width = "150px"
    div.style.border = "2px solid black"
    div.style.display = "inline-flex";

    div.classList = "grid"
    container.appendChild(div);
}


const buttons = document.querySelectorAll(".grid");

buttons.forEach(button => {
    button.addEventListener("hover", function () {
        button.style.backgroundColor = "blue";
    })

});