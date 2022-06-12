const read = require('readline-sync')

const num1 = parseInt(read.question('What will be your first number? '))
const num2 = Number(read.question('What will be your second number? '))

console.log(num1 + num2)