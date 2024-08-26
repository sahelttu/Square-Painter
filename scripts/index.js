const grid = document.querySelector(".grid");
const column = document.querySelector(".column");
const create = document.querySelector(".createButton");
const reset = document.querySelector(".resetButton");
let number = 0;

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

function clearGrid(){
    column.replaceChildren();
}

create.addEventListener("click", () =>{
     
    number = window.prompt("Give me a number");
    if(number < 100){
        clearGrid();
        createGrid2(number, number);
    }else{
        console.log("bad input");
        return 0;
    }
})

reset.addEventListener("click", () =>{
    if(number < 100){
        clearGrid();
        createGrid2(number, number);
    }else{
        console.log("bad input");
        return 0;
    }
})