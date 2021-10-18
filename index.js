//Iteración #1: Buscar el máximo
function sum(numberOne , numberTwo) {
    if (numberOne > numberTwo) {
        console.log('El número más alto es '+numberOne);
    } else if (numberOne < numberTwo) {
        console.log('El número más alto es '+numberTwo);
    } else {
        console.log('El número '+numberOne + ' y el número '+numberTwo+' son iguales');
    }
}
sum(9,5);

//Iteración #2: Buscar la palabra más larga
let max = 0;
let maxAvengers = '';
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
    for (var vengador of param) {
        if (max < vengador.length) {
          max = vengador.length
          maxAvengers = vengador
        }
    }
    console.log('La cadena más larga es '+maxAvengers)
}
findLongestWord(avengers)