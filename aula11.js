/*
const num1 = Number(prompt("primeiro numero?"))
const num2 = Number(prompt("segundo numero"))
if(num1===num2){
    console.log("os numeros sao iguais")
}else if(num1>num2){
    console.log("o 1numero e maior q o segumdo numero")
}else{
    console.log("o numero 1 e maior que o numero 2")
}
*/
/*
let paisDeorigem=prompt("seu pais de origem")

switch(paisDeorigem){
    case 'Brasil':
        console.log("brasileiro")
        break
        case "Brasil":
            console.log("brasileiro")
            break
            case "Inglaterra":
                console.log("norte americano")
                break
                default :
                console.log("nenhuma nacionalidade")
                break
}
*/
/*
let pokemon=prompt("escolha seu pokemon")
switch(pokemon){
    case 'Eevee':
    console.log("Eevee foi escolhida")
    break
    case 'Lucario':
        console.log("lucario foi escolhido")
        case 'Piplup':
            console.log("piplup foi escolhido")
            break
            default:
                console.log("pokemon não identificado")
                break
}
*/
const respostaDousuario = prompt("digite o numero que vc qr testa")
const numero = Number(respostaDousuario)
//const e para textos
//const true
//let false
//if e else e si for ou n for
if (numero%2===0){
    console.log("passou no teste.")

}else{
    console.log("não passou no teste.")
}

let fruta = prompt("escolha a fruta")
let preço 
switch(fruta){
    case "laranja":
        preço= 3.5
        break;
        case "maça":
        preço = 2.25
        break
        case "uva":
             preço = 0.30
             break 
              case "pêra":
                preço = 5.5
                  break;// break para o item c.
            default:
                preço=5
                break
}
console.log("o preço da fruta",fruta,"e","R$",preço)
//o codigo serve para verificar o valor das frutas
//ex: o preço da fruta maça e R$ 2,25
//ex: o preço da fruta pêra e R$ 5












































