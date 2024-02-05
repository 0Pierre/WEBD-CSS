//extra fetures
//const restartBtn
// I want to click on box and it should

// const boxes = document.getElementsByClassName('box');

// for (let i = 0; i < boxes.length; i++) {
//     boxes[i].addEventListener("click", (event) => {
//         //console.log(event);
//         console.log("box " + event.target.classlist[2] + " Was Clicked");
//         }
//     )
// }


// fetch the element with a class name of main-container and store it inside 
// of a variable called main-container
const mainContainer = document.querySelector(".main-container");

//initalized a new variable called playerTurn to keep track of whos turn it is
let playerTurn = "X"

//added a click event listener to our main-container element
mainContainer.addEventListener("click", (event) => {
    console.log("box " + event.target.classList[2] + " Was Clicked");
    //we are modifying the inner text property of the clicked element and changing
    // it to either an x or an o depending on whos turn it is
    if(playerTurn == "X")
    {
        event.target.innerText="X"
        //re-assigning the player turn to switch who goes next
        playerTurn = "O";
    }else if (playerTurn == "O")
    {
        event.target.innerText="O"
        //re-assigning the player turn to switch who goes next
        playerTurn = "X";
    }
    checkForWinner();
});

const squares = document.querySelectorAll(".box");

function clearBoard(){
    squares.forEach((square) => square.innerText = "");
}

function checkForWinner(){
    //in order to win you must get 3 in a row of either o's or x's
    console.log(squares);
    console.log.apply(squares[0].innerText)
    if(
        squares[0].innerText == "X" && 
        squares[1].innerText =="X" && 
        squares[2].innerText =="X")
    {
        alert("X wins!");
        clearBoard();
    }else if(
        squares[3].innerText == "X" && 
        squares[4].innerText =="X" && 
        squares[5].innerText =="X") 
    {
        alert("X wins!");
        clearBoard();
    }else if(
        squares[6].innerText == "X" && 
        squares[7].innerText =="X" && 
        squares[8].innerText =="X") 
    {
        alert("X wins!");
        clearBoard();
    }else if(
        squares[0].innerText == "X" && 
        squares[3].innerText =="X" && 
        squares[6].innerText =="X") 
    {
        alert("X wins!");
        clearBoard();
    }else if(
        squares[1].innerText == "X" && 
        squares[4].innerText =="X" && 
        squares[7].innerText =="X") 
    {
        alert("X wins!");
        clearBoard();
    }else if(
        squares[2].innerText == "X" && 
        squares[5].innerText =="X" && 
        squares[8].innerText =="X") 
    {
        alert("X wins!");
        clearBoard();
    }else if(
        squares[0].innerText == "X" && 
        squares[4].innerText =="X" && 
        squares[8].innerText =="X") 
    {
        alert("X wins!");
        clearBoard();
    }else if(
        squares[2].innerText == "X" && 
        squares[4].innerText =="X" && 
        squares[6].innerText =="X") 
    {
        alert("X wins!");
        clearBoard();
    }
}

