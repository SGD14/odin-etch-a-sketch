let container = document.querySelector("#container");

for(let row = 0; row < 16; row++){
    let rowContainer = document.createElement("div");
    rowContainer.classList.add("row");

    for(let column = 0; column < 16; column++){
        let columnContainer = document.createElement("div");
        columnContainer.classList.add("column");

        columnContainer.addEventListener('mouseover', () => columnContainer.style.backgroundColor = "Black");

        rowContainer.appendChild(columnContainer);
    }

    container.appendChild(rowContainer);
}