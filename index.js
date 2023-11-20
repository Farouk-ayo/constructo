document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    // Autoplay settings
    autoplay: {
      delay: 5000, // Autoplay delay in milliseconds (5 seconds)
    },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    effect: "fade",
    crossFade: "true",
  });

  const fixedUpButton = document.querySelector(".fixedUp");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      fixedUpButton.style.display = "block";
    } else {
      fixedUpButton.style.display = "none";
    }
  });
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

const currentPage = window.location.href;
const navLinks = document.querySelectorAll(".page--links a");

navLinks.forEach(function (link) {
  if (currentPage.includes(link.getAttribute("href"))) {
    link.classList.add("active-link");
  }
});

const navLinksFooter = document.querySelectorAll(".each-list a");

navLinksFooter.forEach(function (link) {
  console.log(link.getAttribute("href"), currentPage);
  if (currentPage.includes(link.getAttribute("href"))) {
    link.classList.add("active-link--footer");
  }
});
