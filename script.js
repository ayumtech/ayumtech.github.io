// Récupère le bouton
const toggleBtn = document.getElementById("theme-toggle");

// Au chargement de la page, applique le thème sauvegardé
if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark");
  toggleBtn.textContent = "☾";
}

// Au clic, bascule le thème
toggleBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");

  if (document.documentElement.classList.contains("dark")) {
    toggleBtn.textContent = "☾";
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.textContent = "☀";
    localStorage.setItem("theme", "light");
  }
});
