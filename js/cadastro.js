var username = document.querySelector("input[type='text']")
var password = document.querySelector("input[type='password']")
var error_msg = document.querySelector(".error-msg")

function SignUp() {
    if (username.value in localStorage) {
        error_msg.textContent = "Usuário já existente."
    } else {
        localStorage.setItem(username.value, password.value)
        window.location.href = "index.html"
    }
}