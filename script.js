(function () {
  const locomotiveScroll = new LocomotiveScroll();
})();

let image = document.querySelector(".section2_image_wrapper img")

window.addEventListener("mousemove",function(dets){
  image.style.left = dets.clientX * 0.01 + "px"
  image.style.top = dets.clientY * 0.01 + "px"
})


let hamburgerMenu = document.querySelector("nav ul")
let crossIcon = document.querySelector(".cross-icon")
let hamburgerIcon = document.querySelector(".hamburger-menu")


hamburgerIcon.addEventListener("click",function(){
  hamburgerMenu.style.right = "0%"
})
crossIcon.addEventListener("click",function(){
  hamburgerMenu.style.right = "-100%"
})




