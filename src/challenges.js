// Desafio 1
function compareTrue(boolean1, boolean2) {
  let result;
  if (boolean1 === true && boolean2 === true) {
    result = true;
  } else {
    result = false;
  }
  return result;
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
  let concat = lastIten + ', ' + firstIten;
  return concat;
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
function highestCount(arrayNum) {
  let copyArrayNumber = arrayNum;
  let test = copyArrayNumber[0];
  let theBigger = test;
  let repeatTheBigger = 0;

  for (let index = 1; index < copyArrayNumber.length; index += 1) {
    if (copyArrayNumber[index] > theBigger) {
      theBigger = copyArrayNumber[index];
    } else if (test < copyArrayNumber[index] && theBigger < test) {
      theBigger = test;
    }
  }

  for (let ind = 0; ind < copyArrayNumber.length; ind += 1) {
    if (theBigger === copyArrayNumber[ind]) {
      repeatTheBigger += 1;
    }
  }
  return repeatTheBigger;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let result;
  /**  cat1 e cat2 , mouse - eles estão em uma reta, cada um representado por um numero
  se cat 1 > cat2 : cat1 pega o rato
  se cat 2 > cat1 : cat2 pega o rato
  se cat 1 === 0 cat2 === 0 : rato foge pois um gato atrapalha o outro
  */
  if (cat1 === 0 || cat2 === 0) {
    result = 'os gatos trombam e o rato foge';
  } else if (cat2 < cat1) {
    result = 'cat2';
  } else if (cat1 < cat2) {
    result = 'cat1';
  }
  return result;
}

// Desafio 8
function fizzBuzz(array) {
  let newArray = [];

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      newArray.push('fizzBuzz');
    } else if (array[index] % 5 === 0) {
      newArray.push('buzz');
    } else if (array[index] % 3 === 0) {
      newArray.push('fizz');
    } else { newArray.push('bug!'); }
  }
  return newArray;
}

// Desafio 9
function encode(texto) {
  // um let fora do for para armazenar resultados
  let copyText = texto;
  let result = '';

  // for para percorrer a string
  for (let index = 0; index < texto.length; index += 1) {
  // um if para testar cada coisa e jogar na let o resultado
    if (copyText[index] !== 'a'
    || copyText[index] !== 'e'
    || copyText[index] !== 'i'
    || copyText[index] !== 'o'
    || copyText[index] !== 'u') {
      result += copyText[index];
    } else if (copyText[index] === 'a') {
      result += 1;
    } else if (copyText[index] === 'e') {
      result += 2;
    } else if (copyText[index] === 'i') {
      result += 3;
    } else if (copyText[index] === 'o') {
      result += 4;
    } else if (copyText[index] === 'u') {
      result += 5;
    }
  }
  return result;
}

function decode(number) {
  let copyNumber = number;
  let result = '';
  for (let index = 0; index < number.length; index += 1) {
    if (copyNumber[index] === '1') {
      result += 'a';
    } else if (copyNumber[index] === '2') {
      result += 'e';
    } else if (copyNumber[index] === '3') {
      result += 'i';
    } else if (copyNumber[index] === '4') {
      result += 'o';
    } else if (copyNumber[index] === '5') {
      result += 'u';
    } else {
      result += copyNumber[index];
    }
  }
  return result;
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
