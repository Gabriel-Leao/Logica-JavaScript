const produtos = [{
    Nome: "Notebook",
    preco: 1200
},
{
    Nome: "xbox",
    preco: 500
},
{
    Nome: "carregador",
    preco: 200
}]
// Faz transformação do valor e retorna um novo array. no exemplo pega os preco dos produtos e multiplica por 5
const precoEmReais = produtos.map(obj => obj.preco * 5)
console.log(`Esse aqui é o preço dos produtos em reais ${precoEmReais}`)
console.log(produtos)

// a = acomulador vai somar o b.preci que percorre os precos de todo o array e retorna o total
const valorSomado = produtos.reduce((a, b) => a + b.preco, 0)
console.log(valorSomado)

// os dois junto vão multiplicar os precos dos produtos em 5 e depois soma-los retonando o total da soma
const totalEmReais = produtos.map(obj => obj.preco * 5).reduce((a, b) => a + b, 0)
console.log(totalEmReais)

const menor = produtos.filter((produto) => produto.preco <= 200)