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
    {
        cin: "U111222",
        nom: "lashheb",
        prenom: "omar",
        partiPolitique: "hizb al 3amal",
        age: 52,
        electeurs: []
    },
    {
        cin: "V333444",
        nom: "belghiti",
        prenom: "fatima",
        partiPolitique: "hizb al wahda w al dimocratiya",
        age: 46,
        electeurs: []
    },
    {
        cin: "W555666",
        nom: "serhani",
        prenom: "brahim",
        partiPolitique: "hizb al shora w al istiqlal",
        age: 59,
        electeurs: []
    },
    {
        cin: "X777888",
        nom: "kabbaj",
        prenom: "zineb",
        partiPolitique: "hizb al haraka al dimocratiya al ijtima3iya",
        age: 43,
        electeurs: []
    },
    {
        cin: "Y999000",
        nom: "bouftas",
        prenom: "hamza",
        partiPolitique: "hizb al bi2a w al tanmiya al mostadama",
        age: 41,
        electeurs: []
    },
    {
        cin: "Z123789",
        nom: "mouline",
        prenom: "reda",
        partiPolitique: "hizb al amal w al kafa2at",
        age: 54,
        electeurs: []
    },
    {
        cin: "A456123",
        nom: "zniber",
        prenom: "hafsa",
        partiPolitique: "hizb al nahda w al fadila",
        age: 49,
        electeurs: []
    },
    {
        cin: "B789456",
        nom: "lamrani",
        prenom: "yassin",
        partiPolitique: "hizb al amal",
        age: 37,
        electeurs: []
    },
    {
        cin: "C159753",
        nom: "drissi",
        prenom: "salma",
        partiPolitique: "hizb al wahda w al dimocratiya",
        age: 44,
        electeurs: []
    },
    {
        cin: "D753951",
        nom: "fenich",
        prenom: "amine",
        partiPolitique: "hizb al shora w al istiqlal",
        age: 50,
        electeurs: []
    },
    {
        cin: "E852963",
        nom: "skalli",
        prenom: "najat",
        partiPolitique: "hizb al haraka al dimocratiya al ijtima3iya",
        age: 58,
        electeurs: []
    },
    {
        cin: "F357159",
        nom: "berrada",
        prenom: "khalid",
        partiPolitique: "hizb al bi2a w al tanmiya al mostadama",
        age: 62,
        electeurs: []
    },
    {
        cin: "G951357",
        nom: "guessous",
        prenom: "souad",
        partiPolitique: "hizb al amal w al kafa2at",
        age: 47,
        electeurs: []
    },
    {
        cin: "H246810",
        nom: "sqalli",
        prenom: "tariq",
        partiPolitique: "hizb al nahda w al fadila",
        age: 53,
        electeurs: []
    },
    {
        cin: "I135792",
        nom: "tahiri",
        prenom: "mariem",
        partiPolitique: "hizb al amal",
        age: 39,
        electeurs: []
    },
    {
        cin: "J246135",
        nom: "chraibi",
        prenom: "mehdi",
        partiPolitique: "independent",
        age: 40,
        electeurs: []
    },
    {
        cin: "K369258",
        nom: "alaoui",
        prenom: "imane",
        partiPolitique: "independent",
        age: 35,
        electeurs: []
    },
    {
        cin: "L147852",
        nom: "bennani",
        prenom: "anas",
        partiPolitique: "independent",
        age: 45,
        electeurs: []
    },
    {
        cin: "M963852",
        nom: "hassan",
        prenom: "mouna",
        partiPolitique: "independent",
        age: 38,
        electeurs: []
    },
    {
        cin: "N741852",
        nom: "zerouali",
        prenom: "hamid",
        partiPolitique: "independent",
        age: 51,
        electeurs: []
    }
];
module.exports = candidats;