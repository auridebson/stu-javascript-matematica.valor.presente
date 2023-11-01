
const campo_pv = document.querySelector("#campo_pv")
const campo_pmt = document.querySelector("#campo_pmt")
const campo_i = document.querySelector("#campo_i")
const campo_n = document.querySelector("#campo_n")

const container_vp_resultado = document.querySelector(".container_vp_resultado")
const btnCalcula = document.querySelector(".btnCalcula")


// VP= PMT / (1+i)n


function valorPresente(pmt,i,n) {
    pmt = Number(campo_pmt.value)
    i = Number(campo_i.value)
    n = Number(campo_n.value)

    const resultado = pmt / (1+i)**n

    console.log(resultado)
    container_vp_resultado.innerHTML = 'asdfsdf'

    return resultado
}


btnCalcula.addEventListener("click", valorPresente)