// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

var bikes = [
    {
        name: "Hyper",
        weight: 25,
    },
    {
        name: "Nova",
        weight: 23,
    },
    {
        name: "Morningstart",
        weight: 23,
    },
    {
        name: "Karisma",
        weight: 21,
    },
    {
        name: "BMX-250",
        weight: 25,
    },
    {
        name: "Jarvis",
        weight: 32,
    },
    {
        name: "Kawasaki-1080",
        weight: 27,
    }
];

// Stampare a schermo la bici con peso minore.
var lightBike = bikes[0]; //Inizializzo la variabile con il valore della bici in posizione 0.
// console.log(lightBike);

for (var i = 1; i < bikes.length; i++) {
    // Comparo ogni bici a quella precedente, salvando nella variabile qella più leggera di volta in volta.
    if (bikes[i].weight < lightBike.weight) {
        lightBike = bikes[i];
    }
}

console.log(lightBike);