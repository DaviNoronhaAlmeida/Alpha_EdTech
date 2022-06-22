document.querySelector("#add").addEventListener("click", add);
document.querySelector("#showproducts").addEventListener("click", showproducts);
let produtos = [];
let produto = new Object;
let i = 0;
let count = 0;
let k;

function add() {
    if (document.querySelector("#add").innerHTML === "INCLUIR PRODUTO") {
        if(document.querySelector("#name").value === "") {
        document.querySelector("#result").textContent = `Falha no cadastro do produto! Nome inválido!`;
        } else if(document.querySelector("#description").value === "") {
        document.querySelector("#result").textContent = `Falha no cadastro do produto! Descrição inválido!`;
        } else if(isNaN(parseFloat(document.querySelector("#value").value)) || parseFloat(document.querySelector("#value").value) <= 0) {
        document.querySelector("#result").textContent = `Falha no cadastro do produto! Valor inválido!`;
        } else {
        produto = {
            id: count,
            nome: document.querySelector("#name").value,
            descricao: document.querySelector("#description").value,
            valor: parseFloat(document.querySelector("#value").value).toFixed(2),
            incluidoEm: Date.now(),
        }
        document.querySelector("#result").textContent = `Produto ${produto.nome} incluído com sucesso!`;
        count++;
        produtos.push(produto);
        console.log(produtos);
        } 
    } else {
        update(k);
    }
    
}

function showproducts() {
    document.getElementById("table").style.display = "flex";
    i = 0;
    document.querySelector("tbody").innerHTML = "";
    while (i < produtos.length) {
        document.querySelector("tbody").innerHTML += `<tr>
            <td>${produtos[i].id}</td>
            <td>${produtos[i].nome}</td>
            <td>${produtos[i].valor}</td>
            <td><span class="material-icons" onClick="edit(${i})">edit</span></td>
            <td><span class="material-icons" onClick="erase(${i})">delete</span></td>
        </tr>`;
        i++;
    }
}

function erase(j) {
    while(j < produtos.length - 1) {
        produtos[j].id = produtos[j + 1].id;
        produtos[j].nome = produtos[j + 1].nome;
        produtos[j].descricao = produtos[j + 1].descricao;
        produtos[j].valor = produtos[j + 1].valor;
        produtos[j].incluidoEm = produtos[j + 1].incluidoEm;
        j++;
    }
    produtos.length = produtos.length - 1;
    showproducts();
}

function edit(j) {
    document.querySelector("#name").value = produtos[j].nome;
    document.querySelector("#description").value = produtos[j].descricao;
    document.querySelector("#value").value = produtos[j].valor;
    document.querySelector("#add").innerHTML = "ATUALIZAR";
    document.querySelector("#add").value = j;
    k = j;
}

function update(k) {
    produtos[k].nome = document.querySelector("#name").value,
    produtos[k].descricao = document.querySelector("#description").value,
    produtos[k].valor = parseFloat(document.querySelector("#value").value).toFixed(2),
    produtos[k].incluidoEm = Date.now(),

    document.querySelector("#add").innerHTML = "INCLUIR PRODUTO";
    document.querySelector("#add").value = "";
    showproducts();
}