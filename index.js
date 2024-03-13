// inserting the images

function insertImages() {
  document.querySelectorAll(".box").forEach((image) => {
    if (image.innerText.length !== 0) {
      if (image.innerText == "Wpawn" || image.innerText == "Bpawn") {
        image.innerHTML = `${image.innerText} <img class ='all-img all pawn' 
               src="images/${image.innerText}.png" alt="">`;
        image.style.cursor = "pointer";
      } else {
        image.innerHTML = `${image.innerText} <img class ='all-img' 
               src="images/${image.innerText}.png" alt="">`;
        image.style.cursor = "pointer";
      }
    }
  });
}

insertImages();

// Coloring the tiles on the

function coloring() {
  const color = document.querySelectorAll(".box");
  color.forEach((color) => {
    getId = color.id;
    arr = Array.from(getId);
    arr.shift();
    aside = eval(arr.pop());
    aup = eval(arr.shift());
    a = aside + aup;

    if (a % 2 !== 0) {
      color.style.backgroundColor = "rgb(232 235 239)";
    }
    if (a % 2 == 0) {
      color.style.backgroundColor = "rgb(125 135 150)";
    }
  });
}

coloring();

//function to not remove the same team element
function reddish() {
    document.querySelectorAll('.box').forEach(i1 => {
        if (i1.style.backgroundColor == 'blue') {

            document.querySelectorAll('.box').forEach(i2 => {

                if (i2.style.backgroundColor == 'greenyellow' && i2.innerText.length !== 0) {


                    greenyellowText = i2.innerText

                    blueText = i1.innerText

                    blueColor = ((Array.from(blueText)).shift()).toString()
                    greenyellowColor = ((Array.from(greenyellowText)).shift()).toString()

                    getId = i2.id
                    arr = Array.from(getId)
                    arr.shift()
                    aside = eval(arr.pop())
                    aup = eval(arr.shift())
                    a = aside + aup

                    if (a % 2 == 0 && blueColor == greenyellowColor) {
                        i2.style.backgroundColor = 'rgb(232 235 239)'
                    }
                    if (a % 2 !== 0 && blueColor == greenyellowColor) {
                        i2.style.backgroundColor = 'rgb(125 135 150)'
                    }

                }
            })
        }
    })
}

//reset button
document.getElementById("reset-btn").addEventListener("click", function () {
    location.reload();
});




tog = 1;

