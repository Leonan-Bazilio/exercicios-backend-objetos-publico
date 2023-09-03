const jovens = [];
const adultos = [];
const usuarios = [
  {
    nome: "João",
    idade: 25,
  },
  {
    nome: "Ana",
    idade: 18,
  },
  {
    nome: "Beatriz",
    idade: 15,
  },
  {
    nome: "Carlos",
    idade: 16,
  },
  {
    nome: "Antonio",
    idade: 32,
  },
];

let countJovens = 0;
let countAdulto = 0;
for (let usuario of usuarios) {
  if (usuario.idade >= 18) {
    adultos[countAdulto] = usuario;
    countAdulto++;
  } else {
    jovens[countJovens] = usuario;
    countJovens++;
  }
}
console.log(adultos);
console.log(jovens);
