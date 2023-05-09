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

    // console.log(this);
}

// 200 tane soru olsa 200 kere kopyalanmış olacaktı ancak bu şekilde dışarıdan prototype içerisine ekleyince sadece 1 kere eklenmiş oluyor ve gerektiğinde çağırılabiliyor. 200 kere kopyalanmış olmuyor. 
Soru.prototype.cevabiKontrolEt = function (cevap) {
    return cevap === this.dogruCevap;
}

let soru1 = new Soru("Hangisi javascript paket yönetim uygulamasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c");
let soru2 = new Soru("Hangisi .net paket yönetim uygulamasıdır?", { a: "Node.js", b: "nuget", c: "Npm" }, "b");

let sorular = [
    new Soru("1-Hangisi javascript paket yönetim uygulamasıdır?", { a: "Node.js", b: "Typescript", c: "Npm", d: "Nuget" }, "c"),
    new Soru("2-Hangisi javascript paket yönetim uygulamasıdır?", { a: "Node.js", b: "Typescript", c: "Npm", d: "Nuget" }, "c"),
    new Soru("3-Hangisi javascript paket yönetim uygulamasıdır?", { a: "Node.js", b: "Typescript", c: "Npm", d: "Nuget" }, "c"),
    new Soru("4-Hangisi javascript paket yönetim uygulamasıdır?", { a: "Node.js", b: "Typescript", c: "Npm", d: "Nuget" }, "c"),
];

function Quiz(sorular) {
    this.sorular = sorular;
    this.soruIndex = 0;
}

Quiz.prototype.soruGetir = function () {
    return this.sorular[this.soruIndex];
}


const quiz = new Quiz(sorular);


document.querySelector('.btn_start').addEventListener("click", function () {
    if (quiz.sorular.length != quiz.soruIndex) {
        document.querySelector(".quiz_box").classList.add("active");
        // console.log(quiz.soruGetir());
        // let soru = quiz.soruGetir();
        soruGoster(quiz.soruGetir());
        quiz.soruIndex += 1;
    } else {
        console.log("quiz bitti");
    }
});

document.querySelector(".next_btn").addEventListener("click", () => {
    if (quiz.sorular.length != quiz.soruIndex) {
        //document.querySelector(".quiz_box").classList.add("active");
        soruGoster(quiz.soruGetir());
        quiz.soruIndex += 1;
    } else {
        console.log("quiz bitti");
    }
});

function soruGoster(soru) {
    let question = `<span>${soru.soruMetni}</span>`;
    let options = '';
    for (let cevap in soru.cevapSecenekleri) {
        options +=
            `
                <div class="option">
                    <span><b>${cevap})</b> ${soru.cevapSecenekleri[cevap]}</span>
                </div>
                `;
    }

    document.querySelector(".question_text").innerHTML = question;
    document.querySelector(".option_list").innerHTML = options;
}