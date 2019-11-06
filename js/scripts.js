var EMPTY = "Empty";
var X = "X";
var O = "O";

function Player(type) {
  this.type = type
}

Player.prototype.mark = function() {
  return this.type
}

function Space (xCoordinate, yCoordinate) {
  this.X = xCoordinate,
  this.Y = yCoordinate,
  this.value = EMPTY
}

Space.prototype.isEmpty = function() {
  if (this.value === EMPTY) {
    return true;
  }
  return false;
}

Space.prototype.mark = function(value) {
  if (value !== X && value !== O) {
    return false;
  }
  this.value = value;
  console.log(this.value);
  return true;
}

Space.prototype.markedBy = function() {
  if (this.value === X) {
    return X;
  } else if (this.value === O) {
    return O
  }
  return EMPTY;
}

Space.prototype.xCoordinate = function() {
  return this.X;
}

Space.prototype.yCoordinate = function() {
  return this.Y;
}

function Board() {
  this.spaces = []
}

Board.prototype.initializeBoard = function() {
  var space;
  for (var x=0; x<3; x++) {
    for (var y=0; y<3; y++) {
      space = new Space(x, y);
      this.spaces.push(space);
    }
  }
}

// function valueTracker (track) {
//   if (track[0].value === track[1].value && track[0].value === track[2].value && track[1].value === track[2].value && track[0].value !== EMPTY) {
//     return track[0].value;
//   }
//   return false
// }

Board.prototype.hasWon = function() {

//Rows
  var row1 = this.spaces.slice(0, 3);
  console.log(row1);
  if (row1[0].value === row1[1].value && row1[0].value === row1[2].value && row1[1].value === row1[2].value && row1[0].value !== EMPTY) {
    return row1[0].value;
  }

  var row2 = this.spaces.slice(3, 6);
  console.log(row2);
  if (row2[0].value === row2[1].value && row2[0].value === row2[2].value && row2[1].value === row2[2].value && row2[0].value !== EMPTY) {
    return row2[0].value;
  }

  var row3 = this.spaces.slice(6, 9);
  console.log(row3);
  if (row3[0].value === row3[1].value && row3[0].value === row3[2].value && row3[1].value === row3[2].value && row3[0].value !== EMPTY) {
    return row3[0].value;
  }

//Columns
  var column1 = [this.spaces[0], this.spaces[3], this.spaces[6]];
  console.log('col1', column1);
  if (column1[0].value === column1[1].value && column1[0].value === column1[2].value && column1[1].value === column1[2].value && column1[0].value !== EMPTY) {
    return column1[0].value;
  }

  var column2 = [this.spaces[1], this.spaces[4], this.spaces[7]];
  console.log('col2',column2);
  if (column2[0].value === column2[1].value && column2[0].value === column2[2].value && column2[1].value === column2[2].value && column2[0].value !== EMPTY) {
    return column2[0].value;
  }

  var column3 = [this.spaces[2], this.spaces[5], this.spaces[8]];
  console.log('col3',column3);
    if (column3[0].value === column3[1].value && column3[0].value === column3[2].value && column3[1].value === column3[2].value && column3[0].value !== EMPTY) {
    return column3[0].value;
  }
//Diagonals
  var diagonal1 = [this.spaces[0], this.spaces[4], this.spaces[8]];
    if (diagonal1[0].value === diagonal1[1].value && diagonal1[0].value === diagonal1[2].value && diagonal1[1].value === diagonal1[2].value && diagonal1[0].value !== EMPTY) {
    return diagonal1[0].value;
  }

  var diagonal2 = [this.spaces[2], this.spaces[4], this.spaces[6]];
    if (diagonal2[0].value === diagonal2[1].value && diagonal2[0].value === diagonal2[2].value && diagonal2[1].value === diagonal2[2].value && diagonal2[0].value !== EMPTY) {
    return diagonal2[0].value;
  }

  return false;

}

