var alertRedInput = "#8C1010";
var defaultInput = "rgba(10, 180, 180, 1)";

function userNameValidation(usernameInput) {
    var username = document.getElementById("username");
    var issueArr = [];
    if (/[-!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(usernameInput)) {
        issueArr.push("Solo debe contener letras");
    }
    if (issueArr.length > 0) {
        username.setCustomValidity(issueArr);
        username.style.borderColor = alertRedInput;
    } else {
        username.setCustomValidity("");
        username.style.borderColor = defaultInput;
    }
}

function passwordValidation(passwordInput) {
    var password = document.getElementById("password");
    var issueArr = [];
    if (!/^.{8,24}$/.test(passwordInput)) {
        issueArr.push("La contraseña debe contener entre 8-24 caracteres.");
    }
    if (!/\d/.test(passwordInput)) {
        issueArr.push("Debe contener al menos un número.");
    }
    if (!/[a-z]/.test(passwordInput)) {
        issueArr.push("Debe contener una letra minúscula.");
    }
    if (!/[A-Z]/.test(passwordInput)) {
        issueArr.push("Debe contener una letra mayúscula.");
    }
    if (issueArr.length > 0) {
        password.setCustomValidity(issueArr.join("\n"));
        password.style.borderColor = alertRedInput;
    } else {
        password.setCustomValidity("");
        password.style.borderColor = defaultInput;
    }
}