//Business Logic
function Players(player, mark) {
  this.player = player,
  this.active = false,
  this.mark = mark
}
function checkForWin(currentChoice) {
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

  // for(var i = 0; i < possibleWins.length; i++) {
  //   var possibleWinSet = possibleWins[i];
  //   for(var j = 0; j < count.length; j++) {
  //     var possibleWinEachPosition = possibleWinSet[j];
  //     for(var y = 0; y < currentChoice.length; y++) {
  //       if(currentChoice[y] == possibleWinEachPosition) {
  //         console.log("Match");
  //       } else {
  //         console.log("No match");
  //       }
  //     }
  //   }
  // }
}
var players = [];
var player1Choices = [];
var player2Choices = [];
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
            player1Choices.push($(this).attr("id"));
            checkForWin(player1Choices);
            players[i].active = false;
          } else {
            $(this).css({
              "background-image" : "url('img/oh.png')",
              "background-size" : "cover"
            });
            player2Choices.push($(this).attr("id"));
            checkForWin(player2Choices);
            players[i].active = false;
          }
        } else if (players[i].active === false) {
          players[i].active = true;
        }
      }
    }
  });
});
