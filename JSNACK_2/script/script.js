// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate inizialmente a 0.

var squadre = [
    {
        nome: "Inter",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Milan",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Roma",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Lazio",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Napoli",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Juventus",
        puntiFatti: 0,
        falliSubiti: 0
    }
];

// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
for (var i = 0; i < squadre.length; i++) {
    squadre[i].puntiFatti = randomNumber(0, 10);
    squadre[i].falliSubiti = randomNumber(0,10);
}

console.log(squadre);

// Infine creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
var nomiEfalli = [];

for (var j = 0; j < squadre.length; j++) {
    nomiEfalli.push(squadre[j].nome + " " + squadre[j].falliSubiti);
}

console.log(nomiEfalli);