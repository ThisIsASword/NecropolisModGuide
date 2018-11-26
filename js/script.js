(function(){
  // Lightbox modal
  var lightbox = document.querySelector("#modal-lightbox");
  // Image thumbnails to expand in the lightbox
  var images = document.querySelectorAll(".image-thumb");

  // Assign click handler to each image with .image-thumb class
  for(var i =  0; i < images.length; i++) {
    images[i].addEventListener("click", function(event) {
      // Copy src and alt attributes of event target to lightbox
      lightbox.querySelector("#lightbox-image").src = this.getAttribute("src");
      lightbox.querySelector("#lightbox-image").alt = this.getAttribute("alt");
    });
  }
})();
