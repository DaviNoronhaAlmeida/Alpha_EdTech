document.querySelector("#add").addEventListener("click", add);
document.querySelector("#showproducts").addEventListener("click", showproducts);
document.querySelector("#organizeName").addEventListener("click", organizeName);
document.querySelector("#organizeValue").addEventListener("click", organizeValue);
document.querySelector("#searchButton").addEventListener("click", search);
let produtos = [];
let produto = {};
let arr = {};
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
        } 
    } else {
        update(k);
    }   
}

function showproducts() {
    document.getElementById("table").style.display = "flex";
    document.querySelector("#searchResult").innerHTML = "";
    document.querySelector("tbody").innerHTML = "";
    for (let i = 0; i < produtos.length; i++) {
        document.querySelector("tbody").innerHTML += `<tr>
            <td>${produtos[i].id}</td>
            <td onClick="show(${produtos[i].id})">${produtos[i].nome}</td>
            <td>${produtos[i].valor}</td>
            <td><span class="material-icons" onClick="edit(${produtos[i].id})">edit</span></td>
            <td><span class="material-icons" onClick="erase(${produtos[i].id})">delete</span></td>
        </tr>`;
    }
}

function findIndex (id) {
    for (let i = 0; i < produtos.length; i++){
        for (const [key, value] of Object.entries(produtos[i])) {
            if (value == id){
                 return i
            }
        } 
    }
}

function erase(j) {
    let n = findIndex(j);
    produtos.splice(n, 1);
    showproducts();
}

function edit(j) {
    let n = findIndex(j);
    document.querySelector("#name").value = produtos[n].nome;
    document.querySelector("#description").value = produtos[n].descricao;
    document.querySelector("#value").value = produtos[n].valor;
    document.querySelector("#add").innerHTML = "ATUALIZAR";
    document.querySelector("#add").value = n;
    k = n;
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

function show(l) {
    let n = findIndex(l);
    let data = new Date(produtos[n].incluidoEm)
    let dia = data.getDate();
    let mes = data.getMonth() + 1;
    let ano = data.getFullYear();
    let hora = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();
    alert(`ID: ${produtos[n].id}, Nome: ${produtos[n].nome}, Descrição: ${produtos[n].descricao}, Valor: ${produtos[n].valor}, Incluido em: ${dia}/${mes}/${ano} - ${hora}:${minutos}:${segundos}`)
}

function organizeName() {
    produtos.sort((a, b) => {
        if(a.nome < b.nome) {
            return -1;
        }
        if(a.nome > b.nome) {
            return 1;
        }
        return 0;
    })
    showproducts();
}

function organizeValue() {
    produtos.sort((a, b) => {
        return a.valor - b.valor;
    })
    showproducts();   
}

function search() {
    let text = document.querySelector("#search").value;
    if(text === "") {
        showproducts();
        document.querySelector("#searchResult").innerHTML = ``;
    } else {
        arr = produtos.filter((produto) => {
            return produto.nome.includes(text) || produto.descricao.includes(text);  
        })
        document.getElementById("table").style.display = "flex";
        document.querySelector("tbody").innerHTML = "";
        for (let i = 0; i < arr.length; i++) {
            document.querySelector("tbody").innerHTML += `<tr>
                <td>${arr[i].id}</td>
                <td onClick="show(${arr[i].id})">${arr[i].nome}</td>
                <td>${arr[i].valor}</td>
                <td><span class="material-icons" onClick="edit(${arr[i].id})">edit</span></td>
                <td><span class="material-icons" onClick="erase2(${arr[i].id})">delete</span></td>
            </tr>`;
        }
        if (arr.length === 0) {
            document.querySelector("#searchResult").innerHTML = `Não foram encontrados produtos conforme chave de pesquisa!`;
        } else {
            document.querySelector("#searchResult").innerHTML = `Foram encontrado(s) ${arr.length} produto(s)!`;
        } 
    }
}

function erase2(j) {
    let n = findIndex(j);
    produtos.splice(n, 1);
    arr.splice(n, 1);
    search();
}