// OOP: Nesne Tabanlı Programlama
// Object

// Sınıf => Nesne Türet  * 30 soru
// ES5 Tüm tarayıcılar tarafından desteklenir.
// ES6, ES7


// Constructor ES5 de kullanılıyor. Class kavramı ES6 da geliyor.
function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;

    console.log(this);
}

// 200 tane soru olsa 200 kere kopyalanmış olacaktı ancak bu şekilde dışarıdan prototype içerisine ekleyince sadece 1 kere eklenmiş oluyor ve gerektiğinde çağırılabiliyor. 200 kere kopyalanmış olmuyor. 
Soru.prototype.cevabiKontrolEt = function (cevap) {
    return cevap === this.dogruCevap;
}

let soru1 = new Soru("Hangisi javascript paket yönetim uygulamasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c");
let soru2 = new Soru("Hangisi .net paket yönetim uygulamasıdır?", { a: "Node.js", b: "nuget", c: "Npm" }, "b");

let sorular = [
    new Soru("Hangisi js paket yönetim uygulamasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
    new Soru("Hangisi javascript paket yönetim uygulamasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
    new Soru("Hangisi javascript paket yönetim uygulamasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
    new Soru("Hangisi javascript paket yönetim uygulamasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
];

console.log(soru1.cevabiKontrolEt("c"));