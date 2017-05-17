var rows = 9;
var cols = 7;
var divs = [];
var div;
var pos2 = [1, 2];
var pos3 = [1, 2, 3];
var pos4 = [1, 2, 3, 4];

var posRow = Math.round((Math.random() * 9));
var posCol = Math.round((Math.random() * 6));

function setup() {
  createCanvas();

  for (var i = 0; i < rows; i++) {
    divs[i] = [];
    for (var j = 0; j < cols; j++) {
      divs[i][j] = div = document.createElement("div");
      div.className = "square2";
      document.getElementsByTagName("body")[0].appendChild(div);
    }
  }
}
function draw() {
  var nextPos2 = pos2[Math.floor(Math.random() * pos2.length)];
  var nextPos3 = pos3[Math.floor(Math.random() * pos3.length)];
  var nextPos4 = pos4[Math.floor(Math.random() * pos4.length)];

  var posL1, posL2, posL3;

  //letter 1
  var l1 = document.createElement("p");
  l1.className = "letter2";
  l1.innerHTML = "a";
  posL1 = divs[posRow][posCol];
  posL1.appendChild(l1);

  //letter 2
  var l2 = document.createElement("p");
  l2.className = "letter2";
  l2.innerHTML = "n";

  //letter 3
  var l3 = document.createElement("p");
  l3.className = "letter2";
  l3.innerHTML = "d";

  if (posRow == 0) { //if the 1st letter is on the 1st row
    if (nextPos3 == 1) {
      posL2 = divs[posRow][posCol - 1]; //will write the 2nd letter at the left of the 1st letter
      if (nextPos2 == 1) {
        posL3 = divs[posRow][posCol - 2]; //will write the 3rd letter at the left of the 2nd letter
      } else {
        posL3 = divs[posRow + 1][posRow - 1]; //will write the 3rd letter at the bottom of the 2nd letter
      }
    } else if (nextPos3 == 2) {
      posL2 = divs[posRow + 1][posRow]; //will write the 2nd letter at the bottom of the 1st letter
      if (nextPos3 == 1) {
        posL3 = divs[posRow + 1][posRow - 1]; //will write the 3rd letter at the left of the 2nd letter
      } else if (nextPos3 == 2) {
        posL3 = divs[posRow + 2][posRow]; //will write the 3rd letter at the bottom of the 2nd letter
      } else {
        posL3 = divs[posRow + 1][posRow + 1]; //will write the 3rd letter at the right of the 2nd letter
      }
    } else {
      posL2 = divs[posRow][posRow + 1]; //will write the 2nd at the right of the 1st letter
      if (nextPos2 == 1) {
        posL3 = divs[posRow][posRow + 2]; //will write the 3rd letter at the right of the 2nd letter
      } else {
        posL3 = divs[posRow + 1][posRow + 1]; //will write the 3rd letter at the bottom of the 2nd letter
      }
    }
  } else if (posRow == 9) { //if the 1st letter is on the last row
    if (nextPos3 == 1) {
      posL2 = divs[posRow][posRow - 1]; //will write the 2nd letter at the left of the 1st letter
      if (nextPos2 == 1) {
        posL3 = divs[posRow][posRow - 2]; //will write the 3rd letter at the left of the 2nd letter
      } else {
        posL3 = divs[posRow - 1][posRow - 1]; //will write the 3rd letter at the top of the 2nd letter
      }
    } else if (nextPos3 == 2) {
      posL2 = divs[posRow - 1][posRow]; //will write the 2nd letter at the top of the 1st letter
      if (nextPos3 == 1) {
        posL3 = divs[posRow - 1][posRow - 1]; //will write the 3rd letter at the left of the 2nd letter
      } else if (nextPos3 == 2) {
        posL3 = divs[posRow - 2][posRow]; //will write the 3rd letter at the top of the 2nd letter
      } else {
        posL3 = divs[posRow - 1][posRow + 1]; //will write the 3rd letter at the right of the 2nd letter
      }
    } else {
      posL2 = divs[posRow][posRow + 1]; //will write the 2nd at the right of the 1st letter
      if (nextPos2 == 1) {
        posL3 = divs[posRow][posRow + 2]; //will write the 3rd letter at the right of the 2nd letter
      } else {
        posL3 = divs[posRow + 1][posRow + 1]; //will write the 3rd letter at the bottom of the 2nd letter
      }
    }
  } else if (posRow == 0) { //if the 1st letter is on the first column
    if (nextPos3 == 1) {
      posL2 = divs[posRow - 1][posRow]; //will write the 2nd letter at the top of the 1st letter
      if (nextPos2 == 1) {
        posL3 = divs[posRow - 2][posRow]; //will write the 3rd letter at the top of the 2nd letter
      } else {
        posL3 = divs[posRow - 1][posRow + 1]; //will write the 3rd letter at the right of the 2nd letter
      }
    } else if (nextPos3 == 2) {
      posL2 = divs[posRow][posRow + 1]; //will write the 2nd letter at the right of the 1st letter
      if (nextPos3 == 1) {
        posL3 = divs[posRow][posRow + 2]; //will write the 3rd letter at the right of the 2nd letter
      } else if (nextPos3 == 2) {
        posL3 = divs[posRow + 1][posRow + 1]; //will write the 3rd letter at the bottom of the 2nd letter
      } else {
        posL3 = divs[posRow - 1][posRow + 1]; //will write the 3rd letter at the top of the 2nd letter
      }
    } else {
      posL2 = divs[posRow + 1][posRow]; //will write the 2nd at the bottom of the 1st letter
      if (nextPos2 == 1) {
        posL3 = divs[posRow + 2][posRow]; //will write the 3rd letter at the bottom of the 2nd letter
      } else {
        posL3 = divs[posRow + 1][posRow + 1]; //will write the 3rd letter at the right of the 2nd letter
      }
    }
  } else if (posRow == 6) { //if the 1st letter is on the last column
    if (nextPos3 == 1) {
      posL2 = divs[posRow - 1][posRow]; //will write the 2nd letter at the top of the 1st letter
      if (nextPos2 == 1) {
        posL3 = divs[posRow - 2][posRow]; //will write the 3rd letter at the top of the 2nd letter
      } else {
        posL3 = divs[posRow - 1][posRow - 1]; //will write the 3rd letter at the left of the 2nd letter
      }
    } else if (nextPos3 == 2) {
      posL2 = divs[posRow][posRow - 1]; //will write the 2nd letter at the left of the 1st letter
      if (nextPos3 == 1) {
        posL3 = divs[posRow][posRow - 2]; //will write the 3rd letter at the left of the 2nd letter
      } else if (nextPos3 == 2) {
        posL3 = divs[posRow + 1][posRow - 1]; //will write the 3rd letter at the bottom of the 2nd letter
      } else {
        posL3 = divs[posRow - 1][posRow - 1]; //will write the 3rd letter at the top of the 2nd letter
      }
    } else {
      posL2 = divs[posRow + 1][posRow]; //will write the 2nd at the bottom of the 1st letter
      if (nextPos2 == 1) {
        posL3 = divs[posRow + 2][posRow]; //will write the 3rd letter at the bottom of the 2nd letter
      } else {
        posL3 = divs[posRow + 1][posRow - 1]; //will write the 3rd letter at the left of the 2nd letter
      }
    }
  } else { //if the letter is anywhere inside
    if (nextPos4 == 1) {
      posL2 = divs[posRow - 1][posRow]; //will write the 2nd letter at the top of the 1st letter
      if (nextPos3 == 1) {
        posL3 = divs[posRow - 2][posRow]; //will write the 3rd letter at the top of the 2nd letter
      } else if (nextPos3 == 2){
        posL3 = divs[posRow - 1][posRow + 1]; //will write the 3rd letter at the right of the 2nd letter
      } else {
        posL3 = divs[posRow - 1][posRow - 1]; //will write the 3rd letter at the left of the 2nd letter
      }
    } else if (nextPos4 == 2) {
      posL2 = divs[posRow][posRow + 1]; //will write the 2nd letter at the right of the 1st letter
      if (nextPos3 == 1) {
        posL3 = divs[posRow - 1][posRow + 1]; //will write the 3rd letter at the top of the 2nd letter
      } else if (nextPos3 == 2) {
        posL3 = divs[posRow][posRow + 2]; //will write the 3rd letter at the right of the 2nd letter
      } else {
        posL3 = divs[posRow + 1][posRow + 1]; //will write the 3rd letter at the bottom of the 2nd letter
      }
    } else if (nextPos4 == 3) {
      posL2 = divs[posRow + 1][posRow]; //will write the 2nd letter at the bottom of the 1st letter
      if (nextPos3 == 1) {
        posL3 = divs[posRow + 1][posRow - 1]; //will write the 3rd letter at the left of the 2nd letter
      } else if (nextPos3 == 2) {
        posL3 = divs[posRow + 2][posRow]; //will write the 3rd letter at the bottom of the 2nd letter
      } else {
        posL3 = divs[posRow + 1][posRow + 1]; //will write the 3rd letter at the right of the 2nd letter
      }
    } else {
      posL2 = divs[posRow][posRow - 1]; //will write the 2nd letter at the left of the 1st letter
      if (nextPos3 == 1) {
        posL3 = divs[posRow - 1][posRow - 1]; //will write the 3rd letter at the top of the 2nd letter
      } else if (nextPos3 == 2) {
        posL3 = divs[posRow][posRow - 2]; //will write the 3rd letter at the left of the 2nd letter
      } else {
        posL3 = divs[posRow + 1][posRow - 1]; //will write the 3rd letter at the bottom of the 2nd letter
      }
    }
  }
  posL2.appendChild(l2);
  posL3.appendChild(l3);

  noLoop();
}
