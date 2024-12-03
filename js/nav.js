function mostrarmenu() {
     const nav = document.querySelector("nav");
 
     // Alterna entre as classes 'hidden' e 'ativo'
     if (nav.classList.contains("hidden")) {
         nav.classList.remove("hidden");
         nav.classList.add("ativo");
     } else {
         nav.classList.remove("ativo");
         nav.classList.add("hidden");
     }
 }
 