/*eslint-env browser*/

var inventory;
var command;
//var inventory;
function displayMenu() {
    "use strict";
    window.console.log("Welcome to the Product Inventory Management System");
    window.console.log("COMMAND MENU");
    window.console.log("show - Show all productss");
//  window.console.log("add - Add a new products");
    window.console.log("update - Update amount in inventory");
    window.console.log("exit - Exit the application");
}

function showInventory(arg) {
    "use strict";
    arg.sort();
    var i = 1;
    arg.forEach(function (inventory) {
        window.console.log(i + ". " + inventory);
        i += 1;
    });
    window.console.log("");
}
/*
item = inventory
*/
function updateInventory(arg) {
    "use strict";
    var sku = window.prompt("Enter the SKU# of the item you would like to update");
    var successful = 0;
    for (var i = 0; i < arg.length; i++) {
        if (sku == arg[i][0]) {
            var currentStock = window.prompt("How many " + arg[i][1] + " are in stock?");
            successful = 1;
            if (isNaN(currentStock)) {
                alert("Invalid");
                updateInventory(arg);
            } else {
                arg[i][2] = parseInt(currentStock);
                window.console.log("The inventory of " + arg[i][1] + " is now " + arg[i][2]);
                localStorage.setItem("storedInventory", JSON.stringify(arg));
            }
        } else if (sku == null) {
            break;
        } 
    }
    if (successful == 0 && sku != null) {
        alert("SKU not found.");
        updateInventory(arg);
    }
}

function main() {
    "use strict";
    var inventory, command;
    displayMenu();
    if (localStorage.getItem("storedInventory") == null) {       
        inventory = [
            [2233, "Hat(s)", 12, 14.99],
            [3223, "Pair(s) of Socks", 36, 9.99],
            [4824, "Shirt(s)", 10, 15.99],
            [6343, "Pair(s) of Jeans", 22, 39.99],
            [9382, "Jacket(s)", 5, 49.99]
        ];
    } 
    else inventory = JSON.parse(localStorage.getItem("storedInventory"));
    while (true) {
        command = window.prompt("SHOW, UPDATE, OR EXIT?");
        if (command !== null) {
            if (command == "show") {
                showInventory;
            } else if (command == "update") {
                updateInventory(inventory);
            } else if (command == "exit" || command == "break") {
                break;
            }
            else {
                window.console.log("Invalid command.");
            }
        }
    }
    window.console.log("program terminated");
}
main();