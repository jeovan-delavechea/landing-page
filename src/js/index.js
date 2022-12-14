const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

function esconderImagens(){imagensPainel.forEach(imagem => {
    imagem.classList.remove('mostrar')})}
function mostrarImagens(){imagensPainel[imagemAtual].classList.add('mostrar');}

setaAvancar.addEventListener('click', function(){
   const totalDeImagens = imagensPainel.length - 1;
   if(imagemAtual === totalDeImagens) {return;}

   imagemAtual++;
   esconderImagens()
   mostrarImagens()
   mostrarOuEsconderSetas()
})

setaVoltar.addEventListener('click', function(){
    if(imagemAtual === 0) {return;}
    
    imagemAtual--;
    esconderImagens()
    mostrarImagens()
    mostrarOuEsconderSetas()
})

function mostrarOuEsconderSetas(){
    const SaiuDaPrimeiraImagem = imagemAtual !== 0;
    if(SaiuDaPrimeiraImagem){
        setaVoltar.classList.remove('opacidade')
    } else {
        setaVoltar.classList.add('opacidade')
    }

    const chegouNaUltimaSeta = imagemAtual !== 0 && imagemAtual === imagensPainel.length -1;
    if(chegouNaUltimaSeta){
        setaAvancar.classList.add('opacidade')
    } else {
        setaAvancar.classList.remove('opacidade')
    }
}