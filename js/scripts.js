//Business Logic
function Players(player, mark) {
  this.player = player,
  this.active = false,
  this.mark = mark,
  this.win = false
}
// function checkForWin(currentChoice) {
//   var possibleWins = [
//     ["A1","A2","A3"],
//     ["B1","B2","B3"],
//     ["C1","C2","C3"],
//     ["A1","B1","C1"],
//     ["A2","B2","C2"],
//     ["A3","B3","C3"],
//     ["A3","B2","C1"],
//     ["A1","B2","C3"]
//   ];
//
//   for(var i = 0; i < possibleWins.length; i++) {
//     for(var j = 0; j < possibleWins[i].length; j++) {
//       if(currentChoice === possibleWins[i][j]) {
//         board[i][j] = currentChoice;
//       }
//     }
//   }
//
//   for(var y = 0; y < board.length; y++) {
//     if(board[y].length == 3) {
//       console.log(board[y] + " = win");
//     }
//   }
//   console.log(board);
// }

Players.prototype.checkForWin = function(currentChoice) {
  var numberOfMark = 0;
  var possibleWins = [
    ["A1","A2","A3"],
    ["B1","B2","B3"],
    ["C1","C2","C3"],
    ["A1","B1","C1"],
    ["A2","B2","C2"],
    ["A3","B3","C3"],
    ["A3","B2","C1"],
    ["A1","B2","C3"]
  ];

  for(var i = 0; i < possibleWins.length; i++) {
    for(var j = 0; j < possibleWins[i].length; j++) {
      if(currentChoice === possibleWins[i][j]) {
        board[i][j] = this.mark;
      }
    }
  }

  for(var y = 0; y < board.length; y++) {
    for(var x = 0; x < board[y].length; x++) {
      if(board[y][x] === this.mark) {
        numberOfMark += 1;

      }
    }
    if(numberOfMark === 3) {
      this.win = true;
    } else {
      numberOfMark = 0;
    }
  }

}

var players = [];
var playerChoice;
var board = [
  [,,],
  [,,],
  [,,],
  [,,],
  [,,],
  [,,],
  [,,],
  [,,]
];

//User Interface Logic
$(document).ready(function() {
  var player1 = new Players("player 1", "x");
  player1.active = true;
  var player2 = new Players("player 2", "o");
  players.push(player1,player2);

  $(".box").click(function() {
    if($(this).css("background-image") === "none") {
      for(var i = 0; i < players.length; i++) {
        if(players[i].active === true) {
          if(players[i].player === "player 1") {
            $(this).css({
              "background-image" : "url('img/x.png')",
              "background-size" : "cover"
            });
            playerChoice = $(this).attr("id");
            players[i].checkForWin(playerChoice);
            if(players[i].win === true) {
              console.log("You Win X");
            }
            players[i].active = false;
          } else {
            $(this).css({
              "background-image" : "url('img/oh.png')",
              "background-size" : "cover"
            });
            playerChoice = $(this).attr("id");
            players[i].checkForWin(playerChoice);
            if(players[i].win === true) {
              console.log("You Win O");
            }
            players[i].active = false;
          }
        } else if (players[i].active === false) {
          players[i].active = true;
        }
      }
    }
  });
});
