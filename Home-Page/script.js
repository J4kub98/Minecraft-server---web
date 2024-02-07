//animace horní lišty
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("header").classList.remove("hide");
  } else {
    document.querySelector("header").classList.add("hide");
  }
  prevScrollpos = currentScrollPos;
};

//lift
document.addEventListener('DOMContentLoaded', function() {
  var arrowUp = document.getElementById('arrow-up');
  arrowUp.addEventListener('click', function(event) {
    event.preventDefault();
    var targetElement = document.getElementById('home');
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});

// Otevření a zavření dropdown menu při kliknutí na ikonu
document.querySelector(".menu-icon").addEventListener("click", function() {
  this.classList.toggle("active");
  var navList = document.querySelector("nav ul");
  if (navList.style.display === "flex") {
    navList.style.display = "none";
  } else {
    navList.style.display = "flex";
  }
});

