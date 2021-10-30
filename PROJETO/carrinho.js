//POKEBOLA

(function() {
    function togglePokeball(event) {
      event.preventDefault();
  
      const pokeball = document.getElementById('pokeball-1');
      if (pokeball.classList.contains('open')) {
        pokeball.classList.remove('open');
        retrieve.restart();
      } else {
        pokeball.classList.add('open');
        spawn.restart();
      }
    }
  
    const spawn = gsap
    .timeline(
      {
        onStart: function() {
          document.querySelector('.summon').classList.remove('hidden');
          document.querySelector('.summon').style.filter = 'url(#spawn-line)';
          document.querySelector('.pokemon img').style.filter = 'url(#spawn-pokemon)';
        },
        onComplete: function() {
          document.querySelector('.summon').classList.add('hidden');
          document.querySelector('.summon').style.filter = 'none';
          document.querySelector('.pokemon img').style.filter = 'none';
        },
        paused: true,
      },
    ) 
    .set('.path', {
      attr: {
        'stroke-dashoffset': '100%',
      },
    })
    .to('.path', 
        {
      delay: 0.2,
      duration: 0.2,
      attr: {
        'stroke-dashoffset': '0%',
      },
    },
    )
    .to('.path',
        {
      duration: 0.2,
      attr: {
        'stroke-dashoffset': '-100%',
      },
    },
    )
    .from('.pokemon img', 
          {
      duration: 0.2,
      scale: 0,
    },
    0.4,
    )
    .to('#pokemon-displacement',
        {
      duration: 0.8,
      attr: {
        scale: 0
      },
      ease: 'none'
    },
    0.2
    )
    .to('#pokemon-turbulence',
        {
      duration: 0.8,
      attr: {
        baseFrequency: 0.03
      },
      ease: 'none'
    },
    0.2
    )
    .from('.tags',
          {
      opacity: 0,
    },
    0.4
    );
  
    const retrieve = gsap
    .timeline(
      {
        onStart: function() {
          document.querySelector('.summon').classList.remove('hidden');
          document.querySelector('.summon').style.filter = 'url(#retrieve-line)';
          document.querySelector('.pokemon img').style.filter = 'url(#retrieve-pokemon)';
        },
        onComplete: function() {
          document.querySelector('.summon').classList.add('hidden');
          document.querySelector('.summon').style.filter = 'none';
          document.querySelector('.pokemon img').style.filter = 'none';
        },
        paused: true,
      },
    )
    .set('.path', {
      attr: {
        'stroke-dashoffset': '-100%',
      },
    })
    .to('.tags',
        {
      opacity: 0,
    }
    )
    .from('#retrieve-displacement',
          {
      duration: 0.3,
      attr: {
        scale: 0
      }
    },
    0,
    )
    .from('#retrieve-turbulence',
          {
      duration: 0.3,
      attr: {
        baseFrequency: 0
      }
    },
    0
    )
    .to('.pokemon img', 
        {
      scale: 0,
      duration: 0.2
    },
    0.3,
    )
    .to('.path', 
        {
      duration: 0.2,
      attr: {
        'stroke-dashoffset': '0%',
      },
    },
    0.35
    )
    .to('.path',
        {
      duration: 0.2,
      attr: {
        'stroke-dashoffset': '100%',
      },
    },
    0.45
    );
  
  
    const button = document.getElementById('toggle-button');
    button.addEventListener('click', togglePokeball)
})();
  
  //FRETE
function cep(){
    var cep = parseInt(document.getElementById("cep").value);
    if(cep >= 01000000 && cep <= 39999999 ) { // SUDESTE
       var km = 450;
       var valor = km*0.15;

       var v= "O valor do frete será R$" + valor + ".\n O prazo para entrega dessa localidade será de 5 dias úteis."
       document.querySelector(".resultado").textContent= v;
    }
    else if(cep >= 40000000 && cep <= 65999999 ) { //NORDESTE
       var km = 1570;
       var valor = km*0.15;
       var v= "O valor do frete será R$" + valor + ".\n O prazo para entrega dessa localidade será de 10 dias úteis."
       document.querySelector(".resultado").textContent= v;
    
    }
    else if(cep >= 66000000 && cep <= 69999999 ) { //NORTE
       var km = 3304;
       var valor = km*0.15;
       var v= "O valor do frete será R$" + valor + ".\n Oprazo para entrega dessa localidade será de 12 dias úteis."
       document.querySelector(".resultado").textContent= v;
    }
    else if(cep >= 70000000 && cep <= 79999999 ) { //CENTRO-OESTE
       var km = 1818;
       var valor = km*0.15;
       console.log(valor);
       var v= "O valor do frete será R$" + valor + ".\n O prazo para entrega dessa localidade será de 8 dias úteis."
       document.querySelector(".resultado").textContent= v;
    }
    else if(cep >= 80000000 && cep <= 99999999 ) { //SUL
        var km = 1500;
        var valor = km*0.15;
        var v= "O valor do frete será R$" + valor + ".\n O prazo para entrega dessa localidade será de 7 dias úteis."
       document.querySelector(".resultado").textContent= v;
     }
    else{
        var a="Ainda não fazemos entrega neste endereço"
        document.querySelector(".resultado").textContent=a;
     }
}


