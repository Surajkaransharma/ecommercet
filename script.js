
//open side bar
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("overlay").style.display = "block"; // Show overlay
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("overlay").style.display = "none"; // Hide overlay
}

//sidebar end


//searchbar start

  // Function to open the search searchbar
  function openSearch() {
    document.getElementById("mysearchbar").style.display = "block";
  }

  // Function to close the search searchbar
  function closeSearch() {
    document.getElementById("mysearchbar").style.display = "none";
  }

  // Close searchbar on click outside the input
  document.getElementById("mysearchbar").addEventListener('click', function(e) {
    if (e.target === this) {
      closeSearch();
    }
  });


//searchbar end


const multipleItemCarousel = document.querySelector("#testimonialCarousel");

if (window.matchMedia("(min-width:576px)").matches) {
  const carousel = new bootstrap.Carousel(multipleItemCarousel, {
    interval: false
  });

  var carouselWidth = $(".carousel-inner")[0].scrollWidth;
  var cardWidth = $(".carousel-item").width();

  var scrollPosition = 0;

  $(".carousel-control-next").on("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 3) {
      console.log("next");
      scrollPosition = scrollPosition + cardWidth;
      $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 800);
    }
  });
  $(".carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition = scrollPosition - cardWidth;
      $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 800);
    }
  });
} else {
  $(multipleItemCarousel).addClass("slide");
}



// produtc detail page full screen img


document.addEventListener('DOMContentLoaded', function() {
  var show_products = document.querySelector('.show-products');
  var show_products_fullscreen = document.querySelector('.show-products-fullscreen');
  var show_products_fullscreenImage = document.querySelector('.show-products-fullscreen img');
  var images = document.querySelectorAll('.show-products img');
  var currentImageIndex = 0;

  // Show fullscreen image on click
  show_products.addEventListener('click', function(event) {
      if (event.target.tagName === 'IMG') {
          show_products_fullscreenImage.src = event.target.src;
          show_products_fullscreen.style.display = 'flex';
          currentImageIndex = Array.from(images).indexOf(event.target);
      }
  });

  // Hide fullscreen on click outside of the image
  show_products_fullscreen.addEventListener('click', function(event) {
      if (event.target.tagName !== 'IMG') {
          show_products_fullscreen.style.display = 'none';
      }
  });

  // Navigate images
  function navigate(direction) {
      currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
      show_products_fullscreenImage.src = images[currentImageIndex].src;
  }

  document.querySelector('.prev').addEventListener('click', function() {
      navigate(-1);
  });

  document.querySelector('.next').addEventListener('click', function() {
      navigate(1);
  });

  // Arrow key navigation
  document.addEventListener('keydown', function(event) {
      if (event.key === 'ArrowLeft') {
          navigate(-1);
      } else if (event.key === 'ArrowRight') {
          navigate(1);
      } else if (event.key === 'Escape') {
          show_products_fullscreen.style.display = 'none';
      }
  });
});







