// Example 1: Add a click event to a button

const contactButton = document.getElementById("contact-button");

if (contactButton) { // Check if button exists before adding event listener
  contactButton.addEventListener("click", function() {
    alert("Thank you for contacting me!");
  });
}

// Example 2: Smooth scrolling to sections

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link) {
  link.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default anchor tag behavior

    const sectionId = this.getAttribute("href");
    const section = document.querySelector(sectionId);

    section.scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Example 3: Toggle a menu on smaller screens

const nav = document.querySelector("nav");
const menuButton = document.getElementById("menu-button");

if (menuButton) { // Check if button exists before adding event listener
  menuButton.addEventListener("click", function() {
    nav.classList.toggle("active"); // Add or remove "active" class
  });
}

// Example 4: Simple lightbox for project images (requires additional CSS)

const projectImages = document.querySelectorAll(".project-card img");

projectImages.forEach(function(image) {
  image.addEventListener("click", function() {
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    lightbox.innerHTML = `
      <img src="${this.src}" alt="${this.alt}">
      <button class="close-lightbox">Close</button>
    `;
    document.body.appendChild(lightbox);

    const closeButton = lightbox.querySelector(".close-lightbox");
    closeButton.addEventListener("click", function() {
      document.body.removeChild(lightbox);
    });
  });
});
