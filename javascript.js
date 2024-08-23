const textArea = document.querySelector(".texto__codificar");
const mensagem = document.querySelector(".texto__conteudo");
const copiarUm = document.querySelector(".botao__mensagem")
document.getElementById("texto__conteudo").style.display = "none"
document.getElementById("conteinerUm").style.display = "none"

function trocarDeElementos(trocarElementos) {
    document.getElementById("conteiner").style.display = "none";
    document.getElementById("texto__conteudo").style.display = "flex"
    document.getElementById("conteinerUm").style.display = "flex"
    trocarElementos = trocarElementos;
    trocarElementos = "";
}


function botaoCodificar(trocarElementos) {
    const textoCodificado = codificar(textArea.value);
    mensagem.value = textoCodificado;
    textArea.value = "";
    trocarDeElementos(trocarElementos);
}

function codificar(stringCodificar) {
    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    console.table(matrizCodigo);
    stringCodificar = stringCodificar.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringCodificar.includes(matrizCodigo[i][0])) {
            stringCodificar = stringCodificar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringCodificar;
}

function botaoDecodificar() {
    const textoDecodificado = decodificar(textArea.value);
    mensagem.value = textoDecodificado;
    textArea.value = "";
}

function decodificar(stringDecodificar) {
    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringDecodificar = stringDecodificar.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDecodificar.includes(matrizCodigo[i][1])) {
            stringDecodificar = stringDecodificar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    
    return stringDecodificar;
}

function copiar() {
    const copiarTexto = mensagem;
    copiarTexto.select();
    document.execCommand("copy");
}