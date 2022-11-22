"use strict";

// JAVASCRIPT HS FOUR COLLECTION
// 1 : OBJECT
// 2 : ARRAY
// 3 : SET
// 4 : MAP

// 1 OBJECT

const person = {
  name: "Mohammad Agha",
  lastName: "Ibrahimi",
  job: "Student",
  birthYear: 1999,
  address: "Distrect-6",
  friends: ["Mohammad Nabi", "Ahmad", "Azizullah", "Fawad Ahmad"],
  claculteAge: function (birthYear) {
    return ` ${this.name} is ${2022 - this.birthYear}`;
  },
};

// we can access every object property with  .
console.log(person.name);
console.log(person["lastName"]);

//set object property
person.fatherName = "Ibrahim Shah Agha";

// we can loop over a object
for (let pro of Object.entries(person)) {
  console.log(pro);
}

// Object method

const age = person.claculteAge(1999);
console.log(age);

/////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
////////////////   ARRAYS ///////////////////////////////////////

// Creat an Array

const skills = [
  "Good Hand Writing",
  "Football",
  "Bicycling",
  "Reading Books Fast",
];

// GET AN ITEM Out of Array with index number and some methods

console.log(skills[0]);
/// first emlemnt of an array
console.log(skills.shift());
/// last element of an array
console.log(skills.pop());

/// add an element in to head of an array
console.log(skills.unshift("agha"));
/// add element in to an array ends
skills.push("Driving car");
console.log(skills);

/// Checking array length

console.log(skills.length);

////////////////////////////////////////////////////////////
/////             Looping Over an Array          //////////

// We Have Multiple loops for That

for (const s of skills) {
  console.log(s);
}

for (let i = 0; i < skills.length; i++) {
  console.log(skills[i]);
}

skills.forEach((s) => console.log(s));

/// and ETC

////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
////////////////   SETS ///////////////////////////////////////

// TO CREAT A SET

const myFood = new Set([
  "Pizza",
  "Burger",
  "Pasta",
  "Pizza",
  "Burger",
  "Kabli Polaw",
]);

// To Check if certin Item is here or not
console.log(myFood.has("Pizza"));
console.log(myFood.has("agha"));

// To add item to the set

myFood.add("Role");
myFood.add("Biryani");

// To Check Set Size
console.log(myFood.size);

// To delete certin item form the set
myFood.delete("Burger");
myFood.delete("Role");

// To loop over a set
for (const item of myFood) {
  console.log(item);
}

// WE CAN NOT GET A CERTIN VALUE OUT OF A SET BECUSE IT STORES UNIQE VALUES

console.log(myFood);

////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
////////////////   MAPS ///////////////////////////////////////

/// HOW TO CREAT A MAP
// first we creat a map and then we set values to it
const myMap = new Map();
myMap.set("name", "Mohammad Agah");
myMap.set("lastName", "Ibrahimi");

/// to chain methods in map

myMap
  .set("age", 23)
  .set("birthYear", 1999)
  .set(true, "Student")
  .set(false, "Not A Student")
  .set(1, "Computer");

/// To Get A Certine Vlaue Out Of A Map
console.log(myMap.get("birthYear"));
console.log(myMap.get(1));

/// To Check if a certine Vlaue is There or not
console.log(myMap.has("name"));
console.log(myMap.has("lastName"));
console.log(myMap.has("fatherName"));

/// To Delete a certine item out of a map
console.log(myMap.delete(true));
console.log(myMap.delete(1));

/// To Check A map's Size
console.log(myMap.size);

/// to Clear All MAP ITEMS
// console.log(myMap.clear());

/// to Loop over a Map
for (const [key, value] of myMap) {
  console.log(`${key} : ${value}`);
}

console.log(myMap);
