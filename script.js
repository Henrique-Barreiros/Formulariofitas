const produtosSelecionados = [];
let valor = 0;
let numero = document.getElementById("produtosselecionados");

function acrescentar() {
    valor++;
    document.getElementById("valor").innerText = valor;
}

function decrescer() {
    if (valor != 0) {
        valor--;
        document.getElementById("valor").innerText = valor;
    } else valor = 0;
}

function enviar() {

    const listaCheckout = document.getElementById("produtosSelecionados");
    console.log(listaCheckout)
    const lista = document.getElementsByClassName("produtos");
    for (item of lista) {
        item.checked &&
            produtosSelecionados.push({
                produto: item.value.split(",")[0],
                imagem: item.value.split(",")[1],
            });
    }

    if (valor > 0 && produtosSelecionados.length > 0) {
        document.getElementById("modal").classList.add("active");

        produtosSelecionados.forEach((item) => {
            const li = document.createElement("li");// cria a li
            const conteudoNovo = document.createTextNode(item.produto);// coloca o nome do produto dentro dela
            const img = document.createElement("img");// cria uma tag img
            img.src = item.imagem;
            img.width = 50;
            li.appendChild(img);
            li.appendChild(conteudoNovo);
            listaCheckout.append(li);
        })

        const quantidade = document.getElementById('quantidade');
        const quantidadedoproduto = document.createTextNode(valor);
        quantidade.appendChild(quantidadedoproduto);



    } else {
        alert("Escolher ao menos uma Fita e uma quantidade");
    }
}

