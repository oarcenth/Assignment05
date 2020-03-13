function displayMenu() {
    window.console.log("The Inventory Management App");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("view - View all products");
    window.console.log("update - Update Products");
    window.console.log("exit - Exit the application");
}


function view(chingaderas){ // use for each method to show the content of the array - chingaderas is the parameter you pass --> your array 
"use strict";
var i = 1;
chingaderas.forEach(function (thing) { //thing is the parameter that will pass through the function ==> the content of the array 
    window.console.log(String(i) + ". " + thing);
    i += 1;
});
window.console.log("");
}
        

function update(chingaderas) { 
"use strict";
var sku = window.prompt("Enter the SKU# of the item you would like to update"); // propmt to get the sku number
var changeMade = false; // dummy variable (lightswitch)
for (var i = 0; i < chingaderas.length; i++) {  // iterate throughg the arrau
if (sku == chingaderas[i][0]) { //if the sku entered matches any position 0 (sku) in the array 
        var currentStock = window.prompt("How many " + chingaderas[i][1] + " are in stock?"); // ask another question to input the number
        changeMade = true; // lightswitch on
        if (isNaN(currentStock)) { // if its not a number , then alert the number is invalid and run the update fx again
                window.alert("Invalid entry");
                update(chingaderas);
        } else {
                chingaderas[i][2] = parseInt(currentStock); // the numbered entered on current stock will change to the position 2 of array (number)
                window.console.log("The new inventory of " + chingaderas[i][1] +  "(s) is now " + chingaderas[i][2]);
                localStorage.setItem("storedInv", JSON.stringify(chingaderas)); // once the changes have been made to the inventory add them to the lcal storage but use stringingy to make it into a string (lcal storage can only take strings )
        }
} else if (sku == null) { // if the sku is null then break out of the function /// cannot put alert here that sku not valid because it you need to break or else does not run again
        break
}
}
if (changeMade == false & sku != null) { // iif the lightswitch is off then the sku is null then tell them the sku number is not valid 
    window.alert("Sku number not found")
    update(chingaderas);
}
}

var main = function () {

"use strict";

let command; 
if (localStorage.getItem("storedInv") == null) { // if statement to check if there is a "storedInv" value in the lcal storage, if there is none --> create the inventory below
var inventory = [
    [2233, "Hat",    12, "$14.99"],
    [3223, "Socks",  36, "$9.99"],
    [4824, "Shirt",  10, "$15.99"],
    [6343, "Jeans",  22, "$39.99"],
    [9382, "Jacket", 5,  "$49.99"],
    ];
}
else inventory = JSON.parse(localStorage.getItem("storedInv")); // if there is a "storedInv" value in the lcl storgaed, get and parse the item meaning that it will become an array again

displayMenu();
while (true) {
    command = window.prompt("Enter Command (view, update, exit)"); 
    if (command !== null) { // nested if statements to go through options  // will only run when you input a statement that is not null 
        if (command === "view") {
            view(inventory);
            
        } else if (command === "update") {
            update(inventory);
           
        } else if (command === "exit") {
            break; 
        } else {
            window.alert("That is not a valid command")
          
        }
    } 

}
window.console.log("Program done");   // command 

}


window.addEventListener("click", main); // event listener so the program runs when cliked on 