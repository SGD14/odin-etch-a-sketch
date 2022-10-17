let container = document.querySelector("#container");
let gridColorMap = new Map();

const generateGrid = (size) => {
    container.innerHTML = "";

    for(let row = 0; row < size; row++){
        let rowContainer = document.createElement("div");
        rowContainer.classList.add("row");
    
        for(let column = 0; column < size; column++){
            let columnContainer = document.createElement("div");
            columnContainer.classList.add("column");

            columnContainer.addEventListener('mouseover', () => {
                let currentColor = gridColorMap.get(columnContainer);

                if(!currentColor){
                    let hue = Math.round(Math.random() * 360);
                    currentColor = "hsl(" + hue + ", 100%, 50%)";
                } else {
                    let currentHue = currentColor.split(",").shift().replace("hsl(", "");
                    let currentLightness = currentColor.split(",").pop().replace("%)", "").trim();
                    currentColor = "hsl(" + currentHue + ", 100%, " + (Math.max(0, currentLightness - 5)) + "%)";
                }

                columnContainer.style.backgroundColor = currentColor;
                gridColorMap.set(columnContainer, currentColor);
            });
    
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
    {
        gridColorMap = new Map();
        generateGrid(size);
    }
})