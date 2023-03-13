// Condicionais e variáveis

var comparacao = 1 < 0;
var outraComparacao = 0 < 1;

if (comparacao) {
    console.log('verdadeiro');
} else if (outraComparacao) {
    console.log('outro verdadeiro');
} else {
    console.log('falso');
}

if (comparacao && outraComparacao) {
    console.log('verdadeiro');
} else {
    console.log('falso');
}

if (comparacao || outraComparacao) {
    console.log('verdadeiro');
} else {
    console.log('falso');
}

if (!comparacao) {
    console.log('falso')
}

// < > <= >= == !=