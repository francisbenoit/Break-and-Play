var p5_1 = new p5(function(sketch) {
  var rows = 9;
  var cols = 7;
  var divs = [];
  var div;
  var pos2 = [1, 2];
  var pos3 = [1, 2, 3];
  var pos4 = [1, 2, 3, 4];

  var posRow = Math.round((Math.random() * 9));
  var posCol = Math.round((Math.random() * 6));

  sketch.setup = function() {
    var cnv = sketch.createCanvas();
    cnv.class("break");

    for (var i = 0; i < rows; i++) {
      divs[i] = [];
      for (var j = 0; j < cols; j++) {
        divs[i][j] = div = document.createElement("div");
        div.className = "square1";
        document.getElementById("break").appendChild(div);
      }
    }
  };
  sketch.draw = function() {
    var nextPos2 = pos2[Math.floor(Math.random() * pos2.length)];
    var nextPos3 = pos3[Math.floor(Math.random() * pos3.length)];
    var nextPos4 = pos4[Math.floor(Math.random() * pos4.length)];

    var posL1, posL2, posL3, posL4;

    //word1 letter1
    var l1 = document.createElement("p");
    l1.className = "letter1";
    l1.innerHTML = "B";
    var posL1 = divs[posRow][posCol];
    posL1.appendChild(l1);

    //word1 letter2
    var l2 = document.createElement("p");
    l2.className = "letter1";
    l2.innerHTML = "r";

    //word1 letter3
    var l3 = document.createElement("p");
    l3.className = "letter1";
    l3.innerHTML = "e";

    //word1 letter4
    var l4 = document.createElement("p");
    l4.className = "letter1";
    l4.innerHTML = "a";

    //word1 letter5
    var l5 = document.createElement("p");
    l5.className = "letter1";
    l5.innerHTML = "k";

    if (posRow == 9) { //if the first letter is on last row
      if (nextPos3 == 1) {
        posL2 = divs[posRow][posCol - 1]; //will write the 2nd letter at the left
        if (nextPos2 == 1) {
          posL3 = divs[posRow - 1][posCol - 1]; //will write the 3rd letter at the top of the 2nd letter
          posL4 = divs[posRow - 2][posCol - 1]; //will write the 4th letter at the top of the 3rd letter
          if (nextPos2 == 1) {
            posL5 = divs[posRow - 3][posCol -1]; //will write the 5th letter at the top of the 4th letter
          } else {
            posL5 = divs[posRow - 2][posCol]; //will write the 5th letter at the right of the 4th letter
          }
        } else {
          posL3 = divs[posRow][posCol - 2]; //will write the 3rd letter at the left of 2nd letter
          posL4 = divs[posRow - 1][posCol]; //will write the 4th letter at the top of the 1st letter
          posL5 = divs[posRow - 1][posCol -1]; //will write the 5th letter at the leter of the 4th letter
        }
      } else if (nextPos3 == 2) {
        posL2 = divs[posRow - 1][posCol]; //will write the 2nd letter at the top
        posL3 = divs[posRow - 2][posCol]; //will write the 3rd letter at the top of the 2nd letter
        if (nextPos2 == 1) {
          posL4 = divs[posRow][posCol - 1]; //will write the 4th letter at the left of the 1st letter
          posL5 = divs[posRow - 1][posCol - 1]; //will write the 5th letter at the top of the 4th letter
        } else {
          posL4 = divs[posRow][posCol + 1]; //will write the 4th letter at the right of the 1st letter
          posL5 = divs[posRow - 1][posCol + 1]; //will write the 5th letter at the top of the 4th letter
        }
      } else {
        posL2 = divs[posRow][posCol + 1]; //will write the 2nd letter at the right
        if (nextPos2 == 1) {
          posL3 = divs[posRow][posCol + 2]; //will write the 3rd letter at the right of the 2nd letter
          posL4 = divs[posRow][posCol + 3]; //will write the 4th letter at the right of the 3rd letter
          posL5 = divs[posRow - 1][posCol + 3]; //will write the 5th letter at the top of the 4th letter
        } else {
          posL3 = divs[posRow - 1][posCol + 1]; //will write the 3rd letter at the top of the 2nd letter
          if (nextPos2 == 1) {
            posL4 = divs[posRow][posCol + 1]; //will write the 4th letter at the right of the 1st letter
            posL5 = divs[posRow - 1][posCol + 1]; //will write the 5th letter at the top of the 4th letter
          } else {
            posL4 = divs[posRow][posCol - 1]; //will write the 4th letter at the left of the 1st letter
            posL5 = divs[posRow - 1][posCol - 1]; //will write the 5th letter at the top of the 4th letter
          }
        }
      }
    } else if (posRow == 0) { //if the first letter is on the first row
      if (nextPos3 == 1) {
        posL2 = divs[posRow][posCol - 1]; //will write the 2nd letter at the left
        if (nextPos2 == 1) {
          posL3 = divs[posRow + 1][posCol - 1]; //will write the 3rd letter at the bottom of the 2nd letter
          posL4 = divs[posRow + 2][posCol - 1]; //will write the 4th letter at the bottom of the 3rd letter
          if (nextPos2 == 1) {
            posL5 = divs[posRow + 2][posCol]; //will write the 5th letter at the right of the 4th letter
          } else {
            posL5 = divs[posRow + 3][posCol - 1]; //will write the 5th letter at the bottom of the 4th letter
          }
        } else {
          posL3 = divs[posRow][posCol - 2]; //will write the 3rd letter at the left of the 2nd letter
          posL4 = divs[posRow + 1][posCol]; //will write the 4th letter at the bottom of the 1st letter
          if (nextPos2 == 1) {
            posL5 = divs[posRow + 1][posCol - 1]; //will write the 5th letter at the left of the 4th letter
          } else {
            posL5 = divs[posRow + 2][posCol]; //will write the 5th letter at the bottom of the 4th letter
          }
        }
      } else if (nextPos == 2) {
        posL2 = divs[posRow + 1][posCol]; //will write the 2nd letter at the bottom
        posL3 = divs[posRow + 2][posCol]; //will write the 3rd letter at the bottom of the 2nd letter
        if (nextPos2 == 1) {
          posL4 = divs[posRow][posCol - 1]; //will write the 4th letter at the left of the 1st letter
          posL5 = divs[posRow + 1][posCol - 1]; //will write the 5th letter at the bottom of the 4th letter
        } else {
          posL4 = divs[posRow][posCol + 1]; //will write the 4th letter at the right of the 1st letter
          posL5 = divs[posRow + 1][posCol + 1]; //will write the 5th letter at the bottom of the 4th letter
        }
      } else {
        posL2 = divs[posRow][posCol + 1]; //will write the 2nd letter at the right
        if (nextPos2 == 1) {
          posL3 = divs[posRow][posCol + 2]; //will write the 3rd letter at the right of the 2nd letter
          posL4 = divs[posRow + 1][posCol]; //will write the 4th letter at the bottom of the 1st letter
          if (nextPos2 == 1) {
            posL5 = divs[posRow + 1][posCol + 1]; //will write the 5th letter at the right of the 4th letter
          } else {
            posL5 = divs[posRow + 2][posCol]; //will write the 5th letter at the bottom of the 4th letter
          }
        } else {
          posL3 = divs[posRow + 1][posCol + 1]; //will write the 3rd letter at the bottom of the 2nd letter
          if (nextPos2 == 1) {
            posL4 = divs[posRow][posCol - 1]; //will write the 4th letter at the left of the 1st letter
            posL5 = divs[posRow + 1][posCol - 1]; //will write the 5th letter at the bottom of the 4th letter
          } else {
            posL4 = divs[posRow][posCol + 1]; //will write the 4th letter at the right of the 1st letter
            posL5 = divs[posRow + 1][posCol + 1]; //will write the 5th letter at the right of the 4th letter
          }
        }
      }
    } else if (posCol == 1) { //if the first letter is on the first column
      if (nextPos3 == 1) {
        posL2 = divs[posRow - 1][posCol]; //will write the 2nd letter at the top
        if (nextPos2 == 1) {
          posL3 = divs[posRow - 2][posCol]; //will write the 3rd letter at the top of the 2nd letter
          if (nextPos2 == 1) {
            posL4 = divs[posRow][posCol + 1]; //will write the 4th letter at the right of the 1st letter
            posL5 = divs[posRow - 1][posCol + 1]; //will write the 5th letter at the top of the 4th letter
          } else {
            posL4 = divs[posRow - 1][posCol + 1]; //will write the 4th letter at the right of the 2nd letter
            posL5 = divs[posRow - 2][posCol + 1]; //will write the 5th letter at the top of the 4th letter
          }
        } else {
          posL3 = divs[posRow - 1][posCol + 1]; //will write the 3rd letter at the right of the 2nd letter
          posL4 = divs[posRow - 1][posCol + 2]; //will write the 4th letter at the right of the 3rd letter
          if (nextPos2 == 1) {
            posL5 = divs[posRow - 1][posCol + 3]; //will write the 5th letter at the right of the 4th letter
          } else {
            posL5 = divs[posRow][posCol + 2]; //will write the 5th letter at the bottom of the 4th letter
          }
        }
      } else if (nextPos3 == 2) {
        posL2 = divs[posRow][posCol + 1]; //will write the 2nd letter at the right
        posL3 = divs[posRow][posCol + 2]; //will write the 3rd letter at the right of the 2nd letter
        if (nextPos2 == 1) {
          posL4 = divs[posRow - 1][posCol]; //will write the 4th letter at the top of the 1st letter
          posL5 = divs[posRow - 1][posCol + 1]; //willwrite the 5th letter at the right of the 4th letter
        } else {
          posL4 = divs[posRow + 1][posCol]; //will write the 4th letter at the bottom of the 1st letter
          posL5 = divs[posRow + 1][posCol + 1]; //will write the 5th letter at the right of the 4th letter
        }
      } else {
        posL2 = divs[posRow + 1][posCol]; //will write the 2nd letter at the bottom
        posL3 = divs[posRow + 2][posCol]; //will write the 3rd letter at the bottom of the 2nd letter
        if (nextPos2 == 1) {
          posL4 = divs[posRow + 1][posCol + 1]; //will write the 4th letter at the right of the 2nd letter
          posL5 = divs[posRow + 1][posCol + 2]; //will write the 5th letter at the bottom of the 4th letter
        } else {
          posL4 = divs[posRow + 2][posCol + 1]; //will write the 4th letter at the right of the 3rd letter
          posL5 = divs[posRow + 2][posCol + 2]; //will write the 5th letter at the bottom of the 4th letter
        }
      }
    } else if (posCol == 6) { //if the first letter is on the last column
      if (nextPos3 == 1) {
        posL2 = divs[posRow - 1][posCol]; //will write the 2nd letter at the top
        if (nextPos2 == 1) {
          posL3 = divs[posRow - 2][posCol]; //will write the 3rd letter at the top of the 2nd letter
          posL4 = divs[posRow][posCol - 1]; //will write the 4th letter at the left of the 1st letter
          if (nextPos2 == 1) {
            posL5 = divs[posRow][posCol - 2]; //will write the 5 letter at the left of the 4th letter
          } else {
            posL5 = divs[posRow - 1][posCol - 1]; //will write the 5th letter at the top of the 4th letter
          }
        } else {
          posL3 = divs[posRow - 1][posCol - 1]; //will write the 3rd letter at the left of the 2nd letter
          posL4 = divs[posRow - 1][posCol - 2]; //will write the 4th letter at the left of the 3rd letter
          if (nextPos2 == 1) {
            posL5 = divs[posRow - 1][posCol - 3]; //will write the 5th letter at the left of the 4th letter
          } else {
            posL5 = divs[posRow][posCol - 2]; //will write the 5th letter at the bottom of the 4th letter
          }
        }
      } else if (nextPos3 == 2) {
        posL2 = divs[posRow][posCol - 1]; //will write the 2nd letter at the left
        posL3 = divs[posRow][posCol - 2]; //will write the 3rd letter at the left of the 2nd letter
        if (nextPos2 == 1) {
          posL4 = divs[posRow - 1][posCol]; //will write the 4th letter at the top of the 1st letter
          posL5 = divs[posRow - 1][posCol - 1]; //will write the 5th letter at the left of the 4th letter
        } else {
          posL4 = divs[posRow + 1][posCol]; //will write the 4th letter at the bottom of the 1st letter
          posL5 = divs[posRow + 1][posCol - 1]; //will write the 5th letter at the left of the 4th letter
        }
      } else {
        posL2 = divs[posRow + 1][posCol]; //will write the 2nd letter at the bottom
        if (nextPos2 == 1) {
          posL3 = divs[posRow + 2][posCol]; //will write the 3rd letter at the bottom of the 2nd letter
          posL4 = divs[posRow][posCol - 1]; //will write the 4th letter at the left of the 1st letter
          posL5 =divs[posRow + 1][posCol - 1]; //will write the 5th letter at the bottom of the 4th letter
        } else {
          posL3 = divs[posRow + 1][posCol - 1]; //will write the 3rd letter at the left of the 2nd letter
          posL4 = divs[posRow + 1][posCol - 2]; //will write the 4th letter at the left of the 3rd letter
          if (nextPos2 == 1) {
            posL5 = divs[posRow][posCol - 2]; //will write the 5th letter at the top of the 4th letter
          } else {
            posL5 = divs[posRow + 1][posCol - 3]; //will write the 5th letter at the left of the 4th letter
          }
        }
      }
    } else { //will write the the first letter anywhere inside
      if (nextPos4 == 1) {
        posL2 = divs[posRow - 1][posCol]; //will write the 2nd letter at the top
        posL3 = divs[posRow - 2][posCol]; //will write the 3rd letter at the top of the 2nd letter
        if (nextPos2 == 1) {
          posL4 = divs[posRow][posCol - 1]; //will write the 4th letter at the left of the 1st letter
          posL5 = divs[posRow - 1][posCol - 1]; //will write the 5th letter at the top of the 4th letter
        } else {
          posL4 = divs[posRow][posCol + 1]; //will write the 4th letter at the right of the 1st letter
          posL5 = divs[posRow - 1][posCol +1]; //will write the 5th letter at the top of the 4th letter
        }
      } else if (nextPos4 == 2) {
        posL2 = divs[posRow][posCol + 1]; //will write the 2nd letter at the right
        posL3 = divs[posRow][posCol + 2]; //will write the 3rd letter at the right of the 2nd letter
        if (nextPos2 == 1) {
          posL4 = divs[posRow - 1][posCol]; //will write the 4th letter at the top of the 1st letter
          posL5 = divs[posRow - 1][posCol + 1]; //will write the 5th letter at the right of the 4th letter
        } else {
          posL4 = divs[posRow + 1][posCol]; //will write the 4th at the bottom of the 1st letter
          posL5 = divs[posRow + 1][posCol + 1]; //will write the 5th letter at the right of the 4th letter
        }
      } else if (nextPos4 == 3) {
        posL2 = divs[posRow + 1][posCol]; //will write the 2nd letter at the bottom
        posL3 = divs[posRow + 2][posCol]; //will write the 3rd letter at the bottom of the 2nd letter
        if (nextPos2 == 1) {
          posL4 = divs[posRow][posCol - 1]; //will write the 4th letter at the left of the 1st letter
          posL5 = divs[posRow + 1][posCol - 1]; //will write the 5th letter at the bottom of the 4th letter
        } else {
          posL4 = divs[posRow][posCol + 1]; //will write the 4th letter at the right of the 1st letter
          posL5 = divs[posRow + 1][posCol + 1]; //will write the 5th letter at the bottom of the 4th letter
        }
      } else {
        posL2 = divs[posRow][posCol + 1]; //will write the 2nd letter at the left
        posL3 = divs[posRow][posCol + 2]; //will write the 3rd letter at the left of the 2nd letter
        if (nextPos2 == 1) {
          posL4 = divs[posRow - 1][posCol]; //will write the 4th letter at the top of the 1st letter
          posL5 = divs[posRow - 1][posCol - 1]; //will write the 5th letter at the left of the 4th letter
        } else {
          posL4 = divs[posRow + 1][posCol]; //will write the 4th letter at the bottom of the 1st letter
          posL5 = divs[posRow + 1][posCol - 1]; //will write the 5th letter at the left of the 4th letter
        }
      }
    }
    posL2.appendChild(l2);
    posL3.appendChild(l3);
    posL4.appendChild(l4);
    posL5.appendChild(l5);

    sketch.noLoop();
  };
});

