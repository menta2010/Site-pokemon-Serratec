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