// MAIN //

var activePage = location.href.split("/").slice(-1)
var user = sessionStorage.getItem('user')

function isHomePage() { 
    if (activePage[0] == 'index.html' || activePage[0] == '') {
        return true
    } else {
        return false
    }
}

function isLoggedIn() {
    if ('user' in sessionStorage) {
        return true
    } else {
        return false
    }
}

function isSearch() {
    if ('search' in sessionStorage) {
        return true
    } else {
        return false
    }
}

function isCartEmpty() {
    if (isLoggedIn()) {
        if (`.${user}` in localStorage) {
            return false
        } else {
            return true
        }
    } else {
        return true
    }
}

if (activePage != 'login.html' && activePage != 'signup.html') {
    let header = '<header>'
    header += '<p class="slogan">Memórias que mudam vidas.</p>'
    header += '<nav>'
    header += '<ul class="menu-l">'
    header += `<li><img ${isHomePage() ? "src='media/logo.png'" : "src='../media/logo.png'"} onclick="logoRedirect()"></li>`
    header += `<li><a class="logo" ${isHomePage() ? "href='index.html'" : "href='../index.html'"}>Sorvete de Menta</a></li>`
    header += `<li><a ${isHomePage() ? "href='index.html'" : "href='../index.html'"}>Início</a></li>`
    header += `<li><a ${isHomePage() ? "href='pages/products.html'" : "href='products.html'"}>Produtos</a></li>`
    header += '</ul>'
    header += '<ul class="menu-r">'
    header += '<li class="search">'
    header += '<input class="search-input" type="search" placeholder="Pesquisar">'
    header += '<i onclick="search()" class="fas fa-search"></i></li>'
    if (isLoggedIn()) {
        header += '<li><i class="fas fa-shopping-cart" id="header-cart" onclick="cartRedirect()"></i></li>'
        header += '<li><a href="" onclick="logout()" class="logout-button">Logout</a></li>'
    } else {
        header += `<li><a class="sdm-button" ${isHomePage() ? "href='pages/login.html'" : "href='login.html'"}>Login</a></li>`
    }
    header += '</ul>'
    header += '<div class="menu-btn" onclick="toggleMenu()">'
    header += '<div class="menu-btn-burger"></div></div>'
    header += '</nav>'
    header += '<ul class="mobile-menu">'
    header += '<li class="search">'
    header += '<input class="search-input" type="search" placeholder="Pesquisar">'
    header += '<i onclick="search()" class="fas fa-search"></i>'
    header += '</li>'
    header += `<li><a ${isHomePage() ? "href='index.html'" : "href='../index.html'"}>Início</a></li>`
    header += `<li><a ${isHomePage() ? "href='pages/products.html'" : "href='products.html'"}>Produtos</a></li>`
    if (isLoggedIn()) {
        header += '<li><i class="fas fa-shopping-cart" id="header-cart" onclick="cartRedirect()"></i></li>'
        header += '<li><a href="" onclick="logout()" class="logout-button">Logout</a></li>'
    } else {
        header += `<li><a class="sdm-button" ${isHomePage() ? "href='pages/login.html'" : "href='login.html'"}>Login</a></li>`
    }
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
}

let mm_state = false
function toggleMenu() {
    if (!mm_state) {
        document.querySelector('.menu-btn').classList.add('open')
        document.querySelector('.mobile-menu').classList.add('open')
        mm_state = true
    } else {
        document.querySelector('.menu-btn').classList.remove('open')
        document.querySelector('.mobile-menu').classList.remove('open')
        mm_state = false
    }
}

let username = document.querySelector("input[type='text']")
let password = document.querySelector("input[type='password']")
let error_msg = document.querySelector(".error-msg")

function login() {
    if (username.value in localStorage) {
        if (password.value == localStorage.getItem(username.value)) {
            sessionStorage.setItem("user", username.value)
            window.location.href = "products.html"
        } else {
            error_msg.textContent = "Senha incorreta."
        }
    } else {
        error_msg.textContent = "Usuário inexistente."
    }
}

function signUp() {
    if (username.value in localStorage) {
        error_msg.textContent = "Usuário já existente."
    } else {
        localStorage.setItem(username.value, password.value)
        window.location.href = "../index.html"
    }
}

function logout() {
    sessionStorage.removeItem('user')
}

function logoRedirect() {
    if (isHomePage()) {
        window.location.href = "index.html"
    } else {
        window.location.href = "../index.html"
    }
}

function cartRedirect() {
    if (isHomePage()) {
        window.location.href = "pages/cart.html"
    } else {
        window.location.href = "cart.html"
    }
}

