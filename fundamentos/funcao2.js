// armazena uma funcao em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(3, 9)

// armazena uma funcao arrow rm uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

const impriir2 = a => console.log(a)
impriir2('Legal!!')