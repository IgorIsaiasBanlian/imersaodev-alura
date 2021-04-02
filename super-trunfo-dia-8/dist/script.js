var cartaPaulo = {
	nome: "Seiya de Pégaso",
  imagem: "http://1.bp.blogspot.com/-RhL9RltgAFI/U348WIcIc4I/AAAAAAAAHfE/jxqYQ-78J2I/s1600/Seiya+2.gif",
  audio: "https://trueexpert.com.br/sounds/saint-seiya-pegasus-fantasy.mp3",
	atributos: {
		ataque: 80,
		defesa: 60,
		magia: 90
	}
}

var cartaRafa = {
	nome: "Bulbasauro",
  imagem: "https://i.pinimg.com/originals/62/a6/94/62a694968a8a3a1842c4b9a79d5aa5c1.gif",
  audio:"https://trueexpert.com.br/sounds/bulbasaur-sound.mp3",
	atributos: {
		ataque: 70,
		defesa: 65,
		magia: 85
	}
}

var cartaGui = {
	nome: "Lord Darth Vader",
  imagem: "https://i.pinimg.com/originals/79/c0/62/79c0624ef8a46254beb59b1eb3fe1f6b.gif",
  audio: "https://trueexpert.com.br/sounds/lightsaber-igniting-sound-effect.mp3",
	atributos: {
		ataque: 88,
		defesa: 62,
		magia: 90
	}
}

var cartaMaquina
var cartaJogador
var cartas = [cartaPaulo, cartaRafa, cartaGui]

function sortearCarta() {
	var numeroCartaMaquina = parseInt(Math.random() * 3)
	cartaMaquina = cartas [numeroCartaMaquina]
	
	var numeroCartaJogador = parseInt(Math.random() * 3)
	while (numeroCartaJogador == numeroCartaMaquina) {
		numeroCartaJogador = parseInt(Math.random() * 3)
	}
	cartaJogador = cartas[numeroCartaJogador]
	
  resetaJogo()
  
	document.getElementById('btnSortear').disabled = true
	document.getElementById('btnJogar').disabled = false
  
  exibeCartaJogador()
}

function resetaJogo() {
  var divCartaJogador = document.getElementById('carta-jogador')
  var moldura =
    "<img src='https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png' style=' width: inherit; height: inherit; position: absolute;'>"

  divCartaJogador.style.backgroundImage = `url($)`
  divCartaJogador.innerHTML = "" + moldura

  var divCartaMaquina = document.getElementById('carta-maquina')
  var moldura =
    "<img src='https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png' style=' width: inherit; height: inherit; position: absolute;'>"

  divCartaMaquina.style.backgroundImage = `url($)`
  divCartaMaquina.innerHTML = "" + moldura

  var divResultado = document.getElementById('resultado')
  htmlResultado = '<p class="resultado-final"></p>'
  divResultado.innerHTML = htmlResultado
}

function exibeCartaJogador() {
    var divCartaJogador = document.getElementById('carta-jogador')
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">'
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' checked value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
	var radioAtributo = document.getElementsByName('atributo')
  
	for (var i = 0; i < radioAtributo.length; i++) {
		if (radioAtributo[i].checked) {
			return radioAtributo[i].value
		}
	}
}

function jogar() {
  var divResultado = document.getElementById('resultado')
	var atributoSelecionado = obtemAtributoSelecionado()
	
	if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
		htmlResultado = '<p class="resultado-final">Venceu</p>'
    audioResultado = `<audio autoplay src="${cartaJogador.audio}"></audio>`
	} else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
		htmlResultado = '<p class="resultado-final">Perdeu</p>'
    audioResultado = `<audio autoplay src="${cartaMaquina.audio}"></audio>`
	} else {
		htmlResultado = '<p class="resultado-final">Empatou</p>'
    audioResultado = '<audio autoplay src="https://trueexpert.com.br/sounds/street-fighter-new-challenger-sound-effect.mp3"></audio>'
	}
  
  divResultado.innerHTML = htmlResultado + audioResultado
  exibeCartaMaquina()
  document.getElementById("btnSortear").disabled = false
  document.getElementById("btnJogar").disabled = true
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById('carta-maquina')
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">'
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}