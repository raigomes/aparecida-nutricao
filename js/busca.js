/* Busca pacientes no servidor com AJAX*/
(function(controladorCadastro) {
	"use strict";

	$("#buscar-pacientes").click(function() {
		$.getJSON(
			"http://api-pacientes.herokuapp.com/pacientes",
			function(res) {
				var clientes = res;												

				clientes.forEach(function(cliente) {
					if(cliente.nome != "") {
						controladorCadastro.adicionaPaciente(cliente);
					}
				})

				console.log(clientes.length + " foram carregados na tela");
			}
		)
	});
})(controladorCadastro);