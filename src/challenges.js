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
      newArray.push('fizzBuzz');
    } else if (array[index] % 5 === 0) {
      newArray.push ('buzz');
    } else if (array[index] % 3 === 0) {
      newArray.push('fizz');

    } else { newArray.push('bug!' ); }
  }
  return newArray;
}

// Desafio 9
function encode(texto) {
  // um let fora do for para armazenar resultados
  let copyText = texto;
  let result = "";

  // for para percorrer a string
  for (let index = 0; index <= texto.length-1 ; index += 1) {
  // um if para testar cada coisa e jogar na let o resultado
    if (copyText[index] !== 'a' && 
        copyText[index] !== 'e' &&
        copyText[index] !== 'i' &&
        copyText[index] !== 'o' &&
        copyText[index] !== 'u') {
      result = result + copyText[index];

    } else if (copyText[index] === 'a'){
      result = result + 1;

    } else if (copyText[index] === 'e') {
      result = result + 2;

    } else if (copyText[index] === 'i') {
      result = result + 3;

    } else if (copyText[index] === 'o') {
      result = result + 4;

    } else if (copyText[index] === 'u') {
      result = result + 5;
    }
  
  }
 return result;
 console.log(result)
}
function decode(number) {
  let copyNumber = number;
  let result = "";

  // for para percorrer a string
  for (let index = 0; index <= number.length-1 ; index += 1) {
  // um if para testar cada coisa e jogar na let o resultado
    if (copyNumber[index] === '1'){
      result = result + 'a';

    } else if (copyNumber[index] === '2') {
      result = result + 'e';

    } else if (copyNumber[index] === '3') {
      result = result + 'i';

    } else if (copyNumber[index] === '4') {
      result = result + 'o';

    } else if (copyNumber[index] === '5') {
      result = result + 'u';
    } else { 
      result = result + copyNumber[index];
    }
  
  }
 return result;
 console.log(result)
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