// PRODUCTS //

var products = [
[0, 'viagem_familia.jpg', 'Viagem com a família', 'Não perca essa oportunidade novamente, passe um tempo a mais com as únicas pessoas que realmente te amam', 5.25, false],
[1, '7_maravilhas.png', '7 maravilhas', 'Realize o seu sonho de conhecer as 7 maravilhas do mundo', 2.55, false],
[2, 'planetas.jpg', 'Conheça novos planetas', 'Nossa raça ainda não foi capaz de popularizar as viagens espaciais, mas você não terá limitações, poderá conhecer diversas localidades extraterrestres', 1.75, false],
[3, 'viagem_praia.jpg', 'Viagem à praia', 'Vença suas limitações e compre uma incrível lembrança de uma viagem à praia com sua família em um fim de semana ', 5.25, false],
[4, 'tocar_violao.jpg', 'Maestria com violão', 'É a sua chance de para de tocar só Legião Urbana na sua roda de amigos, ou até mesmo para você que não sabe nada de música', 4.25, false],
[5, 'tocar_piano.jpg', 'Maestria com piano', 'Sempre teve admiração pelos "magos" da música? Então chegou a sua oportunidade de se tornar um pianista também', 6.75, false],
[6, 'poliglota.jpg', 'Pack poliglota', 'Torne-se fluente em vários idiomas ao mesmo tempo', 3.55, false],
[7, 'jsmental.jpg', 'Full Stack', 'Obtenha skills em JavaScript, Python, Html, Css e Java não tenha limitações no mundo de desenvolvimento', 7.25, false],
[8, 'chess.png', 'Gênio no Xadrez', 'Impressione seus adversários, jogue xadrez no mesmo nível de Kasparov', 2.25, false],
[9, 'mem.jpeg', 'CTRL + Z', 'Pare de sofrer ao relembrar de momentos desagradáveis e elimine-os de uma vez por todas!', 3.5, false],
[10, 'h.png', 'SUA WAIFU EXISTE', 'Você, jovem garoto, seus sonhos se tornaram realidade >.<', 4.75, false],
[11, 'faroeste.jpg', 'Western memories', 'Viva o Velho Oeste dos Estados Unidos do século XIX', 5.5, false]]

function search() {
    let search_content = document.querySelector('.search-input').value.toLowerCase()
    let foundList = []
    
    for (i = 0; i < products.length; i++) {
        if (products[i][2].toLowerCase().includes(search_content)) {
            foundList.push(products[i][0])
        }
        if (products[i][3].toLowerCase().includes(search_content)) {
            foundList.push(products[i][0])
        }
    }
    sessionStorage.setItem('search', foundList)

    if (isHomePage()) {
        window.location.href = "pages/products.html"
    } else {
        window.location.href = "products.html"
    }
}

if (activePage == 'products.html') {
    let cart = []
    if (!isCartEmpty()) {
        cart = JSON.parse(localStorage.getItem(`.${user}`));
        for (var i = 0; i < cart.length; i++) {
            products[cart[i][0]][5] = true
        }
    }
    if (isSearch()) {
        let searched = sessionStorage.getItem('search');
        let content = ""
        for (i = 0; i < products.length; i++) {
            if (searched.includes(i)) {
                content += '<div class="products-card">'
                content += '<img src="../media/' + products[i][1] + '">'
                content += '<h3>' + products[i][2] + '</h3>'
                content += '<p>' + products[i][3] + '</p>'
                content += '<b>BTC ' + products[i][4] + '</b>'
                if (products[i][5] == false) {
                    content += '<button class="sdm-button" onclick="buy(' + products[i][0] + ')">Comprar</button>'
                } else {
                    content += '<button class="oncart">No carrinho</button>'
                }
                content += '</div>'
            }  
        }
        document.querySelector(".products-container").innerHTML += content
        sessionStorage.removeItem('search')
    } else {
        let content = ""
        for (i = 0; i < products.length; i++) {
            content += '<div class="products-card">'
            content += '<img src="../media/' + products[i][1] + '">'
            content += '<h3>' + products[i][2] + '</h3>'
            content += '<p>' + products[i][3] + '</p>'
            content += '<b>BTC ' + products[i][4] + '</b>'
            if (products[i][5] == false) {
                content += '<button class="sdm-button" onclick="buy(' + products[i][0] + ')">Comprar</button>'
            } else {
                content += '<button class="oncart">No carrinho</button>'
            }
            content += '</div>'
        }
        document.querySelector(".products-container").innerHTML += content
    }

    function buy(i) {
        if (isLoggedIn()) {
            products[i][5] = true
            cart.push(products[i])
            localStorage.setItem(`.${user}`, JSON.stringify(cart))
            window.location.reload(false)
        } else {
            window.location.href = "login.html"
        }
    }
}

