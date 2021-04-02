var listaAnimes = ["https://redecanais.cloud/imgs-videos/Legado/Trigun.jpg", "https://redecanais.cloud/imgs-videos/Legado/Ergo%20Proxy.jpg", "https://redecanais.cloud/imgs-videos/Animes/Violet%20Evergarden%201.jpg"];

var listaPaginas = ["anime1()", "anime2()", "anime3()"];

function pesquisarAnime() {
  var campoPesquisaAnime = document.querySelector('#anime')
  var pesquisa = campoPesquisaAnime.value
  campoPesquisaAnime.value = ""
};

function listarAnimesNaTela(anime) {
  var listaAnimes = document.querySelector('#listaAnimes')
  var elementoAnime = "<img src=" + anime + ">"
  listaAnimes.innerHTML = listaAnimes.innerHTML + elementoAnime
};

function anime1() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  paginaEpisodiosAnime1 = "<div class='container' id='listaAnimes' style='text-align: left;'><font color='#696969'><h1 class='page-title'>Trigun (Dublado)</h1> <p class='page-subtitle'>[1ª Temporada]</p><ol><li>O Homem Que Vale 60 Bilhões &nbsp;&nbsp;| <button onClick='episodio1Anime1()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>As Aparências Enganam &nbsp;&nbsp;| <button onClick='episodio2Anime1()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>Apaziguador &nbsp;&nbsp;| <button onClick='episodio3Anime1()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>Paz e Amor &nbsp;&nbsp;| <button onClick='episodio4Anime1()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>Golpe Duro &nbsp;&nbsp;| <button onClick='episodio5Anime1()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>July Perdida &nbsp;&nbsp;| <button onClick='episodio6Anime1()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>B.D.N &nbsp;&nbsp;| <button onClick='episodio7Anime1()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>E Entre o Deserto e os Céus &nbsp;&nbsp;| <button onClick='episodio8Anime1()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>Maquina de Matar &nbsp;&nbsp;| <button onClick='episodio9Anime1()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>Saque Rápido &nbsp;&nbsp;| <button onClick='episodio10Anime1()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>Fugindo da Dor &nbsp;&nbsp;| <button onClick='episodio11Anime1()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>Devil &nbsp;&nbsp;| <button onClick='episodio12Anime1()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>Vash The Stampede &nbsp;&nbsp;| <button onClick='episodio13Anime1()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>Pequena Arcádia &nbsp;&nbsp;| <button onClick='episodio14Anime1()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>Olho do Demônio &nbsp;&nbsp;| <button onClick='episodio15Anime1()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>Quinta Lua &nbsp;&nbsp;| <button onClick='episodio16Anime1()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>REM Salvarem &nbsp;&nbsp;| <button onClick='episodio17Anime1()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>Adeus Por Enquanto &nbsp;&nbsp;| <button onClick='episodio18Anime1()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>Não Atire &nbsp;&nbsp;| <button onClick='episodio19Anime1()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>Nave Flutuante &nbsp;&nbsp;| <button onClick='episodio20Anime1()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>Fora de Tempo &nbsp;&nbsp;| <button onClick='episodio21Anime1()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>Alternativa &nbsp;&nbsp;| <button onClick='episodio22Anime1()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>Paraíso &nbsp;&nbsp;| <button onClick='episodio23Anime1()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>Pecado &nbsp;&nbsp;| <button onClick='episodio24Anime1()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>Resistindo &nbsp;&nbsp;| <button onClick='episodio25Anime1()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>Embaixo do Céu Tão Azul &nbsp;&nbsp;| <button onClick='episodio26Anime1()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li></ol></font><div class='form-wrapper'><button onClick='armandoVoltaHOME()'>VOLTAR</button></div></div>";
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = paginaEpisodiosAnime1;
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function armandoVoltaAnime1(){
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = paginaEpisodiosAnime1;
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio1Anime1() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Trigun (Dublado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 01 - O Homem Que Vale 60 Bilhões:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer10/ondemand/TRGUNEP01.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime1()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio2Anime1() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Trigun (Dublado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 02 - As Aparências Enganam:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer10/ondemand/TRGUNEP02.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime1()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio3Anime1() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Trigun (Dublado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 03 - Apaziguador:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer10/ondemand/TRGUNEP03.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime1()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio4Anime1() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Trigun (Dublado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 04 - Paz e Amor:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer10/ondemand/TRGUNEP04.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime1()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio5Anime1() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Trigun (Dublado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 05 - Golpe Duro:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer10/ondemand/TRGUNEP05.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime1()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio6Anime1() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Trigun (Dublado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 06 - July Perdida:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer10/ondemand/TRGUNEP06.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime1()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio7Anime1() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Trigun (Dublado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 07 - B.D.N:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer10/ondemand/TRGUNEP07.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime1()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio8Anime1() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Trigun (Dublado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 08 - E Entre o Deserto e os Céus:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer10/ondemand/TRGUNEP08.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime1()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio9Anime1() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Trigun (Dublado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 09 - Maquina de Matar:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer10/ondemand/TRGUNEP09.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime1()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio10Anime1() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Trigun (Dublado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 10 - Saque Rápido:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer10/ondemand/TRGUNEP10.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime1()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio11Anime1() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Trigun (Dublado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 11 - Fugindo da Dor:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer10/ondemand/TRGUNEP11.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime1()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio12Anime1() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Trigun (Dublado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 12 - Devil:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer10/ondemand/TRGUNEP12.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime1()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio13Anime1() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Trigun (Dublado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 13 - Vash The Stampede:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer10/ondemand/TRGUNEP13.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime1()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio14Anime1() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Trigun (Dublado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 14 - Pequena Arcádia:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer10/ondemand/TRGUNEP14.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime1()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio15Anime1() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Trigun (Dublado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 15 - Olho do Demônio:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer10/ondemand/TRGUNEP15.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime1()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio16Anime1() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Trigun (Dublado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 16 - Quinta Lua:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer10/ondemand/TRGUNEP16.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime1()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio17Anime1() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Trigun (Dublado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 17 - REM Salvarem:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer10/ondemand/TRGUNEP17.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime1()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio18Anime1() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Trigun (Dublado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 18 - Adeus Por Enquanto:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer10/ondemand/TRGUNEP18.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime1()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio19Anime1() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Trigun (Dublado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 19 - Não Atire:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer10/ondemand/TRGUNEP19.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime1()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio20Anime1() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Trigun (Dublado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 20 - Nave Flutuante:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer10/ondemand/TRGUNEP20.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime1()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio21Anime1() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Trigun (Dublado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 21 - Fora de Tempo:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer10/ondemand/TRGUNEP21.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime1()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio22Anime1() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Trigun (Dublado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 22 - Alternativa:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer10/ondemand/TRGUNEP22.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime1()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio23Anime1() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Trigun (Dublado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 23 - Paraíso:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer10/ondemand/TRGUNEP23.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime1()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio24Anime1() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Trigun (Dublado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 24 - Pecado:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer10/ondemand/TRGUNEP24.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime1()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio25Anime1() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Trigun (Dublado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 25 - Resistindo:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer10/ondemand/TRGUNEP25.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime1()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio26Anime1() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Trigun (Dublado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 26 - Embaixo do Céu Tão Azul:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer10/ondemand/TRGUNEP26.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime1()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};

function anime2() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  paginaEpisodiosAnime2 = "<div class='container' id='listaAnimes' style='text-align: left;'><font color='#696969'><h1 class='page-title'>Ergo Proxy (Legendado)</h1> <p class='page-subtitle'>[1ª Temporada]</p><ol><li>Despertar &nbsp;&nbsp;| <button onClick='episodio1Anime2()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>Confissão &nbsp;&nbsp;| <button onClick='episodio2Anime2()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>Mazecity &nbsp;&nbsp;| <button onClick='episodio3Anime2()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>Futu-risco &nbsp;&nbsp;| <button onClick='episodio4Anime2()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>TASOGARE &nbsp;&nbsp;| <button onClick='episodio5Anime2()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>Domecoming &nbsp;&nbsp;| <button onClick='episodio6Anime2()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>Re-1124c41+ &nbsp;&nbsp;| <button onClick='episodio7Anime2()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>Sinal luminoso &nbsp;&nbsp;| <button onClick='episodio8Anime2()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>Partes do Anjo &nbsp;&nbsp;| <button onClick='episodio9Anime2()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>Cytotropism &nbsp;&nbsp;| <button onClick='episodio10Anime2()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>Anamnese &nbsp;&nbsp;| <button onClick='episodio11Anime2()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>Esconderijo &nbsp;&nbsp;| <button onClick='episodio12Anime2()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>Casa Pelo Caminho Errado &nbsp;&nbsp;| <button onClick='episodio13Anime2()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>Ophelia &nbsp;&nbsp;| <button onClick='episodio14Anime2()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>Quem Quer Ser em Jeopardy! &nbsp;&nbsp;| <button onClick='episodio15Anime2()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>Ocupado Fazendo Nada &nbsp;&nbsp;| <button onClick='episodio16Anime2()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>Terra Incognita &nbsp;&nbsp;| <button onClick='episodio17Anime2()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>Vida Depois de Deus &nbsp;&nbsp;| <button onClick='episodio18Anime2()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>Sorriso Eterno &nbsp;&nbsp;| <button onClick='episodio19Anime2()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>Adeus, Vincent &nbsp;&nbsp;| <button onClick='episodio20Anime2()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>Planeta Shampoo &nbsp;&nbsp;| <button onClick='episodio21Anime2()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>Vincular &nbsp;&nbsp;| <button onClick='episodio22Anime2()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>Deus Ex-Machina &nbsp;&nbsp;| <button onClick='episodio23Anime2()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li></ol></font><div class='form-wrapper'><button onClick='armandoVoltaHOME()'>VOLTAR</button></div></div>";
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = paginaEpisodiosAnime2;
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function armandoVoltaAnime2(){
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = paginaEpisodiosAnime2;
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio1Anime2() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Ergo Proxy (Legendado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 01 - Despertar:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer02/ondemand/EP01.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime2()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio2Anime2() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Ergo Proxy (Legendado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 02 - Confissão:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer02/ondemand/EP02.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime2()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio3Anime2() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Ergo Proxy (Legendado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 03 - Mazecity:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer02/ondemand/EP03.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime2()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio4Anime2() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Ergo Proxy (Legendado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 04 - Futu-risco:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer02/ondemand/EP04.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime2()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio5Anime2() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Ergo Proxy (Legendado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 05 - TASOGARE:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer02/ondemand/EP05.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime2()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio6Anime2() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Ergo Proxy (Legendado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 06 - Domecoming:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer02/ondemand/EP06.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime2()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio7Anime2() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Ergo Proxy (Legendado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 07 - Re-1124c41+:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer02/ondemand/EP07.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime2()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio8Anime2() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Ergo Proxy (Legendado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 08 - Sinal luminoso:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer02/ondemand/EP08.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime2()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio9Anime2() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Ergo Proxy (Legendado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 09 - Partes do Anjo:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer02/ondemand/EP09.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime2()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio10Anime2() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Ergo Proxy (Legendado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 10 - Cytotropism:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer02/ondemand/EP10.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime2()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio11Anime2() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Ergo Proxy (Legendado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 11 - Anamnese:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer02/ondemand/EP11.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime2()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio12Anime2() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Ergo Proxy (Legendado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 12 - Esconderijo:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer02/ondemand/EP12.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime2()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio13Anime2() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Ergo Proxy (Legendado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 13 - Casa Pelo Caminho Errado:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer02/ondemand/EP13.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime2()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio14Anime2() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Ergo Proxy (Legendado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 14 - Ophelia:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer02/ondemand/EP14.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime2()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio15Anime2() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Ergo Proxy (Legendado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 15 - Quem Quer Ser em Jeopardy!:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer02/ondemand/EP15.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime2()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio16Anime2() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Ergo Proxy (Legendado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 16 - Ocupado Fazendo Nada:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer02/ondemand/EP16.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime2()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio17Anime2() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Ergo Proxy (Legendado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 17 - Terra Incognita:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer02/ondemand/EP17.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime2()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio18Anime2() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Ergo Proxy (Legendado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 18 - Vida Depois de Deus:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer02/ondemand/EP18.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime2()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio19Anime2() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Ergo Proxy (Legendado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 19 - Sorriso Eterno:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer02/ondemand/EP19.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime2()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio20Anime2() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Ergo Proxy (Legendado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 20 - Adeus, Vincent:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer02/ondemand/EP20.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime2()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio21Anime2() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Ergo Proxy (Legendado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 21 - Planeta Shampoo:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer02/ondemand/EP21.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime2()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio22Anime2() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Ergo Proxy (Legendado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 22 - Vincular:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer02/ondemand/EP22.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime2()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio23Anime2() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Ergo Proxy (Legendado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 23 - Deus Ex-Machina:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer02/ondemand/EP23.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime2()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};

function anime3() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  paginaEpisodiosAnime3 = "<div class='container' id='listaAnimes' style='text-align: left;'><font color='#696969'><h1 class='page-title'>Violet Evergarden (Dublado)</h1> <p class='page-subtitle'>[1ª Temporada]</p><ol><li>O Eu Te Amo e as Autômatas de Automemórias &nbsp;&nbsp;| <button onClick='episodio1Anime3()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>Não Vou Voltar &nbsp;&nbsp;| <button onClick='episodio2Anime3()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>Você Pode Ser Uma Boa Boneca Automatizada &nbsp;&nbsp;| <button onClick='episodio3Anime3()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>Não Seja Uma Ferramenta Seja Formosa Como o Seu Nome &nbsp;&nbsp;| <button onClick='episodio4Anime3()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>Você Gostaria de Olhar Para si Mesmo &nbsp;&nbsp;| <button onClick='episodio5Anime3()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>Você Viu em Algum Lugar &nbsp;&nbsp;| <button onClick='episodio6Anime3()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>Sem Nome &nbsp;&nbsp;| <button onClick='episodio7Anime3()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>Número Oito &nbsp;&nbsp;| <button onClick='episodio8Anime3()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>Violet Evergarden &nbsp;&nbsp;| <button onClick='episodio9Anime3()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>Entes Queridos Sempre Cuidarão de Você &nbsp;&nbsp;| <button onClick='episodio10Anime3()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>Eu Não Quero Que Ninguém Mais Morra &nbsp;&nbsp;| <button onClick='episodio11Anime3()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>Número Doze &nbsp;&nbsp;| <button onClick='episodio12Anime3()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>As Memórias da Boneca e Eu Te Amo &nbsp;&nbsp;| <button onClick='episodio13Anime3()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li><li>Episódio Extra &nbsp;&nbsp;| <button onClick='episodio14Anime3()' style='border: 0; background-color: transparent; font-family: Bangers; color: #696969; font-size: 16px; cursor: pointer;'>[ASSISTIR]</button></li></ol></font><div class='form-wrapper'><button onClick='armandoVoltaHOME()'>VOLTAR</button></div></div>";
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = paginaEpisodiosAnime3;
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function armandoVoltaAnime3(){
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = paginaEpisodiosAnime3;
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio1Anime3() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Violet Evergarden (Dublado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 01 - O Eu Te Amo e as Autômatas de Automemórias:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer04/ondemand/VIOLTEVRGRDNT01EP01.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime3()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio2Anime3() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Violet Evergarden (Dublado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 02 - Não Vou Voltar:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer04/ondemand/VIOLTEVRGRDNT01EP02.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime3()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio3Anime3() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Violet Evergarden (Dublado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 03 - Você Pode Ser Uma Boa Boneca Automatizada:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer04/ondemand/VIOLTEVRGRDNT01EP03.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime3()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio4Anime3() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Violet Evergarden (Dublado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 04 - Não Seja Uma Ferramenta Seja Formosa Como o Seu Nome:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer04/ondemand/VIOLTEVRGRDNT01EP04.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime3()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio5Anime3() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Violet Evergarden (Dublado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 05 - Você Gostaria de Olhar Para si Mesmo:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer04/ondemand/VIOLTEVRGRDNT01EP05.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime3()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio6Anime3() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Violet Evergarden (Dublado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 06 - Você Viu em Algum Lugar:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer04/ondemand/VIOLTEVRGRDNT01EP06.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime3()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio7Anime3() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Violet Evergarden (Dublado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 07 - Sem Nome:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer04/ondemand/VIOLTEVRGRDNT01EP07.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime3()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio8Anime3() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Violet Evergarden (Dublado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 08 - Número Oito:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer04/ondemand/VIOLTEVRGRDNT01EP08.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime3()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio9Anime3() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Violet Evergarden (Dublado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 09 - Violet Evergarden:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer04/ondemand/VIOLTEVRGRDNT01EP09.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime3()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio10Anime3() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Violet Evergarden (Dublado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 10 - Entes Queridos Sempre Cuidarão de Você:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer04/ondemand/VIOLTEVRGRDNT01EP10.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime3()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio11Anime3() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Violet Evergarden (Dublado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 11 - Eu Não Quero Que Ninguém Mais Morra:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer04/ondemand/VIOLTEVRGRDNT01EP11.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime3()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio12Anime3() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Violet Evergarden (Dublado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 12 - Número Doze:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer04/ondemand/VIOLTEVRGRDNT01EP12.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime3()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio13Anime3() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Violet Evergarden (Dublado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 13 - As Memórias da Boneca e Eu Te Amo:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer04/ondemand/VIOLTEVRGRDNT01EP13.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime3()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};
function episodio14Anime3() {
  var node = document.getElementById("listaAnimes");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  };
  var $wrapper = document.querySelector(".wrapper"),
      HTMLTemporario = $wrapper.innerHTML,
      HTMLNovo = "<div class='container' id='listaAnimes'><font color='#696969'><h1 class='page-title'>Violet Evergarden (Dublado)</h1> <p class='page-subtitle'>[1ª Temporada]</p> Episódio 14 - Episódio Extra:</font> <br><br> <video width='320' height='240' controls><source src='https://cdn90.azureedge.net/RCServer04/ondemand/VIOLTEVRGRDNT01EP14.mp4' type='video/mp4'></video><div class='form-wrapper'><button onClick='armandoVoltaAnime3()'>VOLTAR</button></div></div>";
  HTMLTemporario = HTMLNovo + HTMLTemporario;
  $wrapper.innerHTML = HTMLTemporario;
};

$('#listaAnimes img').replaceWith(function(i, v){
  return $('<div/>', {
    style: 'background-image: url(' + this.src + ');' + 
    'width:' + this.width + 'px;' + 
    'height:' + this.height + 'px;' ,
    class: 'fakeImg'
  });
});

document.write("<div class='container' id='listaAnimes'> ");
for (var i = 0; i < listaAnimes.length; i++){
  document.write("<input onClick=" + listaPaginas[i] + " type='image' src=" + listaAnimes[i] + " width='182px' height='268px'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
};
document.write("</div>");

function armandoVoltaHOME() {
  document.location.reload(true);
};