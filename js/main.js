let header = '<header>'
header += '<p class="slogan">Memórias que mudam vidas.</p>'
header += '<nav>'
header += '<ul class="menu-l">'
header += '<li><a class="logo" href="index.html">Sorvete de Menta</a></li>'
header += '<li><a class="ativo" href="index.html">Início</a></li>'
header += '<li><a href="">Produtos</a></li>'
header += '</ul>'
header += '<ul class="menu-r">'
header += '<li class="search">'
header += '<input type="search" placeholder="Pesquisar">'
header += '<i class="fas fa-search"></i></li>'
if ('user' in sessionStorage) {
    header += '<li class="cart"><i onclick="Cart()" class="fas fa-shopping-cart"></i></li>'
    header += '<li><a onclick="Logout()" href="index.html" class="logout-button">Logout</a></li>'
} else {
    header += '<li><a class="sdm-button" href="login.html">Login</a></li>'
}
header += '</ul>'
header += '<div class="menu-btn" onclick="ToggleMenu()">'
header += '<div class="menu-btn-burger"></div></div>'
header += '</nav>'
header += '<ul class="mobile-menu">'
header += '<li class="search">'
header += '<input type="search" placeholder="Pesquisar">'
header += '<i class="fas fa-search"></i>'
header += '</li>'
header += '<li><a href="">Início</a></li>'
header += '<li><a href="">Produtos</a></li>'
header += '<li><a class="sdm-button" href="login.html">Login</a></li>'
header += '</ul>'
header += '</header>'
document.querySelector('body').insertAdjacentHTML('afterbegin', header)

let footer = '<footer>'
footer += '<div class="social-media">'
footer += '<a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>'
footer += '<a href="https://twitter.com/"><i class="fab fa-twitter"></i></a>'
footer += '<a href="https://www.pinterest.com/"><i class="fab fa-pinterest-p"></i></a>'
footer += '<a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>'
footer += '</div>'
footer += '<p>© 2021 Sorvete de Menta</p>'
footer += '</footer>'
document.querySelector('body').insertAdjacentHTML('beforeend', footer)

function Cart() {
    window.location.href = "carrinho.html"
}

function Logout() {
    sessionStorage.removeItem('user')
}

function ToggleMenu() {
    const mm_bt = document.querySelector('.menu-btn')
    const mm = document.querySelector('.mobile-menu')
    let state = false
    if(!state) {
        mm_bt.classList.add('open')
        mm.classList.add('open')
        state = true;
    } else {
        mm_bt.classList.remove('open')
        mm.classList.remove('open')
        state = false;
    }
}