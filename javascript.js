const container = document.querySelector("#container");

// Create the button to choose grid size
const btn = document.createElement("button");
btn.textContent = "Choose Grid Size";
btn.style.display = "block";
btn.style.margin = "20px auto"; // Center the button horizontally
container.appendChild(btn);

// Add event listener to the button
btn.addEventListener("click", function () {
    // Clear existing grid items if any
    container.innerHTML = "";
    container.appendChild(btn);

    let gridSize = parseInt(prompt("Enter grid size: ")); // Get the grid size from the user
    container.style.display = "flex";
    container.style.flexWrap = "wrap"; // Ensure the grid wraps to new lines

    // Create the grid
    for (let i = 1; i <= gridSize * gridSize; i++) {
        const div = document.createElement("div");
        div.style.backgroundColor = "#bde0fe";
        div.style.height = "50px";
        div.style.flex = `1 1 calc(${100 / gridSize}% - 10px)`; // Adjust to fit gridSize per row

        div.style.boxSizing = "border-box";
        div.classList.add("grid");
        container.appendChild(div);
    }

    // Add hover effect to grid items
    const gridItems = document.querySelectorAll(".grid");
    gridItems.forEach(item => {
        item.addEventListener("mouseover", function () {
            item.style.backgroundColor = "blue";
        });
    });
});
