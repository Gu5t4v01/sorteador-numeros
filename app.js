function sortear() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);
    
    if (de >= ate) {
            document.getElementById("resultado").innerHTML ='<label class="texto__paragrafo">O número "Do número" não pode ser maior que "Até o número" </label>';
            return;
        } 
        
        if (quantidade > (ate - de + 1)){
        document.getElementById("resultado").innerHTML ='<label class="texto__paragrafo">Verifique a quantitade entre os dois números </label>';
        return;
    
        }

    let sorteados = [];
    let numero;

                    //The Loop
    for (let i = 0; i < quantidade; i++) {
        numero = obtenerNumeroAleatorio(de, ate);
        
        while (sorteados.includes(numero)) {
            numero = obtenerNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);
    }
                      //Resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = '<label class="texto__paragrafo">Números sorteados: ' + sorteados.join(", ") + '</label>';
    alterarStatusBotao(desabilitarBotao, abilitarBotao);
    document.getElementById('btn-reiniciar').removeAttribute('disabled');
  
}
                       //Número Aleatorio
    function obtenerNumeroAleatorio(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
                          //Função status Botão 
    let desabilitarBotao = 'container__botao-desabilitado'
    let abilitarBotao = 'container__botao'
    function alterarStatusBotao(funcao1, funcao2) {
        let botao = document.getElementById("btn-reiniciar");
        if(botao.classList.contains(funcao1)) {
            botao.classList.remove(funcao1);
            botao.classList.add(funcao2);

        }
}
                          //Reiniciar Jogo
 function reiniciar() {
        document.getElementById("quantidade").value ='';
        document.getElementById("de").value ='';
        document.getElementById("ate").value ='';
        document.getElementById("resultado").innerHTML ='<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    let botao = document.getElementById("btn-reiniciar"); 
        alterarStatusBotao(abilitarBotao, desabilitarBotao)
        document.getElementById('btn-reiniciar').setAttribute('disabled');
    }
     
