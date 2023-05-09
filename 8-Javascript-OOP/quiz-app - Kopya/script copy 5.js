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

let sorular = [
    new Soru("1-Hangisi javascript paket yönetim uygulamasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
    new Soru("2-Hangisi javascript paket yönetim uygulamasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
    new Soru("3-Hangisi javascript paket yönetim uygulamasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
    new Soru("4-Hangisi javascript paket yönetim uygulamasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
];

// 200 tane soru olsa 200 kere kopyalanmış olacaktı ancak bu şekilde dışarıdan prototype içerisine ekleyince sadece 1 kere eklenmiş oluyor ve gerektiğinde çağırılabiliyor. 200 kere kopyalanmış olmuyor. 
Soru.prototype.cevabiKontrolEt = function (cevap) {
    return cevap === this.dogruCevap;
}



function Quiz(sorular) {
    this.sorular = sorular;
    this.soruIndex = 0;
}

Quiz.prototype.soruGetir = function () {
    return this.sorular[this.soruIndex];
}


const quiz = new Quiz(sorular);


document.querySelector('.btn_start').addEventListener("click", function () {
    document.querySelector(".quiz_box").classList.add("active");
    soruGoster(quiz.soruGetir());
    soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
    document.querySelector(".next_btn").classList.remove("show");
});

document.querySelector(".next_btn").addEventListener("click", () => {
    if (quiz.sorular.length != quiz.soruIndex + 1) {
        quiz.soruIndex += 1;
        soruGoster(quiz.soruGetir());
        soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
        document.querySelector(".next_btn").classList.remove("show");
    } else {
        console.log("quiz bitti");
    }
});

const option_list = document.querySelector(".option_list");
const correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>';
const inCorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>';


function soruGoster(soru) {
    let question = `<span>${soru.soruMetni}</span>`;
    let options = '';
    for (let cevap in soru.cevapSecenekleri) {
        options +=
            `
                <div class="option">
                    <span><b>${cevap}</b>) ${soru.cevapSecenekleri[cevap]}</span>
                </div>
                `;
    }

    document.querySelector(".question_text").innerHTML = question;
    option_list.innerHTML = options;

    const option = option_list.querySelectorAll(".option");

    for (let opt of option) {
        // console.log(opt);
        opt.setAttribute("onclick", "optionSelected(this)");
    }

    // console.log(option);

}

function optionSelected(option) {
    // console.log(option);
    let cevap = option.querySelector("span b").textContent;
    let soru = quiz.soruGetir();

    // console.log(cevap);
    // console.log(soru);

    if (soru.cevabiKontrolEt(cevap)) {
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend", correctIcon);
    } else {
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend", inCorrectIcon);
    }
    // console.log(option_list.childElementCount);
    // console.log(option_list.children.length);
    for (let i = 0; i < option_list.children.length; i++) {
        option_list.children[i].classList.add("disabled");
    }
    document.querySelector(".next_btn").classList.add("show");

}

function soruSayisiniGoster(soruSirasi, toplamSoru) {
    let tag = `<span class="badge bg-warning">${soruSirasi}/${toplamSoru}</span>`;
    document.querySelector(".quiz_box .question_index").innerHTML = tag;
}