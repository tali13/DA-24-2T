readline = require('readline-sync')
let nome 
let idade 
console.log(typeof nome,typeof idade)
// porque não tem nada 

nome = readline.question("olá,qual seu nome?")
idade = readline.questionInt("quantos anos você tem?")
 // porque um e number e o outro e um string 
console.log(typeof nome,typeof idade)

console.log("ola",nome,"voce tem",idade,"anos")