//Iteración #1: Buscar el máximo
console.log('//Iteración #1')
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
console.log('//Iteración #2')
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
console.log('//Iteración #3')
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
console.log('//Iteración #4')
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

//Iteración #5: Calcular promedio de strings
console.log('//Iteración #5')
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function mix(param) {
    let nummix = 0;
    let wordmix = 0;
    for (let mixto of mixedElements) {
      if (typeof mixto === 'number'){
        nummix += mixto;
      }else {
        wordmix += mixto.length;
      }
    }
    console.log('El total de numeros sumados son: ' + nummix);
    console.log('El total de letras sumadss son: ' + wordmix);
}
mix(mixedElements)

//Iteración #6: Valores únicos
console.log('//Iteración #6')
const duplicates = ['sushi','pizza','burger','potatoe','pasta','ice-cream','pizza','chicken','onion rings','pasta','soda'];
function removeDuplicates(param) {
    let sorted_duplicates = duplicates.sort(); 
    let results = [];
    for (var i = 0; i < duplicates.length-1; i++) {
        
        if (sorted_duplicates[i + 1] == sorted_duplicates[i]) {
            duplicates.splice(i, 1)
        }
    }
    console.log(duplicates)
}
removeDuplicates(duplicates)




