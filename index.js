const prompt = require('prompt-sync');
const entrada = prompt ();


let idade = 17;
const anoNascimento = 2007;
let anoAtual = 2024;
const nomeCompleto = "Beatriz Santos Selymes";

console.log("Meu nome é " + nomeCompleto + "Nascido no ano de " + anoNascimento + " e no ano atual " + anoAtual + " completo " + idade + " anos")

anoAtual = anoAtual + 1;

console.log(anoAtual);

idade = idade + 1;
console.log(idade);


//Agência de viagens Los Angeles, Nova York, Alemanha, Londres, Tokio
const listaDeDestinos = new Array(
  " Grécia",    
  " Cacun",
  " Luxemburgo",
  " Hungria",
  " Tokyo"
);

var nomeComprador = entrada ("Digite seu nome:");
var idadeComprador = entrada ("Qual a sua idade?");


if(idadeComprador  >=18) {
   console.log(" Ola " + nomeComprador);
  console.log("Comprador maior de idade");
  console.log("destinos disponíveis: " + listaDeDestinos);
} else {
  console.log(" Ola " + nomeComprador);
  console.log(" Comprador menor de idade ");
  console.log(" Infelizmente você não pode comprar a passagem ");
}