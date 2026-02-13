var Game_Pattern = [];

function getRandom() {
  var c = ["green", "red", "yellow", "blue"];
  return c[Math.floor(Math.random() * 4)];
}
function getClickedBox() {
  var clicked_box = event.target.id;
  console.log(clicked_box);
  return clicked_box;
}
function fail() {
  $("#level-title").html("Game Over, Press Any Key to Restart");
  Game_Pattern = [];
}
function addNewColor() {
  Game_Pattern.push(getRandom());
  console.log(Game_Pattern);
}

function game(event) {
  console.log("Last " + Game_Pattern[Game_Pattern.length - 1]);
  if (Game_Pattern[Game_Pattern.length - 1] !== getClickedBox()) {
    console.log("Fail");
    fail();
    return;
  } else {
    console.log("Pass");
  }

  addNewColor();
  $("#level-title").html("Level: " + Game_Pattern.length);
}

function start() {
  // while (1) {
  addNewColor();
  $("#level-title").html("Level: " + Game_Pattern.length);
  $(".btn").click(game);
  // }
}

$("html").on("keypress", start);