function Game() {
  this.playerX = new Player("X"),
  this.playerO = new Player("O"),
  this.board = new Board(),
  this.turn = X
}

Game.prototype.newGame = function() {
  this.board.initializeBoard()
}

Game.prototype.turn = function () {
  return this.turn
}

Game.prototype.nextTurn = function () {
  if (this.turn === X) {
    this.turn = O
  } else if (this.turn === O) {
    this.turn = X
  }
}

Game.prototype.move = function(id) {
  var space = this.board.spaces[id-1];
  var player = this.turn;
  if (space.isEmpty()) {
    space.mark(this.turn);
    this.nextTurn();
    return player;
  }
  return false
}


$(document).ready(function() {
  var game;
  $("#startButton").click(function () {
    $("#gameDisplay").fadeIn();
    $("#start").hide();
    game = new Game();
    game.newGame();
  });

  $("#1").click(function () {
    var result = game.move(1);
      if (result) {
        $("#1").text(result);
        $("#player").text(result);

    var resultCondition = game.board.hasWon();
      if (resultCondition) {
        $("#result").fadeIn();
        $("#winner").text("The winner is player " + resultCondition + "!");
      }
    }
  });

  $("#2").click(function () {
    var result = game.move(2);
    if (result) {
      $("#2").text(result);
      $("#player").text(result);

    var resultCondition = game.board.hasWon();
      if (resultCondition) {
        $("#result").fadeIn();
        $("#winner").text("The winner is player " + resultCondition + "!");
      }
    }
  });

  $("#3").click(function () {
    var result = game.move(3);
    if (result) {
      $("#3").text(result);
      $("#player").text(result);

    var resultCondition = game.board.hasWon();
      if (resultCondition) {
        $("#result").fadeIn();
        $("#winner").text("The winner is player " + resultCondition + "!");
      }
    }
  });

  $("#4").click(function () {
    var result = game.move(4);
    if (result) {
      $("#4").text(result);
      $("#player").text(result);

    var resultCondition = game.board.hasWon();
      if (resultCondition) {
        $("#result").fadeIn();
        $("#winner").text("The winner is player " + resultCondition + "!");
      }
    }
  });

  $("#5").click(function () {
    var result = game.move(5);
    if (result) {
      $("#5").text(result);
      $("#player").text(result);

    var resultCondition = game.board.hasWon();
      if (resultCondition) {
        $("#result").fadeIn();
        $("#winner").text("The winner is player " + resultCondition + "!");
      }
    }
  });

  $("#6").click(function () {
    var result = game.move(6);
    if (result) {
      $("#6").text(result);
      $("#player").text(result);

    var resultCondition = game.board.hasWon();
      if (resultCondition) {
        $("#result").fadeIn();
        $("#winner").text("The winner is player " + resultCondition + "!");
      }
    }
  });

  $("#7").click(function () {
    var result = game.move(7);
    if (result) {
      $("#7").text(result);
      $("#player").text(result);

    var resultCondition = game.board.hasWon();
      if (resultCondition) {
        $("#result").fadeIn();
        $("#winner").text("The winner is player " + resultCondition + "!");
      }
    }
  });

  $("#8").click(function () {
    var result = game.move(8);
    if (result) {
      $("#8").text(result);
      $("#player").text(result);

    var resultCondition = game.board.hasWon();
      if (resultCondition) {
        $("#result").fadeIn();
        $("#winner").text("The winner is player " + resultCondition + "!");
      }
    }
  });

  $("#9").click(function () {
    var result = game.move(9);
    if (result) {
      $("#9").text(result);
      $("#player").text(result);

    var resultCondition = game.board.hasWon();
      if (resultCondition) {
        $("#result").fadeIn();
        $("#winner").text("The winner is player " + resultCondition + "!");
      }
    }
  });
  $("#startOver").click(function () {
    $("#start").fadeIn();
    $(".grid-item").text("");
    $("#result").hide();
    $("#gameDisplay").hide();

  })
});
