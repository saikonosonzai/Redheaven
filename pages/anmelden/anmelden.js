addEventListener("submit", () => {
    localStorage.setItem("loggedIn", "true");
    updateHeader();
});