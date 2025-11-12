const rootElement = document.documentElement;
const toggle = document.getElementById("themeToggle");
const themeLabel = toggle?.querySelector(".theme-toggle__label");
const yearElement = document.getElementById("currentYear");

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const storedTheme = window.localStorage.getItem("kalam-inspired-theme");

function setTheme(theme) {
  if (theme === "dark") {
    rootElement.setAttribute("data-theme", "dark");
    toggle?.setAttribute("aria-pressed", "true");
    if (themeLabel) themeLabel.textContent = "وضع النهار";
  } else {
    rootElement.removeAttribute("data-theme");
    toggle?.setAttribute("aria-pressed", "false");
    if (themeLabel) themeLabel.textContent = "وضع الليل";
  }
}

const initialTheme = storedTheme || (prefersDark ? "dark" : "light");
setTheme(initialTheme);

if (toggle) {
  toggle.addEventListener("click", () => {
    const isDark = rootElement.getAttribute("data-theme") === "dark";
    const nextTheme = isDark ? "light" : "dark";
    setTheme(nextTheme);
    window.localStorage.setItem("kalam-inspired-theme", nextTheme);
  });
}

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const navLinks = document.querySelectorAll(".main-nav a");
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href")?.replace("#", "");
    const target = targetId ? document.getElementById(targetId) : null;

    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
