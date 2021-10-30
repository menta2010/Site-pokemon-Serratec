var saida = document.querySelector("#int");
var num = 1;
saida.addEventListener("click", () => {

    if (saida.textContent == "Não se assuste Yuri... Permita que a gente se apresente...") {
        saida.textContent = ""
        animarDigitacao("Para proteger o mundo de toda devastação", 0)
 
    }
    if (saida.textContent == "Para proteger o mundo de toda devastação") {
        saida.textContent = ""
        animarDigitacao("Unir todos os povos de nossa nação, denunciaremos os males da verdade e do amor", 0)
        
    }
    if (saida.textContent == "Unir todos os povos de nossa nação, denunciaremos os males da verdade e do amor") {
        saida.textContent = ""
        animarDigitacao("e agora que conseguimos furtar o tão sonhado pikachu abrimos nosso e-comerce de contabrando de pokemons, o pikachu tem nos rendido lucros infnitos e agora você vai poder conhecer nossa tao sonhada loja..", 0)

    }

    if(saida.textContent=="e agora que conseguimos furtar o tão sonhado pikachu abrimos nosso e-comerce de contabrando de pokemons, o pikachu tem nos rendido lucros infnitos e agora você vai poder conhecer nossa tao sonhada loja..")
    {
        saida.textContent = ""
        animarDigitacao("Estamos decolando na velocidade da luz, é melhor você se render agora ou se preparar para lutar.",0)
    }

    if(saida.textContent=="Estamos decolando na velocidade da luz, é melhor você se render agora ou se preparar para lutar.")
    {
        saida.textContent="";
        animarDigitacao("Bem-Vindo ao E-commerce Equipe Rocket !!",0)
    }   
    
    if(saida.textContent == "Bem-Vindo ao E-commerce Equipe Rocket !!")
   {
    window.location.href = "Index/index.html";
    
   }

    console.log("fui clicado");
});


function animarDigitacao(texto, contadora) {

    if (contadora < texto.length) {
        setTimeout(() => {
            saida.textContent += texto.charAt(contadora);
            contadora++
            animarDigitacao(texto, contadora);
        }, 50);
    }

}


animarDigitacao("Não se assuste Yuri... Permita que a gente se apresente...", 0)