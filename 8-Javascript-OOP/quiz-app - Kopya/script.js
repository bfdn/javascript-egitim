// OOP: Nesne Tabanlı Programlama
// Object




// Sınıf => Nesne Türet  * 30 soru
// ES5 Tüm tarayıcılar tarafından desteklenir.
// ES6, ES7
// Constructor ES5 de kullanılıyor. Class kavramı ES6 da geliyor.


const quiz = new Quiz(sorular);
const ui = new UI();

ui.btn_start.addEventListener("click", function () {
    ui.quiz_box.classList.add("active");
    ui.soruGoster(quiz.soruGetir());
    ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
    ui.next_btn.classList.remove("show");
});

ui.next_btn.addEventListener("click", () => {
    if (quiz.sorular.length != quiz.soruIndex + 1) {
        quiz.soruIndex += 1;
        ui.soruGoster(quiz.soruGetir());
        ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
        ui.next_btn.classList.remove("show");
    } else {
        console.log("quiz bitti");
    }
});

// const option_list = document.querySelector(".option_list");
// const correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>';
// const inCorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>';




function optionSelected(option) {
    // console.log(option);
    let cevap = option.querySelector("span b").textContent;
    let soru = quiz.soruGetir();

    // console.log(cevap);
    // console.log(soru);

    if (soru.cevabiKontrolEt(cevap)) {
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend", ui.correctIcon);
    } else {
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend", ui.inCorrectIcon);
    }
    // console.log(option_list.childElementCount);
    // console.log(option_list.children.length);
    for (let i = 0; i < ui.option_list.children.length; i++) {
        ui.option_list.children[i].classList.add("disabled");
    }
    ui.next_btn.classList.add("show");

}

