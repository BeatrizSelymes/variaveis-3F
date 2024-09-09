let idade = 17;
const anoNascimento = 2007;
let anoAtual = 2024;
const nomeCompleto = "Beatriz Selymes"


anoAtual = anoAtual + 1;
idade = idade + 1;

console.log("Meu nome é " + nomeCompleto + " nascido no ano de " + anoNascimento + " e no ano atual "  + anoAtual + " completo " + idade + " anos");
console.log(anoAtual);
console.log(idade);

const listaDeDestinos = Array(
  " Buenos Aires",
  " Canada",
  " Tokyo",
  " Nova York",
  " Luxemburgo"
);

const idadeComprador = 18;

if(idadeComprador >= 18){
  console.log("Comprador maior de idade");
  console.log(" Destinos possiveis: " +  listaDeDestinos);
} else { 
  console.log("Comprador menor de idade");
  console.log("Você precisa ter 18 anos ou mais para comprar passagens. Por favor, peça ajuda a um adulto.");
}



