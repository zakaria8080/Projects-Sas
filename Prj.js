var prompt = require('prompt-sync')();
const candidats = require('./PrjSasData');
const saad = [...candidats];
while (true) {
    console.log(`========================================
|           GESTION DES VOTES          |
========================================`);
    console.log(`
  [1] ➔ Ajouter un nouveau candidat
  [2] ➔ Ajouter plusieurs candidats à la fois.
  [3] ➔ Afficher la liste des candidats
  [4] ➔ Voter pour un candidat
  [5] ➔ Modifier les informations d'un candidat
  [6] ➔ Supprimer un candidat
  [7] ➔ Rechercher des candidats
  [8] ➔ Statistiques de l'élection
  [0] ➔ Quitter
`);
    console.log("========================================");

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
    console.clear()
    console.log(`========================================
|         AJOUTER UN CANDIDAT          |
========================================`);
    let cins = prompt("type a cin : ")
    for (let c = 0; c < candidats.length; c++) {
        if (cins === candidats[c].cin) {
            console.log(`---------------------`);
            console.log("le cin deja ajouter!!")
            console.log(`---------------------`);
            return;
        }
    }
    let noms = prompt("type a nom : ")
    let prenoms = prompt("type a prenom : ")
    let partiPolitiques = prompt("type a partiPolitique : ")
    let ages = parseInt(prompt("type a age : "))
    if (ages < 18) {
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
    console.clear();
    console.log(`========================================
|       AJOUTER PLUSIEURS CANDIDATS    |
========================================`);
    let x = parseInt(prompt("type number of add in candida: "));
    for (let i = 1; i <= x; i++) {
        console.log(`=================================
        type number ${i} 
=================================`);
        AJnveau();
    }
}

function AFlist() {
    console.clear();
    console.log(`========================================
|          LISTE DES CANDIDATS         |
========================================`);
    console.log(`
  [1] ➔ Afficher tous les candidats
  [2] ➔ Trier par nombre de votes
  [3] ➔ Filtrer par parti politique
`);
    let afficher = prompt("type your choose: ")
    switch (afficher) {
        case "1":
            console.clear()
            for (let j = 0; j < candidats.length; j++) {
                console.log(`condida: ${j + 1} => ${candidats[j].cin} => ${candidats[j].nom} => ${candidats[j].prenom} => ${candidats[j].partiPolitique} => ${candidats[j].age} => Vote: ${candidats[j].electeurs.length}`)
            }
            break;
        case "2":
            console.clear()
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
            console.clear()
            let politique = prompt("type your parti politique: ");
            let found = false;
            for (let i = 0; i < candidats.length; i++) {
                if (politique === candidats[i].partiPolitique) {
                    found = true;
                    console.log(`${candidats[i].cin} => ${candidats[i].nom} => ${candidats[i].prenom} => ${candidats[i].partiPolitique} => ${candidats[i].age} => vote : ${candidats[i].electeurs.length}`);
                }
            }
            if (!found) {
                console.log("Aucun candidat trouvé pour ce parti !");
            }
            console.log(`========================================================================`);
            break;
        default:
            return "you have a problem!";
    }
}

function Votes() {
    console.clear();
    console.log(`=================================
          ESPACE DE VOTE
=================================`);
    let vart;
    let exist = false;
    let cins = prompt("type a cin : ")
    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].electeurs.includes(cins)) {
            exist = true;
            break
        }
    }
    if (exist) {
        console.log("the cin deja vue !");

    }
    let vote = prompt("do you want vote : ");
    switch (vote) {
        case "yes":
            let x = prompt("enter cin Related to the candidate: ");
            let i = 0;
            let nfind = false;
            while (i < candidats.length) {
                let c = [];
                if (x === candidats[i].cin) {
                    c += cins;
                    nfind = true;
                    candidats[i].electeurs.push(c);
                    console.log(`---------`);
                    console.log("succes!!!");
                    console.log(`---------`);

                    break
                }
                i++;
            }
            if (!nfind) {
                console.log("this candidat not found! ")
            }
            break;
        default:
            break;
    }
}
function MOinfo() {
    console.clear();
    console.log(`=================================
       MODIFIER LES INFORMATIONS
=================================`);
    let pr = prompt("type cin to modifier: ");
    let not = false;
    let choose;
    for (let i = 0; i < candidats.length; i++) {
        if (pr === candidats[i].cin) {
            not = true;
            choose = parseInt(prompt("type a choose [1] Age ou [2] Parti politique: "));
            switch (choose) {
                case 1:
                    console.clear();
                    let a = parseInt(prompt("modifier your age: "));
                    candidats[i].age = a;
                    console.log("your age is change!")
                    break;
                case 2:
                    console.clear();
                    let b = prompt("change your partiPolitique: ")
                    candidats[i].partiPolitique = b;
                    console.log(`------------------------------`);
                    console.log("your partipolitique is change!")
                    console.log(`------------------------------`);
                default:
                    break;
            }
        }
    }
    if (!not) {
        console.log(`----------------------`);
        console.log("the cin not correct ! ");
        console.log(`----------------------`);
    }
}
function supprimi() {
    console.clear();
    console.log(`=================================
       SUPPRIMER UN CANDIDAT
=================================`);
    let vote = prompt("do you want remove (yes/no) : ");
    switch (vote) {
        case "yes":
            console.log(`-------------------------------------`);
            cins = prompt("enter cin for remove the candidate: ");
            console.log(`-------------------------------------`);
            let exist = false;
            let value;
            for (let J = 0; J < candidats.length; J++) {
                if (cins === candidats[J].cin) {
                    value = candidats[J];
                    exist = true;
                    console.log("the recherche is succes!!");
                    if (cins === candidats[J].cin) {
                        candidats.splice(J, 1);
                        console.log(`-----------------`);
                        console.log("remove succes!!!");
                        console.log(`-----------------`);
                        break;
                    }
                }
            }
            if (!exist) {
                console.log(`--------------------`);
                console.log("this cin not found!")
                console.log(`---------------------`);
            }
            break;
        default:
            console.log(`---------`);
            console.log("unsucces");
            console.log(`---------`);

            break;
    }
}
function REchecondid() {
    console.clear();
    console.log(`=================================
        RECHERCHE DE CANDIDAT
=================================`);
    let name = prompt("type a name of condidat : ")
    let cond;
    let exist = false;
    for (let i = 0; i < candidats.length; i++) {
        if (name === candidats[i].nom) {
            cond = candidats[i];
            exist = true
            console.log("the recherche is succes!!");
            console.log(`--------------------------------------------------`);
            console.log(`${cond.cin} => ${cond.nom} => ${cond.prenom} => ${cond.partiPolitique} => ${cond.age} => vote : ${cond.electeurs.length}`);
            console.log(`--------------------------------------------------`);
        }
    }
    if (!exist) {
        console.log("you have a problem!")
    }
}
function StatEXtion() {
    console.clear()
    console.log(`=================================
        STATISTIQUES
=================================`);
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
    console.log(`------------- La Somme --------------`);
    console.log(`the somme of candida is : ${somme}`);
    console.log(`------------- La Sommevotes --------------`);
    console.log(`the somme of votes is : ${sommevotes}`);
    console.log(`-------------------------------------`);
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
            console.log(`------------------------------------------------------------------------`);
            console.log(`
condida: ${h + 1} => ${candidats[h].cin} => ${candidats[h].nom} => ${candidats[h].prenom} => ${candidats[h].partiPolitique} => ${candidats[h].age} => votes: ${candidats[h].electeurs.length}`)
            h++;
        }
    }
    console.log(`------------------------------------------------------------------------`);
    console.log(`\n[RÉPARTITION PAR PARTI POLITIQUE]`);
    console.log(`------------------------------------------------------------------------`);
    const partisPolitique = [];

    for (let i = 0; i < candidats.length; i++) {

        let parti = candidats[i].partiPolitique;
        if (partisPolitique[parti] === undefined) {
            partisPolitique[parti] = 0;
        }
        partisPolitique[parti]++;
    }
    for (let parti in partisPolitique) {
        console.log(`${parti} : ${partisPolitique[parti]} candidat(s)`);
    }
    console.log(`========================================================================`);
}



