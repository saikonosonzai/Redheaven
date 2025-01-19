/*jshint esversion: 6 */


function updateHeader() {
    if (localStorage.getItem("loggedIn") === "true") {
        document.getElementById("anmelden").style.display = "none";
        document.getElementById("profil").style.display = "block";
    } else {
        document.getElementById("profil").style.display = "none";
        document.getElementById("anmelden").style.display = "block";
    }
}

function logOut() {
    localStorage.setItem("loggedIn", "false");
    window.location.href = "../../index.html";
    updateHeader();
}

window.addEventListener("DOMContentLoaded", () => {
    updateHeader();
});

function addToList(){
    localStorage.setItem("Wohnung", "Wohnung 1");
}
