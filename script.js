// DOMContentLoaded - Aguarda até que o conteúdo HTML esteja completamente carregado
document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  // Adiciona evento de clique para perguntas frequentes (FAQ)
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    // Alterna a visibilidade da resposta quando uma pergunta é clicada
    question.addEventListener("click", () => {
      item.classList.toggle("active");
      const answer = item.querySelector(".faq-answer");
      answer.style.maxHeight = item.classList.contains("active")
        ? answer.scrollHeight + "px"
        : "0";
    });
  });
});

// Modal - Funções para abrir e fechar o modal
function openModal() {
  document.getElementById("finalModal").style.display = "block";
}

function closeModal() {
  document.getElementById("finalModal").style.display = "none";
}

// Evento para fechar o modal ao clicar no botão de fechar
document.querySelector(".close").addEventListener("click", closeModal);

// Fecha o modal se clicar fora da área do modal
window.onclick = function (event) {
  if (event.target == document.getElementById("finalModal")) {
    closeModal();
  }
};

// Evento para abrir o modal ao clicar no botão final
document
  .querySelector(".final-call-button")
  .addEventListener("click", openModal);

// Função para rolar até o topo suavemente
// eslint-disable-next-line no-unused-vars
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Slide show - Função para exibir os slides
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slides");

  // Esconde todos os slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Mostra o próximo slide
  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";

  // Troca de slide a cada 3 segundos
  setTimeout(showSlides, 3000);
}

// IntersectionObserver - Observa os itens de serviço e aplica animação ao aparecerem na tela
const items = document.querySelectorAll(".service-item");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("show");
        }, index * 200);
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  { threshold: 0.2 }
);

// Observa cada item de serviço
items.forEach((item) => {
  observer.observe(item);
});

// Define faqItems antes de usar no código
const faqItems = document.querySelectorAll(".faq-item");

// DOMContentLoaded - Aguarda até que o conteúdo HTML esteja completamente carregado
document.addEventListener("DOMContentLoaded", () => {
  // Adiciona evento de clique para perguntas frequentes (FAQ)
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    // Alterna a visibilidade da resposta quando uma pergunta é clicada
    question.addEventListener("click", () => {
      item.classList.toggle("active");
      const answer = item.querySelector(".faq-answer");
      answer.style.maxHeight = item.classList.contains("active")
        ? answer.scrollHeight + "px"
        : "0";
    });
  });
});

// DOMContentLoaded - Aguarda até que o conteúdo HTML esteja completamente carregado
document.addEventListener("DOMContentLoaded", () => {
  // Define faqItems após o DOM estar carregado
  const faqItems = document.querySelectorAll(".faq-item");

  // Adiciona evento de clique para perguntas frequentes (FAQ)
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    // Alterna a visibilidade da resposta quando uma pergunta é clicada
    question.addEventListener("click", () => {
      item.classList.toggle("active");
      const answer = item.querySelector(".faq-answer");
      answer.style.maxHeight = item.classList.contains("active")
        ? answer.scrollHeight + "px"
        : "0";
    });
  });

  // FAQ - IntersectionObserver para animações de exibição dos itens de FAQ ao entrarem na tela
  const faqObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("show");
          }, index * 600);
        } else {
          entry.target.classList.remove("show");
        }
      });
    },
    { threshold: 0.2 }
  );

  // Observa cada item de FAQ
  faqItems.forEach((item) => {
    faqObserver.observe(item);
  });
});
