var listaNumerica = [1, 2, 3, 4, 5];

console.log(listaNumerica);

var listaDeTexto = ['um', 'dois', 'tres'];

if (listaDeTexto[2]) {
  console.log(listaDeTexto[2]);
}

var lista = [1, 'dois', ['um', 2]];

var array2D = [
  ['O', ' ', 'O'],
  [' ', 'X', 'O'],
  [' ', ' ', 'O'],
];

var pe = {
  nome: 'Pedro',
  apelido: 'Pe',
  idade: 18,
  altura: 1.65
};

console.log(pe);

console.log(pe.nome);

var campo = 'idade';

console.log(pe[campo]);

function pegaCampo (campoX) {
  console.log(pe[campoX]);
}

pegaCampo('altura');