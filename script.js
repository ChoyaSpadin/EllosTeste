// Evento de DOMContentLoaded para inicializar o FAQ
document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    // Adiciona o evento de clique para abrir/fechar a resposta da FAQ
    question.addEventListener("click", () => {
      item.classList.toggle("active");
      const answer = item.querySelector(".faq-answer");
      answer.style.maxHeight = item.classList.contains("active")
        ? answer.scrollHeight + "px"
        : "0";
    });
  });
});

// Função para rolar suavemente até a seção de serviços
function scrollToServices() {
  document.getElementById("services").scrollIntoView({ behavior: "smooth" });
}

// Função para abrir o modal
function openModal() {
  document.getElementById("finalModal").style.display = "block";
}

// Função para fechar o modal
function closeModal() {
  document.getElementById("finalModal").style.display = "none";
}

// Fechar o modal ao clicar no 'x'
document.querySelector(".close").addEventListener("click", closeModal);

// Fechar o modal ao clicar fora da área de conteúdo
window.onclick = function (event) {
  if (event.target == document.getElementById("finalModal")) {
    closeModal();
  }
};

// Adiciona o evento de clique no botão "Veja os benefícios" para rolar até a seção de serviços
document
  .querySelector(".cta-button")
  .addEventListener("click", scrollToServices);

// Adiciona o evento de clique no botão "Mande uma mensagem" para abrir o modal
document
  .querySelector(".final-call-button")
  .addEventListener("click", openModal);
