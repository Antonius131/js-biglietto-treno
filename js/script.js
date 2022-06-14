const tripLenght = parseInt(prompt('Quanti Km vuoi percorrere?'));
const userAge = parseInt(prompt('Inserisci la tua età'));
let ticketPrice = tripLenght * 0.21;

if (userAge < 18) {
   ticketPrice = ticketPrice - ((ticketPrice * 20) / 100);
} else if (userAge > 65) {
   ticketPrice = ticketPrice - ((ticketPrice * 40) / 100);
}

const roundedTicketPrice = ticketPrice.toFixed(2);
console.log (roundedTicketPrice);