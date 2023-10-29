let a = 4
let b = 4
let c = 3

if(a == b) {
    console.log("c'est égal")
}
if(c < b && a+c != 3) {
    console.log("ok")
} else {
    console.log("raté")
}


switch(a) {
    case b:
        console.log('a = b')
        break
    case c:
        console.log('égal à c')
        break
    default:
        console.log('égal à rien')
}

for (let d = 2; d < 10; d++){
    console.log('oklm')
}

let e = 3
while (e < 9) {
    e++
    if (e == 7) {
        continue
    }
    if (e == 8) {
        break
    }
    console.log(e)
}

let j = "Jean"
let p = "Paul"
let result = ''

function checkName(nom1, nom2) {
    if (nom1 == nom2) {
        result = 'oui'
    } else {
        result = 'non'
    }
    console.log (result)
}

checkName(j, p)

let names = []

names.push("Vincent", "Paul", "Arthur")
names.forEach(function(names){
    console.log(names, "va à la pêche")
})


let student = {
    nom: 'Mathilde',
    favFood: 'Kinder',
    city: 'Paris',  
}



let users = ["Stéphanie", "Gaïa", "Etienne", "Michel", "Roberta", "Julie"]

function countCharacter(value) {
    return value.length
}

users.forEach(user => {
    if (countCharacter(users) > 5) {
        console.log("c'est un prénom long de plus de 5 lettres.")
    } else {
        console.log("ce n'est pas du tout un prénom long.")
    }
});