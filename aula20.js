/*let matriz = [
    [1,2,3],
    [4,5,6]
]
console.log(matriz[0][2])
*/



/*
let matriz1 = [
    [10,20,30],
    [40,50,60],
    [70,80,90]
];
console.log(matriz1[1][0])//valor 40
console.log(matriz1[2][2])
console.log(matriz1[0][1])
let matriz3 = []
matriz3[0]=[1,2,2]
matriz3[1]=[4,5,6]
matriz3[2]=[7,8,9]
*/
/*
let jogoDaVelha = []
jogoDaVelha[0]=[0,0,0]
jogoDaVelha[1]=[0,0,0]
jogoDaVelha[2]=[0,0,0]

jogoDaVelha[1][2]=1
console.log(jogoDaVelha[0])
console.log(jogoDaVelha[1])
console.log(jogoDaVelha[2])
*/
/*
let n =[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
for(let i=0; i<n.length;i++){
for(let j=0; j<n[i].length;j++){
    console.log(n[i][j])
}
}
*/
/*
let n =[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
for(let i=0; i<n.length;i++){
for(let j=0; j<n[i].length;j++){
    soma +=n[i][j]
}
}

 console.log(soma)
*/
/*
let cafe = [
    [1, 2, 3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13, 14, 15,16]
]
function soma(n) {
    let valor = 0
    for (let i = 0; i < n.length; i++) {
        for (let j = 0; j < n[i].length; j++) {
            valor += n[i][j]
        }
    }
    console.log(valor)
}
soma(cafe)
*/
let tabuleiro=[
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]

]
function posisonarNavil(){
    tabuleiro[9][8]=1
    tabuleiro[5][9]=1
    tabuleiro[4][7]=1
    tabuleiro[1][6]=1

}
let soma =0
for (let i=0; i<tabuleiro.length; i++){
    for(let j=0; j<tabuleiro[i].length;j++)
        quantidade+=tabuleiro[i][j]
}
let escolha=Number(prompt("escolha linha"))
let segundaEscolha=Number(prompt("escolha coluna"))

function verificar(linha,coluna){
    
}
































































































































