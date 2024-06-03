// Sélectionne tous les éléments avec la classe 'tab-links' et 'tab-contents'
let tabLinks = document.getElementsByClassName('tab-links');
let tabContents = document.getElementsByClassName('tab-contents');

// Fonction pour ouvrir un onglet spécifique
function openTab(tabName) {
    // Boucle à travers tous les liens d'onglets et supprime la classe 'active-link'
    for (let tabLink of tabLinks) {
        tabLink.classList.remove('active-link');
    }
    // Boucle à travers tous les contenus d'onglets et supprime la classe 'active-tab'
    for (let tabContent of tabContents) {
        tabContent.classList.remove('active-tab');
    }
    // Ajoute la classe 'active-link' à l'onglet actuellement cliqué
    event.currentTarget.classList.add('active-link');
    // Ajoute la classe 'active-tab' au contenu de l'onglet correspondant
    document.getElementById(tabName).classList.add('active-tab');
}

// JavaScript pour gérer le menu de navigation mobile
// Sélectionne l'icône de menu (bars) et ajoute un gestionnaire d'événements pour le clic
document.querySelector('.fas.fa-bars').addEventListener('click', function () {
    // Au clic, bascule la classe 'show' sur l'élément 'nav ul' pour afficher/masquer le menu
    document.querySelector('nav ul').classList.toggle('show');
});

// Sélectionne l'icône de fermeture (times) et ajoute un gestionnaire d'événements pour le clic
document.querySelector('.fas.fa-times').addEventListener('click', function () {
    // Au clic, supprime la classe 'show' de l'élément 'nav ul' pour masquer le menu
    document.querySelector('nav ul').classList.remove('show');
});