function displayMenu() {
        window.console.log("The Inventory Management App");
        window.console.log("");
        window.console.log("COMMAND MENU");
        window.console.log("view - View all products");
        window.console.log("update - Update Products");
        window.console.log("exit - Exit the application");
}


function view(chingaderas){ 
    "use strict";
    var i = 1;
    chingaderas.forEach(function (thing) {
        window.console.log(String(i) + ". " + thing);
        i += 1;
    });
    window.console.log("");
}
            

function update(chingaderas) { 
    "use strict";
var sku = window.prompt("Enter the SKU# of the item you would like to update");
var changeMade = false;
for (var i = 0; i < chingaderas.length; i++) { 
    if (sku == chingaderas[i][0]) {
            var currentStock = window.prompt("How many " + chingaderas[i][1] + " are in stock?");
            changeMade = true;
            if (isNaN(currentStock)) {
                    window.alert("Invalid entry");
                    update(chingaderas);
            } else {
                    chingaderas[i][2] = parseInt(currentStock);
                    window.console.log("The new inventory of " + chingaderas[i][1] +  "(s) is now " + chingaderas[i][2]);
            }
    } else if (sku == null) {
            break
    }
}
if (changeMade == false & sku != null) {
        window.alert("Sku number not found")
        update(chingaderas);
}
}

var inventory = [
    [2233, "Hat",    12, "$14.99"],
    [3223, "Socks",  36, "$9.99"],
    [4824, "Shirt",  10, "$15.99"],
    [6343, "Jeans",  22, "$39.99"],
    [9382, "Jacket", 5,  "$49.99"],
];



var main = function () {
    "use strict";
   window.console.log("Say something")
    
    let command; 
    displayMenu();
    while (true) {
        command = window.prompt("Enter Command (view, update, exit)");
        if (command !== null) {
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
    window.console.log("Program done");   

}


window.addEventListener("click", main);