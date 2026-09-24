var prompt = require('prompt-sync')();
const candidats = require('./PrjSasData');
while (true) {
    console.log(`           =================================
                     RAILWAY MANAGER
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
    const condida = [];
    let c = prompt("do you want add a condida: ");
    switch (c) {
        case "yes":
            let cin = prompt("type cin condida : ");
            let name = prompt("type nom condida : ");
            let prenom = prompt("type prenom condida : ");
            let partiPolitique = prompt("type partiPolitique condida : ");
            let age = Number(prompt("type age condida : "));
            let electeurs = [];
            condida.push({ cin, name, prenom, partiPolitique, age, electeurs })
            console.log(condida);
            break;
        default:
            console.log("quitter");
    }
}
Function AJplusr(){

}