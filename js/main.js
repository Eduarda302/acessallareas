// Chave de API do OpenAI
const apiKey = 'sua_api_key'

function sendMessage(){
    var message = document.getElementById('message-input')
    if(!message.value)
    {
        message.style.border = '1px solid red'
        return;
    }
    message.style.border = 'none'

    var status = document.getElementById('status')
    var btnSubmit = document.getElementById('btn-submit')

    status.style.display = 'block'
    status.innerHTML = 'Carregando...'
    btnSubmit.disabled = true
    btnSubmit.style.cursor = 'not-allowed'
    message.disabled = true

    fetch("https://api.openai.com/v1/completions",{
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
            model: "text-davinci-003",
            prompt: message.value,
            max_tokens: 2048, // tamanho da resposta
            temperature: 0.5 // criatividade na resposta
        })
    })
    .then((response) => response.json())
    .then((response) => {
        let r = response.choices[0]['text']
        status.style.display = 'none'
        showHistory(message.value,r)
    })
    .catch((e) => {
        console.log(`Error -> ${e}`)
        status.innerHTML = 'Erro, tente novamente mais tarde...'
    })
    .finally(() => {
        btnSubmit.disabled = false
        btnSubmit.style.cursor = 'pointer'
        message.disabled = false
        message.value = ''
    })
}

function showHistory(message,response){
    var historyBox = document.getElementById('history')

    // My message
    var boxMyMessage = document.createElement('div')
    boxMyMessage.className = 'box-my-message'

    var myMessage = document.createElement('p')
    myMessage.className = 'my-message'
    myMessage.innerHTML = message

    boxMyMessage.appendChild(myMessage)

    historyBox.appendChild(boxMyMessage)

    // Response message
    var boxResponseMessage = document.createElement('div')
    boxResponseMessage.className = 'box-response-message'

    var chatResponse = document.createElement('p')
    chatResponse.className = 'response-message'
    chatResponse.innerHTML = response

    boxResponseMessage.appendChild(chatResponse)

    historyBox.appendChild(boxResponseMessage)

    // Levar scroll para o final
    historyBox.scrollTop = historyBox.scrollHeight
}

//"menu lateral"/
// Seleciona o elemento HTML com a classe "menu-btn" e o armazena na variável "menuBtn"

    // Alterna a classe "position" no elemento "sideBar" quando ocorre um clique
    sideBar.classList.toggle("position");
  
// Seleciona o elemento HTML com a classe "side-bar" e o armazena na variável "sideBar"
var sideBar = document.querySelector(".side-bar");

// Cria um array chamado "arr" que contém as variáveis "menuBtn" e "button"
var arr = [menuBtn, button];

// Inicia um loop "for" para percorrer o array "arr"
for (var y = 0; y < arr.length; y++) {
  // Adiciona um ouvinte de eventos de clique ao elemento atual do array
  arr[y].addEventListener("click", function () {
    // Alterna a classe "position" no elemento "sideBar" quando ocorre um clique
    sideBar.classList.toggle("position");
  });
}
