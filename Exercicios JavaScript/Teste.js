var dividendo = 18;
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (var idx = 0; idx < numeros.length; idx++) {
    var fator;
    var divisor = numeros[idx];

    if (dividendo % divisor == 0) {
        fator = true;
    }

    if (fator) {
        console.log(divisor + ' é um fator de ' + dividendo + '!');
    }
}