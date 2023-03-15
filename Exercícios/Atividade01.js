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

function funcaoRaizQuadrada(a) {
    return Math.sqrt(a)
}

function funcaoRaizCubica(b) {
    return Math.cbrt(b)
}

console.log("Os Operadores:")
console.log("Adição: 20 + 5 = ", funcaoAdição(20, 5))
console.log("Subtração: 75 - 50 = ", funcaoSubtracao(75, 50))
console.log("Multiplicação: 5 × 5 = ", funcaoMultiplicacao(5, 5))
console.log("Divisão: 100 / 4 = ", funcaoDivisao(100, 4))
console.log("Potenciação: 5² = ", funcaoPotencia(5, 2))
console.log("Raiz Quadrada: √625 = ", funcaoRaizQuadrada(625))
console.log("Raiz Cúbica: ∛15625 = ", funcaoRaizCubica(15625))