document.addEventListener("DOMContentLoaded", () => {
    const readMoreBtn = document.querySelector(".read-more-btn");
    const hiddenText = document.querySelector(".hidden-text");
  
    readMoreBtn.addEventListener("click", () => {
      if (hiddenText.style.display === "none" || hiddenText.style.display === "") {
        hiddenText.style.display = "inline";
        readMoreBtn.textContent = "Ler menos";
      } else {
        hiddenText.style.display = "none";
        readMoreBtn.textContent = "Ler mais";
      }
    });
  });
  