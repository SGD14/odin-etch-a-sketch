let container = document.querySelector("#container");

const generateGrid = (size) => {
    container.innerHTML = "";

    for(let row = 0; row < size; row++){
        let rowContainer = document.createElement("div");
        rowContainer.classList.add("row");
    
        for(let column = 0; column < size; column++){
            let columnContainer = document.createElement("div");
            columnContainer.classList.add("column");
    
            columnContainer.addEventListener('mouseover', () => columnContainer.classList.add("colored"));
    
            rowContainer.appendChild(columnContainer);
        }
    
        container.appendChild(rowContainer);
    }
}

generateGrid(16);

let newGridButton = document.querySelector("#new-grid-button");
newGridButton.addEventListener('click', () => {
    let size = prompt("Select size (max 100)");

    if(size <= 100)
        generateGrid(size);
})