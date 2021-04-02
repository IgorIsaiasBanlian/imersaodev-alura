var valorEmDolar = parseFloat( prompt( "Qual o valor em dólar que você quer converter?" ) );

converte( valorEmDolar );

function converte( valorEmDolar ) {
  var awesomeAPI = "https://economia.awesomeapi.com.br/USD-BRL";
  $.getJSON( awesomeAPI, function( dados ) {
    $.each( dados, function( indice, valor ) {
      alert( "O valor em reais é: " + ( valorEmDolar * valor.bid ).toLocaleString( 'pt-br', {style: 'currency' , currency: 'BRL'} ) );
    });
  });
};
