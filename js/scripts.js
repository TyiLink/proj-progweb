carrinho = []

window.onload = function() {
    carrinho = JSON.parse(window.localStorage.getItem('carrinho'));
    criaCarrinho()
}

function criaCarrinho() {
    document.getElementById("carrinho-conteudo").innerHTML = "";
    let totalPrice = 0;

    for(var i = 0; i < carrinho.length; i++) {
        totalPrice += carrinho[i][3];
        let conteudo = "";
        conteudo += '<div class="products-card">';
        conteudo += '<img src="media/' + carrinho[i][1] + '">';
        conteudo += '<div class="products-info">';
        conteudo += '<h3>' + carrinho[i][0] + '</h3>';
        conteudo += '<div class="bottom">';
        conteudo += '<p>BTC ' + carrinho[i][3] + '</p>'
        conteudo += '<i class="fas fa-trash"></i>';
        conteudo += '</div>';
        conteudo += '</div>';
        conteudo += '</div>';
        document.getElementById("carrinho-conteudo").innerHTML += conteudo;
        
        
    }

    conteudo= "";
    conteudo += '<div class="price">';
    conteudo += '<h3>Preço: </h3>';
    conteudo += '<h4 >' + totalPrice + '</h4>';
    conteudo += '</div>';
    conteudo += '<div class="products">';
    conteudo += '<h3>Produtos:</h3>';
    conteudo += '<h4 >' + carrinho.length + '</h4>';
    conteudo += '</div>';
    conteudo += '<a href="" class="sdm-button">Finalizar Compra</a>';

    document.getElementById("checkout").innerHTML += conteudo;

}

