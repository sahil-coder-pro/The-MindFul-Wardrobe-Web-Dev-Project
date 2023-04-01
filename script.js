// const loginBtn = document.getElementById("loginNavBar");

// loginBtn.addEventListener("click", () => {
//   window.location.href = "login.html"; // Replace with the URL of your login page
// });

// const loginButton = document.querySelector('.navbar li:last-child');

// loginButton.addEventListener('click', () => {
//   window.location.href = 'login.html';
// });



// to add smooth scroll to reach the products
const getStartedBtn = document.getElementById('get-started-btn');
const productsDiv = document.querySelector('.products');

getStartedBtn.addEventListener('click', () => {
  // window.alert("Welcome") ;
  productsDiv.scrollIntoView({ behavior: 'smooth' });
});



// adding event listener to login button to go to login.html
document.getElementById("loginNavBar").addEventListener("click", function() {
  window.location.href = "login.html";
});

// for courosel effect
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("hero-image-slider")[0].getElementsByTagName("img");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}
