var array_produtos = [['miami vice memories', 'a1.jpg', 'oooopaa', '1.00', false, 0], ['lembranças da sua mãe', '2b.jpg', 'dasdawdawdawd', '3.00', false, 1], ['64gb', 'robbie.jpg', 'gggggggggggggggg gggggggggggggg gggggggggggg gggggggggggg gggggggggggg ggggggggggggg gggggg gg', '0.0002', false, 2]];

var carrinho = []

if (localStorage.length != 0) {
    carrinho = JSON.parse(window.localStorage.getItem('carrinho'));
    for (var i = 0; i < carrinho.length; i++) {
        array_produtos[carrinho[i][5]][4] = true
    }
}

window.onload = function() {  
    criaProdutos()
}

function criaProdutos() {
    document.getElementById("products-container").innerHTML = "";
    for(var i = 0; i < array_produtos.length; i++) {
        var conteudo = "";
        conteudo += '<div class="products-card">';
        conteudo += '<img src="media/' + array_produtos[i][1] + '">';
        conteudo += '<h3>' + array_produtos[i][0] + '</h3>';
        conteudo += '<p>' + array_produtos[i][2] + '</p>';
        conteudo += ' <b>BTC ' + array_produtos[i][3] + '</b>';
        if (array_produtos[i][4] == false) {
            conteudo += '<button class="products-card-comprar" onclick="comprar(' + array_produtos[i][5] +') ">Adicionar ao carrinho</button>';
        } else {
            conteudo += '<button class="products-card-comprado">No carrinho</button>';
        }
        conteudo += '</div>';

        document.getElementById("products-container").innerHTML += conteudo;
    }
}

function comprar(id) {
    array_produtos[id][4] = true;
    carrinho.push(array_produtos[id]);
    window.localStorage.setItem("carrinho", JSON.stringify(carrinho));
    criaProdutos();
}