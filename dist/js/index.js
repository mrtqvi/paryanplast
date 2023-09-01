const header = document.querySelector("#header");

window.addEventListener('scroll', (event) => {

  if (window.scrollY === 0) {
    header.classList.remove('bg-white');
  }
  else {
    header.classList.add('bg-white');
  }

  const product = document.querySelector("#product");
  let productPositionInfo = product.getBoundingClientRect();

  if (productPositionInfo.y < 150) {
    const products = document.querySelectorAll('.product-container');
    products.forEach(item => item.style.transform = "translate(0)");
  }
});

// script for intro section
window.addEventListener("load", () => {
  const introImages = document.querySelectorAll(".intro-image");
  const introTitle = document.querySelector(".intro-title");

  introImages.forEach((item) => (item.style.transform = "translate(0)"));
  introTitle.classList.remove("scale-50", "opacity-0");

});

// script for about us section

let readMore = document.querySelector("#readMore");
let hiddenDiv = document.querySelector("#hiddenDiv");
let aboutUsParag = document.querySelector("#aboutUsParag");

let isAboutUsOpen = false;

readMore.addEventListener("click", (e) => {
  hiddenDiv.classList.toggle("hidden");
  aboutUsParag.classList.toggle("h-full");
  e.target.innerHTML = isAboutUsOpen ? "اطلاعات بیشتر..." : "نمایش کمتر";
  isAboutUsOpen = !isAboutUsOpen;
});

// services swiper
const servicesSwiper = new Swiper("#services-swiper", {
  slidesperview: 1,
  loop: true,
  spaceBetween: 10,
  speed: 500,
  autoplay: true,
  breakpoints: {
    768: {
      spaceBetween: 10,
      centeredSlides: true,
      setWrapperSize: true,
      slideToClickedSlide: true,
      clickable: true,
      speed: 500,
      autoplay: false,
    },
  },
});
const customerSwiper = new Swiper("#customer-swiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  freeMode: true,
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
