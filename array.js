// document vs window

// document is used to access DOM

console.log(document.getElementsByTagName("h1")[0].textContent);
console.log(document.getElementsByTagName("p")[0].textContent);

//to simplify
console.log(document.querySelector("h1").textContent);
console.log(document.querySelector("p").textContent);

//Array Iteration(loop)

var marks = [90, 80, 99, 45, 30];

//for loop

//for...in loop

// for...of loop

//forEach loop
var maximum = 0;

for (var i = 0; i < marks.length; i++) {
  if (marks[i] > maximum) {
    maximum = marks[i];
  }
}
console.log("maximum", maximum);

for (var i in marks) {
  console.log("index = ", i, marks[i]);
}

for (var val of marks) {
  console.log(val);
}

//to get the maximum number using for of loop

var max = -Infinity;
for (var mark of marks) {
  if (mark > max) {
    max = mark;
  }
}
console.log("maximum using for of loop = ", max);

//Object is used only for .. in for iteration

var player = {
  name: "Gukesh D",
  game: "Chess",
  age: 16,
  rating: 2699,
  title: "Grandmaster",
};

for (var key in player) {
  console.log(key, player[key]);
}

//Object to JSON  - JSON.stringify
//JSON to Object - JSON.parse

var playerJ = JSON.stringify(player);
console.log(playerJ);
console.log(typeof playerJ);
console.log(JSON.parse(playerJ));
console.log(typeof JSON.parse(playerJ));
