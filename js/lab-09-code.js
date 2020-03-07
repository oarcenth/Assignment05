/*eslint-env browser*/



function display_menu() {
    "use strict";
    window.console.log("Product Inventory Management System");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("view - View all products");
    window.console.log("update - Update stock");
    window.console.log("exit - Exit the program");
    window.console.log("");
}
function display(inventory) {
    "use strict";
    var i = 1;
    inventory.forEach(function (item) {
        window.console.log(String(i) + "." + item);
        i += 1;
    });
    /*
    window.console.log(inventory[0]["sku"] + " " + inventory[0]["product"] + " " + inventory[0]["quantity"] + " " + "$" + inventory[0]["cost"] + " ");
    window.console.log(inventory[1]["sku"] + " " + inventory[1]["product"] + " " + inventory[1]["quantity"] + " " + "$" + inventory[1]["cost"] + " ");
    window.console.log(inventory[2]["sku"] + " " + inventory[2]["product"] + " " + inventory[2]["quantity"] + " " + "$" + inventory[2]["cost"] + " ");
    window.console.log(inventory[3]["sku"] + " " + inventory[3]["product"] + " " + inventory[3]["quantity"] + " " + "$" + inventory[3]["cost"] + " ");
    window.console.log(inventory[4]["sku"] + " " + inventory[4]["product"] + " " + inventory[4]["quantity"] + " " + "$" + inventory[4]["cost"] + " ");
*/
window.console.log(" ");
}
    
    
function update(inventory) {
    "use strict";
    var prod_sku = window.prompt("Please enter product sku");
    var sku_quantity = window.prompt("Please enter product quantity");
    var i;
    for (i = 0; i < inventory.length; i += 1) {
        if (prod_sku === (inventory[i][0])) {
            inventory[i][2] = "(" + sku_quantity + ")";
            break;
        }
    }
localStorage.setItem("sku", prod_sku);
localStorage.setItem("quantity", sku_quantity);
display(inventory);
window.console.log(" ");
}




function main() {
    "use srict";
    var inventory, command;
    
    
    display_menu();
    /*
    var inventory = [];
    inventory[0] = {sku:2233, product:"Hat", quantity:(12), cost:parseFloat(14.99)};
    inventory[1] = {sku:3223, product:"Socks", quantity:(36), cost:parseFloat(9.99)};
    inventory[2] = {sku:4824, product:"Shirt", quantity:(10), cost:parseFloat(15.99)};
    inventory[3] = {sku:6343, product:"Jeans", quantity:(22), cost:parseFloat(39.99)};
    inventory[4] = {sku:9382, product:"Jacket", quantity:(5), cost:parseFloat(49.99)};
    */
    inventory = [];
    var product1 = [2233, "Hat", "(12)", "$14.99"];
    var product2 = [3223, "Socks", "(36)", "$9.99"];
    var product3 = [4824, "Shirt", "(10)", "$15.99"];
    var product4 = [6343, "Jeans", "(22)", "$39.99"];
    var product5 = [9382, "Jacket", "(5)", "$49.99"];
    
    inventory[0] = product1;
    inventory[1] = product2;
    inventory[2] = product3;
    inventory[3] = product4;
    inventory[4] = product5;
    
    while (true) {
        command = window.prompt("Enter Command");
        if (command !== null) {
            if (command === "view") {
                display(inventory);
            } else if (command === "update") {
                update(inventory);
            } else if (command === "exit") {
                break;
            } else {
                window.alert("That is not a valid command")
            }
        } else {
            break;
        }
    }
    window.console.log("Program terminated");   
}
main();