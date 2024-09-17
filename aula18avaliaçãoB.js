const personagem = {
    nome: 'sauron',
    idade: 54.960,
    classe: 'maia',
    nivel: 100,
    pontosDeVida: 100,
    habilidade: 'se materializar em diversas formas,seja ela humana,alfa ou ate algum animal como lobo ou serpente',
}
const personagem2 = {
    nome: 'aragorn',
    idade: 87,
    classe: 'patrulheiro',
    nivel: 85,
    pontosDeVida: 90,
    habilidade: 'guerreiro,rastreador e estrategista',
}
const personagem3 = {
    nome: 'gandalf',
    idade: 2.000,
    classe: 'maia',
    nivel: 100,
    pontosDeVida: 100,
    habilidade: 'é um mago de grande poder e sabedoria, capaz de realizar feitos extraordinários',
}

const personagem4 = {
    nome: 'tom bombadil',
    idade: 'desconhecida :(',
    classe: 'tolkien',
    nivel: 150,
    pontosDeVida: 100,
    habilidade: 'capacidade de resistir ao poder do Um Anel'
}

const personagens =[
    {nome:"sauron",idade:54.960,classe:'maia'},
    {nome:"aragorn",idade:87,classe:'patrulheiro'},
    {nome:"gandalf",idade:2.000,classe:'maia'},
    {nome:"tom bombadil",idade:"desconhecida ;(", classe:"tolkien"}
]

const menu = Number(prompt("Deseja criar personagem?(1), Deseja buscar personagem por nome(2)"))
switch(menu){
    case 1:
        //cadastrar personagem
        const nomeNovo = prompt("Digite o nome")

        const objetoPersonagem= {...personagem,nome:nomeNovo}
        personagens.push(objetoPersonagem)
        console.log(personagens)
        break;
    case 2:
        //buscar
        break;
    default:
        console.log("Opção inválida")
}