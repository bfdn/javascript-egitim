function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;

    // console.log(this);
}

// 200 tane soru olsa 200 kere kopyalanmış olacaktı ancak bu şekilde dışarıdan prototype içerisine ekleyince sadece 1 kere eklenmiş oluyor ve gerektiğinde çağırılabiliyor. 200 kere kopyalanmış olmuyor. 
Soru.prototype.cevabiKontrolEt = function (cevap) {
    return cevap === this.dogruCevap;
}


let sorular = [
    new Soru("1-Hangisi javascript paket yönetim uygulamasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
    new Soru("2-Hangisi javascript paket yönetim uygulamasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
    new Soru("3-Hangisi javascript paket yönetim uygulamasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
    new Soru("4-Hangisi javascript paket yönetim uygulamasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
];