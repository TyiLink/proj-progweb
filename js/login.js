var username = document.querySelector("input[type='text']")
var password = document.querySelector("input[type='password']")
var error_msg = document.querySelector(".error-msg")

function Login() {
    if (username.value in localStorage) {
        if (password.value == localStorage.getItem(username.value)) {
            error_msg.textContent = ""
        } else {
            error_msg.textContent = "Senha incorreta."
        }
    } else {
        error_msg.textContent = "Usuário inexistente."
    }
}