document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();
    localStorage.setItem("loggedIn", "true");
    window.location.href = "../../index.html";
    updateHeader();
});