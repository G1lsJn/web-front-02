// Criando variaveis 

// Dom é como se fosse uma arvore 
// document -> navega por essa arvore
// querySelector -> selecionar o elemento, nesse caso é uma classe, portanco começa com .

const tirarDiv = document.querySelector(".tirarDiv")
const voltarDiv = document.querySelector(".voltarDiv")
const card = document.querySelector(".card")

// Criando funções

// addEventListener -> escuta um evento

//                         Evento  Função anônima
tirarDiv.addEventListener("click", function(){
  card.style.display = "none"; 
})

voltarDiv.addEventListener("click", function(){
    card.style.display = "block";
})