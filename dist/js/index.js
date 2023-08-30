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
  console.log(e.target.value);
  e.target.innerHTML = isAboutUsOpen ? "اطلاعات بیشتر..." : "نمایش کمتر";
  isAboutUsOpen = !isAboutUsOpen;
});
