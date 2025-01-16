addEventListener("submit", () => {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "../../index.html";
    updateHeader();
});