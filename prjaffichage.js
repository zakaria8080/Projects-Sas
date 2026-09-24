var prompt = require('prompt-sync')();
const trips = require('./prjdata');
/*
Affichier les elements 
*/
while (true) {
    console.log(`           =================================
                     RAILWAY MANAGER
            =================================`);
    console.log(`
                 1. Afficher les trajets
                 2. Acheter un ticket
                 3. Afficher les tickets
                 4. Annuler un ticket
                 5. Rechercher un ticket
                 6. Filtrer les trajets
                 7. Trier les trajets
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
            TRafficher();
            break
        case "2":
            Acheter();
            break;
        case "3":
            // TKafficher();
            break;
        case "4":
            // Annuler();
            break;
        case "5":
            // recherche();
            break;
        case "6":
            // filter();
            break;
        case "7":
            // TRtrier();
            break;
    }
}
function TRafficher() {
    console.log("               === TRAJETS DISPONIBLES ===")
    for (let i = 0; i < trips.length; i++) {
        console.log(`
                Departure : ${trips[i].departure}                
                destination :${trips[i].destination}              
id : ${trips[i].id}         departuretime: ${trips[i].departureTime}h
                Arrivaltime : ${trips[i].arrivalTime}h             
                price : ${trips[i].price}Dh                    
                availableseats: ${trips[i].availableSeats} place`);
    }
}
function Acheter() {
    const ticket = [];
    let i;
    let id = Number(prompt("type an id : "));
    for (i = 0; i < trips.length; i++) {
        if (id === trips[i].id) {
            console.log(`
                Departure : ${trips[i].departure}                
                destination :${trips[i].destination}              
id : ${trips[i].id}         departuretime: ${trips[i].departureTime}h
                Arrivaltime : ${trips[i].arrivalTime}h             
                price : ${trips[i].price}Dh                    
                availableseats: ${trips[i].availableSeats} place`);
            break;
        }
    }
    let buy;
    let name;
    let depar;
    let lafin;
    let c;
    if (trips[i].availableSeats >= 1) {
        buy = prompt("do you want buy : ")
        switch (buy) {
            case "yes":
                name = prompt("type your name: ");
                depar = prompt("ville de depart: ");
                lafin = prompt("ville a la fin: ");
                break;
            default:
                console.log("quitter");
        }
    }
    if (depar === trips[i].departure && lafin === trips[i].destination) {
        switch (trips[i].availableSeats) {
            case trips[i].availableSeats:
                c = trips[i].availableSeats - 1;
                console.log(c);
                break;
        }
    }
}