var p5_2 = new p5(function(sketch) {
  var rows = 9;
  var cols = 7;
  var divs = [];
  var div;
  var pos2 = [1, 2];
  var pos3 = [1, 2, 3];
  var pos4 = [1, 2, 3, 4];

  var posRow = Math.round((Math.random() * 9));
  var posCol = Math.round((Math.random() * 6));

  sketch.setup = function() {
    var cnv = sketch.createCanvas();
    cnv.class("and");

    for (var i = 0; i < rows; i++) {
      divs[i] = [];
      for (var j = 0; j < cols; j++) {
        divs[i][j] = div = document.createElement("div");
        div.className = "square2";
        document.getElementById("and").appendChild(div);
      }
    }
  };
  sketch.draw = function() {
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

    sketch.noLoop();
  };
});

var p5_3 = new p5(function(sketch) {
  var rows = 9;
  var cols = 7;
  var divs = [];
  var div;
  var pos2 = [1, 2];
  var pos3 = [1, 2, 3];
  var pos4 = [1, 2, 3, 4];

  var posRow = Math.round((Math.random() * 9));
  var posCol = Math.round((Math.random() * 6));

  sketch.setup = function() {
    var cnv = sketch.createCanvas();
    cnv.class("play");

    for (var i = 0; i < rows; i++) {
      divs[i] = [];
      for (var j = 0; j < cols; j++) {
        divs[i][j] = div = document.createElement("div");
        div.className = "square3";
        document.getElementById("play").appendChild(div);
      }
    }
  };
  sketch.draw = function() {
    var nextPos2 = pos2[Math.floor(Math.random() * pos2.length)];
    var nextPos3 = pos3[Math.floor(Math.random() * pos3.length)];
    var nextPos4 = pos4[Math.floor(Math.random() * pos4.length)];

    var posL1, posL2, posL3, posL4;

    //letter 1
    var l1 = document.createElement("p");
    l1.className = "letter3";
    l1.innerHTML = "p";
    posL1 = divs[posRow][posCol];
    posL1.appendChild(l1);

    //letter 2
    var l2 = document.createElement("p");
    l2.className = "letter3";
    l2.innerHTML = "l";

    //letter 3
    var l3 = document.createElement("p");
    l3.className = "letter3";
    l3.innerHTML = "a";

    //letter 4
    var l4 = document.createElement("p");
    l4.className = "letter3";
    l4.innerHTML = "y";

    if (posRow == 0) { //if the 1st letter is on the 1st row
      if (nextPos3 == 1) {
        posL2 = divs[posRow][posCol - 1]; //will write the 2nd letter at the left of the 1st letter
        if (nextPos2 == 1) {
          posL3 = divs[posRow][posCol - 2]; //will write the 3rd letter at the left of the 2nd letter
          if (nextPos2 == 1) {
            posL4 = divs[posRow + 1][posCol - 2]; //will write the 4th letter at the bottom of the 3rd letter
          } else {
            posL4 = divs[posRow][posCol - 3]; //will write the 4th letter at the left of the 3rd letter
          }
        } else {
          posL3 = divs[posRow + 1][posCol - 1]; //will write the 3rd letter at the bottom of the 2nd letter
          if (nextPos3 == 1) {
            posL4 = divs[posRow + 1 ][posCol - 2]; //will write the 4th letter at the left of the 3rd letter
          } else if (nextPos3 == 2) {
            posL4 = divs[posRow + 2 ][posCol - 1]; //will write the 4th letter at the bottom of the 3rd letter
          } else {
            posL4 = divs[posRow + 1 ][posCol]; //will write the 4th letter at the right of the 3rd letter
          }
        }
      } else if (nextPos3 == 2) {
        posL2 = divs[posRow + 1][posCol]; //will write the 2nd letter at the bottom of the 1st letter
        if (nextPos3 == 1) {
          posL3 = divs[posRow + 1][posCol - 1]; //will write the 3rd letter at the left of the 2nd letter
          if (nextPos3 == 1) {
            posL4 = divs[posRow][posCol - 1]; //will write the 4th letter at the top of the 3rd letter
          } else if (nextPos3 == 2) {
            posL4 = divs[posRow + 1][posCol - 2]; //will write the 4th letter at the left of the 3rd letter
          } else {
            posL4 = divs[posRow + 2][posCol - 1]; //will write the 4th letter at the bottom of the 3rd letter
          }
        } else if (nextPos3 == 2) {
          posL3 = divs[posRow + 2][posCol]; //will write the 3rd letter at the bottom of the 2nd letter
          if (nextPos3 == 1) {
            posL4 = divs[posRow + 2][posCol - 1]; //will write the 4th letter at the left of the 3rd letter
          } else if (nextPos3 == 2) {
            posL4 = divs[posRow + 3][posCol]; //will write the 4th letter at the bottom of the 3rd letter
          } else {
            posL4 = divs[posRow + 2][posCol + 1]; //will write the 4th letter at the right of the 3rd letter
          }
        } else {
          posL3 = divs[posRow + 1][posCol + 1]; //will write the 3rd letter at the right of the 2nd letter
          if (nextPos3 == 1) {
            posL4 = divs[posRow][posCol + 1]; //will write the 4th letter at the top of the 3rd letter
          } else if (nextPos3 == 2) {
            posL4 = divs[posRow + 1][posCol + 2]; //will write the 4th letter at the right of the 3rd letter
          } else {
            posL4 = divs[posRow + 2][posCol + 1]; //will write the 4th letter at the bottom of the 3rd letter
          }
        }
      } else {
        posL2 = divs[posRow][posCol + 1]; //will write the 2nd at the right of the 1st letter
        if (nextPos2 == 1) {
          posL3 = divs[posRow][posCol + 2]; //will write the 3rd letter at the right of the 2nd letter
          if (nextPos2 == 1) {
            posL4 = divs[posRow][posCol + 3]; //will write the 4th letter at the right of the 3rd letter
          } else {
            posL4 = divs[posRow + 1][posCol + 2]; //will write the 4th letter at the bottom of the 3rd letter
          }
        } else {
          posL3 = divs[posRow + 1][posCol + 1]; //will write the 3rd letter at the bottom of the 2nd letter
          if (nextPos2 == 1) {
            posL4 = divs[posRow + 2][posCol + 1]; //will write the 4th letter at the bottom of the 3rd letter
          } else {
            posL3 = divs[posRow + 1][posCol]; //will write the 3rd letter at the left of the 2nd letter
          }
        }
      }
    } if (posRow == 9) { //if the 1st letter is on the last row
        if (nextPos3 == 1) {
          posL2 = divs[posRow][posCol - 1]; //will write the 2nd letter at the left of the 1st letter
          if (nextPos2 == 1) {
            posL3 = divs[posRow][posCol - 2]; //will write the 3rd letter at the left of the 2nd letter
            if (nextPos2 == 1) {
              posL4 = divs[posRow - 1][posCol - 2]; //will write the 4th letter at the top of the 3rd letter
            } else {
              posL4 = divs[posRow][posCol - 3]; //will write the 4th letter at the left of the 3rd letter
            }
          } else {
            posL3 = divs[posRow - 1][posCol - 1]; //will write the 3rd letter at the top of the 2nd letter
            if (nextPos3 == 1) {
              posL4 = divs[posRow + 1 ][posCol - 2]; //will write the 4th letter at the left of the 3rd letter
            } else if (nextPos3 == 2) {
              posL4 = divs[posRow - 2 ][posCol - 1]; //will write the 4th letter at the top of the 3rd letter
            } else {
              posL4 = divs[posRow + 1 ][posCol]; //will write the 4th letter at the right of the 3rd letter
            }
          }
        } else if (nextPos3 == 2) {
          posL2 = divs[posRow - 1][posCol]; //will write the 2nd letter at the top of the 1st letter
          if (nextPos3 == 1) {
            posL3 = divs[posRow - 1][posCol - 1]; //will write the 3rd letter at the left of the 2nd letter
            if (nextPos3 == 1) {
              posL4 = divs[posRow - 2][posCol - 1]; //will write the 4th letter at the top of the 3rd letter
            } else if (nextPos3 == 2) {
              posL4 = divs[posRow - 1][posCol - 2]; //will write the 4th letter at the left of the 3rd letter
            } else {
              posL4 = divs[posRow][posCol - 1]; //will write the 4th letter at the bottom of the 3rd letter
            }
          } else if (nextPos3 == 2) {
            posL3 = divs[posRow - 2][posCol]; //will write the 3rd letter at the top of the 2nd letter
            if (nextPos3 == 1) {
              posL4 = divs[posRow - 2][posCol - 1]; //will write the 4th letter at the left of the 3rd letter
            } else if (nextPos3 == 2) {
              posL4 = divs[posRow - 3][posCol]; //will write the 4th letter at the top of the 3rd letter
            } else {
              posL4 = divs[posRow - 2][posCol + 1]; //will write the 4th letter at the right of the 3rd letter
            }
          } else {
            posL3 = divs[posRow - 1][posCol + 1]; //will write the 3rd letter at the right of the 2nd letter
            if (nextPos3 == 1) {
              posL4 = divs[posRow - 2][posCol + 1]; //will write the 4th letter at the top of the 3rd letter
            } else if (nextPos3 == 2) {
              posL4 = divs[posRow - 1][posCol + 2]; //will write the 4th letter at the right of the 3rd letter
            } else {
           posL4 = divs[posRow][posCol + 1]; //will write the 4th letter at the bottom of the 3rd letter
          }
        }
      } else {
        posL2 = divs[posRow][posCol + 1]; //will write the 2nd at the right of the 1st letter
        if (nextPos2 == 1) {
          posL3 = divs[posRow][posCol + 2]; //will write the 3rd letter at the right of the 2nd letter
          if (nextPos2 == 1) {
            posL4 = divs[posRow][posCol + 3]; //will write the 4th letter at the right of the 3rd letter
          } else {
            posL4 = divs[posRow - 1][posCol + 2]; //will write the 4th letter at the top of the 3rd letter
          }
        } else {
          pos_w2l3 = divs[posRow - 1][posCol + 1]; //will write the 3rd letter at the top of the 2nd letter
          if (nextPos2 == 1) {
            posL4 = divs[posRow - 2][posCol + 1]; //will write the 4th letter at the top of the 3rd letter
          } else {
            posL3 = divs[posRow + 1][posCol]; //will write the 4th letter at the left of the 3rd letter
          }
        }
      }
    } if (posRow == 9) { //if the 1st letter is on the 1st column
      if (nextPos3 == 1) {
        posL2 = divs[posRow][posCol + 1]; //will write the 2nd letter at the right of the 1st letter
        if (nextPos2 == 1) {
          posL3 = divs[posRow][posCol + 2]; //will write the 3rd letter at the right of the 2nd letter
          if (nextPos2 == 1) {
            posL4 = divs[posRow - 1][posCol + 2]; //will write the 4th letter at the top of the 3rd letter
          } else {
            posL4 = divs[posRow][posCol + 3]; //will write the 4th letter at the right of the 3rd letter
          }
        } else {
          posL3 = divs[posRow - 1][posCol + 1]; //will write the 3rd letter at the top of the 2nd letter
          if (nextPos3 == 1) {
            posL4 = divs[posRow - 1 ][posCol]; //will write the 4th letter at the left of the 3rd letter
          } else if (nextPos3 == 2) {
            posL4 = divs[posRow - 2 ][posCol + 1]; //will write the 4th letter at the top of the 3rd letter
          } else {
            posL4 = divs[posRow - 1 ][posCol + 2]; //will write the 4th letter at the right of the 3rd letter
          }
        }
      } else if (nextPos3 == 2) {
        posL2 = divs[posRow - 1][posCol]; //will write the 2nd letter at the top of the 1st letter
        if (nextPos3 == 1) {
          posL3 = divs[posRow - 1][posCol + 1]; //will write the 3rd letter at the right of the 2nd letter
          if (nextPos3 == 1) {
            posL4 = divs[posRow - 2][posCol + 1]; //will write the 4th letter at the top of the 3rd letter
          } else if (nextPos3 == 2) {
            posL4 = divs[posRow - 1][posCol + 2]; //will write the 4th letter at the right of the 3rd letter
          } else {
            posL4 = divs[posRow][posCol + 1]; //will write the 4th letter at the bottom of the 3rd letter
          }
        } else if (nextPos3 == 2) {
          posL3 = divs[posRow - 2][posCol]; //will write the 3rd letter at the top of the 2nd letter
          if (nextPos2 == 1) {
            posL4 = divs[posRow - 2][posCol + 1]; //will write the 4th letter at the right of the 3rd letter
          } else {
            posL4 = divs[posRow - 3][posCol]; //will write the 4th letter at the top of the 3rd letter
          }
        } else {
          posL3 = divs[posRow - 1][posCol + 1]; //will write the 3rd letter at the right of the 2nd letter
          if (nextPos3 == 1) {
            posL4 = divs[posRow - 2][posCol + 1]; //will write the 4th letter at the top of the 3rd letter
          } else if (nextPos3 == 2) {
            posL4 = divs[posRow - 1][posCol + 2]; //will write the 4th letter at the right of the 3rd letter
          } else {
            posL4 = divs[posRow][posCol + 1]; //will write the 4th letter at the bottom of the 3rd letter
          }
        }
      } else {
        posL2 = divs[posRow][posCol + 1]; //will write the 2nd at the right of the 1st letter
        if (nextPos2 == 1) {
          posL3 = divs[posRow][posCol + 2]; //will write the 3rd letter at the right of the 2nd letter
          if (nextPos2 == 1) {
            posL4 = divs[posRow][posCol + 3]; //will write the 4th letter at the right of the 3rd letter
          } else {
            posL4 = divs[posRow - 1][posCol + 2]; //will write the 4th letter at the top of the 3rd letter
          }
        } else {
          posL3 = divs[posRow - 1][posCol + 1]; //will write the 3rd letter at the top of the 2nd letter
          if (nextPos2 == 1) {
            posL4 = divs[posRow - 2][posCol + 1]; //will write the 4th letter at the top of the 3rd letter
          } else {
            posL3 = divs[posRow + 1][posCol]; //will write the 4th letter at the left of the 3rd letter
          }
        }
      }
    } if (posRow == 9) { //if the 1st letter is on the last column
        if (nextPos3 == 1) {
          posL2 = divs[posRow][posCol - 1]; //will write the 2nd letter at the left of the 1st letter
          if (nextPos2 == 1) {
            posL3 = divs[posRow][posCol - 2]; //will write the 3rd letter at the left of the 2nd letter
            if (nextPos2 == 1) {
              posL4 = divs[posRow - 1][posCol - 2]; //will write the 4th letter at the top of the 3rd letter
            } else {
              posL4 = divs[posRow][posCol - 3]; //will write the 4th letter at the left of the 3rd letter
            }
          } else {
            posL3 = divs[posRow - 1][posCol - 1]; //will write the 3rd letter at the top of the 2nd letter
            if (nextPos3 == 1) {
              posL4 = divs[posRow - 1 ][posCol]; //will write the 4th letter at the left of the 3rd letter
            } else if (nextPos3 == 2) {
              posL4 = divs[posRow - 2 ][posCol - 1]; //will write the 4th letter at the top of the 3rd letter
            } else {
              posL4 = divs[posRow - 1 ][posCol - 2]; //will write the 4th letter at the left of the 3rd letter
            }
          }
        } else if (nextPos3 == 2) {
          posL2 = divs[posRow - 1][posCol]; //will write the 2nd letter at the top of the 1st letter
          if (nextPos3 == 1) {
            posL3 = divs[posRow - 1][posCol - 1]; //will write the 3rd letter at the left of the 2nd letter
            if (nextPos3 == 1) {
              posL4 = divs[posRow - 2][posCol - 1]; //will write the 4th letter at the top of the 3rd letter
            } else if (nextPos3 == 2) {
              posL4 = divs[posRow - 1][posCol - 2]; //will write the 4th letter at the left of the 3rd letter
            } else {
              posL4 = divs[posRow][posCol - 1]; //will write the 4th letter at the bottom of the 3rd letter
            }
          } else if (nextPos3 == 2) {
            posL3 = divs[posRow - 2][posCol]; //will write the 3rd letter at the top of the 2nd letter
            if (nextPos2 == 1) {
              posL4 = divs[posRow - 2][posCol - 1]; //will write the 4th letter at the left of the 3rd letter
            } else {
              posL4 = divs[posRow - 3][posCol]; //will write the 4th letter at the top of the 3rd letter
            }
          } else {
            posL3 = divs[posRow - 1][posCol - 1]; //will write the 3rd letter at the left of the 2nd letter
            if (nextPos3 == 1) {
              posL4 = divs[posRow - 2][posCol - 1]; //will write the 4th letter at the top of the 3rd letter
            } else if (nextPos3 == 2) {
              posL4 = divs[posRow - 1][posCol - 2]; //will write the 4th letter at the left of the 3rd letter
            } else {
              posL4 = divs[posRow][posCol - 1]; //will write the 4th letter at the bottom of the 3rd letter
            }
          }
        } else {
          posL2 = divs[posRow + 1][posCol]; //will write the 2nd at the bottom of the 1st letter
          if (nextPos2 == 1) {
            posL3 = divs[posRow + 1][posCol - 1]; //will write the 3rd letter at the left of the 2nd letter
            if (nextPos2 == 1) {
              posL4 = divs[posRow + 1][posCol - 2]; //will write the 4th letter at the left of the 3rd letter
            } else {
              posL4 = divs[posRow][posCol - 1]; //will write the 4th letter at the top of the 3rd letter
            }
          } else {
            posL3 = divs[posRow + 2][posCol]; //will write the 3rd letter at the bottom of the 2nd letter
            if (nextPos2 == 1) {
              posL4 = divs[posRow + 3][posCol]; //will write the 4th letter at the bottom of the 3rd letter
            } else {
              posL3 = divs[posRow + 2][posCol - 1]; //will write the 4th letter at the right of the 3rd letter
            }
          }
        }
      } else { //if the letter is anywhere inside
        if (nextPos4 == 1) {
          posL2 = divs[posRow - 1][posCol]; //will write the 2nd letter at the top of the 1st letter
          if (nextPos3 == 1) {
            posL3 = divs[posRow - 2][posCol]; //will write the 3rd letter at the top of the 2nd letter
            if (nextPos2 == 1) {
              posL4 = divs[posRow - 3][posCol]; //will write the 4th letter at the top of the 3rd
            } else {
              posL4 = divs[posRow - 2][posCol + 1]; //will write the 4th letter at the right of the 3rd
            }
          } else if (nextPos3 == 2){
            posL3 = divs[posRow - 1][posCol + 1]; //will write the 3rd letter at the right of the 2nd letter
            if (nextPos2 == 1) {
              posL4 = divs[posRow - 1][posCol + 2]; //will write the 4th letter at the right of the 3rd
            } else {
              posL4 = divs[posRow][posCol + 1]; //will write the 4th letter at the bottom of the 3rd
            }
        } else {
          posL3 = divs[posRow - 1][posCol - 1]; //will write the 3rd letter at the left of the 2nd letter
          if (nextPos2 == 1) {
            posL4 = divs[posRow - 1][posCol - 2]; //will write the 4th letter at the left of the 3rd
          } else {
            posL4 = divs[posRow][posCol - 1]; //will write the 4th letter at the bottom of the 3rd
          }
        }
      } else if (nextPos4 == 2) {
        posL2 = divs[posRow][posCol + 1]; //will write the 2nd letter at the right of the 1st letter
        if (nextPos3 == 1) {
          posL3 = divs[posRow - 1][posCol + 1]; //will write the 3rd letter at the top of the 2nd letter
          if (nextPos2 == 1) {
            posL4 = divs[posRow - 1][posCol]; //will write the 4th letter at the left of the 3rd
          } else {
            posL4 = divs[posRow - 2][posCol + 1]; //will write the 4th letter at the top of the 3rd
          }
        } else if (nextPos3 == 2) {
          posL3 = divs[posRow][posCol + 2]; //will write the 3rd letter at the right of the 2nd letter
          if (nextPos2 == 1) {
            posL4 = divs[posRow][posCol + 3]; //will write the 4th letter at the right of the 3rd
          } else {
            posL4 = divs[posRow + 1][posCol + 2]; //will write the 4th letter at the bottom of the 3rd
          }
        } else {
          posL3 = divs[posRow + 1][posCol + 1]; //will write the 3rd letter at the bottom of the 2nd letter
          if (nextPos2 == 1) {
            posL4 = divs[posRow + 2][posCol + 1]; //will write the 4th letter at the bottom of the 3rd
          } else {
            posL4 = divs[posRow + 1][posCol]; //will write the 4th letter at the left of the 3rd
          }
        }
      } else if (nextPos4 == 3) {
        posL2 = divs[posRow + 1][posCol]; //will write the 2nd letter at the bottom of the 1st letter
        if (nextPos3 == 1) {
          posL3 = divs[posRow + 1][posCol - 1]; //will write the 3rd letter at the left of the 2nd letter
          if (nextPos2 == 1) {
            posL4 = divs[posRow + 1][posCol - 2]; //will write the 4th letter at the left of the 3rd
          } else {
            posL4 = divs[posRow][posCol - 1]; //will write the 4th letter at the top of the 3rd
          }
        } else if (nextPos3 == 2) {
          posL3 = divs[posRow + 2][posCol]; //will write the 3rd letter at the bottom of the 2nd letter
          if (nextPos2 == 1) {
            posL4 = divs[posRow + 3][posCol]; //will write the 4th letter at the bottom of the 3rd
          } else {
            posL4 = divs[posRow + 2][posCol + 1]; //will write the 4th letter at the right of the 3rd
          }
        } else {
          posL3 = divs[posRow + 1][posCol + 1]; //will write the 3rd letter at the right of the 2nd letter
          if (nextPos2 == 1) {
            posL4 = divs[posRow + 1][posCol + 1]; //will write the 4th letter at the right of the 3rd
          } else {
            posL4 = divs[posRow][posCol + 1]; //will write the 4th letter at the top of the 3rd
          }
        }
      } else {
        posL2 = divs[posRow][posCol - 1]; //will write the 2nd letter at the left of the 1st letter
        if (nextPos3 == 1) {
          posL3 = divs[posRow - 1][posCol - 1]; //will write the 3rd letter at the top of the 2nd letter
          if (nextPos2 == 1) {
            posL4 = divs[posRow - 2][posCol - 1]; //will write the 4th letter at the top of the 3rd
          } else {
            posL4 = divs[posRow - 1][posCol]; //will write the 4th letter at the right of the 3rd
          }
        } else if (nextPos3 == 2) {
          posL3 = divs[posRow][posCol - 2]; //will write the 3rd letter at the left of the 2nd letter
          if (nextPos2 == 1) {
            posL4 = divs[posRow][posCol - 3]; //will write the 4th letter at the left of the 3rd
          } else {
            posL4 = divs[posRow - 1][posCol - 2]; //will write the 4th letter at the top of the 3rd
          }
        } else {
          posL3 = divs[posRow + 1][posCol - 1]; //will write the 3rd letter at the bottom of the 2nd letter
          if (nextPos2 == 1) {
            posL4 = divs[posRow + 2][posCol - 1]; //will write the 4th letter at the bottom of the 3rd
          } else {
            posL4 = divs[posRow - 1][posCol]; //will write the 4th letter at the right of the 3rd
          }
        }
      }
    }
    posL2.appendChild(l2);
    posL3.appendChild(l3);
    posL4.appendChild(l4);

    sketch.noLoop();
  };
});

