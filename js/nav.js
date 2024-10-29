// Suavizar o scroll ao clicar em links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => { //Seleciona todos os links que começam com # (âncoras internas).
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({ //Faz a rolagem suave
            behavior: 'smooth'
        });
    });
});
