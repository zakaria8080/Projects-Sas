var prompt = require('prompt-sync')();
const candidats = require('./PrjSasData');
while (true) {
    console.log(`=================================
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
    console.log(`=================================
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
            AJplusr();
            break;
        case "3":
            AFlist();
            break;
        case "4":
            Votes();
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
    let electeurs = [];
    let cins = prompt("type a cin : ")
    let noms = prompt("type a nom : ")
    let prenoms = prompt("type a prenom : ")
    let partiPolitiques = prompt("type a partiPolitique : ")
    let ages = parseInt(prompt("type a age : "))
    if (partiPolitiques === "" || partiPolitiques === null) {
        partiPolitiques = "Indépendant"
    }
    let obj = {
        cin: cins,
        nom: noms,
        prenom: prenoms,
        partiPolitique: partiPolitiques,
        age: ages,
        electeur: electeurs
    }
    candidats.push(obj)
}
function AJplusr() {
    let x = parseInt(prompt("type number of add in candida: "));
    for (let i = 1; i <= x; i++) {
        console.log(`=================================
        type number ${i} 
=================================`);
        let electeurs = [];
        let cins = prompt("type a cin : ")
        let noms = prompt("type a nom : ")
        let prenoms = prompt("type a prenom : ")
        let partiPolitiques = prompt("type a partiPolitique : ")
        let ages = parseInt(prompt("type a age : "))
        if (partiPolitiques === "" || partiPolitiques === null) {
            partiPolitiques = "Indépendant"
        }
        let obj = {
            cin: cins,
            nom: noms,
            prenom: prenoms,
            partiPolitique: partiPolitiques,
            age: ages,
            electeurs: []
        }
        candidats.push(obj)
    }
}
function AFlist() {
    console.log(`=================================
            AFlist
=================================`);
    let afficher = prompt("you have 3 choose 'simple' and 'plus' or 'parti politique' type your choose: ")
    switch (afficher) {
        case "simple":
            console.log()
            for (let j = 1; j < candidats.length; j++) {
                console.log(`condida: ${j} => ${candidats[j].cin} => ${candidats[j].nom} => ${candidats[j].prenom} => ${candidats[j].partiPolitique} => ${candidats[j].age} => ${candidats[j].electeurs}`)
            }
            break;
        // case "plus":

    }

}
function Votes() {
    let vote = prompt("do you want vote : ");
    switch (vote) {
        case "yes":
            let pr = prompt("enter your cin : ");
            let x = prompt("enter cin Related to the candidate: ");
            let i = 0;
            while (i < candidats.length) {
                let R = candidats[i].electeurs;
                if (x === candidats[i].cin) {
                    candidats[i].electeurs += pr;
                    console.log(candidats[i].electeurs);
                }
                i++;
            }
    }
}