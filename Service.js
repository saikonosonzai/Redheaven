function updateHeader() {
    if (localStorage.getItem("loggedIn") === "true") {
        document.getElementById("anmelden").style.display = "none"; // Hide login button
        document.getElementById("logOut").style.display = "block";  // Show logout button
    } else {
        document.getElementById("logOut").style.display = "none";  // Hide logout button
        document.getElementById("anmelden").style.display = "block";  // Show login button
    }
}

function logOut() {
    localStorage.setItem("loggedIn", "false");
    updateHeader();
}

window.addEventListener("DOMContentLoaded", () => {
    updateHeader();
})
