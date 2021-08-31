// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 === true && boolean2 === true) {
    return true;
  }
}

// Desafio 2
function calcArea(base, height) {
  // fórmula area triangulo: (base * altura)/2
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let phrase = string;
  let separa = phrase.split(' ');
  return separa;
}

// Desafio 4
function concatName(array) {
  let firstIten = array[0];
  let lastIten = array[array.length - 1];
  let concatenation = lastIten + ', ' + firstIten;
  return concatenation;
}

// Desafio 5
function footballPoints(wins, ties) {
  // wins 3 ties 1
  let pontos;
  if (wins > 1 || ties > 1) {
    pontos = wins * 3 + ties * 1;
  } else {
    pontos = 0;
   }
  return pontos;
}

// Desafio 6
function highestCount () {
  // seu código aqui 
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(array) {
  let newArray = [];

  for (let index = 0; index <= array.length-1; index +=1){

    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      newArray.push("fizzBuzz");

    } else if (array[index] % 5 === 0) {
      newArray.push ("buzz");

    } else if (array[index] % 3 === 0) {
      newArray.push("fizz");

    } else { newArray.push("bug!")};
  }
  return newArray;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
