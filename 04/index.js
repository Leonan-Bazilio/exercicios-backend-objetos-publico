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
for (let usuario of usuarios) {
  usuario.idade >= 18 ? (usuario.maiorIdade = true) : (usuario.maiorIdade = false);
}
console.log(usuarios);
