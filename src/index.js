import cipher from './cipher.js';

 const pergunta = window.prompt('Olá, você deseja participar da pesquisa?')

 if (pergunta == 'sim') { 
     alert(`Obrigada!`)
    document.getElementById('msg-confirmacao').innerHTML = "Digite sua mensagem"
 } else {
     alert(`Até a próxima.`)
 }

console.log(cipher)

