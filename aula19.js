const pessoa ={
    nome:"jake",
     apelido:["jakezinho","ja","killer"]
};
function mensagem(objeto){
    console.log(`eu sou ${objeto.nome},
        mas pode me chamar de:${objeto.apelido[0]},
        ${objeto.apelido[2]},${objeto.apelido[1]}.`);
}
mensagem(pessoa);
const novoUsuario={
    ...pessoa,
       apelido:['tey','teu']
};
mensagem(novoUsuario)
const pessoa1 ={
    nome:"jake",
    idade:22,
    profissao:"programador"
};
const pessoa2 ={
    nome:"taylor",
    idade:26,
    profissao:"metalurgico"
}
function informacoes(objeto){
    const arrayPessoa=[
     objeto.nome,
     objeto.nome.length,
      objeto.idade,
        objeto.profissao,
         objeto.profissao.length
    ]
    return arrayPessoa;
}

console.log(informacoes(pessoa1));
console.log(informacoes(pessoa2));
let carrinho = [];
const fruta1 ={
    nome:"tomate",
    disponibilidade: true
};
const fruta2 = {
  nome:"banana",
   disponibilidade: true
};
const fruta3 ={
    nome:"manga",
     disponibilidade: true
};
adiociona(fruta);{
    carrinho.push(fruta);
}

adiociona(fruta1);
adiociona(fruta2);
adiociona(fruta3);

console.log(carrinho);

                                                                         
                                                       