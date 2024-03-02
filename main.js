let buttonCreate = document.querySelector("#create");
let buttonReset = document.querySelector("#reset");

buttonCreate.addEventListener("click", () => {
    const sizePromt = parseInt(prompt("How large should the grid be (nxn): "));
    if(sizePromt < 1 || sizePromt > 100 || isNaN(sizePromt)){
        alert("The value must be numeric, > 1 & < 100 !");
    };
    console.log(sizePromt);
    const divSize = 500 / sizePromt;

    createBoard(divSize, sizePromt);
});


function createBoard(divSize, sizePromt){
    let board = document.querySelector(".board");
    board.innerHTML = '';
    for(let i = 1; i <= sizePromt; i++){
        const boardRow = document.createElement("div");
        boardRow.setAttribute("class", "roww"); 
        board.appendChild(boardRow);
        for(let j = 1; j <= sizePromt; j++){
            const boardColumn = document.createElement("div");
            boardColumn.style["height"] = `${divSize}px`;
            boardColumn.style["width"] = `${divSize}px`;
            boardColumn.style["border"] = "1px solid black";
            boardColumn.setAttribute("class", "column"); 
            boardRow.appendChild(boardColumn);
        }
    }
}

