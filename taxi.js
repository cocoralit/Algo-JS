// Personnage
let perso = {
    name: "John",
    mentalHealth: 10,
}

// Musiques
let songs = ['Anissa - Wejdene', 'Bohemian Rhapsody - Queen', 'Hallelujah - Leonard Cohen', 'I Will Survive - Gloria Gaynor', 'Carmen - Stromae']

// Trajet
let path = {
    radio: songs,
    redLights: 30,
    changes: 0,
}

// Boucle
for (let i = 0 ; i < path.redLights ; i++) {
    let song = songs[Math.floor(Math.random() * songs.length)];
    console.log(`${song}, Changes remaining : ${path.redLights - i - 1}`);
    if (song === 'Anissa - Wejdene') {
        perso.mentalHealth--;
        path.changes++;
    }
}

// Affichage
    if (perso.mentalHealth > 0) {
        console.log(`Arrivée à destination en ${path.changes} changements.`);
    } else {
        console.log("Explosion");
    }