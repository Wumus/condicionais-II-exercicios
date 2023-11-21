//===== PARTE A) =====//

function dividirPor2E3(numero) {
  numero = Number(prompt("Digite um número: ")); //Recebendo por prompt o número//

  if (numero % 2 === 0) {
    //Testando primeira condicao, se é divisível por 2//
    console.log("Divisível por 2!");
  } else if (numero % 3 === 0) {
    //Testando primeira condicao, se é divisível por 3//
    console.log("Divisível por 3!");
  } else {
    //Caso nao seja divisivel por nenhum, imprima isso//
    console.log("Nao divisível por 2 e nem 3!");
  }
}

dividirPor2E3();

//===== PARTE B) =====//

function dividirLogicos(numero, div2, div3) {
  numero = Number(prompt("Digite um número: "));

  div2 = numero % 2 === 0;
  div3 = numero % 3 === 0;

  if (div2) {
    console.log("Divisível por 2!");
    
    if (div3) {
        console.log("Divisível por 3 também!")
    }

  } else if (div3) {
    console.log("Divisível por 3!");
    
  } else {
    console.log("N é divisível nem por 2 nem por 3!")
  }
}

dividirLogicos();
