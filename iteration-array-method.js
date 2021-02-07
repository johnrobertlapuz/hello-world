//John Robert P. Lapuz
//Integrative Programming and Techniques

/*ITERATION METHODS*/

//for
var foods, text, fLen, i;
foods = ["BeefSteak", "SweetCorn", "Dumpling", "ChickenSkin"];
fLen = foods.length;

text = "<ul>";
for (i = 0; i < fLen; i++) {
  text += "<li>" + foods[i] + "</li>";
}
text += "</ul>";


//forEach
let languages = ['VSC', 'JS', 'PHP', 'C++'];

languages.forEach(element => {
  console.log(element)
});


//while 
//from i = 1 to 10
let g = 1, n = 10;
while (g <= n) {
    console.log(g);
    g += 1;
}


//for in, for of
let g = ['el1', 'el2', 'el3'];

g.addedProp = 'gProp';

// "key" are the property keys
for (let key in g) {
  console.log(key);
}
// "pVal" are the property values
for (let pVal of g) {
  console.log(pVal)
}

/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-/

/*ARRAY METHODS*/


//reduce

//counting the total of pets in the array.
var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

var petCounts = pets.reduce(function(obj, pet){
    if (!obj[pet]) {
        obj[pet] = 1;
    } else {
        obj[pet]++;
    }
    return obj;
}, {});

console.log(petCounts); 

//map
//getting the full names of each person in the array.
var Names = [
    {firstname : "Jett", lastname: "Albayalde"},
    {firstname : "Brandon", lastname: "Boyd"},
    {firstname : "Jaiho", lastname: "Capis"}
  ];
  
  function getFullName(item) {
    var fullname = [item.firstname,item.lastname].join(" ");
    return fullname;
  }
  
  function myFunction() {
    document.getElementById("demo").innerHTML = persons.map(getFullName);
  }

//filter
//using filter on array of participants and try to filter by their age.
//The name appears in the new array if the age is more than 18.
  var participants = [{ name: 'Anna', age: 19 },
{name: 'Nath', age: 17},
{name: 'Emily', age: 15},
{name: 'Ann', age: 14},
{name: 'Caroline', age: 24},
{name: 'Tyrone', age: 16}];
document.getElementById("test").innerHTML = participants.map(e => e.name + " -> "
 + e.age).join(', ');


function myFunction() {
    var result = participants.filter(participant => participant.age > 18);
    document.getElementById("test").innerHTML = result.map(e => e.name + " -> " 
    + e.age).join(', ');
}