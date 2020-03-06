//STEP 1
// let movies = ["Forrest Gump", "Lost In Translation", "Drive", "Enter The Void", "Chungking Express"]
// window.console.log("My top five movies are " + movies); 
//STEP 2
// var movies = new Array(5);
// movies[0] = "Forrest Gump"; 
// movies[1] = "Lost In Translation";
// movies[2] = "Drive";
// movies[3] = "Enter The Void";
// movies[4] = "Chungking Express";
// window.console.log(movies[0]);
//STEP 3 /
// var movies = new Array(5);
// movies[0] = "Forrest Gump"; 
// movies[1] = "Lost In Translation";
// movies[2] = "Drive";
// movies[3] = "Enter The Void";
// movies[4] = "Chungking Express";
// window.console.log(movies[0]);
// movies[4] = "Parasite";
// window.console.log(movies.length);

//STEP 4 LITERAL NOTATION
// let movies = ["Forrest Gump", "Lost In Translation", "Drive", "Enter The Void", "Chungking Express"]
// delete movies[0]; 
// window.console.log(movies); 

//STEP 5
// let i; 
// let movies = ["Forrest Gump", "Lost In Translation", "Drive", "Enter The Void", "Chungking Express", "Parasite", "Apocalypse Now"];
// for (i = 0; i < movies.length; i += 1) {
//     window.console.log(movies[i]); 
// };
//STEP 6
// let i; 
// let movies = ["Forrest Gump", "Lost In Translation", "Drive", "Enter The Void", "Chungking Express", "Parasite", "Apocalypse Now"];
// for (i in movies) {
//     window.console.log(movies[i]); 
// }
//STEP 7
// let i; 
// let movies = ["Forrest Gump", "Lost In Translation", "Drive", "Enter The Void", "Chungking Express", "Parasite", "Apocalypse Now"];
// for (i in movies) {
//     window.console.log(movies[i]); 
// }

//STEP 8

// let i; 
// let movies = ["Forrest Gump", "Lost In Translation", "Drive", "Enter The Void", "Chungking Express", "Parasite", "Apocalypse Now"];
// let leastFavMovies = ["Marley And Me", "Toy Story 4", "Sonic"]
// window.console.log("Movies I like:");
// window.console.log("");
// for (i = 0; i < movies.length; i += 1) {
//         window.console.log(movies[i]); 
// };
// window.console.log("")
// window.console.log("Movies I regret watching:")
// window.console.log("");
// for (i = 0; i < leastFavMovies.length; i += 1) {
//     window.console.log(leastFavMovies[i]); 
// };


//STEP 9

// let movies = ["Forrest Gump", "Lost In Translation", "Drive", "Enter The Void", "Chungking Express", "Parasite", "Apocalypse Now"];
// let leastFavMovies = ["Marley And Me", "Toy Story 4", "Sonic"];
// movies = movies.concat(leastFavMovies);
// window.console.log( movies.sort().reverse());


//STEP 10
// let movies = ["Forrest Gump", "Lost In Translation", "Drive", "Enter The Void", "Chungking Express", "Parasite", "Apocalypse Now"];
// let leastFavMovies = ["Marley And Me", "Toy Story 4", "Sonic"];
// movies = movies.concat(leastFavMovies);
// window.console.log(movies.reverse())
// window.console.log(movies.pop());

//STEP 11
// let movies = ["Forrest Gump", "Lost In Translation", "Drive", "Enter The Void", "Chungking Express", "Parasite", "Apocalypse Now"];
// let leastFavMovies = ["Marley And Me", "Toy Story 4", "Sonic"];
// movies = movies.concat(leastFavMovies);
// window.console.log(movies.reverse())
// window.console.log(movies.shift());
//STEP 12
// let movies = ["Forrest Gump", "Lost In Translation", "Drive", "Enter The Void", "Chungking Express", "Parasite", "Apocalypse Now"];
// let leastFavMovies = ["Marley And Me", "Toy Story 4", "Sonic"];
// movies = movies.concat(leastFavMovies);
// window.console.log("Index of movies I don't like");
// window.console.log("");
// window.console.log(movies.indexOf("Marley And Me"));
// window.console.log(movies.indexOf("Toy Story 4"));
// window.console.log(movies.indexOf("Sonic"));
// movies.splice(7, 3, "Top Gun", "Heat", "Rocky"); 
// window.console.log("My list without the bad movies")
// window.console.log("")
// window.console.log(movies)




//STEP 13  // THIS BECOMES A MULTIDEMNSIONAL ARRAY - Index bracket 0, index bracket 0 
// let employee1 = [];
// employee1["employeeId"] = 23;
// employee1["name"] = "Michael Gomez";
// employee1["title"] = "Clerk";
// employee1["department"] = "Accounting";
// employee1["currentlyEmployed"] = true;
// window.console.log(employee1["name"]);

// let employee2 = [];
// employee2["employeeId"] = 45;
// employee2["name"] = "Joe Hill ";
// employee2["title"] = "Manager";
// employee2["department"] = "Sales";
// employee2["currentlyEmployed"] = false;
// window.console.log(employee2["name"]);


// let employees = employee1.concat(employee2);
// window.console.log(employees["employee1"]);

//STEP 14

//STEP 15

//STEP 16
// let movies = [["Rambo", 1], ["Heat", 2], ["Drive", 3], ["Parasite", 4], ["Sonic", 5]]; 
// movies.forEach(function (item) {
//     window.console.log(item[0]); 
// });
//STEP 17
// let i; 
// let employees = ["Zak", "Jesssica", "Mark", "Fred", "Sally" ];

// function showEmployee(params){
//     window.console.log("Employees");
//     window.console.log("")
//     for (i = 0; i < params.length; i += 1) {
//             window.console.log(params[i]); 
//         };
    
// }

// showEmployee(employees); 

//STEP 18

//STEP 19

// function random_item (param){
//    return param[Math.floor(Math.random()*param.length)]; // get a random number between 0 and 1 and multiply it by the items in the array then rounded down to the 
// }

// var items = ["Mike", true, 23554, 344];
// window.console.log(random_item(items));



//STEP 20 

// function big_Number(param) {
//     return Math.max.apply(null,param); //.max finds the biggest number .apply(null, param) pases the array throug the function 
// }

// var items = [33, 4555, 31, 54 ]

// window.console.log(big_Number(items)); 