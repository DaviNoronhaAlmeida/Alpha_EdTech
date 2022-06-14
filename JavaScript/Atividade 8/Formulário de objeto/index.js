document.querySelector("#button").addEventListener("click", saveUser);
let user = {
    name: [],
    birthDate: [],
    weight: [],
    height: [],
    gender: [],
};

function saveUser() {
    user.name = document.querySelector("#name").value;
    user.birthDate = new Date(document.querySelector("#birthday").value + " ");
    user.weight = parseFloat(document.querySelector("#weight").value.replace(",","."));
    user.height = Number(document.querySelector("#height").value);
    user.gender = document.querySelector("#gender").value;

    try {
        if(user.name == "" || user.name.length < 3) {
            throw new Error("Field “name” is invalid!");
        }

        if(user.birthDate > new Date() || user.birthDate == "Invalid Date") {
            throw new Error ("Field “birthDate” is invalid!");
        }

        if(isNaN(user.weight)) {
            throw new Error ("Field “weight” is invalid!");
        }

        if(isNaN(user.height) || !(user.height === parseInt(user.height)) || user.height === 0) {
            throw new Error ("Field “height” is invalid!");
        }

        if(user.gender === "Sexo:") {
            throw new Error ("Field “gender” is invalid!");
        } else {
            document.querySelector("#result1").textContent = "Nome: " + user.name;
            document.querySelector("#result2").textContent = "Data de nascimento: " + user.birthDate;
            document.querySelector("#result3").textContent = "Peso: " + user.weight + "Kg";
            document.querySelector("#result4").textContent = "Altura: " + user.height + "cm";
            document.querySelector("#result5").textContent = "Sexo: " + user.gender;
            document.querySelector("#result6").textContent = JSON.stringify(user);
            console.log(user);
        }
    } catch (error) {
        console.log(error.name);
        console.log(error.message);
        alert(error.message);
    } 
}