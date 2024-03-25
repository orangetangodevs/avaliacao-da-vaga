//5) Escreva um programa que inverta os caracteres de um string.

//IMPORTANTE:

//a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

//b) Evite usar funções prontas, como, por exemplo, reverse;

//RESPOSTA//

function inverterString(string) {
  let novaString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    novaString += string[i];
  }
  return novaString;
}

// String de exemplo
let stringExemplo = "Olá, mundo!";

// Chamada da função para inverter a string
let stringInvertida = inverterString(stringExemplo);

// Impressão do resultado
console.log("String original: " + stringExemplo);
console.log("String invertida: " + stringInvertida);
