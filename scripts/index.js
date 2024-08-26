const grid = document.querySelector(".grid");
const column = document.querySelector(".column");
const generate = document.querySelector(".generate");
const error =  document.querySelector(".error");

let number = 0;
submitOK = "true";

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
    if(num1 > 100){
        console.log("invalid num1");
        error.textContent = "ERROR: X/Y value cannot be higher than 100";
        return 0;
    }else if(num2 > 100){
        console.log("invalid num2");
        error.textContent = "ERROR: X/Y value cannot be higher than 100";
        return 0;
    }
    clearGrid();
    for (var i = 0; i < num1; i++){
        createRow(num2);
        console.log("new row");
    }
}

function clearGrid(){
    column.replaceChildren();
}

generate.addEventListener("click", () =>{
    var y = document.getElementById("y-value").value;
    var x = document.getElementById("x-value").value;
    error.textContent = "";
    createGrid2(y, x);
})