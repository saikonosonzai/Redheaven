function updateHeader() {
    if (localStorage.getItem("loggedIn") === "true") {
        document.getElementById("anmelden").style.display = "none";
        document.getElementById("logOut").style.display = "block";
    } else {
        document.getElementById("logOut").style.display = "none";
        document.getElementById("anmelden").style.display = "block";
    }
}

function logOut() {
    localStorage.setItem("loggedIn", "false");
    updateHeader();
}

window.addEventListener("DOMContentLoaded", () => {
    updateHeader();
})
