const header = document.querySelector("#header");

window.addEventListener("scroll", (event) => {
  if (window.scrollY === 0) {
    header.classList.remove("bg-white");
  } else {
    header.classList.add("bg-white");
  }

  const product = document.querySelector("#product");
  let productPositionInfo = product.getBoundingClientRect();

  if (productPositionInfo.y < 150) {
    const products = document.querySelectorAll(".product-container");
    products.forEach((item) => (item.style.transform = "translate(0)"));
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
  aboutUsParag.classList.toggle("!h-full");

  e.target.innerHTML = isAboutUsOpen ? "اطلاعات بیشتر..." : "نمایش کمتر";
  isAboutUsOpen = !isAboutUsOpen;
});
// services swiper

// services swiper
let allServiceImg = document.querySelectorAll(".services-path");

let servicesSwiperElem = document.querySelector("#services-swiper");
let videos = [
  { data: "high", src: "about-us-control" },
  { data: "control", src: "about-us-control" },
  { data: "packing", src: "about-us-packing" },
];
const closeModalHandler = () => {
  let closeModal = document.querySelector("#services-Modal");
  closeModal.remove();
};

allServiceImg.forEach((img) => {
  img.addEventListener("click", (e) => {
    let clickOnSvg =
      e.target.parentElement.parentElement.parentElement.parentElement
        .parentElement.classList;
    let showModal = false;

    clickOnSvg.forEach((item) => {
      item === "swiper-slide-active" && (showModal = true);
    });

    let video = videos.find((video) => {
      return video.data == e.target.dataset.parentName;
    });

    showModal &&
      servicesSwiperElem.insertAdjacentHTML(
        "beforebegin",
        ` <div
      id="services-Modal"
        class="z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center"
      >
        <div class="relative w-9/12 z-10">
          <video src="../videos/${video.src}.mp4" autoplay loop></video>
          <button
          onclick="closeModalHandler()"
            class="closeModal absolute top-0 p-4 text-white text-2xl hover:text-red-500"
          >
            X
          </button>
        </div>
        <button
        onclick=${"closeModalHandler()"}
          class="closeModal absolute h-full w-full bg-black opacity-50"
        ></button>
      </div>`
      );
  });
});

const sericesSwiper = new Swiper("#services-swiper", {
  slidesperview: 1,
  loop: true,
  spaceBetween: 10,
  speed: 500,
  autoplay: true,
  breakpoints: {
    768: {
      spaceBetween: 100,
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
});

// comments Start
let commentDiv = document.querySelector("#commentDiv");
let commentsData = [
  {
    Src: "../images/comments-girl2.jpeg",
    name: "هانیه محمدی",
    text: " بسیار عالی و تمیز کار کردند با توجه به قیمت مناسبی که داشتن واقعا راضی بودم",
  },
  {
    Src: "../images/comments-boy1.jpg",
    name: "محمد سعادت",
    text: " بسیار عالی و تمیز کار کردند با توجه به قیمت مناسبی که داشتن واقعا راضی بودم",
  },
  {
    Src: "../images/comments-girl1.jpg",
    name: "سپیده راستگو",
    text: " بسیار عالی و تمیز کار کردند با توجه به قیمت مناسبی که داشتن واقعا راضی بودم",
  },
];
let commentIndex = 0;
const commentsHandler = () => {
  commentDiv.insertAdjacentHTML(
    "afterbegin",
    `<div
    class="flex shadow-xl p-4 rounded-lg items-center bg-white border border-gray-300 transition-all duration-1000 translate-x-[500px] "
    >
    <div class="w-1/4">
      <img
        class="aspect-square object-cover rounded-full"
        src=${commentsData[commentIndex].Src}
        alt=""
      />
    </div>
    <div class="px-6 w-3/4">
      <h4 class="font-bold text-lg">${commentsData[commentIndex].name}</h4>
      <p class="text-justify">
      ${commentsData[commentIndex].text}
      </p>
    </div>
    </div>`
  );
  setTimeout(() => {
    commentDiv.children[0].classList.add("comment-hidden");

    setTimeout(() => {
      commentDiv.children[0].classList.add("!opacity-0");

      setTimeout(() => {
        commentDiv.children[0].remove();
      }, 1000);
    }, 5000);
  }, 1000);
  commentIndex++;
  commentIndex === commentsData.length && clearInterval(commentsInterval);
};
commentsHandler();
let commentsInterval = setInterval(commentsHandler, 7100);
