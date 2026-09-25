
const prompt = require('prompt-sync')();

const candidats = [
    { cin: "AB123456", nom: "El Fassi", prenom: "Karim", partiPolitique: "RNI", age: 45, electeurs: [32, 63] },
    { cin: "CD789012", nom: "Mansouri", prenom: "Fatima", partiPolitique: "PAM", age: 38, electeurs: [] },
    { cin: "EF345678", nom: "Amrani", prenom: "Youssef", partiPolitique: "Indépendant", age: 52, electeurs: [] },
    { cin: "GH901234", nom: "Bennis", prenom: "Leila", partiPolitique: "PI", age: 41, electeurs: [] },
    { cin: "IJ567890", nom: "Alaoui", prenom: "Mehdi", partiPolitique: "PJD", age: 60, electeurs: [] },
    { cin: "KL123789", nom: "Chraibi", prenom: "Hicham", partiPolitique: "Indépendant", age: 33, electeurs: [] },
    { cin: "MN456123", nom: "Tazi", prenom: "Sara", partiPolitique: "RNI", age: 29, electeurs: [] },
    { cin: "OP789456", nom: "Benali", prenom: "Omar", partiPolitique: "PAM", age: 47, electeurs: [] },
    { cin: "QR234567", nom: "Zniber", prenom: "Tarik", partiPolitique: "USFP", age: 55, electeurs: [] },
    { cin: "ST890123", nom: "Lahlou", prenom: "Meryem", partiPolitique: "PPS", age: 42, electeurs: [] },

];

// function demarrerApplication() {
//     let choix;
//     while (choix !== '0');
//     {
//         console.log("=========================================================");
//         console.log("   GESTION DES ÉLECTIONS ET LISTES ÉLECTORALES AU MAROC  ");
//         console.log("=========================================================");
//         console.log("1. Ajouter un nouveau candidat");
//         console.log("2. Ajouter plusieurs candidats à la fois");
//         console.log("3. Afficher la liste des candidats");
//         console.log("4. Voter pour un candidat");
//         console.log("5. Modifier les informations d'un candidat");
//         console.log("6. Supprimer un candidat");
//         console.log("7. Rechercher des candidats par Nom");
//         console.log("8. Statistiques de l'élection");
//         console.log("0. Quitter l'application");
//         console.log("=========================================================");

//         choix = prompt("Choisissez une option (0-8) : ");

//         switch (choix) {
//             case '1': ajouterCandidat(); break;
//             case '2': ajouterPlusieursCandidats(); break;
//             case '3': afficherCandidats(); break;
//             case '4': voter(); break;
//             case '5': modifierCandidat(); break;
//             case '6': supprimerCandidat(); break;
//             case '7': rechercherCandidat(); break;
//             case '8': afficherStatistiques(); break;
//             case '0': console.log("Fermeture de l'application. À bientôt !"); break;
//             default: console.log("Choix invalide. Veuillez réessayer."); break;
//         }
//     }
// }

// // 1. Ajouter un candidat
// function ajouterCandidat() {
//     console.log("Ajouter un nouveau candidat ");
//     const cin = prompt("CIN : ");

//     if (candidats.find(c => c.cin === cin)) {
//         console.log("Erreur : Un candidat avec cette CIN existe déjà.");
//         return;
//     }

//     const candidat = {
//         cin: cin,
//         nom: prompt("Nom : "),
//         prenom: prompt("Prénom : "),
//         partiPolitique: prompt("Parti politique (ou 'Indépendant') : "),
//         age: parseInt(prompt("Âge : ")),
//         electeurs: []
//     };

//     candidats.push(candidat);
//     console.log("Candidat ajouté avec succès !");
// }

// // 2. Ajouter plusieurs candidats
// function ajouterPlusieursCandidats() {
//     const nb = parseInt(prompt("Combien de candidats voulez-vous ajouter ? : ").trim());

//     if (nb > 0) {
//         for (let i = 0; i < nb; i++) {
//             console.log(`Candidat ${i + 1}/${nb}`);
//             ajouterCandidat();
//         }
//     } else {
//         console.log("Nombre invalide. Veuillez entrer un chiffre supérieur à 0.");
//     }
// }

// function afficherCandidats() {
//     if (candidats.length === 0) {
//         console.log("Aucun candidat enregistré pour le moment.");
//         return;
//     }

//     console.log("Options d'affichage ");
//     console.log("1. Affichage normal");
//     console.log("2. Trier par nombre de votes (décroissant)");
//     console.log("3. Filtrer par parti politique");

//     const vue = prompt("Choisissez une vue (1-3) : ").replace(/["']/g, "").trim();

//     let listeAAfficher = [candidats];

//     if (vue === '2') {
//         listeAAfficher.sort((a, b) => b.electeurs.length - a.electeurs.length);
//     } else if (vue === '3') {
//         const parti = prompt("Entrez le nom du parti politique : ").replace(/["']/g, "").trim();
//         listeAAfficher = listeAAfficher.filter(c => c.partiPolitique.toLowerCase() === parti.toLowerCase());
//     }

