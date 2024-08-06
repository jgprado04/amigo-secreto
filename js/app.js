let lista = [];

function adicionar() {
    let nomeAmigo = document.querySelector("#nome-amigo");
    let nome = nomeAmigo.value;

    let tamanho = lista.length;

    let listaAmigos = document.querySelector("#lista-amigos");

    if(nome == "" || !isNaN(nome)) {
        alert("Insira uum nome corretamente!");
        nomeAmigo.value = "";
        nomeAmigo.focus();
        return;
    }

    lista.push(nome);

    let resposta = gerarResposta(tamanho);

    console.log("Ocorreu")

    listaAmigos.textContent = resposta;
    nomeAmigo.value = "";
    nomeAmigo.focus();
}

function gerarResposta(tamanho) {
    let resposta = lista.join(", ");
    return resposta;
}

function sortear() {
    if(lista.length <= 1) {
        alert("Por favor coloque mais uma pessoa para gerar o sorteio!");
        return;
    }

    embaralha(lista);
    let listSorteio = document.querySelector("#lista-sorteio");

    for(let i = 0; i < lista.length; i++) {
        if(i == lista.length - 1) {
            listSorteio.innerHTML += lista[i] + " --> " + lista[0] + "<br>";
            return;
        }
        listSorteio.innerHTML += lista[i] + " --> " + lista[i + 1] + "<br>";
    }

   
}


function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    location.reload()
}

