const brandsList = document.querySelector(".brands__list--desktop");
const showBtn = document.querySelector(".show__btn");
const hideBtn = document.querySelector(".hide__btn");

let showAll = function () {
  brandsList.classList.toggle("brands__list--open");
  showBtn.classList.toggle("no-active");
  hideBtn.classList.toggle("active");
};

showBtn.addEventListener("click", showAll);
hideBtn.addEventListener("click", showAll);

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: "auto",

  pagination: {
    el: ".swiper-pagination",
    clickable: true,

    dynamicBullets: true,
    dynamicMainBullets: 11,
  },
});
