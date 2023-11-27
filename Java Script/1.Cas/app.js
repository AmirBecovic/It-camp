naslov = document.getElementById("naslov");
naslov.innerHTML = "Naslov ispisan preko JaveScripta";
naslov.style = "color: blue; font-size: 52px";

// TIPOVI PODATAKA 

// Da bismo znali tip promenljive u JavaScriptu koristimo typeof operator.

// Tipove podataka u JavaScriptu delimo u dve grupe:
// 1. Primitivni tipovi podataka (vrednosni)
// 2. Neprimitivni tipovi podataka (referentni)

// 1.1. Stringovi - niz karaktera koji je zapisan pod navodnicima. Obicnim ili duplim.
console.log('Ovo je nas prvi string.')
console.log(typeof "Ovo je nas prvi string.")

// 1.2. Number - Predstavlja broj i on moze biti zapisan sa ili bez decimalnog zareza.
console.log(25)
console.log(typeof 25)

// 1.3. BigInt -Brojevi koji prelaze granice obicnih brojeva.
console.log(BigInt(2819287983732372398237237923823873728972378932732))
console.log(typeof BigInt(2819287983732372398237237923823873728972378932732))

// 1.4. Boolean - True ili false
console.log(true)
console.log(typeof true)

// 1.5. Undefined - Promenljiva koja nije definisana, ali joj nije odredjena vrednost i ima vrednost undefined i tip takodje undefined 
var a;
console.log(a)
console.log(typeof a)

// 1.6. Null - Predstavlja nekorektnu vrednost ili vrednost koja ne postoji
var a = null
console.log(a)
console.log(typeof a)

// 1.7. Symbol - Tip podataka za skladistenje anonimnih vrednosti i unikatnih vrednosti
b = Symbol();
console.log(b)
console.log(typeof b)

// Primitivni tipovi podataka mogu skladistiti samo jednu vrednost

// 2. Neprimitivni tipovi podataka - referentni tipovi podataka

// Za skladistenje vise vrednosti ili kompleksnih vrednosti se koriste neprimitivni tipovi podataka
// Svaka promenljiva koja nije primitivnog tipa je tipa object u JavaScriptu
// Objeksti se koriste za skladistenje neke kolekcije podataka

// 2.1. Array - Nizi se koriste za skladistenje neke kolekcije podataka
nasBrat = ["Symbol", 25, true]
console.log(nasBrat)
console.log(typeof nasBrat)

// 2.2. Object - Objekti se koriste za skladistenje neke kolekcije podataka
obj = {
    ime: "Marko",
    brojgodina: 25
}
console.log(obj)

// 2.3. Set - predstavlja strukturu podataka za skladistenje vise vrednosti ili vrednost 
set = new Set(["Marko", 25, true])
console.log(set)
console.log(typeof set)

// 2.4. Map - predstavlja strukturu podataka za skladistenje vise vrednosti ili vrednost
map = new Map([
    ["ime", "Mirko"],
    ["brojGodina", 45],
    ["punoletnost", false]
]);
console.log(map)
console.log(typeof map)