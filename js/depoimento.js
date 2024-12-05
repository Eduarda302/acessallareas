document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os botões "Ler mais"
    document.querySelectorAll('.read-more-btn').forEach(button => {
        button.addEventListener('click', () => {
            const cardContent = button.closest('.card-content'); // Seleciona o conteúdo do card correspondente
            const hiddenText = cardContent.querySelector('.hidden-text'); // Texto oculto

            // Verifica se o texto está visível e alterna
            if (hiddenText.style.display === 'none' || hiddenText.style.display === '') {
                hiddenText.style.display = 'inline'; // Mostra o texto
                button.textContent = 'Ler menos';   // Atualiza o texto do botão
            } else {
                hiddenText.style.display = 'none'; // Esconde o texto
                button.textContent = 'Ler mais';   // Atualiza o texto do botão
            }
        });
    });
});
