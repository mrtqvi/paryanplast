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
