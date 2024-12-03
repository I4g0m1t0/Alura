function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');  //Lista de teclas

for (let contador = 0;  contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1]; //Retorna a segunda classe da tecla
    const idAudio = `#som_${instrumento}`; //Para criar uma string com variável

    tecla.onclick = function() {
        tocaSom(idAudio);
    };
}