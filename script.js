document.addEventListener("DOMContentLoaded", () => {
  // Smooth Anchor Navigation Handling
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  internalLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Theme Slider Logic
  const themeSliderBtn = document.getElementById("theme-slider");
  const htmlRoot = document.documentElement;

  // Resolve system default or baseline storage settings
  const savedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;

  if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
    htmlRoot.classList.add("dark-mode");
  } else {
    htmlRoot.classList.remove("dark-mode");
  }

  // Toggle slider click listener
  themeSliderBtn.addEventListener("click", () => {
    if (htmlRoot.classList.contains("dark-mode")) {
      htmlRoot.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    } else {
      htmlRoot.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    }
  });
});
