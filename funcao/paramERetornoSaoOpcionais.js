function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}`)
    } else {
        return area
    }
}

console.log(area(3, 5))
console.log(area(2))
console.log(area())
console.log(area(2, 5, 7, 3, 5))
console.log(area(5, 5))
