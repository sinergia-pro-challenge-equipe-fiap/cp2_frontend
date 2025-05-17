function validar() {
    const nomeInput = document.getElementById("nome");
    const emailInput = document.getElementById("email");
    const descricaoInput = document.getElementById("descricao");
    let valida = true;

 // Função para exibir erros
  function mostrarErro(inputElement, mensagem) {
    // Exibe mensagem e estilo de erro .
    const controle = inputElement.parentNode; // Ela retorna o elemento pai imediato desse nó.
    const erroImg = controle.querySelector('.error'); // busca a classe Ícone de erro.
    const mensagemErro = controle.querySelector('small'); // Texto da mensagem de erro.

    mensagemErro.innerText = mensagem; // Define a mensagem de erro.
    controle.className = 'control erro'; // Aplica estilo na control e no erro.
    erroImg.style.visibility = 'visible'; // Mostra o ícone de erro.
    valida = false; // Indica que a validação falhou.
}

  // Função para remover a exibição de erros
    function removerErro(inputElement) {
        const controle = inputElement.parentNode; //Ela retorna o elemento pai imediato desse nó
        const erroImg = controle.querySelector('.error');// busca a classe Ícone de erro.
        const mensagemErro = controle.querySelector('small');// Texto da mensagem de erro.

        mensagemErro.innerText = ''; //inicia mensagem vazia
        controle.className = 'control';// Aplica estilo de control.
        erroImg.style.visibility = 'hidden'; // Usa visibility: hidden 
    }
    // Validação do campo Nome (trim - tira o)
    if (nomeInput.value.trim() === "") {
        mostrarErro(nomeInput, "O nome é obrigatório.");
    } else {
        removerErro(nomeInput);
    }

    // Validação do campo Email
    if (emailInput.value.trim() === "") {
        mostrarErro(emailInput, "O email é obrigatório.");
    } else if (!isValidEmail(emailInput.value.trim())) {
        mostrarErro(emailInput, "Insira um email válido.");
    } else {
        removerErro(emailInput);
    }

    // Validação do campo Descrição
    if (descricaoInput.value.trim() === "") {
        mostrarErro(descricaoInput, "A descrição é obrigatória.");
    } else {
        removerErro(descricaoInput);
    }

    return valida; // Retorna true se todos os campos forem válidos, false caso contrário
}

//Adiciona um listener de evento para a submissão do formulário
document.getElementById('form').addEventListener('submit', (e)=> {
    if (!validar()) {
        e.preventDefault(); // Impede o envio do formulário se a validação falhar
    }
});