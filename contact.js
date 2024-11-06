document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le rechargement de la page
    
    const name = document.querySelector("input[placeholder='Votre nom']");
    const email = document.querySelector("input[placeholder='Votre email']");
    const message = document.querySelector("textarea[placeholder='Votre message']");

    // Fonction pour détecter les caractères spéciaux interdits
    function hasForbiddenCharacters(input) {
        const forbiddenPattern = /[<>{}]/; // Détecte les caractères potentiellement dangereux
        return forbiddenPattern.test(input);
    }

    // Vérifie que tous les champs sont remplis
    if (!name.value || !email.value || !message.value) {
        alert("Merci de remplir tous les champs.");
    } else if (!/\S+@\S+\.\S+/.test(email.value)) { // Vérifie le format de l'email
        alert("Veuillez entrer une adresse email valide.");
    } else if (hasForbiddenCharacters(name.value) || hasForbiddenCharacters(message.value)) {
        alert("Les champs ne doivent pas contenir de caractères spéciaux comme <, >, {, }.");
    } else {
        alert("Merci, votre message a bien été envoyé ! (Simulation pour le portfolio)");
        event.target.reset(); // Réinitialise le formulaire
    }
});