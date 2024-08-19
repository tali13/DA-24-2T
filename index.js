//verifica se e par ou impar 

let numero = prompt("digite um numero")



if(numero%2 == 0){
 console.log("Par")
} else if(numero%2 == 1){
console.log("Impar")
} else {console.log('erro, valor fracionado')
}
/*  
|   caso teste       | dado de entrada   |   saida esterada     | resultado
| 1                   |     56           |     par              |par
|  2                  |   0,8            |        par           | 
|   3                 |   -42            |           par        |par
|    4                |   6545           |             impar    |impar
|     5               |    37            |              impar   |impar
*/
