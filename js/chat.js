document.addEventListener('DOMContentLoaded', function () {
    const respostas = ["Como posso ajudar?", "Escolha uam dessas opcoes."]
    const horas = document.querySelector('.time');
    const messageInput = document.getElementById('messageInput');
    const sendMessage = document.getElementById('sendMessage');
    const chat = document.querySelector('.chat');
    const date = new Date(); // momento atual 
    let time = date.toLocaleTimeString("pt-BR", {
        timeStyle: "short",       //Serão retornado apenas horas e minutos.  
        hour12: false,            //Formato de 24h, suprimindo sufixos AM e PM.
        numberingSystem: "latn"   //Resulado em algarismos indo-arábicos.
      });
      

    horas.innerHTML = time;
    sendMessage.addEventListener('click', function () {
        const messageText = messageInput.value;
        if (messageText) {
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message2');
            messageDiv.innerHTML = `<div class="user2">Você</div><div class="text2">${messageText}</div><div class="time2">${time}</div>`;
            chat.appendChild(messageDiv);
            messageInput.value = '';

        }
    });
    messageInput.addEventListener("keyup", function(e){
        if(e.key == "Enter"){
            sendMessage.click();
        }
    })
});
