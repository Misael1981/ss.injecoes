const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  
  // header container
  ScrollReveal().reveal(".header__container h1", {
    ...scrollRevealOption,
  });
  
  ScrollReveal().reveal(".header__container .btn", {
    ...scrollRevealOption,
    delay: 500,
  });
  
  // about container
  ScrollReveal().reveal(".about__item", {
    ...scrollRevealOption,
    interval: 500,
  });
  
  // stats container
  ScrollReveal().reveal(".stats__image img", {
    ...scrollRevealOption,
    origin: "right",
    interval: 500,
  });
  
  ScrollReveal().reveal(".stats__card", {
    interval: 500,
    duration: 500,
    delay: 1000,
  });
  
  // blog container
  ScrollReveal().reveal(".blog__card", {
    ...scrollRevealOption,
    interval: 500,
  });

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
  },
    breakpoints:{
      0:{
          slidesPerView:1,
      },
      768:{
          slidesPerView:2,
      },
      991:{
          slidesPerView:3,
      },
  },
  });