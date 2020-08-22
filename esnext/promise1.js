const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMaiuscula = letra => letra.toLowerCase()

new Promise(function (resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Denise'])
})
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMaiuscula)
    .then(console.log)