// Personnages
class Personnage {
    constructor (nom, caracteristique) {
        this.nom = nom;
        this.caracteristique = caracteristique;
        this.pv = 100;
    }

    attaquer (cible) {
        let degats = Math.floor (Math.random() * 10);
        let mort = Math.random() < this.caracteristique.probaMourir;

        if (mort) {
            console.log (`${this.nom} est mort en attquant ${cible.nom}`);
            return;
        }

        let attaqueReussie = Math.random() < this.caracteristique.probaDegats;

        if (attaqueReussie) {
            cible.pv -= degats;
            if (cible.pv <= 0) {
                console.log (`${cible.nom} a subi ${degats} dégats de la part de ${this.nom}`);
            }
       } else {
        console.log (`${cible.nom} a estquivé l'attaque de ${this.nom}`);
       }
    } 
}


// Caractéristiques
class Features {
    constructor (nom, probaMourir, probaDegats, probaMourirDegats) {
        this.nom = nom;
        this.probaMourir = probaMourir;
        this.probaDegats = probaDegats;
        this.probaMourirDegats = probaMourirDegats;
    }
}

// Différentes caractéristiques
let caracteristiques = [
    new Features ("Nerd", 0.3, 0.2, 0.1),
    new Features ("Sportif(ve)", 0.4, 0.7, 0.5),
    new Features ("Blond(e)", 0.7, 0.3, 0.5),
];


let prenoms = ['Katniss', 'Jude', 'Matteo', 'Nate', 'Kenna', 'Anne'];

let jason = new Personnage ('Jason', caracteristiques[0]);

let survivants = [];
for (let i = 0 ; i < 5 ; i++) {
    survivants.push(new Personnage (prenoms [Math.floor (Math.random() * prenoms.length)], caracteristiques [Math.floor (Math.random() * caracteristiques.length)]));
}

let tour = 1;
while (jason.pv > 0 && survivants.length > 0) {
    // on choisit aléatoirement le survivant
    let survivantAttaque = survivants [Math.floor (Math.random() * survivants.length)];
    // jason attaque
    jason.attaquer (survivantAttaque);
    // si survivant meurt on l'enlève du tableau
    if (survivantAttaque.pv <= 0) {
        survivants.splice(survivants.indexOf (survivantAttaque), 1);
    }
    // tour suivant
    tour++;
}

// messages de fin
if (survivants.length === 0) {
    console.log('Bravo à Jason !');
} else {
    console.log ('Les survivants ont gagné mais RIP à', survivants.map((s) => s.nom).join(', '));
}