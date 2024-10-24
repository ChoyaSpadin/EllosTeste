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

let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slides");

  // Esconda todos os slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Incrementa o índice do slide
  slideIndex++;

  // Se o índice for maior que o número de slides, reinicie para o primeiro slide
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Mostra o slide atual
  slides[slideIndex - 1].style.display = "block";

  // Chama a função novamente após 3 segundos
  setTimeout(showSlides, 3000);
}
