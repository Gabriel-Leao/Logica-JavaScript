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
},
{
    Nome: "controle",
    preco: 150
},
{
    Nome: "bateria",
    preco: 100
}]
// vai gerar um novo array com apenas os nomes dos produtos
const produtosNomes = produtos.map((produto) => produto.Nome)
console.log(`Esses são os meus produtos ${produtosNomes}`)
// Faz transformação do valor e retorna um novo array. no exemplo pega os preco dos produtos e multiplica por 5
const precoEmReais = produtos.map(obj => obj.preco * 5)
console.log(`Esse aqui é o preço dos produtos em reais ${precoEmReais}`)
// a = acomulador vai somar o b.preco que percorre os precos de todo o array e retorna o total
const valorSomado = produtos.reduce((a, b) => a + b.preco, 0)
console.log(`O valor total em dólares é US$ ${valorSomado.toFixed(2)}`)

// os dois junto vão multiplicar os precos dos produtos em 5 e depois soma-los retonando o total da soma
const totalEmReais = produtos.map(obj => obj.preco * 5).reduce((a, b) => a + b, 0)
console.log(`O valor total em reais é R$ ${totalEmReais.toFixed(2)}`)

// filtra todos os produtos com o valor menor ou igual a 200
const baratos = produtos.filter((produto) => produto.preco <= 200)
console.log(baratos)