document.querySelectorAll(".box").forEach((item) => {
  item.addEventListener("click", function () {
    if (
      item.style.backgroundColor == "greenyellow" &&
      item.innerText.length == 0
    ) {
      tog = tog + 1;
    } else if (
      item.style.backgroundColor == "greenyellow" &&
      item.innerText.length !== 0
    ) {
      document.querySelectorAll(".box").forEach((i) => {
        if (i.style.backgroundColor == "blue") {
          blueId = i.id;
          blueText = i.innerText;

          document.getElementById(blueId).innerText = "";
          item.innerText = blueText;
          coloring();
          insertImages();
          tog = tog + 1;
        }
      });
    }

    getId = item.id;
    arr = Array.from(getId);
    arr.shift();
    aside = eval(arr.pop());
    arr.push("0");
    aup = eval(arr.join(""));
    a = aside + aup;

    //function to display the available paths for all pieces

    function whosTurn(toggle) {
        // var element = document.getElementById('tog');
        // PAWN

        if (item.innerText == `${toggle}pawn`) {
            item.style.backgroundColor = 'blue';

            if (tog % 2 !== 0 && aup < 800) {
                // First move for white pawns
                if (document.getElementById(`b${a + 100}`).innerText.length == 0 ) {
                    document.getElementById(`b${a + 100}`).style.backgroundColor = 'greenyellow';
                    if (document.getElementById(`b${a + 200}`).innerText.length == 0 && aup < 300) {
                        document.getElementById(`b${a + 200}`).style.backgroundColor = 'greenyellow';
                    }
                }
                if (aside < 8 && document.getElementById(`b${a + 100 + 1}`).innerText.length !== 0) {
                    document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'greenyellow';
                    
                }
                if (aside > 1 && document.getElementById(`b${a + 100 - 1}`).innerText.length !== 0) {
                    document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'greenyellow';
                    
                }
            }

            if (tog % 2 == 0 && aup > 100) {
                // First move for black pawns
                if (document.getElementById(`b${a - 100}`).innerText.length == 0) {
                    document.getElementById(`b${a - 100}`).style.backgroundColor = 'greenyellow';
                    if (document.getElementById(`b${a - 200}`).innerText.length == 0 && aup > 600) {
                        document.getElementById(`b${a - 200}`).style.backgroundColor = 'greenyellow';
                    }
                }
                if (aside < 8 && document.getElementById(`b${a - 100 + 1}`).innerText.length !== 0) {
                    document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'greenyellow';
                }
                if (aside > 1 && document.getElementById(`b${a - 100 - 1}`).innerText.length !== 0) {
                    document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'greenyellow';
                }
            }
            // Second move for pawns
            if (tog % 2 !== 0 && aup >= 800) {
                if (document.getElementById(`b${a + 100}`).innerText.length == 0) {
                    document.getElementById(`b${a + 100}`).style.backgroundColor = 'greenyellow';
                }
                if (aside < 8 && document.getElementById(`b${a + 100 + 1}`).innerText.length !== 0) {
                    document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'greenyellow';
                }
                if (aside > 1 && document.getElementById(`b${a + 100 - 1}`).innerText.length !== 0) {
                    document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'greenyellow';
                }
            }
            if (tog % 2 == 0 && aup <= 100) {
                if (document.getElementById(`b${a - 100}`).innerText.length == 0) {
                    document.getElementById(`b${a - 100}`).style.backgroundColor = 'greenyellow';
                }
                if (aside < 8 && document.getElementById(`b${a - 100 + 1}`).innerText.length !== 0) {
                    document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'greenyellow';
                }
                if (aside > 1 && document.getElementById(`b${a - 100 - 1}`).innerText.length !== 0) {
                    document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'greenyellow';
                }
            }
        }

        
        // KING

        if (item.innerText == `${toggle}king`) {


            if (aside < 8) {
                document.getElementById(`b${a + 1}`).style.backgroundColor = 'greenyellow'

            }
            if (aside > 1) {

                document.getElementById(`b${a - 1}`).style.backgroundColor = 'greenyellow'
            }
            if (aup < 800) {

                document.getElementById(`b${a + 100}`).style.backgroundColor = 'greenyellow'
            }
            if (aup > 100) {

                document.getElementById(`b${a - 100}`).style.backgroundColor = 'greenyellow'
            }

            if (aup > 100 && aside < 8) {

                document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'greenyellow'
            }
            if (aup > 100 && aside > 1) {

                document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'greenyellow'
            }
            if (aup < 800 && aside < 8) {

                document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'greenyellow'
            }
            if (aup < 800 && aside > 1) {

                document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'greenyellow'
            }

            item.style.backgroundColor = 'blue'

        }

        // KNIGHT

        if (item.innerText == `${toggle}knight`) {


            if (aside < 7 && aup < 800) {
                document.getElementById(`b${a + 100 + 2}`).style.backgroundColor = 'greenyellow'
            }
            if (aside < 7 && aup > 200) {
                document.getElementById(`b${a - 100 + 2}`).style.backgroundColor = 'greenyellow'
            }
            if (aside < 8 && aup < 700) {
                document.getElementById(`b${a + 200 + 1}`).style.backgroundColor = 'greenyellow'
            }
            if (aside > 1 && aup < 700) {
                document.getElementById(`b${a + 200 - 1}`).style.backgroundColor = 'greenyellow'
            }
            if (aside > 2 && aup < 800) {
                document.getElementById(`b${a - 2 + 100}`).style.backgroundColor = 'greenyellow'
            }
            if (aside > 2 && aup > 100) {
                document.getElementById(`b${a - 2 - 100}`).style.backgroundColor = 'greenyellow'
            }
            if (aside < 8 && aup > 200) {
                document.getElementById(`b${a - 200 + 1}`).style.backgroundColor = 'greenyellow'
            }
            if (aside > 1 && aup > 200) {
                document.getElementById(`b${a - 200 - 1}`).style.backgroundColor = 'greenyellow'
            }

            item.style.backgroundColor = 'blue'

        }

        // QUEEN

        if (item.innerText == `${toggle}queen`) {


            for (let i = 1; i < 9; i++) {

                if ((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText == 0) {
                    document.getElementById(`b${a + i * 100}`).style.backgroundColor = 'greenyellow'
                }
                else if ((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText !== 0) {
                    document.getElementById(`b${a + i * 100}`).style.backgroundColor = 'greenyellow'
                    break
                }
            }

            for (let i = 1; i < 9; i++) {

                if ((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText == 0) {
                    document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'greenyellow'
                }
                else if ((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText !== 0) {
                    document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'greenyellow'
                    break
                }
            }

            for (let i = 1; i < 9; i++) {

                if ((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText == 0) {
                    document.getElementById(`b${a + i}`).style.backgroundColor = 'greenyellow'
                }
                else if ((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText !== 0) {
                    document.getElementById(`b${a + i}`).style.backgroundColor = 'greenyellow'
                    break
                }
            }

            for (let i = 1; i < 9; i++) {

                if ((a - i) > (aup) && document.getElementById(`b${a - i}`).innerText == 0) {
                    document.getElementById(`b${a - i}`).style.backgroundColor = 'greenyellow'
                }
                else if ((a - i) > (aup) && document.getElementById(`b${a - i}`).innerText !== 0) {
                    document.getElementById(`b${a - i}`).style.backgroundColor = 'greenyellow'
                    break
                }
            }



            for (let i = 1; i < 9; i++) {
                if (i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText.length == 0) {
                    document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'greenyellow'
                }
                else if (i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText.length !== 0) {
                    document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'greenyellow'
                    break
                }
            }


            for (let i = 1; i < 9; i++) {
                if (i < aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length == 0) {
                    document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'greenyellow'
                }
                else if (i < aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length !== 0) {
                    document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'greenyellow'
                    break
                }
            }


            for (let i = 1; i < 9; i++) {
                if (i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length == 0) {
                    document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'greenyellow'
                }
                else if (i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length !== 0) {
                    document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'greenyellow'
                    break
                }

            }


            for (let i = 1; i < 9; i++) {
                if (i < aup / 100 && i < aside && document.getElementById(`b${a - i * 100 - i}`).innerText.length == 0) {
                    document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'greenyellow'
                }
                else if (i < aup / 100 && i < aside && document.getElementById(`b${a - i * 100 - i}`).innerText.length !== 0) {
                    document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'greenyellow'
                    break
                }
            }



            item.style.backgroundColor = 'blue'

        }

        // BISHOP

        if (item.innerText == `${toggle}bishop`) {


            for (let i = 1; i < 9; i++) {
                if (i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText.length == 0) {
                    document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'greenyellow'
                }
                else if (i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText.length !== 0) {
                    document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'greenyellow'
                    break
                }
            }


            for (let i = 1; i < 9; i++) {
                if (i < aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length == 0) {
                    document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'greenyellow'
                }
                else if (i < aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length !== 0) {
                    document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'greenyellow'
                    break
                }
            }


            for (let i = 1; i < 9; i++) {
                if (i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length == 0) {
                    document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'greenyellow'
                }
                else if (i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length !== 0) {
                    document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'greenyellow'
                    break
                }

            }


            for (let i = 1; i < 9; i++) {
                if (i < aup / 100 && i < aside && document.getElementById(`b${a - i * 100 - i}`).innerText.length == 0) {
                    document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'greenyellow'
                }
                else if (i < aup / 100 && i < aside && document.getElementById(`b${a - i * 100 - i}`).innerText.length !== 0) {
                    document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'greenyellow'
                    break
                }
            }



            item.style.backgroundColor = 'blue'

        }

        // ROOK

        if (item.innerText == `${toggle}rook`) {

            for (let i = 1; i < 9; i++) {

                if ((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText == 0) {
                    document.getElementById(`b${a + i * 100}`).style.backgroundColor = 'greenyellow'
                }
                else if ((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText !== 0) {
                    document.getElementById(`b${a + i * 100}`).style.backgroundColor = 'greenyellow'
                    break
                }
            }

            for (let i = 1; i < 9; i++) {

                if ((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText == 0) {
                    document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'greenyellow'
                }
                else if ((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText !== 0) {
                    document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'greenyellow'
                    break
                }
            }

            for (let i = 1; i < 9; i++) {

                if ((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText == 0) {
                    document.getElementById(`b${a + i}`).style.backgroundColor = 'greenyellow'
                }
                else if ((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText !== 0) {
                    document.getElementById(`b${a + i}`).style.backgroundColor = 'greenyellow'
                    break
                }
            }

            for (let i = 1; i < 9; i++) {

                if ((a - i) > (aup) && document.getElementById(`b${a - i}`).innerText == 0) {
                    document.getElementById(`b${a - i}`).style.backgroundColor = 'greenyellow'
                }
                else if ((a - i) > (aup) && document.getElementById(`b${a - i}`).innerText !== 0) {
                    document.getElementById(`b${a - i}`).style.backgroundColor = 'greenyellow'
                    break
                }
            }

            item.style.backgroundColor = 'blue'
        }

    }

    // whosTurn()

      // Toggling the turn

    if (tog % 2 !== 0) {
        // Update text and add class for styling
        document.getElementById('tog').innerText = "White's Turn";
        document.getElementById('tog').classList.remove('black-turn');
        document.getElementById('tog').classList.add('white-turn');
        whosTurn('W');
    } else {
        // Update text and add class for styling
        document.getElementById('tog').innerText = "Black's Turn";
        document.getElementById('tog').classList.remove('white-turn');
        document.getElementById('tog').classList.add('black-turn');
        whosTurn('B');
    }
    

    reddish()
  });
});

// Moving the element
document.querySelectorAll(".box").forEach((hathiTest) => {
  hathiTest.addEventListener("click", function () {
    if (hathiTest.style.backgroundColor == "blue") {
      blueId = hathiTest.id;
      blueText = hathiTest.innerText;

      document.querySelectorAll(".box").forEach((hathiTest2) => {
        hathiTest2.addEventListener("click", function () {
          if (
            hathiTest2.style.backgroundColor == "greenyellow" &&
            hathiTest2.innerText.length == 0
          ) {
            document.getElementById(blueId).innerText = "";
            hathiTest2.innerText = blueText;
            coloring();
            insertImages();
          }
        });
      });
    }
  });
});


// Prvents from selecting multiple elements
z = 0
document.querySelectorAll('.box').forEach(ee => {
  ee.addEventListener('click', function () {
      z = z + 1
      if (z % 2 == 0 && ee.style.backgroundColor !== 'greenyellow') {
          coloring()
      }
  })
})




 // To be implemented :
 //numbers and letters for outer lines and rows
 // promotion when reach end with pawn
 // log every move you take
// Check for checkmate after each move
// Ability to castle




// function checkForCheckmate() {
//     if (isCheckmate('white')) {
//         alert("Checkmate! Black wins!");
//         // You can add more functionality here such as ending the game or resetting the board
//     } else if (isCheckmate('black')) {
//         alert("Checkmate! White wins!");
//         // You can add more functionality here such as ending the game or resetting the board
//     }
// }

// // Example usage of checkForCheckmate after each move
// document.querySelectorAll(".box").forEach((hathiTest) => {
//     hathiTest.addEventListener("click", function () {
//         // Existing move logic...

//         // After making a move, check for checkmate
//         checkForCheckmate();
//     });
// });


// Function to check if the current game state is checkmate
// function isCheckmate(playerColor) {
//     // Check if the king of the specified playerColor is in check
//     if (isKingInCheck(playerColor)) {
//         // If the king is in check, check if there are any legal moves to escape check
//         const legalMoves = findLegalMovesToEscapeCheck(playerColor);
        
//         // If there are no legal moves to escape check, it's checkmate
//         if (legalMoves.length === 0) {
//             return true;
//         }
//     }
//     return false;
// }
