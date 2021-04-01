let gridSizeButton = document.getElementById("submit");
let popup = document.getElementById("popup");
let grid = document.getElementById("game-grid");

gridSizeButton.addEventListener('click', () => {
    let num = document.getElementById("grid-size-input").value;
    if(num > 1 && num <= 64) {
        makeGrid(num);
        popup.style.display = "none";
    } else alert("Thats illegal!");
});

function rgbRandom() {
    let rgbString = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    this.style.backgroundColor = rgbString;
};

function makeGrid(num) {
    let gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    grid.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    for(let i = 0; i < (num * num); i++) {
        let gridItemId = `gridItem${i}`;
        let clone = gridItem.cloneNode();
        clone.addEventListener("mouseover", rgbRandom);
        grid.appendChild(clone);
    };
};

(function() {
    let reset = document.getElementById("reset");

    reset.addEventListener('click', () => {
        removeChild(grid);
        popup.style.display = "flex";
    });
})();

function removeChild(grid){
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    };
};