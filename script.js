// Sélectionner les éléments nécessaires
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Charger le thème depuis le stockage local
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    themeToggle.checked = savedTheme === 'dark-mode';
}

// Écouteur d'événement pour le switch
themeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
    const theme = body.classList.contains('dark-mode') ? 'dark-mode' : '';
    localStorage.setItem('theme', theme); // Enregistrer dans le stockage local
});
