const curso = {
  id: 1234,
  nome: "Lógica de programação",
  aulas: [
    {
      nome_da_aula: "Introdução a programação",
    },
    {
      nome_da_aula: "Variáveis",
    },
    {
      nome_da_aula: "Condicionais",
    },
    {
      nome_da_aula: "Arrays",
    },
  ],
};
for (let i = 0; i < curso.aulas.length; i++) {
  curso.aulas[i].identificador = i + 1;
}
console.log(curso.aulas);
console.log(curso);
