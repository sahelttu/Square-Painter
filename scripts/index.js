const grid = document.querySelector(".grid");
const column = document.querySelector(".column");
const button = document.querySelector(".createButton");

function createRow(num2){
    const row = document.createElement("div");
    row.classList.add("row");
    column.appendChild(row);

    for (i = 0; i < num2; i++){
        const box = document.createElement("div");
        box.classList.add("square");
        box.addEventListener("mouseover", () => {
            box.style.background = "red";
        })
        row.appendChild(box); 
        console.log("new box");
    }


}

function createGrid2(num1, num2){
    for (var i = 0; i < num1; i++){
        createRow(num2);
        console.log("new row");
    }
}