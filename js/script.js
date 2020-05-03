
// NOTE: DOM Elements
const hamburgerBtn = document.getElementById("hamburger");
const navList = document.getElementById("nav-ul");

//console.log(slides);

hamburgerBtn.addEventListener('click', () => {
  navList.classList.toggle('show');
});


var slideIndex = 0;
carousel();

function carousel() {
  const x = document.getElementsByClassName("myslides");

  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1
  }
  x[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 4000);
}