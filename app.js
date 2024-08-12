let titulo = document.querySelector("h1");
titulo.innerHTML = "Jogo do Numéro";

let paragrafo = document.querySelector("p");
paragrafo.innerHTML = " Escolha um número entre 1 e 10";


// Criar uma função que exibe "Olá, mundo!" no console.
function exibirTexto() {
    console.log("Olá mundo !");
}

exibirTexto();


// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function exibirOlaNome() {
    console.log("Olá, ${nome}!");
}
exibirOlaNome("Alice");

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function calcularDobro(numero) {
    return numero * 2;
}
let resultadodoDobro = calcularDobro(5);
console.log(resultadoDobro);

// Criar uma função que recebe três números como parâmetros e retorna a média deles
function calcularMedia(a, b, c) {
    return (a + b + c) / 3;
}
let media = calcularMedia(4, 7, 10);
console.log(media);


// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function calcularmaior(a, b) {
    if (a < b) return (b)
    if (a > b) return (a)
}
let maior = calcularMaior(5, 10)
console.log(maior);

// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.
function quadrado(numero) {
    return numero * numero;
  }
  
  let resultado = quadrado(2);
  console.log(resultado); 