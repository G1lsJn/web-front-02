const button = document.querySelector("button");
const poupup = document.querySelector(".poupup-wrapper");

const clickOpen = function(){
    poupup.classList.add("d-block");
}

const poupupGeneral = function(event){
    // event-tag -> pega os elementos que estão sendo clicados
    // classList -> pega a primeira classe da tag
    const clickOfElement = event.target.classList[0];

    const clickNameArray = ["poupup-close", "poupup-link", "poupup-wrapper"];

    const isClassList = clickNameArray.includes(clickOfElement);
    // 
    if (isClassList){
        poupup.classList.remove("d-block");
    }

}

button.addEventListener("click", clickOpen);
poupup.addEventListener("click", poupupGeneral);