//ESTRELA
function Avaliar(estrela) {
    var url = window.location;
    url = url.toString()
    url = url.split("index.html");
    url = url[0];
   
    var s1 = document.getElementById("s1").src;
    var s2 = document.getElementById("s2").src;
    var s3 = document.getElementById("s3").src;
    var s4 = document.getElementById("s4").src;
    var s5 = document.getElementById("s5").src;
   
   if (estrela == 5){ 
    if (s5 == url + "img/star0.png") {
    document.getElementById("s1").src = "./star1.png";
    document.getElementById("s2").src = "./star1.png";
    document.getElementById("s3").src = "./star1.png";
    document.getElementById("s4").src = "./star1.png";
    document.getElementById("s5").src = "./star1.png";
    } else {
    document.getElementById("s1").src = "./star1.png";
    document.getElementById("s2").src = "./star1.png";
    document.getElementById("s3").src = "./star1.png";
    document.getElementById("s4").src = "./star1.png";
    document.getElementById("s5").src = "star1.png";
   }}
    
    //ESTRELA 4
   if (estrela == 4){ 
    if (s4 == url + "img/star0.png") {
    document.getElementById("s1").src = "./star1.png";
    document.getElementById("s2").src = "./star1.png";
    document.getElementById("s3").src = "./star1.png";
    document.getElementById("s4").src = "./star1.png";
    document.getElementById("s5").src = "./star0.png";
    } else {
    document.getElementById("s1").src = "./star1.png";
    document.getElementById("s2").src = "./star1.png";
    document.getElementById("s3").src = "./star1.png";
    document.getElementById("s4").src = "./star1.png";
    document.getElementById("s5").src = "./star0.png";
   }}
   
   //ESTRELA 3
   if (estrela == 3){ 
    if (s3 == url + "img/star0.png") {
    document.getElementById("s1").src = "./star1.png";
    document.getElementById("s2").src = "./star1.png";
    document.getElementById("s3").src = "./star1.png";
    document.getElementById("s4").src = "./star0.png";
    document.getElementById("s5").src = "./star0.png";
    } else {
    document.getElementById("s1").src = "./star1.png";
    document.getElementById("s2").src = "./star1.png";
    document.getElementById("s3").src = "./star1.png";
    document.getElementById("s4").src = "./star0.png";
    document.getElementById("s5").src = "./star0.png";
   }}
    
   //ESTRELA 2
   if (estrela == 2){ 
    if (s2 == url + "img/star0.png") {
    document.getElementById("s1").src = "./star1.png";
    document.getElementById("s2").src = "./star1.png";
    document.getElementById("s3").src = "./star0.png";
    document.getElementById("s4").src = "./star0.png";
    document.getElementById("s5").src = "./star0.png";
    } else {
    document.getElementById("s1").src = "./star1.png";
    document.getElementById("s2").src = "./star1.png";
    document.getElementById("s3").src = "./star0.png";
    document.getElementById("s4").src = "./star0.png";
    document.getElementById("s5").src = "./star0.png";
   }}
    
    //ESTRELA 1
   if (estrela == 1){ 
    if (s1 == url + "img/star0.png") {
    document.getElementById("s1").src = "./star1.png";
    document.getElementById("s2").src = "./star0.png";
    document.getElementById("s3").src = "./star0.png";
    document.getElementById("s4").src = "./star0.png";
    document.getElementById("s5").src = "./star0.png";
    } else {
    document.getElementById("s1").src = "./star1.png";
    document.getElementById("s2").src = "./star0.png";
    document.getElementById("s3").src = "./star0.png";
    document.getElementById("s4").src = "./star0.png";
    document.getElementById("s5").src = "./star0.png";
   }}

   document.getElementById('rating').innerHTML = avaliacao;
 
}

