const readline = require("readline-sync")

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

let numberOfComputers = 0;

for(let i = 0; i < officeItems.length; i++){
    if(officeItems[i] ==="computer"){
        numberOfComputers++
    }
}
console.log(numberOfComputers)