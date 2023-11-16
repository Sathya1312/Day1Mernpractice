console.log("This is my fist JS File!!!");

//Data type
console.log(5);

//primitive data types
console.log(typeof 5);
console.log(typeof "Cool");
console.log(typeof true);
console.log(typeof undefined);

//non primitive data type
console.log(typeof [2, 100, 200]);
console.log(typeof { name: "Sathya", class: "B39 WD" });

//Declaration Assignment
var x = 5;
var y; //only Declaration

console.log(typeof x); //number
console.log(typeof y); //undefined

//not defined(error) vs undefined
console.log(y); // undefined
//console.log(z); //z is not defined

const x1 = NaN;
console.log(typeof x1);
console.log("abc" / 2);

console.log("5" + 5); // 55 String Implicit
console.log(parseInt("5") + 5); // 10 Explicit
console.log(typeof ("5" - 5)); // 0 number

console.log(typeof null);

console.log(5 == "5");
console.log(5 === "5");

var j1 = [5, 6, 7];
var j2 = [5, 6, 7];

var t1 = 5;
var t2 = 5;
console.log(j1 === j2);
console.log(t1 === t2);

var j3 = j1;
j1.push(2);
j2.push(10);
j3.push(100);

console.log(j1, j2, j3);

//spread operator
var u1 = [90, 10, 100];
var u2 = [...u1];
console.log(u1 === u2);

var u3 = [1, 2, 3];
var u4 = [].concat(u3);
console.log(u4);

//object
var player = {
  name: "Gukesh D",
  game: "Chess",
  age: 16,
  rating: 2699,
  title: "Grandmaster's kid",
};

console.log(player);

//dot syntax
console.log(player.title);

//box syntax
console.log(player["title"]);

player.rating += 100; // add 100 into the existing value
console.log(player);

player.nationality = "Indian";
console.log(player);

//Object VS JSON
//JSON - JavaScript object notation - string

console.log(JSON.stringify(player)); // convert object into jsong
console.log(typeof JSON.stringify(player)); // string
