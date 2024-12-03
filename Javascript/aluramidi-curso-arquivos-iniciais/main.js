function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');  //Lista de teclas

let contador = 0;

while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1]; //Retorna a segunda classe da tecla

    const idAudio = `#som_${instrumento}`; //Para criar uma string com variável

    tecla.onclick = function() {
        tocaSom(idAudio);
    };

    contador = contador + 1;
}