// OOP: Nesne Tabanlı Programlama
// Object


let soru = {
    soruMetni: "Hangisi javascript paket yönetim uygulamasıdır?",
    cevapSecenekleri: {
        a: "Node.js",
        b: "Typescript",
        c: "Npm",
    },
    dogruCevap: "c",
    cevabiKontrolEt: function (cevap) {
        return cevap === this.dogruCevap
    }
};

let soru2 = {
    soruMetni: "Hangisi .net paket yönetim uygulamasıdır?",
    cevapSecenekleri: {
        a: "Node.js",
        b: "nuget",
        c: "Npm",
    },
    dogruCevap: "b",
    cevabiKontrolEt: function (cevap) {
        return cevap === this.dogruCevap
    }
};

console.log(soru.soruMetni);
console.log(soru.cevabiKontrolEt("c"));
console.log(soru2.cevabiKontrolEt("c"));

// Sınıf => Nesne Türet  * 30 soru
// ES5 Tüm tarayıcılar tarafından desteklenir.
// ES6, ES7
