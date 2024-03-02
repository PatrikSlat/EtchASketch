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
    for(let i = 1; i <= sizePromt; i++){
        const boardRow = document.createElement("div");
        boardRow.style["height"] = `${divSize}px`;
        boardRow.style["width"] = `${divSize}px`;
        boardRow.style["border"] = "1px solid black";
        boardRow.setAttribute("class", "roww"); // Consider renaming the class to "row" if you're changing to a row-oriented approach
        boardRow.setAttribute("id", `roww${i}`); // Consider renaming the ID prefix to "row" for consistency
        board.appendChild(boardRow);
        for(let j = 1; j <= sizePromt; j++){

        }
    }
}
