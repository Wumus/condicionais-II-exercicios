//códigos a serem reescritos

// a)
if (nome === "José") {
  console.log("Oi, Zé!");
} else { 
  console.log("Olá, " + nome);
}

//===== A) =====//

const nome = "José";
const nomeInserido = nome === "José" ? "Olá, José!" : "Olá, " + nome;

// b)

if (idade >= 18) {
  console.log("Pode tirar carteira de motorista!");
} else {
  console.log("Ainda não pode tirar carteira de motorista!");
}

//===== B) =====//

const idade = 18
const idadeResultado = idade >= 18 ? "Pode tirar carteira de motorista!" : "Ainda nao pode tirar carteira de motorista!"
