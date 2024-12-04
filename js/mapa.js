function flipCard(button) {
    const card = button.closest('.card');
    card.classList.toggle('flipped');
  }