document.addEventListener('DOMContentLoaded', function () {
    const messageInput = document.getElementById('messageInput');
    const sendMessage = document.getElementById('sendMessage');
    const chat = document.querySelector('.chat');

    function addMessage(text, userClass = 'message2', userName = 'Você') {
        const date = new Date();
        let time = date.toLocaleTimeString("pt-BR", { timeStyle: "short", hour12: false });
        const messageDiv = document.createElement('div');
        messageDiv.classList.add(userClass);
        messageDiv.innerHTML = `<div class="user">${userName}</div><div class="text">${text}</div><div class="time">${time}</div>`;
        chat.appendChild(messageDiv);
        chat.scrollTop = chat.scrollHeight; // Rola para o fim do chat
    }

    sendMessage.addEventListener('click', function () {
        const messageText = messageInput.value;
        if (messageText) {
            addMessage(messageText);
            messageInput.value = '';
        }
    });

    messageInput.addEventListener("keyup", function (e) {
        if (e.key == "Enter") {
            sendMessage.click();
        }
    });


    // Função para respostas automáticas do "Profissional"
    function addProfessionalMessage(text) {
        const date = new Date();
        let time = date.toLocaleTimeString("pt-BR", { timeStyle: "short", hour12: false });
        const professionalDiv = document.createElement('div');
        professionalDiv.classList.add('message');
        professionalDiv.style.backgroundColor = '#c3d9d9';
        professionalDiv.style.borderRadius = '10px';
        professionalDiv.style.padding = '10px';
        professionalDiv.style.margin = '10px 0';
        professionalDiv.innerHTML = `
            <div class="user" style="font-weight: bold; color: #2b5d5d;">Profissional</div>
            <div class="text">${text}</div>
            <div class="time" style="font-size: 0.8em; color: #555;">${time}</div>
        `;
        chat.appendChild(professionalDiv);
        chat.scrollTop = chat.scrollHeight; // Rola para o fim do chat
    }

    // Função para "Agendar Consulta"
    window.agendarConsulta = function () {
        addMessage("Gostaria de agendar uma consulta", 'message2', 'Você');
        setTimeout(() => {
            addProfessionalMessage("Entendido! Vamos agendar o horário. Por favor, informe o dia e a hora desejados.");
        }, 1000); // Resposta do profissional após 1 segundo
    };

    // Função para "Respostas rápidas"
    window.addQuickReply = function (text) {
        addMessage(text, 'message2', 'Você');
    };
});