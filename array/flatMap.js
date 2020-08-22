const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    },
    {
        nome: 'Ana',
        nota: 9.3
    }]
}, {
    noame: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.1
    },
    {
        nome: 'Roberto',
        nota: 9.3
    }]
}]

const getNotaDoALuno = aluno => aluno.nota
const getNotasDoALuno = turma => turma.alunos.map(getNotaDoALuno)

const notas1 = escola.map(getNotasDoALuno)
console.log(notas1)

console.log([].concat([8.1, 9.3], [8.1, 9.3]));

Array.prototype.flatMap = function (callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDoALuno)
console.log(notas2)
