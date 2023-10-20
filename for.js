const frutas = ["maça", "banana", "uva", "pera"];

// Exemplo 1

    console.log("Exemplo 1 \n")
    console.table(frutas)

    //  length trás o tamanho da lista

    for(let i = 0; i < frutas.length; i++) {
        
        // $ - identifica uma variável
        console.log(`${i} - ${frutas[i]}`)

    }

// Exemplo 2

    console.log("\nExemplo 2 \n")

    for (let fruta of frutas) {

        console.log(fruta)

    }