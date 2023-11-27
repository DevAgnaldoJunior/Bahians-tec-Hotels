var botaoAdicionar = document.querySelector("#botaoCadastro")

botaoAdicionar.addEventListener("click", function(event){ /*Função anônima = criada dentro da classe */
    event.preventDefault(); /*prevent Default = evitar padrão */
    
    var form = document.querySelector("#form")

//extraindo informaçoes do paciente no form
    var alugador = obtemPacienteDoFormulario(form) /*Vriavel que recebe o objeto */

    console.log(alugador)

    form.reset() /*Para quando adicionar o paciente limpar os campos */

});


function obtemPacienteDoFormulario(form){

    var alugador = { /*Criando o objeto Paciente */
         nome : form.username.value, /*Propriedades do objeto */
         email : form.email.value,
         senha : form.password.value
         
    }

    return alugador
}
