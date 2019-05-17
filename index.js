dwarves = ["Doc", "Dopey", "Bashful", "Grumpy"];
planeteerCalls = ["earth", "wind", "fire", "water", "heart"];
shortWords = ["wind", "fire"];
assortedWords = ["earth", "wind", "heart", "fire"];

//This function should accept an array of dwarf names, for instance: ["Doc", "Dopey", "Bashful", "Grumpy"] It should then return a string with the numbered dwarves. The string should look like this:            "1. Doc 2. Dopey 3. Bashful 4. Grumpy "

function dwarfRollCall(dwarves) {
  var newStr = "";
  dwarves.forEach(function(item, index){
  newStr += (index + 1 +". " + item + " ");
  });
  return newStr;
}

dwarfRollCall(dwarves);

//**********************************************
// This function should accept an array of planeteer calls: planeteerCalls = ["earth", "wind", "fire", "water", "heart"] Convert each element to UPPERCASE and add an ! The return value of this method should be an array: summonCaptainPlanet(planeteerCalls) #=> ["EARTH!", "WIND!", "FIRE!", "WATER!", "HEART!"]

function summonCaptainPlanet(array){
  return array.map(function(item){
		return item.toUpperCase() + "!";
	});
}
summonCaptainPlanet(planeteerCalls);

//**********************************************

//The longPlaneteerCalls method should accept an array of calls. The function should tell us if any of the calls are longer than four characters

assortedwords.some(longPlaneteerCalls);
function longPlaneteerCalls(items){
 return items.length > 4;
}

//**********************************************

//The "findTheCheese" function should accept an array of strings. It should then look through these strings and return the first string that is a type of cheese. The types of cheese that appear are cheddar, gouda, and camembert.

//note: find method stops iterating once it receives a truthy value from callback


var snacks = ["crackers", "gouda", "thyme"];
var soup = ["tomato soup", "cheddar", "oyster crackers", "gouda"];
var cheese = ["cheddar", "gouda", "camembert"];

//initialize; test; increment
function findTheCheese (foods) {
   for(var i =0; i < foods.length; i++) {
     if(foods[i] === 'cheddar' || foods[i] === 'gouda' || foods[i] === 'camembert') {
         return foods[i];
       } 
     }
     if(foods !== 'cheddar' || foods !== 'gouda' || foods !== 'camembert') {
       return 'no cheese!';
     } 
 }
 findTheCheese(soup);
