// Toggle menu for mobile
function toggleMenu() {
  const nav = document.querySelector(".nav-links");
  nav.classList.toggle("active");
}

// Example contact form submit
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for your message!");
  this.reset();
});
