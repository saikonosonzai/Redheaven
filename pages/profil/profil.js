/*jshint esversion: 6 */


let hidePassword = true;
let isChanging = false;

let pPasswort = document.getElementById("passwort");
let pNutzername = document.getElementById("nutzername");
let bChangeVisibility = document.getElementById("changeVisibility");

function showProfilData(){
    let passwort = "";
    if (hidePassword) {
        for (let i = 0; i < localStorage.getItem("Password").length; i++) {
            passwort += "*";
        }
        pPasswort.innerHTML = passwort;
        bChangeVisibility.innerHTML = "Paswort anzeigen";
    } else {
        pPasswort.innerHTML = localStorage.getItem("Password");
        bChangeVisibility.innerHTML = "Paswort verbergen";

    }

    pNutzername.innerHTML = localStorage.getItem("Username");
}



function changeVisibility(){
    hidePassword = !hidePassword;
    showProfilData();
}

function changeData(){
    let password = document.getElementById("password");
    let username = document.getElementById("username");
    let button = document.getElementById("changeData");

    if (isChanging){

        isChanging = false;
        localStorage.setItem("Username", username.value);
        localStorage.setItem("Password", password.value);

        showProfilData();

        pPasswort.style.display = "block";
        pNutzername.style.display = "block";

        password.style.display = "none";
        username.style.display = "none";

        button.innerHTML = "Daten ändern";

    }else{
        isChanging = true;

        bChangeVisibility.innerHTML = "";
        pPasswort.style.display = "none";
        pNutzername.style.display = "none";

        password.style.display = "block";
        username.style.display = "block";

        button.innerHTML = "Speichern";
    }
}

window.addEventListener("DOMContentLoaded", () => {
    pNutzername = document.getElementById("nutzername");
    pPasswort = document.getElementById("passwort");
    bChangeVisibility = document.getElementById("changeVisibility");
    showProfilData();

    let date = new Date();

    document.getElementById("warteliste").innerHTML = "<li>"+ localStorage.getItem("Wohnung")+": zuzeit sind "+ date.getTime() +" Personen am Warten</li>";

});