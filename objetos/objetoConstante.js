// pessoa -> 123 -> {...}
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' }
// console.log(pessoa)

Object.freeze(pessoa)
pessoa.nome = 'Mario'
pessoa.end = 'Rua 123'
delete pessoa.nome

console.log(pessoa)
console.log(pessoa.nome)