// CART //

if (activePage == 'cart.html') {
    let cart = JSON.parse(localStorage.getItem(`.${user}`))

    if (!isCartEmpty()) {
        let totalPrice = 0
        let content = '<div class="cart-container">'
        for (i = 0; i < cart.length; i++) {
            totalPrice += cart[i][4]
            content += '<div class="cart-card">'
            content += '<img src="../media/' + cart[i][1] + '">'
            content += '<div class="cart-info">'
            content += '<h3>' + cart[i][2] + '</h3>'
            content += '<div class="bottom">'
            content += '<p>BTC ' + cart[i][4] + '</p>'
            content += '<i class="fas fa-trash" onclick="remove(' + i + ')"></i>'
            content += '</div></div></div>'
        }
        content += '</div>'
        content += '<div class="cart-checkout">'
        content += '<div class="total-price">'
        content += '<h3>Preço: </h3>'
        content += '<h4>BTC ' + totalPrice.toFixed(2) + '</h4>'
        content += '</div>'
        content += '<div class="products-qnt">'
        content += '<h3>Produtos:</h3>'
        content += '<h4>' + cart.length + '</h4>'
        content += '</div>'
        content += '<a href="checkout.html" class="sdm-button">Confirmar</a>'
        content += '</div>'
        document.querySelector('.cart-section').innerHTML += content
    } else {
        let content = '<div class="empty-cart">'
        content += '<i class="fas fa-shopping-cart"></i>'
        content += '<h3> Seu carrinho está vazio</h3>'
        content += '</div>'
        document.querySelector(".cart-section").innerHTML += content
    }

    function remove(i) {
        cart.splice(i, 1)
        localStorage.setItem(`.${user}`, JSON.stringify(cart))
        console.log(cart)
        window.location.reload(false)
        if (cart.length < 1) {
            localStorage.removeItem(`.${user}`)
        }
    }
}

// CHECKOUT //

function cartao() {
    document.querySelector(".card-container").innerHTML = ''
    let content = ""
    content += '<img src="../media/card.png" alt="">'
    content += '<form onsubmit="cadastraCartao()">'
    content += '<h3>Número do cartão</h3>'
    content += '<input type="text" maxlength="16" required>'
    content += '<h3>Nome impresso no cartão</h3>'
    content += '<input type="text" maxlength="20" required>'
    content += '<div class="flex-box">'
    content += '<div class="box">'
    content += '<h3>Mês</h3>'
    content += '<select name="" id="">'
    content += '<option value="01">01</option>'
    content += '<option value="02">02</option>'
    content += '<option value="03">03</option>'
    content += '<option value="04">04</option>'
    content += '<option value="05">05</option>'
    content += '<option value="06">06</option>'
    content += '<option value="07">07</option>'
    content += '<option value="08">08</option>'
    content += '<option value="09">09</option>'
    content += '<option value="10">10</option>'
    content += '<option value="11">11</option>'
    content += '<option value="12">12</option>'
    content += '</select>'
    content += '</div>'
    content += '<div class="box">'
    content += '<h3>Ano</h3>'
    content += '<select name="" id="">'
    content += '<option >2023</option>'
    content += '<option >2024</option>'
    content += '<option >2025</option>'
    content += '</select>'
    content += '</div>'
    content += '<div class="box">'
    content += '<h3>CVV</h3>'
    content += '<input type="text" maxlength="3" required>'
    content += '</div>'
    content += '</div>'
    content += '<input type="submit" class="confirmar-bt" value="Continuar">'
    content += '</form>'
    document.querySelector(".card-container").innerHTML += content
    return false
}

function boleto() {
    alert("Boleto gerado com sucesso!")
    window.location.href = "../index.html"
    localStorage.removeItem(`.${user}`)
}

function cadastraCartao(){
    alert("Cartão cadastrado com sucesso!") 
    document.querySelector(".card-container").innerHTML = ""
    var content = ""
    content += '<button class="" onclick="cobrar()">Parcelar em 2x</button>'
    content += '<button onclick="cobrar()">Crédito</button>'
    content += '<button onclick="cobrar()">Débito</button>'
    document.querySelector(".card-container").innerHTML += content   
}

function cobrar() {
    alert("Pagamento realizado com sucesso!")
    window.location.href = "../index.html"
    localStorage.removeItem(`.${user}`)
}