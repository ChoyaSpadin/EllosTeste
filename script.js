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

// Adiciona o evento de clique no botão "Mande uma mensagem" para abrir o modal
document
  .querySelector(".final-call-button")
  .addEventListener("click", openModal);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

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

const items = document.querySelectorAll(".service-item");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Aplicar delay crescente baseado no índice
        setTimeout(() => {
          entry.target.classList.add("show");
        }, index * 200); // Atraso de 200ms entre cada item
      } else {
        // Se quiser que a animação seja repetida ao sair da viewport
        entry.target.classList.remove("show");
      }
    });
  },
  { threshold: 0.2 }
);

items.forEach((item) => {
  observer.observe(item);
});
