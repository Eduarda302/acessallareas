
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

function sendMessage() {
    const chat = document.getElementById('chat');
    const select = document.getElementById('messageSelect');
    const text = select.value;

    if (text) {
        const message = document.createElement('div');
        message.className = 'message';
        message.textContent = text;
        chat.appendChild(message);
        chat.scrollTop = chat.scrollHeight; // Rola para o final
        select.value = ''; // Limpa a seleção
    } else {
        alert("Por favor, selecione uma mensagem.");
    }
}
document.addEventListener('DOMContentLoaded',()=>{
    const searchbutton = document.getElementById('search-button');
    const cepinput = document.getElementById('cep-input');
    const addressInfo = document.getElementById('address-info');

    searchbutton.addEventListener('click', () => {
        const cep = cepInput.value.replace (/\D/g, '');

        if (cep. length !== 8) {
            alert('por favor, insira um CEP válido com 8 dígitos.');
            return;
        }
        const apiUrl =`https:viacep.com.br/ws/${cep}/json/`;

        fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
             if (data.erro) {
                alert('CEP não encontrado. Verifique o CEP digitado.');
             } else {
                const addressHTML = `
                <h2>Endereço Encontrado:</h2>
                <p>CEP: ${data.cep}</p>
                <p>logradouro: ${data.logradouro}</p>
                <p>bairro: ${data.bairro}</p>
                <p>cidade/UF: ${data.localidade}/${data.uf}</p>
                `;
                addressInfo.innerHTML = addressHTML;
              } 
        })
        .catch(erro => {
            console.error('erro ao buscar o endereço:', error);
            alert('não foi possível obter o endereço. Verifique sua conexão com a internet.');
        });
    })
})
