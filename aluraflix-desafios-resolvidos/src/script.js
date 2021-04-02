var listaFilmes = ["https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg"];

var nomeFilmes = ["Toy Story", "Star Wars", "Interstellar"];

var loop = 1

while (loop == 1) {
  var escolha = parseInt(prompt("Digite o número do seu filme preferido (de acordo com a lista abaixo):\n\n" + "1) " + nomeFilmes[0] + "\n2) " + nomeFilmes[1] + "\n3) " + nomeFilmes[2]));
  if (escolha == 1) {
    document.write("<img src=" + listaFilmes[0] + ">");
    break;
  } else if (escolha == 2) {
    document.write("<img src=" + listaFilmes[1] + ">");
    break;
  } else if (escolha == 3) {
    document.write("<img src=" + listaFilmes[2] + ">");
    break;
  } else {
    alert("Opção inválida! Digite apenas 1, 2 ou 3!");
  };
};
