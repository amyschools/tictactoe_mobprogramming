$(document).ready(function() {

  setUpBoard();

  $("#playAgain").on("click", function(){
    $("td").text("");
    setUpBoard();
    board=[0,0,0,0,0,0,0,0,0];
    counterOfSpacesTaken = 0;
    $("#result").text("");
  });

  function setUpBoard(){
    //when the user clicks on a td
    $("td").on("click",
      //run a function
      function() {
        if (counterOfSpacesTaken < 9){
          //whichever td is selected, fill in an x
          $(this).text("x").off("click");
          placeX($(this).attr("id"));
          if (xWin()) {
            $("#result").text("You win");
            counterOfSpacesTaken = 9;
          }
          if (counterOfSpacesTaken < 9){
            //selects an element in the HTML using its ID to place an o
            $("#" + placeO()).text("o").off("click");
            if (oWin()) {
              $("#result").text("You Lose");
              counterOfSpacesTaken = 9;
            }
          }
          if(counterOfSpacesTaken === 9 && xWin() === false && oWin() === false) {
            $("#result").text("cat's game");
          }
      }
    }); //end of on click
  }
}); // end of document ready
      //variable for game board in model format
var board = [0,0,0,
            0,0,0,
            0,0,0];
// declared a variable that records the spaces taken and it starts at zero
var counterOfSpacesTaken = 0;
//create a function that will put an x on the board
//purpose: put an x on the board
//signature: number
//example: placeX(0) -> board index[0] = 1
function placeX(index) {
  board[index] = 1;
  counterOfSpacesTaken += 1;
}
// purpose: add an o after user clicks on the board
// signature: takes nothing and returns index
// example: placeO() -> board index[8]= -1 and returns 8
function placeO(){
  var index = Math.floor(Math.random() * (8 - 0) + 1);
  while (board[index] != 0){
    index = Math.floor(Math.random() * (8 - 0) + 1);
  }
  board[index] = -1;
  counterOfSpacesTaken += 1;
  return index;
}

// Purpose: add up three elements of the board
// Signature: (number, number, number) -> boolean
// Example: sum(0,1,2,3) -> true
function sum(a, b, c, d) {
  return board[a] + board[b] + board[c] === d;
}

// purpose: determine if x has won
// signature: nothing --> boolean
// example: xWin() --> true if there is a line of 1's on the board

function xWin(){
  return sum(0,1,2,3) || sum(3,4,5,3) || sum(6,7,8,3) || sum(0,3,6,3) || sum(1,4,7,3) || sum(2,5,8,3) || sum(2,4,6,3) || sum(0,4,8,3);
}
//purpose: determine if o has won
// signature: nothing --> boolean
// example: oWin() --> true if there is a line of -1's on the board
function oWin(){
  return sum(0,1,2,-3) || sum(3,4,5,-3) || sum(6,7,8,-3) || sum(0,3,6,-3) || sum(1,4,7,-3) || sum(2,5,8,-3) || sum(2,4,6,-3) || sum(0,4,8,-3);
}
