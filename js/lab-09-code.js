
function displayMenu() {
    window.console.log("The Employee Management");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("view - View all products");
    window.console.log("add - Add employee");
    window.console.log("del - Delete employee");
    window.console.log("exit - Exit the application");
}

function show(employees) { // arr represents array
    let i = 1; // create an iterator so we can add a number to each name to in the list || i starts at 1 
    let employee; // each element of our employee list array 
    for (employee of employees) {
        window.console.log(String(i), employee);
        i += 1; 
    }
    window.console.log("");
}

function add(employees) {
    let employee = window.prompt("Enter the wage-slave\'s name");
    employees.push(employee);
    window.console.log(employee, "was added.");
    window.console.log("");

}

function del(employees) {
    let num; 
    let employee;
    num = parseInt(window.prompt("Enter the wage slave number to delete"));
    if (num < 1 || num > employees.length) {
        window.alert("Invalid employee number");
    } else {
        employee = employees.splice(num -1, 1); 
        window.console.log(employee, "was deleted");
        window.console.log("");
    }

}

function main() {
    let employeeList;
    let command;

    displayMenu();
    employeeList = ["Zak Ruvalcaba",
                     "Sally Smith",
                     "Aaron D. Tyres",
                     "Robin Banks",
                     "Amanda Hugginkiss",
                     "Constance Constapator"]
    // while loop to keep user spinnning in the loop waiting for suer to get out of it
    while (true) {
        command = window.prompt("Enter a value command");
        if (command !== null) {
            if (command === "view"){
                show(employeeList);
            } else if (command === "add") {
                add(employeeList);
            } else if (command === "delete") {
                del(employeeList);
            } else if (command === "exit") {
                break; 
            } else {
                window.alert("That is not a valid command"); 
            }
        } 
            else {
            break;
        }
    } 

}

main();