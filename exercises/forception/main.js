const readline = require("readline-sync")

var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

var updatedArr = [];
function forception(){
    for(var i = 0; i < people.length; i++){
        updatedArr.push(people[i] + ":")
        for(var j = 0; j < alphabet.length; j++){
            updatedArr.push(alphabet[j].toUpperCase().split())
        }
        console.log(updatedArr);
    }
    return updatedArr;

}
forception();