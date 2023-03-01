const somar = (valor1, valor2) => {
    console.log(`Resultado: ${valor1 + valor2}`)
}

const subtrair = (valor1, valor2) => {
    console.log(`Resultado: ${valor1 - valor2}`)
}

const multiplicar = (valor1, valor2) => {
    console.log(`Resultado: ${valor1 * valor2}`)
}

const dividir = (valor1, valor2) => {
    console.log(`Resultado: ${valor1/valor2}`)
}

exports.calculo = somar
exports.calculo = subtrair
exports.calculo = multiplicar
exports.calculo = dividir