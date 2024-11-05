document.addEventListener('DOMContentLoaded', function () {
    const messageInput = document.getElementById('messageInput');
    const sendMessage = document.getElementById('sendMessage');
    const chat = document.querySelector('.chat');

    function addMessage(text, userClass = 'message2', userName = 'Você') {
        const date = new Date();
        let time = date.toLocaleTimeString("pt-BR", {timeStyle: "short", hour12: false});
        const messageDiv = document.createElement('div');
        messageDiv.classList.add(userClass);
        messageDiv.innerHTML = `<div class="user">${userName}</div><div class="text">${text}</div><div class="time">${time}</div>`;
        chat.appendChild(messageDiv);
    }

    sendMessage.addEventListener('click', function () {
        const messageText = messageInput.value;
        if (messageText) {
            addMessage(messageText);
            messageInput.value = '';
        }
    });

    messageInput.addEventListener("keyup", function(e){
        if(e.key == "Enter"){
            sendMessage.click();
        }
    });

    window.addQuickReply = function(text) {
        addMessage(text, 'message2', 'Você');
    }
});
