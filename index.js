let current = 0, score = 0, pace = 2000;
let buttons = [
  document.getElementById('button1'),
  document.getElementById('button2'),
  document.getElementById('button3'),
  document.getElementById('button4')
];

buttons[0].onclick = function() {clicked(0)};
buttons[1].onclick = function() {clicked(1)};
buttons[2].onclick = function() {clicked(2)};
buttons[3].onclick = function() {clicked(3)};

function clicked(i) {
  console.log("Clicked i is ", i);
  if ( i != current) {
    console.log("Oops!");
    myStopFunction();
  } else {
    score++;
    pace = pace - 10;
    document.getElementById("score").innerHTML = score;
  }
}

function myStopFunction() {
  clearTimeout(timer);
  for (i=0; i<buttons.length; i++){
    buttons[i].style.backgroundColor = "tomato";
  }
  document.getElementById("notification").style.display = "flex";
  document.getElementById("result").innerHTML = `Oops.You loose! Your score is ${score}. Close the window. The game restarts automatically.`;
}

function startGame() {  //changing current
  document.getElementById("cover").style.display = "none";
  let next = startNew();
  console.log("startNew(current) "+startNew(current));
  console.log("Next is "+next);
  buttons[current].style.backgroundColor = "khaki";
  buttons[next].style.backgroundColor = "tomato";
  current = next;
  console.log("Current is "+current);
  timer = setTimeout(startGame, pace);
}

function startNew() {
  let next = randomNumber(0, buttons.length);
  if (next != current) {
    return next;
  } else {
    return startNew();
  }
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
