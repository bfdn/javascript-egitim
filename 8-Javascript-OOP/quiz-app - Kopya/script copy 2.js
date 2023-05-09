// OOP: Nesne Tabanlı Programlama
// Object


// let soru = {
//     soruMetni: "Hangisi javascript paket yönetim uygulamasıdır?",
//     cevapSecenekleri: {
//         a: "Node.js",
//         b: "Typescript",
//         c: "Npm",
//     },
//     dogruCevap: "c",
//     cevabiKontrolEt: function (cevap) {
//         return cevap === this.dogruCevap
//     }
// };

// let soru2 = {
//     soruMetni: "Hangisi .net paket yönetim uygulamasıdır?",
//     cevapSecenekleri: {
//         a: "Node.js",
//         b: "nuget",
//         c: "Npm",
//     },
//     dogruCevap: "b",
//     cevabiKontrolEt: function (cevap) {
//         return cevap === this.dogruCevap
//     }
// };

// console.log(soru.soruMetni);
// console.log(soru.cevabiKontrolEt("c"));
// console.log(soru2.cevabiKontrolEt("c"));

// Sınıf => Nesne Türet  * 30 soru
// ES5 Tüm tarayıcılar tarafından desteklenir.
// ES6, ES7


// Constructor ES5 de kullanılıyor. Class kavramı ES6 da geliyor.
function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
    this.cevabiKontrolEt = function (cevap) {
        return cevap === this.dogruCevap;
    }
}

let soru1 = new Soru("Hangisi javascript paket yönetim uygulamasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c");
let soru2 = new Soru("Hangisi .net paket yönetim uygulamasıdır?", { a: "Node.js", b: "nuget", c: "Npm" }, "b");

console.log(soru1.soruMetni);
console.log(soru1.dogruCevap);
console.log(soru1.cevabiKontrolEt("c"));

console.log(soru2.soruMetni);
console.log(soru2.dogruCevap);
console.log(soru2.cevabiKontrolEt("a"));

let sorular = [
    new Soru("Hangisi js paket yönetim uygulamasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
    new Soru("Hangisi javascript paket yönetim uygulamasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
    new Soru("Hangisi javascript paket yönetim uygulamasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
    new Soru("Hangisi javascript paket yönetim uygulamasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
];

console.log(sorular[0].soruMetni);

for (let s of sorular) {
    console.log(s.soruMetni);
}