document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      item.classList.toggle("active");
      const answer = item.querySelector(".faq-answer");
      answer.style.maxHeight = item.classList.contains("active")
        ? answer.scrollHeight + "px"
        : "0";
    });
  });
});

function openModal() {
  document.getElementById("finalModal").style.display = "block";
}

function closeModal() {
  document.getElementById("finalModal").style.display = "none";
}

document.querySelector(".close").addEventListener("click", closeModal);

window.onclick = function (event) {
  if (event.target == document.getElementById("finalModal")) {
    closeModal();
  }
};

document
  .querySelector(".final-call-button")
  .addEventListener("click", openModal);

// eslint-disable-next-line no-unused-vars
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

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 3000);
}

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

items.forEach((item) => {
  observer.observe(item);
});

const faqItems = document.querySelectorAll(".faq-item");

const faqObserver = new IntersectionObserver(
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
  {
    threshold: 0.2,
  }
);

faqItems.forEach((item) => {
  faqObserver.observe(item);
});
