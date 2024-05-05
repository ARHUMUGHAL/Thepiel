(function () {
    const locomotiveScroll = new LocomotiveScroll();
  })();


var mainImage = document.querySelector('.preview-lg-image img')
var smallImage = document.getElementsByClassName("sm-images")


smallImage[0].onclick = function(){
    mainImage.src = smallImage[0].src;
}
smallImage[1].onclick = function(){
    mainImage.src = smallImage[1].src;
}
smallImage[2].onclick = function(){
    mainImage.src = smallImage[2].src;
}
smallImage[3].onclick = function(){
    mainImage.src = smallImage[3].src;
}

mainImage.addEventListener("mouseenter",function(){
    mainImage.style.transform = 'scale(1.2)'
})
mainImage.addEventListener("mouseleave",function(){
    mainImage.style.transform = 'scale(1.1)'
})
mainImage.addEventListener("mousemove",function(dets){
    mainImage.style.top = 1 - dets.clientY * 0.02 + "px"
    mainImage.style.left = 1 - dets.clientX * 0.02 + "px"
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