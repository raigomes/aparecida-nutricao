controlador = (
function(){
	"use-strict";
	var nomePaciente, pesoPaciente, alturaPaciente, percGorduraPaciente;

	$("#adicionar-paciente").click(function(event){
		event.preventDefault();

		var cliente = getFormulario();
		adicionaPaciente(cliente);		
	});

	/*Recupera dados do formulário*/
	function getFormulario() {
		nomePaciente = $("#nome").val();
		pesoPaciente = $("#peso").val();
		alturaPaciente = $("#altura").val();
		percGorduraPaciente = $("#gordura").val();

		return {
			nome: nomePaciente,
			peso: pesoPaciente,
			altura: alturaPaciente,
			gordura: percGorduraPaciente,
			imc: controlador.calculaIMC(pesoPaciente, alturaPaciente)
		};
	}

	/*Cadastra pacientes*/
	function adicionaPaciente(cliente) {
		var tableBody = $("#tabela-pacientes");
		var tr = $("<tr>").addClass("paciente");

		tr = addInfo(tr, "info-nome", cliente.nome);
		tr = addInfo(tr, "info-peso", cliente.peso);
		tr = addInfo(tr, "info-altura", cliente.altura);
		tr = addInfo(tr, "info-gordura", cliente.gordura);
		tr = addInfo(tr, "info-imc", cliente.imc);

		$("#tabela-pacientes").append(tr);

		console.log("O cliente " + cliente.nome + " foi adicionado com sucesso!");

		clearForm();
	}

	function addInfo(tr, classe, valor) {
		return tr.append($("<td>").addClass(classe).text(valor));
	}

	function clearForm() {
		$("#nome").val("");
		$("#peso").val(""); 
		$("#altura").val("");
		$("#gordura").val("");
	}

	/* Inclui funçao publica no controlador*/
	controlador.adicionaPaciente = adicionaPaciente;
	return controlador
	
})(controlador);