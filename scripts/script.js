let gridSizeButton = document.getElementById("submit");
let popup = document.getElementById("popup");


let grid = document.getElementById("game-grid");

gridSizeButton.addEventListener('click', () => {
    let num = document.getElementById("grid-size-input").value;
    makeGrid(num);
    popup.style.display = "none";

});

function makeGrid(num) {
    let gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    grid.style.gridTemplateColumns = `repeat(${num}, 1fr)`;

    for(let i = 0; i < (num * num); i++) {
        let gridItemId = `gridItem${i}`;
        let clone = gridItem.cloneNode();
        clone.setAttribute("onmouseover", "this.style.backgroundColor='black'");
        grid.appendChild(clone);
    };
};

let reset = document.getElementById("reset");

reset.addEventListener('click', () => {
    removeChild(grid);
    popup.style.display = "block";
});

function removeChild(grid){
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    };
};