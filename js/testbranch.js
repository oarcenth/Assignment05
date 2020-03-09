// function displayMenu() {
//     window.console.log("The Inventory Management App");
//     window.console.log("");
//     window.console.log("COMMAND MENU");
//     window.console.log("view - View all products");
//     window.console.log("update - Update Products");
//     window.console.log("del - Delete employee");
//     window.console.log("exit - Exit the application");
// }

// function update(chingaderas){ // need to find out how to update a specific part of 2 dimensional array 
//     let sku = window.prompt("Enter the Sku of the product");
//     for (var i = 0; i <chingaderas.lenght; i++) {
//         if (sku == chingaderas[i][0]) {
//             window.console.log("you picked the right thing brother");
//         }
//     }
    
    
    

// }




// function main (){
//     let inventory; 
//     let command; 
//     displayMenu();
//     inventory = [
//                     [2233, "Hat",    12, "$14.99"],
//                     [3223, "Socks",  36, "$9.99"],
//                     [4824, "Shirt",  10, "$15.99"],
//                     [6343, "Jeans",  22, "$39.99"],
//                     [9382, "Jacket", 5,  "$49.99"],
//                 ]

//     view(inventory); 
//     // update(inventory); 
//     update(inventory);

// }

// main(); 



function view(chingaderas){ 
        "use strict";
        var i = 1;
        chingaderas.forEach(function (thing) {
            window.console.log(String(i) + ". " + thing);
            i += 1;
        });
        window.console.log("");
    }
                

function update(chingaderas) { // need to find out how to update a specific part of 2 dimensional array 
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
                        window.console.log("The new inventory of " + chingaderas[i][1] + "is now " + chingaderas[i][2]);
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


var main = function () {
        var inventory = [
                [2233, "Hat",    12, "$14.99"],
                [3223, "Socks",  36, "$9.99"],
                [4824, "Shirt",  10, "$15.99"],
                [6343, "Jeans",  22, "$39.99"],
                [9382, "Jacket", 5,  "$49.99"],
            ];
        
        "use strict"; 
        let command; 

        while (true) {
                command = window.prompt("What would you like to do? (view, update, exit)");
                if (command == "view") { // if to view inventory
                        view(inventory); 
                } else if (command == "update") { // to run the update function 
                        update(inventory); 
                } else if (command == "exit"){ // to exit the program 
                        break; 
                } 
                else {
                        window.console.log("invalid entry"); 
                }
        
                
        }
        window.console.log("Program has ended"); 
}

main(); 

 