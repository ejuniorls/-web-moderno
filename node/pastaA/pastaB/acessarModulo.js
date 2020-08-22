const moduloA = require('../../moduloA')
console.log(moduloA.ola)

const moduloB = require('saudacao')
console.log(moduloB.ola)

// const c = require('./pastaC/index')
const c = require('./pastaC')
console.log(c.ola2)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom Dia')
    res.end()
}).listen(8080)

