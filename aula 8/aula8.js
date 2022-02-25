const array = [0,1,2,3,4]

console.log(array)
// ... é o spread operator ele destrutura o array deixando apenas os valores para sobreescrever o spread operator tem que passar depois do spread
console.log(...array)

const array1 = [5,6,7,8,9]

// Junta os dois arrays em um só
const array2 = [...array, ...array1]
console.log(array2)
// Olhe a estrutura do min
console.log(Math.min(...array2))

function min(...values) {
    let minNumber = values[0]
    for (let i = 1; i < values.length; i++) {
        if (values[i] < minNumber) {
            minNumber = values[i]
        }
    }
}

console.log(min(1,2,3,4))
// Concatena tudo em um array só
const array3 = [0, ...array1, 10]
console.log(array3)

// destrutura o array e salva em outras variaves. caso não tenha mais valores no array ele salva um array vazio. se for um objeto tem que passar o nome do atributo e tem que usar as chaves {} no lugar dos colchetes
const [priElemento, segundo, terceiro, ...resto] = array1
console.log(priElemento, segundo, terceiro, resto)
console.log(`Este é o 1° elemento é ${priElemento}, o 2° elemento é ${segundo}, o 3° elemento é ${terceiro} e o  resto é ${resto}`)