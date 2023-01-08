
    const inicio = document.getElementById('inicio')
    const sobre = document.getElementById('sobre')
    const habilidades = document.getElementById('habilidades')
    const projetos = document.getElementById('projetos')
    const contatos = document.getElementById('contatos')

    /* Indicador de página pelo scrollFromTheTop */
    window.onload = Indicador()
    document.addEventListener("scroll",Indicador) 
    function Indicador() {
      var posicaoy = window.pageYOffset
      
      if(posicaoy < 470){
        inicio.style.color = 'var(--rosaClaro)'
        sobre.style.color = 'var(--branco)'
        habilidades.style.color = 'var(--branco)'
        projetos.style.color = 'var(--branco)'
        contatos.style.color = 'var(--branco)'
      }
      else if(posicaoy >= 470 && posicaoy <= 1076){
        inicio.style.color = 'var(--branco)'
        sobre.style.color = 'var(--rosaClaro)'
        habilidades.style.color = 'var(--branco)'
        projetos.style.color = 'var(--branco)'
        contatos.style.color = 'var(--branco)'
      }
      else if(posicaoy >= 1076 && posicaoy <= 1750){
        inicio.style.color = 'var(--branco)'
        sobre.style.color = 'var(--branco)'
        habilidades.style.color = 'var(--rosaClaro)'
        projetos.style.color = 'var(--branco)'
        contatos.style.color = 'var(--branco)'
      }
      else if(posicaoy >= 1750 && posicaoy <= 2330){
        inicio.style.color = 'var(--branco)'
        sobre.style.color = 'var(--branco)'
        habilidades.style.color = 'var(--branco)'
        projetos.style.color = 'var(--rosaClaro)'
        contatos.style.color = 'var(--branco)'
      }
      else{
        inicio.style.color = 'var(--branco)'
        sobre.style.color = 'var(--branco)'
        habilidades.style.color = 'var(--branco)'
        projetos.style.color = 'var(--branco)'
        contatos.style.color = 'var(--rosaClaro)'
      }

    }
    
    