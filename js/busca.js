(function() {
	"use strict";

	$("#buscar-pacientes").click(function() {
		$.getJSON(
			"http://api-pacientes.herokuapp.com/pacientes",
			function(res) {
				var clientes = res;												

				clientes.forEach(function(cliente) {
					if(cliente.nome != "") {
						controlador.adicionaPaciente(cliente);
					}
				})

				console.log(clientes.length + " foram carregados na tela");
			}
		)
	});
})(controlador);