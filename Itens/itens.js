console.log("Hello wordl");

var itens = document.querySelectorAll('.btnComprar');

let produtos = [
    {
        nome: 'Buddy_barrier',
        preço: 600,
        tag: 'item',
        inCart: 0
    },

    {
        nome: 'Focus_band',
        preço: 700,
        tag: 'item',
        inCart: 0
    },
    {
        nome: 'Muscle_Band',
        preço: 800,
        tag: 'item',
        inCart: 0
    },
    {
        nome: 'Score_Shield',
        preço: 1100,
        tag: 'item',
        inCart: 0
    },
    {
        nome: 'Wise_Glasse',
        preço: 900,
        tag: 'item',
        inCart: 0
    },
    {
        nome: 'Scope_Lens',
        preço: 100,
        tag: 'item',
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
    alert(`${produtinho.nome} Adicionado ao carrinho `)

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
        if(itensCarrinho[produtinho.nome]==undefined)
        {
            itensCarrinho = {
                ...itensCarrinho,
                [produtinho.nome]: produtinho
            }
        }
        itensCarrinho[produtinho.nome].inCart += 1;
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

