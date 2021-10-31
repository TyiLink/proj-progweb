var array_produtos = [['miami vice memories', 'a1.jpg', 'oooopaa', '1.00', true], ['lembranças da sua mãe', '2b.jpg', 'dasdawdawdawd', '3.00', false], ['64gb', 'robbie.jpg', 'ggggggggggggggggg', '0.0002', false]];


window.onload = function() {
    criaProdutos();
}


function criaProdutos() {
    for(var i = 0; i < array_produtos.length; i++) {
        var conteudo = "";

        




        conteudo += ' <div class="card">';
        conteudo += ' <div class="top-card">';
        conteudo += '<img src="media/' + array_produtos[i][1] + '">';
        conteudo += ' </div>';

        conteudo += ' <div class="middle-card">';

        conteudo += '<h2 class="nomeDoProduto">' + array_produtos[i][0] + '</h2>';
        conteudo += '<p class="descricao">' + array_produtos[i][2] + '</p>';

        conteudo += ' </div>';

        conteudo += ' <div class="bottom-card">';
        conteudo += ' <b class="valor">BTC ' + array_produtos[i][3] + '</b>';

        if (array_produtos[i][4] == false) {
            conteudo += '<button class="comprar">Adicionar ao carrinho</button>';
        } else {
            conteudo += '<button class="comprado">No carrinho</button>';
        }

        conteudo += ' </div>';

        conteudo += ' </div>';
        conteudo += ' </div>';
        
        document.getElementById("produtos").innerHTML += conteudo;

      
    }
}