function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') { //elemento != null && elemento.localName === 'audio'
        elemento.play();
    }
    else {
        console.log('elemento não encontrado ou seletor inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');  //Lista de teclas

for (let contador = 0;  contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1]; //Retorna a segunda classe da tecla
    const idAudio = `#som_${instrumento}`; //Para criar uma string com variável

    tecla.onclick = function() {
        tocaSom(idAudio);
    };

    tecla.onkeydown = function(evento) {
        if ((evento.code === 'Space') || (evento.code === 'Enter')) {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
}