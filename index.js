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
    console.log('La cadena más larga es '+maxAvengers);
}
findLongestWord(avengers)

//Iteración #3: Calcular la suma
let sumTotal = 0;
const numbers = [1, 2, 3, 5, 45, 37, 58];
function sumAll(param) {
    for (var numeros of param) {
        sumTotal += numeros;
      }
    console.log('La suma de todos los números es '+sumTotal)
}
sumAll(numbers)

//Iteración #4: Calcular el promedio
const numbers2 = [12, 21, 38, 5, 45, 37, 6];
var suma = 0;
function average(param) {
    for(var x = 0; x < param.length; x++){
        suma += param[x];
      }
      var promedio = suma / param.length;
      console.log('El promedio del array es '+Math.round(promedio))
}
average(numbers2)
