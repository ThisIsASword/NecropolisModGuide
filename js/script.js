// Add event listeners to images that make them go all lightbox fullscreen and such
var imagePopUps = document.querySelectorAll(".img-wrapper");
var lightbox = document.querySelector("#modal-lightbox");
var lightboxImage = document.querySelector("#lightbox-image");

for(var i =  0; i < imagePopUps.length; i++) {
  imagePopUps[i].addEventListener("click", function(event) {
    event.preventDefault();
    // this.style.display = "none";
    var src = this.querySelector(".screenshot").getAttribute("src");
    lightboxImage.src = src;
    lightbox.style.display = "block";
  });
}

lightbox.querySelector(".close-button").addEventListener("click", function(event) {
  event.preventDefault();
  lightbox.style.display = "none";
});
