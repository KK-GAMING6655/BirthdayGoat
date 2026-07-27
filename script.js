document.addEventListener("DOMContentLoaded", () => {
  // Elements
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const dropdownMenu = document.getElementById("dropdown-menu");
  
  const pageHome = document.getElementById("page-home");
  const pageCommands = document.getElementById("page-commands");
  
  const navLogo = document.getElementById("nav-logo");
  const navCommandsBtn = document.getElementById("nav-commands-btn");
  const heroCommandsBtn = document.getElementById("hero-commands-btn");
  const backHomeBtn = document.getElementById("back-home-btn");

  // Toggle Hamburger Dropdown Menu
  hamburgerBtn.addEventListener("click", () => {
    hamburgerBtn.classList.toggle("active");
    dropdownMenu.classList.toggle("show");
  });

  // Navigation Logic
  function showPage(pageToShow) {
    pageHome.classList.remove("active");
    pageCommands.classList.remove("active");
    
    pageToShow.classList.add("active");
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Close mobile dropdown if open
    hamburgerBtn.classList.remove("active");
    dropdownMenu.classList.remove("show");
  }

  // Event Listeners for switching pages
  navLogo.addEventListener("click", () => showPage(pageHome));
  backHomeBtn.addEventListener("click", () => showPage(pageHome));
  
  navCommandsBtn.addEventListener("click", (e) => {
    e.preventDefault();
    showPage(pageCommands);
  });

  heroCommandsBtn.addEventListener("click", () => showPage(pageCommands));
});