var p5_4 = new p5(function(sketch) {
  sketch.setup = function() {
    var cnv = sketch.createCanvas();

  };
  sketch.draw = function(sketch) {
    var topBreak = Math.floor((Math.random() * 700) + 50);
    var topAnd = Math.floor((Math.random() * 700) + 50);
    var topPlay = Math.floor((Math.random() * 700) + 50);

    var break1 = document.createElement("div");
    break1.className = "title";
    break1.innerHTML = "break";
    document.getElementsByTagName("body")[0].appendChild(break1);
    break1.style.top = topBreak + "px";
    break1.style. left = "1.125in";

    var and = document.createElement("div");
    and.className = "title";
    and.innerHTML = "and";
    document.getElementsByTagName("body")[0].appendChild(and);
    and.style.top = topAnd + "px";
    and.style.left = "3.25in";


    var play = document.createElement("div");
    play.className = "title";
    play.innerHTML = "play";
    document.getElementsByTagName("body")[0].appendChild(play);
    play.style.top = topPlay + "px";
    play.style.left = "5.25in";


    sketch.noLoop();
  };
});

var p5_5 = new p5(function(sketch) {
  var rows = 8;
  var cols = 6;
  var divs = [];
  var div;

  sketch.setup = function() {
    var cnv = sketch.createCanvas();
    cnv.class("grid");

    for (var i = 0; i < rows; i++) {
      divs[i] = [];
      for (var j = 0; j < cols; j++) {
        divs[i][j] = div = document.createElement("div");
        div.className = "cross";
        document.getElementById("grid").appendChild(div);
      }
    }
  };
  sketch.draw = function() {


  };
});
