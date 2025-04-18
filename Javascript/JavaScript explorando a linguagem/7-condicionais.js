console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio De Janeiro`);

const idadeComprador = 15;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//   console.log("Comprador maior de idade");
//   listaDeDestinos.splice(1, 1);
// } else if (estaAcompanhada) {
//   console.log("Comprador está acompanhado");
//   listaDeDestinos.splice(1, 1);
// } else {
//   console.log("Comprador não é maior de idade");
// }

if (idadeComprador >= 18 || estaAcompanhada) {
  console.log("Boa viagem");
  listaDeDestinos.splice(1, 1);
} else {
  console.log("Comprador não é maior de idade");
}

console.log("Embarque: \n\n")
if (idadeComprador >= 18 && temPassagemComprada || estaAcompanhada && temPassagemComprada) {
    console.log('Boa viagem');
} else {
    console.log('Você não pode embarcar');
}

console.log(listaDeDestinos);