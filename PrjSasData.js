// ============================================================
// OUTILS DE STYLE POUR LE TERMINAL
// ============================================================

// 1. Un dictionnaire des codes d'échappement ANSI
// Ces codes indiquent au terminal de changer la couleur du texte.
const couleurs = {
    reset: "\x1b[0m",     // Arrête la couleur, retour à la normale
    rouge: "\x1b[31m",    // Pour les erreurs
    vert: "\x1b[32m",     // Pour les succès
    jaune: "\x1b[33m",    // Pour les avertissements ou les menus
    bleu: "\x1b[34m",     // Pour les informations
    magenta: "\x1b[35m",  // Pour mettre en évidence un résultat
    cyan: "\x1b[36m",     // Pour les titres de section
    gras: "\x1b[1m",      // Rend le texte plus épais (bold)
};

// 2. La fonction d'aide (Helper function)
// Elle prend votre texte, ajoute la couleur au début, 
// et ajoute le code "reset" à la fin pour ne pas colorer la suite.
function colorer(texte, code) {
    return code + texte + couleurs.reset;
}

// ============================================================
// EXEMPLES D'UTILISATION
// ============================================================

// Exemple A : Couleur simple
console.log(colorer("Opération réussie !", couleurs.vert));
console.log(colorer("Fichier introuvable.", couleurs.rouge));
console.log(colorer("Menu Principal", couleurs.jaune));

// Exemple B : Combiner des styles (Couleur + Gras)
// Vous pouvez additionner les codes avec le signe "+"
console.log(colorer("TITRE IMPORTANT", couleurs.cyan + couleurs.gras));

// Exemple C : Mélanger du texte normal et du texte coloré dans une phrase
const nom = "Alice";
const score = 95;
console.log(
    "Le joueur " +
    colorer(nom, couleurs.bleu) +
    " a obtenu " +
    colorer(score + " points", couleurs.magenta + couleurs.gras) +
    " !"
);
const candidats = [
    { cin: "UI78765", nom: "commando", prenom: "ali", partiPolitique: "pomme", age: 21, electeurs: [] },
    { cin: "ZI78798", nom: "Mansouri", prenom: "Fatima", partiPolitique: "banane", age: 54, electeurs: [] },
    { cin: "LI8755", nom: "Amrani", prenom: "Youssef", partiPolitique: "Independant", age: 52, electeurs: [] },
    { cin: "SU57644", nom: "Bennis", prenom: "Leila", partiPolitique: "youcode", age: 61, electeurs: [] },
    { cin: "QZ346767", nom: "Alaoui", prenom: "Mehdi", partiPolitique: "laiko", age: 66, electeurs: [] },
    { cin: "9076543", nom: "Chraibi", prenom: "Hicham", partiPolitique: "Independant", age: 38, electeurs: [] },
    { cin: "2345689", nom: "Tazi", prenom: "Sara", partiPolitique: "pomme", age: 29, electeurs: [] },
    { cin: "234567U9", nom: "Benali", prenom: "Omar", partiPolitique: "ocp", age: 31, electeurs: [] },
    { cin: "CY456789", nom: "Zniber", prenom: "Tarik", partiPolitique: "ocp", age: 59, electeurs: [] },
    { cin: "AP345678", nom: "ahLou", prenom: "Meryem", partiPolitique: "lasamir", age: 42, electeurs: [] },
    { cin: "AZ345678", nom: "Bennani", prenom: "Rachid", partiPolitique: "Independant", age: 39, electeurs: [] },
];
let saad = [...candidats];
module.exports = candidats;
module.exports = saad;