const formulario = document.getElementById(`formulario`)


formulario.addEventListener(`submit` , function(e) {
    e.preventDefault()
    const valorIntA = parseInt(document.getElementById(`num1`).value)
    const valorIntB = parseInt(document.getElementById(`num2`).value)
    const resultado = valorIntA < valorIntB
    const resultadoIgual = valorIntA == valorIntB
    const msgNum1Maior = `Infelizmente <b>${valorIntA}</b> é um valor maior que <b>${valorIntB}</b>.`
    const msgNum2Maior = `Parabéns <b>${valorIntB}</b> é um valor maior que o <b>${valorIntA}</b>.`
    const msgNumIgual = `O valor de <b>${valorIntA}</b> é igual ao valor de <b>${valorIntB}</b>.`
    const msgResultado = document.querySelector(`.resultado`)


    if (resultadoIgual) {
        msgResultado.innerHTML = msgNumIgual
        msgResultdo.style.color = `blue`
    } else if (resultado) {
        msgResultado.innerHTML =  msgNum2Maior
        msgResultado.style.color = `gold`
    } else {
        msgResultado.innerHTML = msgNum1Maior
        msgResultado.style.color = `red`
    }
})





