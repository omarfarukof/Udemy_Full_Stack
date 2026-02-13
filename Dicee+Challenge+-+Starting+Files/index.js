function rollADice() {
  var p1 = Math.floor(Math.random() * 6) + 1;
  var p2 = Math.floor(Math.random() * 6) + 1;
  document
    .getElementsByClassName("img1")[0]
    .setAttribute("src", "./images/dice" + p1 + ".png");
  document
    .getElementsByClassName("img2")[0]
    .setAttribute("src", "./images/dice" + p2 + ".png");
  var status = "";
  if (p1 > p2) {
    status = "Player 1 Win!";
  } else if (p1 < p2) {
    status = "Player 2 Win!";
  } else {
    status = "Draw!";
  }
  document.querySelector("h1").innerHTML = status;
  return "Player1 = " + p1 + " ; Player2 = " + p2;
}
