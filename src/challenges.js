// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 === true && boolean2 === true) {
    return true;
  } else {
    return false;
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
  let lastIten = array[array.length - 1 ];
  return lastIten + ', ' + firstIten;
}


// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
