/*Filtra os pacientes na tabela*/
(function() {
	"use-strict";	

	$("#filtrar-tabela").on("input", function(){
		var busca = $("#filtrar-tabela").val();

		if(busca.length > 0) {
			$(".paciente").hide().filter(function () {				
				return $(this).find(".info-nome")
							  .text()
							  .match(new RegExp(busca, "i"));
			}).show();
		}
		else {
			$(".paciente").show();
		}
	})
})();