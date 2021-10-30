console.log("Hello wordl");

var itens = document.querySelectorAll('.card');

let produtos = [
    {
        nome: 'Pokebola1',
        preço: 2000,
        tag: 'pokebola',
        inCart: 0
    },

    {
        nome: 'Pokebola2',
        preço: 3000,
        tag: 'pokebola',
        inCart: 0
    },
    {
        nome: 'Pokebola3',
        preço: 4000,
        tag: 'pokebola',
        inCart: 0
    }

];


for (let i = 0; i < itens.length; i++) {

    itens[i].addEventListener("click", () => {
        carrinho(produtos[i])
        carrinhoFinal(produtos[i])
         valorFinal(produtos[i])
    })

}
//teste

//funcao para adicionar no local storage
function carrinho(produtinho) {

    //pegando do localStorage
    let produto = localStorage.getItem('carrinho');
    produto = parseInt(produto);

    // se ja tiver alguma coisa no carrinho
    if (produto) {
        localStorage.setItem('carrinho', produto + 1)

        document.querySelector(".qtd_carrinho").textContent = produto + 1;
    }
    else {
        localStorage.setItem('carrinho', 1)
        document.querySelector(".qtd_carrinho").textContent = 1;
    }

    qtdCarrinho(produtinho);
}

function qtdCarrinho(produtinho) {

    let itensCarrinho = localStorage.getItem('produtoCarrinho');
    itensCarrinho= JSON.parse(itensCarrinho);   

    //se o carrinho nao estive fazio
    if(itensCarrinho!= null)
    {
        if(itensCarrinho!=undefined)
        {
            itensCarrinho = {
                ...itensCarrinho,
                [produtinho.nome]: produtinho
            }
        }
        itensCarrinho[produtinho.nome].inCart +=1
    }
    else
    {
        produtinho.inCart = 1
        itensCarrinho = {
            [produtinho.nome]: produtinho
        }
    }

    localStorage.setItem("produtoCarrinho", JSON.stringify(itensCarrinho))

}


function carrinhoFinal()
{
    let itensCarrinho = localStorage.getItem("produtoCarrinho");

    itensCarrinho = JSON.parse(itensCarrinho);
    console.log(itensCarrinho);

    let produtoContainer = document.querySelector(".p2");

    if(itensCarrinho && produtoContainer )
    {
        produtoContainer.innerHTML= '';
        Object.values(itensCarrinho).map( item => 
            {
                produtoContainer.innerHTML+= `
                <tr>
                <td>
                  <div class="cart-info">
                    <img src="imagens/${item.nome}.png" alt="" />
                    <div>
                      <p>${item.nome}</p>
                      <small>Preço: ${item.preço}</small>
                      <br/>
                      <a href="#">Remove</a>
                    </div>
                  </div>
                </td>
                <td><input type="number" value="${item.inCart}" /></td>
                <td>${item.preço* item.inCart}R$</td>
              </tr>
    `
            })
    }

    let valorTotal = localStorage.getItem("ValorTotal") 

    var final = parseFloat(valorTotal)+20

        document.querySelector(".subtotal").textContent= valorTotal+" R$"
        document.querySelector(".valorFinal").textContent= final+" R$"

}



function valorFinal(produtinho)
{
    let valorTotal = localStorage.getItem("ValorTotal") 
    
    //aa
    if(valorTotal != null)
    {
        valorTotal =parseInt(valorTotal);
        localStorage.setItem("ValorTotal",valorTotal +produtinho.preço)

    }
    else
    {
        localStorage.setItem("ValorTotal",produtinho.preço)
        
    }
}



//Carrega o carrinho automatico (quando reloga a pagina)
function carregandoCarrinho() {

    let produto = localStorage.getItem('carrinho');

    if (produto) {
        document.querySelector(".qtd_carrinho").textContent = produto;
    }
}
carregandoCarrinho()

carrinhoFinal()