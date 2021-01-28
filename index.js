//select all buttons
var btns = document.querySelectorAll("button");
//create a random number from 1-3
var randomNumber = Math.floor((Math.random() * 3) + 1);
//connect to result ID
var result = document.querySelector("#result");
//connect to restart button
var restart_btn = document.querySelector(".restart_btn");

//function to select a random image to use as computer's choice in game
function computer_output() {
  var randomImage = randomNumber + ".png";
  var image = document.querySelector(".img");
  image.setAttribute("src", randomImage);
}

//function to disable buttons once game is over
function disable_btns(){
  for(var i = 0; i<btns.length; i++){
    btns[i].disabled = true;
  }
}

//function for when rock is selected by player
function rock() {
  if (randomNumber === 1) {
    result.innerHTML = "YOU LOSE!";
    result.style.color = "red";
  } else if (randomNumber === 2) {
    result.innerHTML = "DRAW!";
    result.style.color = "orange";
  } else {
    result.innerHTML = "YOU WIN!";
    result.style.color = "lime";

  }
}

//function for when paper is selected by player
function paper() {
  if (randomNumber === 1) {
    result.innerHTML = "DRAW!";
    result.style.color = "orange";
  } else if (randomNumber === 2) {
    result.innerHTML = "YOU WIN!";
    result.style.color = "lime";
  } else {
    result.innerHTML = "YOU LOSE!";
    result.style.color = "red";
  }
}

//function for when scissors is selected by player
function scissors() {
  if (randomNumber === 1) {
    result.innerHTML = "YOU WIN!";
    result.style.color = "lime";
  } else if (randomNumber === 2) {
    result.innerHTML = "YOU LOSE!";
    result.style.color = "red";
  } else {
    result.innerHTML = "DRAW!";
    result.style.color = "orange";
  }
}

//for loop to add event listeners to each button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
      //if else statements for whatever the player selects - executes functions - make player again visible
      if (this.id === "rock") {
        computer_output();
        rock();
        disable_btns();
        restart_btn.style.visibility = "visible";
      } else if (this.id === "paper") {
        computer_output();
        paper();
        disable_btns();
        restart_btn.style.visibility = "visible";
      } else if (this.id === "scissors") {
        computer_output();
        scissors();
        disable_btns();
        restart_btn.style.visibility = "visible";
      }
  })
}
