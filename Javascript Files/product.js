(function () {
  const locomotiveScroll = new LocomotiveScroll();
})();

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,

  autoplay: {
    delay: 2000,
  },
});


let hamburgerMenu = document.querySelector("nav ul")
let crossIcon = document.querySelector(".cross-icon")
let hamburgerIcon = document.querySelector(".hamburger-menu")


hamburgerIcon.addEventListener("click",function(){
  hamburgerMenu.style.right = "0%"
})
crossIcon.addEventListener("click",function(){
  hamburgerMenu.style.right = "-100%"
})
