console.log('JS OK');

// |GOT INTERESTED  DOCUMENT ELEMENTS 
const nameField = document.getElementById('name');

const lastNameField = document.getElementById('lastname');

const priceField = document.getElementById('price-result');

const messageField = document.getElementById('message');
// |

let messageDiscount;

// |PROMPT TO GET PASSENGER NAME
const passengerName = prompt('qual è il tuo nome?', 'Josè');

// |PROMPT TO GET PASSENGER LASTNAME
const passengerLastName = prompt('qual è il tuo cognome?', 'Feliz');

// |PROMPT TO GET PASSENGER AGE
const passengerAge = parseInt(prompt('qual è la tua età?', 25));

// |PROMPT TO GET TRAVEL DISTANCE
const travelDistance = parseInt(prompt('quanti chilometri devi percorrere?', 90));

// |TRAVEL RATE
const travelRate = 0.21;

console.log(travelDistance, passengerAge);

// |CALC. TO GET TRAVEL PRICE WITHOUT DISCOUNT
const travelPrice = travelDistance * travelRate;

console.log(travelPrice);

// |CONDITION TO SET DISCOUNT BY PASSENGER AGE
let discount = 0;
if (passengerAge >= 65) {
    discount = 0.6;
} else if (passengerAge < 18) {
    discount = 0.4;
} else {
    discount = 0;
};

// |CALC. TO GET DISCOUNT AMOUNT
const discountAmount = ((travelPrice * discount).toPrecision(3));

console.log(discountAmount);

// |TOTAL PRICE WITH DISCOUNT
const totalPrice = parseFloat((travelPrice - discountAmount).toPrecision(3));

console.log(travelPrice, discount, totalPrice);

// |SET THE MESSAGE BASED ON WHETHER OR NOT THERE IS A DISCOUNT 
passengerAge >= 65 || passengerAge < 18 ? messageDiscount = `Ha ricevuto uno sconto di: ${discountAmount}€` : messageDiscount = 'Non ha ricevuto nessun sconto per la suo età';

// |PRINTED ON PAGE
nameField.innerText = passengerName;

lastNameField.innerText = passengerLastName;

priceField.innerHTML = `${totalPrice} €`;

messageField.innerText = messageDiscount;