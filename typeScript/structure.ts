interface Person {
    name: string;
    age: number,
}

interface Alien {
    name: string;
    age: number,
    planet: string;
}

const alien: Alien = {
    name: 'ET',
    age: 5,
    planet: 'Mars'
}
// const person: Person = {
//     name: 'ET',
//     age: 5
// }
const person: Person = alien

// const alien: Alien = person// Error
function print(person:Person) {
    let property:  keyof typeof person
    for (const property in person) {
        console.log(`${property}: ${person[property]}`);
    }
}

let obj = {
    name : "username",
    age:15
}
 let s: typeof obj;
 s ={
    name:"user",
    age:89
 }



