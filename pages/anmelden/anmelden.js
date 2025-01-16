let isLogin = true;

document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirm");
    if (isLogin) {
        document.getElementById("confirm").required = false;
        if (username.value === localStorage.getItem("Username") && password.value === localStorage.getItem("Password")) {
            localStorage.setItem("loggedIn", "true");
            window.location.href = "../../index.html";
            updateHeader();
        }else{
            document.getElementById("Error").innerHTML = "Nutzername oder Passwort falsch";
            document.getElementById("Error").style.display = "block";
        }
    } else {
        document.getElementById("confirm").required = true;
        if (password.value === confirmPassword.value) {
            localStorage.setItem("Username", username.value);
            localStorage.setItem("Password", password.value);
            document.getElementById("Error").style.display = "none";
            switchForm();
            isLogin = true;
        } else {
            password.value = "";
            confirmPassword.value = "";
            document.getElementById("Error").innerHTML = "Passwörter stimmen nicht überein";
            document.getElementById("Error").style.display = "block";
        }
    }
});

function switchForm() {
    document.getElementById("Error").style.display = "none";
    isLogin = false;
   switchClass(document.getElementById("confirmDiv"));
    switchClass(document.getElementById("confirmInput"));
    switchClass(document.getElementById("confirm"));
    if (document.getElementById("register").innerHTML === "Hier Registrieren"){
        document.getElementById("register").innerHTML = "Zurück zum Login";
    }else{
        document.getElementById("register").innerHTML = "Hier Registrieren";
    }

}
function switchClass(document) {
    if (document.className === "") {
        document.className = "confirmPassword";
    } else {
        document.className = "";
    }
}