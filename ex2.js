function contar() {
    let inicio = document.getElementById("inicio").value;
    let final = document.getElementById("final").value;
    let passo = document.getElementById("passo").value;
    let resultado = document.getElementById("resultado");

    if (inicio === "" || final === "" || passo === "") {
        resultado.innerHTML = "Preencha todos os campos!";
        return;
    }

    let contagem = "";
    for (let i = Number(inicio); i <= Number(final); i += Number(passo)) {
        contagem += i + " ";
    }

    resultado.innerHTML = "Contagem: " + contagem;

}