console.log('js ok')

// Calcolatore di prezzo biglietto in base ai dati raccolti dell'utente.

/*
1. Chiedere all'utente il numero di chilometri che vuole percorre.
2. Chiedere l'età all'utente.
3. Calcolare il prezzo del viaggio.
4a. Applicare lo sconto in base all'età dell'utente.
    4a. Applica un 20% per i minorenni.
    ab. Applica un 40% per gli over 60.
*/

/* Fase Preparatoria */

const tariffa = (0.21);
console.log('tariffa', tariffa, typeof tariffa);

const sconto20 = (0.2);
const sconto60 = (0.6);
/* Fase Raccolta dati */

//1. Chiedere all'utente il numero di chilometri che vuole percorre.
const chilometri = parseInt(prompt('Qual è la distanza da percorrere in (Km)?', 10));
console.log('chilometri', chilometri, typeof chilometri);

//2. Chiedere l'età all'utente.
const età = parseInt(prompt('Quanti anni ha?', '18'));
console.log('età', età, typeof età);

/* Fase di validazione*/


if (isNaN(chilometri) || isNaN(età)) {
    alert('Compilare correttamente i campi richiesti');
}



/* Fase di elaborazione dati */

//3. Calcolare il prezzo del viaggio.
const prezzo = (chilometri * tariffa).toFixed(2);

const prezzoscontato60 = (prezzo - (prezzo * sconto60)).toFixed(2);
const prezzoscontato20 = (prezzo - (prezzo * sconto20)).toFixed(2);

//4a. Applicare lo sconto in base all'età dell'utente.

//4a. Applica un 60% per gli over 60.
if (età > 60) {
    console.log('sconto60', prezzoscontato60, typeof prezzoscontato60);

    //4a. Applica un 20% per i minorenni.    
} else if (età < 18) {
    console.log('sconto20', prezzoscontato20, typeof prezzoscontato20);

}
else {
    console.log('prezzo', prezzo, typeof prezzo);
}

