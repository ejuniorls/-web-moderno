// factory simples
function criarProdutro(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProdutro('notebook', 2199.00))
console.log(criarProdutro('ipad', 3199.00))