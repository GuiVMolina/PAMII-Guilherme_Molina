var adição
var subtracao
var multiplicação
var divisão
var potencia
var raiz

function funcaoAdição (a, b) {
    return a + b
}

function funcaoSubtracao(a, b) {
    return a - b
}

function funcaoMultiplicacao(a, b) {
    return a * b
}

function funcaoDivisao(a, b) {
    return a / b
}

function funcaoPotencia(a, b) {
    return Math.pow(a, b)
}

function funcaoRaiz(a) {
    return Math.sqrt(a)
}

console.log(funcaoAdição(20, 5))
console.log(funcaoSubtracao(75, 50))
console.log(funcaoMultiplicacao(5, 5))
console.log(funcaoDivisao(100, 4))
console.log(funcaoPotencia(5, 2))
console.log(funcaoRaiz(625))