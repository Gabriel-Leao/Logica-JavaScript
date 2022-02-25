console.log(this)

const somar = function(n1, n2) {return n1 + n2}
// O método bind cria uma nova função que, quando chamada, tem sua palavra-chave this definida com o valor fornecido. no caso 1 enquanto o outro valor não foi defenido
const somar1 = somar.bind(null, 1)

console.log(somar(4, 5))
// realizara a somar 1 + 4, 0 5 será ignorado. O 4 é o n1, e o 1 n2
console.log(somar1(4, 5))

function func1(param1, param2) {
    console.log(param1, param2)
}

const func2 = func1.bind(null, 'param1Fixo')
func2('param2')
// O método call invoca uma função com um dado valor this  e argumentos passados individualmente.
const resultCall = somar1.call(null, 4, 5);
console.log(resultCall);