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
    let sorted_duplicates = param.sort(); 
    
    for (var i = 0; i < param.length-1; i++) {
        
        if (sorted_duplicates[i + 1] == sorted_duplicates[i]) {
            param.splice(i, 1)
        }
    }
    console.log(param)
}
removeDuplicates(duplicates)

//Iteración #7: Buscador de nombres
console.log('//Iteración #7')
const nameFinder = ['Peter','Steve','Tony','Natasha','Clint','Logan','Xabier','Bruce','Peggy','Jessica','Marc'];
function finderName(param, nametofind) {
    let exist = 0;
    nameFinder.forEach(
        function (element) {
          if (element == nametofind){
            exist = 1;
          }
        }
      );
    if (exist != 0) {
        var indexElement = nameFinder.indexOf(nametofind);
        console.log('True, '+nametofind+' existe en el array y su posición es ' +indexElement);
    } else {
        console.log('False')
    }
}
finderName(nameFinder, 'Logan')

//Iteración #8: Contador de repeticiones
console.log('//Iteración #8')
const counterWords = ['code','repeat','eat','sleep','code','enjoy','sleep','code','enjoy','upgrade','code'];
function repeatCounter(param) {
    const uniqueWords = param.filter((x, i, a) => a.indexOf(x) == i)
    for (var aa of uniqueWords) {
        let elnumber = 0;
        for (var i = 0; i < param.length; i++) {
            if (aa == param[i]) {
                elnumber+=1;
            }
        }
        console.log(aa + ' esta '+elnumber+' veces');
    }
}
repeatCounter(counterWords);

//Otra forma
console.log('//Otra forma Iteración #8')
let newList = [];
for (var objeto of counterWords) {
    if (!newList.includes(objeto)){
        newList.push(objeto);
    }   
}
for (var object2 of newList) {
    let newObject = object2;
    let number = 0;
    for (var objeto2 of counterWords) {
        if (newObject === objeto2) {
            number += 1;
        }
    }
    console.log(newObject+' se repite '+number+' veces')
}
//console.log(newList)


