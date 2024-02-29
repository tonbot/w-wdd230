/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
var myName = "TOYIN THEOPHILUS AJIBOYE";

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.getElementById("name").innerHTML= myName;
// Step 3: declare and instantiate a variable to hold the current year
var currentYear = 2022;
// Step 4: place the value of the current year variable into the HTML file
document.getElementById("year").innerHTML= currentYear;
// Step 5: declare and instantiate a variable to hold the name of your picture
var currentYear = 2022;
// Step 6: copy your image into the "images" folder
var myImage = "images/toyin(face1).jpg";
// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector("img").src = myImage;



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
var myFoodList = ["Rice", "beans"];

// Step 2: place the values of the favorite foods variable into the HTML file
document.getElementById("food").innerHTML= myFoodList[0];

// Step 3: declare and instantiate a variable to hold another favorite food
var myFoodList2 = ["Amala"];

// Step 4: add the variable holding another favorite food to the favorite food array
myFoodList.push(myFoodList2[0]);

// Step 5: repeat Step 2
document.getElementById("food").innerHTML= myFoodList[0];

// Step 6: remove the first element in the favorite foods array
myFoodList.shift();

// Step 7: repeat Step 2
document.getElementById("food").innerHTML= myFoodList[0];

// Step 8: remove the last element in the favorite foods array
myFoodList.pop();

// Step 7: repeat Step 2
document.getElementById("food").innerHTML= myFoodList[0];


