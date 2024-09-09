const container = document.querySelector("#container");

for (let i = 1; i <= 16; i++) {
    const div = document.createElement("div");
    div.style.backgroundColor = "#bde0fe";
    div.style.height = "150px";
    div.style.width = "180px"

    div.style.display = "inline-flex";
    div.style.display = "inline-flex-end"
    div.style.flexWrap = "no-wrap";

    div.classList = "grid"
    container.appendChild(div);
}


const buttons = document.querySelectorAll(".grid");

buttons.forEach(button => {
    button.addEventListener("mouseover", function () {
        button.style.backgroundColor = "blue";
    })

});