const currentPlayer = document.querySelector(".currentPlayer");

let selected;
let player = "X";
let positions =[
[1,2,3],
[4,5,6],
[7,8,9],
[5,3,8],
[4,6,1],
[3,5,6],
[6,3,8],
[8,9,7],
];
function init(){
    selected =[];

    currentPlayer.innerHTML = `E A VEZ DO JOGADOR:${player}`;
    Document.querySelectorAll(".game button").forEach((item)=>{
        item.innerHTML ="";
        item.addEventListener("click",newmore);
    });
}

init();
function newmore(e){
    const index = e.target.getAttribute("data-i");
    e.target.innerHTML=player;
    e.target.removeEventListener("click",newmore);
    selected[index]=player;
setTimeout(()=>{
    check()
},[100]);

player=player==="x"?"o":"x";
currentPlayer.innerHTML=`E A VEZ DO JOGADOR:${player}`;

}

function check(){
    let playerLastMove = player==="x"?"o":"x";


    const items = selected
    .map((item,i)=>[item,i])
    .filter((item)=> item[0] === playerLastMove)
    .map((item)=>Item[1]);

for(pos of positions){
 if (pos.every((item) => items.includes(item))){
  alert("O JOGADOR'"+playerLastMove+"'GANHOU");
  init();
  return;
  }
 }
 if(selected.filter((item)=> item).length===9){
     alert("DEU EMPATE!");
     return;
 }
}



