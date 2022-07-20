const states = document.querySelector("#states");
const cities = document.querySelector("#cities");

function statesRequest() {
    return new Promise((resolve, reject) => {
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome`)
        .then(r => {
            if(r.status === 200) {
            return r.json();
            }
            return Promise.reject("Erro! Failed to request data!");
        })
        .then(data => resolve(data))
        .catch(erro => reject(erro));
    });
};

window.addEventListener("load", state);
async function state() {
    try {
        const a = await statesRequest();
        for(let i = 0; i < a.length; i++) {
            states.innerHTML += `<option value="${a[i].sigla}">${a[i].nome}</option>`;
        };
    } catch (error) {
        alert(error);
    };  
};

function citiesRequest() {
    return new Promise((resolve, reject) => {
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${states.value}/municipios?orderBy=nome`)
        .then(r => {
            if(r.status === 200) {
            return r.json();
            }
            return Promise.reject("Erro! Failed to request data!");
        })
        .then(data => resolve(data))
        .catch(erro => reject(erro));
    });
};

states.addEventListener("change", city);
async function city() {
    try {
        document.querySelector("#block").style.display = "block";
        document.querySelector("body").style.cursor = "wait";
        document.querySelector("table").innerHTML = "";
        cities.hidden = true;
        cities.innerHTML = `<option selected hidden>Cidade</option>`;

        const a = await citiesRequest();
        for(let i = 0; i < a.length; i++) {
            cities.innerHTML += `<option value="${a[i].id}">${a[i].nome}</option>`;
        }

        document.querySelector("#block").style.display = "none";
        document.querySelector("body").style.cursor = "default";
        cities.hidden = false;
    } catch (error) {
        alert(error)
    };
};

function weatherRequest() {
    return new Promise((resolve, reject) => {
        fetch(`https://apiprevmet3.inmet.gov.br/previsao/${cities.value}`)
        .then(r => {
            if(r.status === 200) {
            return r.json();
            }
            return Promise.reject("Erro! Failed to request data!");
        })
        .then(data => resolve(data))
        .catch(erro => reject(erro));
    });
};

cities.addEventListener("change", weatherReport);
async function weatherReport() {
    try {
        document.querySelector("#block").style.display = "block";
        document.querySelector("body").style.cursor = "wait";
        document.querySelector("table").innerHTML = "";

        const a = await weatherRequest();
        const date = Object.keys(a[cities.value])
        const weather = Object.values(a[cities.value]);

        for(let i = 0; i < 2; i++) {
            document.querySelector("table").innerHTML += `
            <tr>
                <td>${weather[i].manha.dia_semana}</td>
                <td>${date[i]}</td>
                <td>Manhã</td>
                <td><img src="${weather[i].manha.icone}" alt="icone"></td>
                <td>${weather[i].manha.resumo}</td>
                <td>${weather[i].manha.temp_min}°</td>
                <td>${weather[i].manha.temp_max}°</td>
            </tr>
            <tr>
                <td>${weather[i].tarde.dia_semana}</td>
                <td>${date[i]}</td>
                <td>Tarde</td>
                <td><img src="${weather[i].tarde.icone}" alt="icone"></td>
                <td>${weather[i].tarde.resumo}</td>
                <td>${weather[i].tarde.temp_min}°</td>
                <td>${weather[i].tarde.temp_max}°</td>
            </tr>
            <tr>
                <td>${weather[i].noite.dia_semana}</td>
                <td>${date[i]}</td>
                <td>Noite</td>
                <td><img src="${weather[i].noite.icone}" alt="icone"></td>
                <td>${weather[i].noite.resumo}</td>
                <td>${weather[i].noite.temp_min}°</td>
                <td>${weather[i].noite.temp_max}°</td>
            </tr>
            `;
        }
        document.querySelector("table").innerHTML += `
        <tr>
                <td>${weather[2].dia_semana}</td>
                <td>${date[2]}</td>
                <td>-</td>
                <td><img src="${weather[2].icone}" alt="icone"></td>
                <td>${weather[2].resumo}</td>
                <td>${weather[2].temp_min}°</td>
                <td>${weather[2].temp_max}°</td>
            </tr>
        `;
        
        document.querySelector("#block").style.display = "none";
        document.querySelector("body").style.cursor = "default";
    } catch (error) {
        alert(error)
    };
};