//     if (listeAAfficher.length === 0) {
//         console.log("Aucun candidat trouvé pour ces critères.");
//         return;
//     }

//     console.log(" Liste des candidats ");

//     const resultatAffichage = listeAAfficher.map(c => {
//         return `CIN: ${c.cin} | Nom: ${c.nom} ${c.prenom} | Parti: ${c.partiPolitique} | Âge: ${c.age} | Votes: ${c.electeurs.length}`;
//     });

//     console.log(resultatAffichage.join('\n'));
// }

// // 4. Voter pour un candidat
// function voter() {
//     console.log(" Espace de Vote ");
//     const cinElecteur = prompt("Veuillez saisir votre CIN (Électeur) : ");

//     let ajoutervote = false;
//     for (let i = 0; i < candidats.length; i++) {
//         if (candidats[i].electeurs.includes(cinElecteur)) {
//             ajoutervote = true;
//             break;
//         }
//     }

//     if (ajoutervote) {
//         console.log("Vous avez déjà voté et vous n'avez pas le droit de modifier votre vote ni de voter à nouveau");
//         return;
//     }

//     const cinCandidat = prompt("Saisissez la CIN du candidat pour lequel vous souhaitez voter : ");
//     const candidatIndex = candidats.findIndex(c => c.cin === cinCandidat);

//     if (candidatIndex !== -1) {
//         candidats[candidatIndex].electeurs.push(cinElecteur);
//         console.log("Vote enregistré avec succès !");
//     } else {
//         console.log("Erreur : Candidat introuvable avec cette CIN.");
//     }
// }

// // 5. Modifier les informations d'un candidat
// function modifierCandidat() {
//     const cin = prompt("\nEntrez la CIN du candidat à modifier : ");
//     const candidat = candidats.find(c => c.cin === cin);

//     if (!candidat) {
//         console.log("Candidat introuvable.");
//         return;
//     }

//     console.log("1. Modifier le parti politique");
//     console.log("2. Modifier l'âge");
//     const choix = prompt("Que souhaitez-vous modifier ? (1-2) : ");

//     if (choix === '1') {
//         candidat.partiPolitique = prompt("Nouveau parti politique : ");
//         console.log("Parti politique mis à jour.");
//     } else if (choix === '2') {
//         candidat.age = parseInt(prompt("Nouvel âge : "));
//         console.log("Âge mis à jour.");
//     } else {
//         console.log("Option invalide.");
//     }
// }

// // 6. Supprimer un candidat
// function supprimerCandidat() {
//     const cin = prompt("Entrez la CIN du candidat à supprimer : ");
//     const index = candidats.findIndex(c => c.cin === cin);

//     if (index !== -1) {
//         candidats.splice(index, 1);
//         console.log("Le candidat a été retiré de la liste avec succès.");
//     } else {
//         console.log("Candidat introuvable.");
//     }
// }

// // 7. Rechercher des candidats par Nom
// function rechercherCandidat() {
//     const input = prompt("Entrez le nom du candidat recherché : ");
//     const nomRecherche = input.replace(/["']/g, "").trim().toLowerCase();

//     const resultats = candidats.filter(c => c.nom.toLowerCase().includes(nomRecherche));

//     if (resultats.length > 0) {
//         console.log("Résultats de la recherche ");
//         for (let i = 0; i < resultats.length; i++) {
//             const c = resultats[i];
//             console.log(`CIN: ${c.cin} | Nom: ${c.nom} ${c.prenom} | Parti: ${c.partiPolitique}`);
//         }
//     } else {
//         console.log("Aucun candidat trouvé avec ce nom.");
//     }
// }

// // 8. Statistiques de l'élection
// function afficherStatistiques() {
//     console.log(" Statistiques de l'élection ");
//     console.log(`Nombre total de candidats : ${candidats.length}`);

//     let totalVotes = 0;
//     for (let i = 0; i < candidats.length; i++) {
//         totalVotes += candidats[i].electeurs.length;
//     }
//     console.log(`Nombre total de votes exprimés : ${totalVotes}`);

//     console.log("Top 3 des candidats :");
//     const top3 = [candidats].sort((a, b) => b.electeurs.length - a.electeurs.length).slice(0, 3);

//     for (let i = 0; i < top3.length; i++) {
//         const c = top3[i];
//         console.log(`${i + 1}. ${c.nom} ${c.prenom} - ${c.electeurs.length} votes`);
//     }

//     console.log("Nombre de candidats par parti politique :");
//     const statsPartis = {};

//     for (let i = 0; i < candidats.length; i++) {
//         const parti = candidats[i].partiPolitique;
//         if (statsPartis[parti]) {
//             statsPartis[parti]++;
//         } else {
//             statsPartis[parti] = 1;
//         }
//     }

//     for (const parti in statsPartis) {
//         console.log(` ${parti} : ${statsPartis[parti]} candidat(s)`);
//     }
// }


// demarrerApplication();





