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
    let items = window.prompt("Add the number of things you want");
    chingaderas.push(items);
    wincow.console.log(items, "was added");
    window.console.log("")
}


function view(chingaderas){ 
    let items; 
    for (items of chingaderas) {
        window.console.log(String(items))
    } 

}

function main (){
    let inventory; 
    let command; 
    displayMenu();
    inventory = [
                    [2233, "Hat",    12, "$14.99"],
                    [3223, "Socks",  36, "$9.99"],
                    [4824, "Shirt",  10, "$15.99"],
                    [6343, "Jeans",  22, "$39.99"],
                    [9382, "Jacket", 5,  "$49.99"],
                ]

    view(inventory); 
    update(inventory); 

}

main(); 


 