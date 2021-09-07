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
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck
}
