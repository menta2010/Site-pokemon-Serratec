var saida = document.querySelector("#int");
var num = 1;
saida.addEventListener("click", () => {
   
   if(saida.textContent=="Ola Somos a equipe rocket..!")
   {
        saida.textContent=""
        animarDigitacao("lop1..!",0)
   }
   if(saida.textContent=="lop1..!")
   {
    saida.textContent=""
    animarDigitacao("lop2..!",0)
  //  window.location.replace("http://pt.stackoverflow.com");
   }

  console.log("fui clicado");
});


function animarDigitacao(texto,contadora)
{

    if(contadora<texto.length)
    {
        setTimeout(() => {
            saida.textContent += texto.charAt(contadora);
            contadora++
            animarDigitacao(texto,contadora);
        }, 50);
    }

}


animarDigitacao("Ola Somos a equipe rocket..!",0)