// Desafio 10
function techList(arrayTech, name) {
  let topTech = [];
  /**
   * 1 - função recebe um array com nome de tecnologias que quero aprender "arrayTech"
   * 2 - segundo paramentro chamado name
   *     percorrer o array criando um objeto para cada item de arrayTech?
   * 3 - Para cada tecnologia no array, crie um objeto
   *     criar uma variavel com um array vazio
   * 4 - ordenar os objetos em lista crescente de acordo com o campo tech
   *     retornar essa lista ordenada como saida da função
   *     se o array estiver vazio, retornar "vazio"
   */

  if (arrayTech < 1) {
    return 'Vazio!';
  } else {
    let arrayOrder = arrayTech.sort();
    for (let index = 0; index < arrayOrder.length; index += 1) {
      let techTech = {
        tech: arrayOrder[index],
        name: name,
      }
      topTech.push(techTech);
    }
    return topTech;
  }
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
/**
 * Descobrir quanto foi bebido - match
 *    criou ujm array com copos
 *        somar os valores do array - for
 *              valor do array = copos de agua
 */
function hydrate(_string) {
  let numberDrink = _string.match(/\d+/g);
  // .match(/\d+/g) - pequeno imprevisto, isso retornou strings entao a soma passou a ser 1+5 = 15
  // for = if/else para voltar a ser numeral considerando o criterio <9
  let number = [];
  for (let i = 0; i < numberDrink.length; i += 1) {
    if (numberDrink[i] == 1) {
      number.push(1);
    } else if (numberDrink[i] == 2){
      number.push(2);
    } else if (numberDrink[i] == 3){
      number.push(3);
    } else if (numberDrink[i] == 4){
      number.push(4);
    } else if (numberDrink[i] == 5){
      number.push(5);
    } else if (numberDrink[i] == 6){
      number.push(6);
    } else if (numberDrink[i] == 7){
      number.push(7);
    } else if (numberDrink[i] == 8){
      number.push(8);
    } else if (numberDrink[i] == 9){
      number.push(9);
    }
  }

  let sumArray = 0;
  for (let index = 0; index < number.length; index += 1) {
    sumArray += number[index];
  }

  if (sumArray > 1) {
    return sumArray + ' copos de água';
  } else {
    return sumArray + ' copo de água';
  }
}
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck
}
