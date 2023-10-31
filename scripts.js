
const campo_pv = document.querySelector("#campo_pv")
const campo_pmt = document.querySelector("#campo_pmt")
const campo_i = document.querySelector("#campo_i")
const campo_n = document.querySelector("#campo_n")

const container_vp_resultado = document.querySelector(".container_vp_resultado")
const btnCalcula = document.querySelector(".btnCalcula")


// VP= PMT / (1+i)n
function valorPresente(vp_pmt,i,n) {
    const resultado = vp_pmt / (1+i)**n
    return resultado
}

function somaCampos(pmt,i,n) {
    const somatorio = pmt.value
    console.log(somatorio)
    return somatorio
}

btnCalcula.addEventListener("click", () => alert(somaCampos()))