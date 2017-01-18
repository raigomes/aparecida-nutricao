/*Calcula IMC*/
var controlador = (
function() {
	function calculaIMC(peso, altura) {
		var imc = 0		
		if(altura > 0)
			imc = peso / Math.pow(altura, 2);
		return imc.toFixed(2);
	}

	return {
		calculaIMC: calculaIMC
	};
})();