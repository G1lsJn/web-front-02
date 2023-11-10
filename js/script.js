// querySelector vai no HTML e seleciona o elemento com o ID(#) ou uma classe(.)
const buttonMedicamentos    = document.querySelector("#medicamentos");
const listaRemedios         = document.querySelector(".remedios");

// VALIDAÇÃO DO FORMULARIO
// Variaveis da validação
const campoNome         = document.querySelector("#nome");
const campoCidade       = document.querySelector("#cidade");
const buttonValidacao   = document.querySelector("button");

// Função pra limpar os campos
function clearForm(){
    campoNome.value = '';
    campoCidade.value = '';
}

// Função da validação
buttonValidacao.addEventListener("click", function(event){

    // Previne problemas gerados pelo bwoser
    event.preventDefault();
        // console.log("Aqui é o evento", event);
        // console.log(campoNome.value);

    if (campoNome.value.trim() === ''){
        // == -> verifica só o valor
        // === -> verifica o tipo e o valor

        // trim() -> arranca qualquer tipo de espaço da string
        alert("Preencha o campo nome");
        return false;
    }

    if (campoCidade.value.trim() === ''){
        alert("Preencha o campo cidade");
        return false;
    }

    // Chamando a funçao Limpa o campo
    clearForm();

})

// REMÉDIO
// selecionando     fica atendo     quando clicar       faz a função
buttonMedicamentos.addEventListener("click", function(){
    // classList manipula uma classe do CSS
    listaRemedios.classList.add("d-block");
})
