console.log("Hello wordl");

var itens = document.querySelectorAll('.btnComprar');

let produtos = [
    {
        nome: 'Pokeball',
        preço: 2000,
        tag: 'pokebola',
        inCart: 0
    },

    {
        nome: 'Greatball',
        preço: 3000,
        tag: 'pokebola',
        inCart: 0
    },
    {
        nome: 'Ultraball',
        preço: 4000,
        tag: 'pokebola',
        inCart: 0
    },
    {
        nome: 'Masterball',
        preço: 5000,
        tag: 'pokebola',
        inCart: 0
    },
    {
        nome: 'Loveball',
        preço: 6000,
        tag: 'pokebola',
        inCart: 0
    },
    {
        nome: 'DuskBall',
        preço: 7000,
        tag: 'pokebola',
        inCart: 0
    }

];


for (let i = 0; i < itens.length; i++) {

    itens[i].addEventListener("click", () => {
        carrinho(produtos[i])
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

