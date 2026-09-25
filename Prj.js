var prompt = require('prompt-sync')();
const candidats = require('./PrjSasData');
while (true) {
    console.log(`           =================================
                     Listes Électorales
            =================================`);
    console.log(`
                 1. Ajouter un nouveau candidat 
                 2. Ajouter plusieurs candidats à la fois.
                 3. Afficher la liste des candidats
                 4.  Voter pour un candidat
                 5. Modifier les informations d'un candidat 
                 6. Supprimer un candidat 
                 7.  Rechercher des candidats
                 8.  Statistiques de l'élection
                 0. Quitter`)
    console.log(`             =================================
                thank you for your attention
            =================================`);
    let n = prompt("type a number :")
    if (n == "0") {
        console.log("quitter")
        break
    }
    switch (n) {
        case "1":
            AJnveau();
            break
        case "2":
            // AJplusr();
            break;
        case "3":
            // AFlist();
            break;
        case "4":
            // Votes();
            break;
        case "5":
            // MOinfo();
            break;
        case "6":
            // ModInfo();
            break;
        case "7":
            // REchecondid();
            break;
        case 8:
            // StatEXtion();
            break;
    }
}
function AJnveau() {


    console.log("quitter");
}

