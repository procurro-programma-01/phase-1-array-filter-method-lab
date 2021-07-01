// Code your solution here
/* const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'] */


/* drivers.filter(function findMatching(drivers, name){
return value === "Bobby";
}) */

function findMatching(drivers, lookFor ){
    return drivers.filter(nameOfItem => nameOfItem.toLowerCase() === lookFor.toLowerCase() )
}
function fuzzyMatch(drivers, lookFor){
    return drivers.filter(nameOfItem => nameOfItem.startsWith(lookFor) )
}




/* /Code your solution here
//driverName.toUpperCase() === name.toUpperCase();

let drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

 function findMatching(drivers,string){
 return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase()) 
 findMatching();

function fuzzyMatch(drivers,string){
    return  drivers.filter(driver =>driver.startsWith(string));
} */

function matchName(drivers,lookFor){
    {
        return drivers.filter(nameOfItem => nameOfItem.name === lookFor)
    }
} 