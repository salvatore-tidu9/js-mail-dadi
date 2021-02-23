alert("Pronto a giocare ?");



var numero_giocatore;

numero_giocatore = Math.floor(Math.random() * 6) + 1;

console.log(numero_giocatore);

alert("Il tuo numero è " + numero_giocatore);



var numero_computer;

numero_computer = Math.floor(Math.random() * 6) + 1;

console.log(numero_computer);

alert("Il mio numero è " + numero_computer);



if (numero_giocatore > numero_computer) {
    alert("Hai vinto !");
}

else if (numero_computer > numero_giocatore) {
    alert("Hai perso !");
}

else if (numero_giocatore == numero_computer) {
    alert("Parità !")
}