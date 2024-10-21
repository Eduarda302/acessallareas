document.addEventListener('DOMContentLoaded',()=>{
    const searchbutton = document.getElementById('search-button');
    const cepinput = document.getElementById('cep-input');
    const addressInfo = document.getElementById('address-info');

    searchbutton.addEventListener('click',() =>{
        const cep = cepInput.value.replace (/\D/g, '');

        if (cep. length !==8) {
            alert('por favor, insira um CEP válido com 8 dígitos.');
            return;
        }
        const apiUrl ='https:viacep.com.br/ws/${cep}/json/';

        fetch(apiUrl)
        .then(response => response.json())
        .then(data =>{
             if(data.erro){
                alert('CEP não encontrado. Verifique o CEP digitado');
             } else{
                const addressHTML =`
                <h2> Endereço Encontrado:</h2>
                <p>CEP ${data.cep}</p>
                <p>logradouro: ${data.logradouro}</p>
                <p>bairro: ${data.barro}</p>
                <p>cidade/UF ${data.localidade}/${data.uf}</p>
                `;
                addressInfo.innerHTML = addressHTML;
                }
        })
        .catch(erro =>{
            console.error('erro ao buscar o endereço:', error);
            alert('não foi possível obter o endereço. Verifique sua conexão com a internet.');
        });
    })
})