var paulo = {
  nome: "Paulo",
	vitorias: 2,
	empates: 5,
	derrotas: 1,
	pontos: 0
};
var rafa = {
	nome: "Rafa",
	vitorias: 3,
	empates: 5,
	derrotas: 2,
	pontos: 0
};

paulo.pontos = calculaPontos(paulo);
rafa.pontos = calculaPontos(rafa);

function calculaPontos(jogador){
  var pontos = (jogador.vitorias * 3) + jogador.empates;
	return pontos
};

var jogadores = [paulo, rafa];

exibirJogadoresNaTela(jogadores);

function exibirJogadoresNaTela(jogadores){
  var html = "";
	for(var i = 0; i < jogadores.length; i++){
    html += "<tr><td>" + jogadores[i].nome + "</td>";
		html += "<td>" + jogadores[i].vitorias + "</td>";
		html += "<td>" + jogadores[i].empates + "</td>";
		html += "<td>" + jogadores[i].derrotas + "</td>";
		html += "<td>" + jogadores[i].pontos + "</td>";
		html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
	};
  var tabelaJogadores = document.getElementById('tabelaJogadores');
	tabelaJogadores.innerHTML = html
};

function adicionarVitoria(i){
  var jogador = jogadores[i];
	jogador.vitorias++;
	jogador.pontos = calculaPontos(jogador);
	exibirJogadoresNaTela(jogadores)
};

function adicionarEmpate(i){
	var jogador = jogadores[i];
	jogador.empates++;
	jogador.pontos = calculaPontos(jogador);
	exibirJogadoresNaTela(jogadores)
};

function adicionarDerrota(i){
	var jogador = jogadores[i];
	jogador.derrotas++;
	exibirJogadoresNaTela(jogadores)
};

var filtro = document.getElementById('buscaNome');
var tabela = document.getElementById('tabelaJogadores');
filtro.onkeyup = function() {
  var nomeFiltro = filtro.value;
  for (var i = 0; i < tabela.rows.length; i++) {
    var conteudoCelula = tabela.rows[i].cells[0].innerText;
    var corresponde = conteudoCelula.toLowerCase().indexOf(nomeFiltro) >= 0;
    tabela.rows[i].style.display = corresponde ? '' : 'none'
  }
};