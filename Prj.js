var prompt = require('prompt-sync')();
const candidats = require('./PrjSasData');
const saad = [...candidats];
while (true) {
    console.log(`========================================
            Listes Électorales                                           
========================================`); console.log(`
1. Ajouter un nouveau candidat
2. Ajouter plusieurs candidats à la fois.
3. Afficher la liste des candidats
4. Voter pour un candidat
5. Modifier les informations d'un candidat
6. Supprimer un candidat
7. Rechercher des candidats
8. Statistiques de l'élection
0. Quitter
`); console.log("========================================");

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
            MOinfo();
            break;
        case "6":
            supprimi();
            break;
        case "7":
            REchecondid();
            break;
        case "8":
            StatEXtion();
            break;
    }
}

function AJnveau() {
    let cins = prompt("type a cin : ")
    for (let c = 0; c < candidats.length; c++) {
        if (cins === candidats[c].cin) {
            console.log("le cin deja ajouter!!")
            return;
        }
    }
    let noms = prompt("type a nom : ")
    let prenoms = prompt("type a prenom : ")
    let partiPolitiques = prompt("type a partiPolitique : ")
    let ages = parseInt(prompt("type a age : "))
    if (ages < 18 || ages < 80) {
        console.log("not have for partage!!");
        return;
    }
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
    console.log("Candidat ajouté avec succès !");
}

function AJplusr() {
    let x = parseInt(prompt("type number of add in candida: "));
    for (let i = 1; i <= x; i++) {
        console.log(`=================================
        type number ${i} 
=================================`);
        AJnveau();
    }
}

function AFlist() {
    console.log(`=================================
            AFlist
=================================`);
    let afficher = prompt("you have 3 choose '1' and '2' or '3' type your choose: ")
    switch (afficher) {
        case "1":
            for (let j = 0; j < candidats.length; j++) {
                console.log(`condida: ${j + 1} => ${candidats[j].cin} => ${candidats[j].nom} => ${candidats[j].prenom} => ${candidats[j].partiPolitique} => ${candidats[j].age} => ${[candidats[j].electeurs]}: ${candidats[j].electeurs.length}`)
            }
            break;
        case "2":
            for (let h = 0; h < saad.length; h++) {
                for (let i = 0; i < saad.length; i++) {
                    let compari;
                    for (let j = i + 1; j < saad.length; j++) {
                        if (saad[i].electeurs < saad[j].electeurs) {
                            compari = saad[i];
                            saad[i] = saad[j];
                            saad[j] = compari;
                        }
                    }
                }
                console.log(`condida: ${h + 1} => ${saad[h].cin} => ${saad[h].nom} => ${saad[h].prenom} => ${saad[h].partiPolitique} => ${saad[h].age} => votes: ${saad[h].electeurs.length}`)
            }
            break
        case "3":
            let politique = prompt("type your parti politique: ");
            for (let i = 0; i < candidats.length; i++) {
                if (politique === candidats[i].partiPolitique) {
                    console.log(`${candidats[i].cin} => ${candidats[i].nom} => ${candidats[i].prenom} => ${candidats[i].partiPolitique} => ${candidats[i].age} => vote : ${candidats[i].electeurs.length}`);
                }
            }
        default:
            return "you have a problem!";
    }
}

function Votes() {
    let cins = prompt("type a cin : ")
    for (let c = 0; c < candidats.length; c++) {
        if (cins === candidats[c].cin) {
            console.log("le cin deja ajouter!!")
            return;
        }
    }
    let vote = prompt("do you want vote : ");
    switch (vote) {
        case "yes":
            let x = prompt("enter cin Related to the candidate: ");
            let i = 0;
            while (i < candidats.length) {
                let c = [];
                if (x === candidats[i].cin) {
                    c += cins;
                    candidats[i].electeurs.push(c);
                }
                i++;
            }
        default:
            break;
    }
}
function MOinfo() {
    let pr = prompt("type cin to modifier: ");
    for (let i = 0; i < candidats.length; i++) {
        if (pr === candidats[i].cin) {
            let choose = parseInt(prompt("type a choose 1 or 2: "));
            switch (choose) {
                case 1:
                    let a = parseInt(prompt("modifier your age: "));
                    candidats[i].age = a;
                    break;
                case 2:
                    let b = prompt("change your partiPolitique: ")
                    candidats[i].partiPolitique = b;
                default:
                    menu();
            }
        }
    }
}
function supprimi() {
    let vote = prompt("do you want remove : ");
    switch (vote) {
        case "yes":
            cins = prompt("enter cin for remove the candidate: ");
            let i = 0;
            while (i < candidats.length) {
                if (cins === candidats[i].cin) {
                    candidats.splice(i, 1);
                    break;
                }
                i++;
            }
        default:
            break;
    }
}
function REchecondid() {
    let name = prompt("type a name of condidat : ")
    for (let i = 0; i < candidats.length; i++) {
        if (name === candidats[i].nom) {
            console.log(`condidat : ${i} => cin : ${candidats[i].cin} => ${candidats[i].nom} => ${candidats[i].prenom} => ${candidats[i].partiPolitique} => ${candidats[i].age} => vote: ${candidats[i].electeurs.length}`);
            break;
        }
    }
}
function StatEXtion() {
    let fin = 3;
    let somme = 0;
    somme = candidats.length;
    let sommevotes = 0;
    for (let i = 0; i < candidats.length; i++) {
        sommevotes = sommevotes + candidats[i].electeurs.length;
    }
    let i;
    let j;
    let u = 0;
    console.log(`the somme of candida is : ${somme}`);
    console.log(`the somme of votes is : ${sommevotes}`);
    for (let h = 0; h < candidats.length; h++) {
        for (i = 0; i < candidats.length; i++) {
            let Bub;
            for (j = i + 1; j < candidats.length; j++) {
                if (candidats[i].electeurs < candidats[j].electeurs) {
                    Bub = candidats[i].electeurs;
                    candidats[i].electeurs = candidats[j].electeurs;
                    candidats[j].electeurs = Bub;
                }
            }
        }
        while (h < fin) {
            console.log(`
                condida: ${h + 1} => ${candidats[h].cin} => ${candidats[h].nom} => ${candidats[h].prenom} => ${candidats[h].partiPolitique} => ${candidats[h].age} => votes: ${candidats[h].electeurs.length}`)
            h++;
        }
    }
    const partisPolitique = [];

    for (let i = 0; i < candidats.length; i++) {

        const parti = candidats[i].partiPolitique;
        if (partisPolitique[parti] === undefined) {
            partisPolitique[parti] = 1.
        }
        else {
            partisPolitique[parti]++;
        }
    }
    for (let parti in partisPolitique) {
        console.log(`${parti} : ${partisPolitique[parti]} candidat(s)`);
    }

}

