//Business Logic
function Players(player) {
  this.player = player,
  this.active = false
}
var players = [];
//User Interface Logic
$(document).ready(function() {
  var player1 = new Players("player 1");
  player1.active = true;
  var player2 = new Players("player 2");
  players.push(player1,player2);
  console.log(players);
  $(".box").click(function() {
    if($(this).css("background-image") === "none") {
      for(var i = 0; i < players.length; i++) {
        if(players[i].active === true) {
          $(this).css({
            "background-image" : "url('img/x.png')",
            "background-size" : "cover"
          });
        } else {
          console.log("Not your turn");
        }
      }
      // if(player.active === true) {
      //   $(this).css({
      //     "background-image" : "url('img/x.png')",
      //     "background-size" : "cover"
      //   });
      // }
    }
  });
});
