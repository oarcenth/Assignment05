function displayMenu() {
    window.console.log("The Inventory Management App");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("view - View all products");
    window.console.log("update - Update Products");
    window.console.log("del - Delete employee");
    window.console.log("exit - Exit the application");
}

function update(chingaderas){ // need to find out how to update a specific part of 2 dimensional array 
    var sku = window.prompt("Enter SKU # you want to change");
    var succesful = 0;
    for (var i = 0; i < chingaderas.lenght; i++) { // Iterator to go through the array 
        if (sku == chinganderas[i][0]) { // go through the array and if the sku entered equals the first position (sku), then continue and ask for the what will be the changed 
            var current = window.prompt("How many " + chingaderas[i][1] + " are in stock?");
            succesful  =  1; 
            if (isNaN(current)) {  // if not a number aler the user and rerun the update function
                alert("Not a number");
                update(chingaderas); 
            } else {
                chingaderas[i][2] = parseInt(current);
                window.console.log("The oventory of " + arg[i][1] + "is now " + arg[i[2]]);
            }
        } else if (sku == null) {
            window.console.log("say nothing")
        }
    }

    if (succesful == 0 && sku != null) {
        alert("Sku Not found.");
        update(chingaderas)
    }
    
    //iterate through the arrays 
    // var checkList = function (chingaderas) {chingaderas.forEach(function (row) {
    //     row.forEach(function(col){
    //         window.console.log("this has run")
    //     });
    //     console.log("----")
    // });
    // }

    // let checkItem = window.prompt("Search for the sku number"); 
    // if (checkItem === checkList(chingaderas)) {
    //     window.console.log("the sku number matches the inventory"); 
    // }
    
    
    
    // let items = window.prompt("Add the number of things you want");
    // chingaderas.push(items);
    // wincow.console.log(items, "was added");
    // window.console.log("")

}


function view(chingaderas){ 
    let items; 
    for (items of chingaderas) {
        window.console.log(String(items))
    } 

}

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

main(); 


 