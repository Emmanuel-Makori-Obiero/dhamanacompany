// ─── THEME TOGGLE ───
const btn = document.getElementById("theme-slider");
const root = document.documentElement;

// Set up configuration based on local storage persistence cache
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  root.classList.remove("dark");
} else {
  // App defaults to true standard dark design spec layout
  root.classList.add("dark");
}

if (btn) {
  btn.addEventListener("click", () => {
    root.classList.toggle("dark");
    const isDark = root.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}

// ─── SMOOTH ANCHOR SCROLL ───
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    const id = this.getAttribute("href");
    if (id === "#") return;
    const el = document.querySelector(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// ─── SCROLL REVEAL ───
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("visible"), i * 80);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 },
);
reveals.forEach((el) => observer.observe(el));
