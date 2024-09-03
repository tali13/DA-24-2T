
/*let valor=0//let esta criando uma variavel 
for (let i = 0; i < 5; i++){
    //let esta criando a variavel i e acrescentando o valor dele como 0 ,i esta sendo compardo com 5 
    valor +=i 
}//cada volta que o ele der acrescentara mais um a cada loop ate dar 
console.log(valor)

const lista = [10,11,12,15,18,19,21,23,25,27,30]
for(let numero of lista){
    if (numero>18){
        console.log(numero)
    }
}
//const esta criando uma variavel chamando de lista e esta lista esta contendo uma liste de numeros
//for e um loop ele so ira para ate o valor desejado 
//para acessar o indice o numero deve ser maior que o 18
*/
/*
const quantidadeTotal = Number(prompt("digite a quantidade de linhas"))
let quantidadeAtual = 0
while(quantidadeAtual<quantidadeTotal){
    let linha = ""
    for (let asteriscos = 0;asteriscos<quantidadeAtual+1;asteriscos++){
        linha+="*"
    }
    console.log(linha)
    quantidadeAtual++
}//ele criara a quantidade de linhas desejadas
*/


let arrayOriginal = [15, 8, 3, 9, 4, 12, 16, 74, 65, 31]
let arrayPares = []
for (let valor of arrayOriginal) {
    console.log(valor)

}

for (let valor of arrayOriginal) {
    valor /= 10
    console.log(valor)
}


for (let valor of arrayOriginal) {
    if (valor % 2 === 0) {
        arrayPares.push(valor)
    }
}
console.log(arrayPares)   
let frases = []

for (let i = 0; i < arrayPares.length; i++){
    frases.push("o elemento do index " + i + " é: " + arrayPares[i] )
}
console.log(frases)






















