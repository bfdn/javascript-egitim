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
    startTimer(10);
    startTimerLine();
    ui.soruGoster(quiz.soruGetir());
    ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
    ui.next_btn.classList.remove("show");
});

ui.next_btn.addEventListener("click", () => {
    if (quiz.sorular.length != quiz.soruIndex + 1) {
        quiz.soruIndex += 1;
        clearInterval(counter);
        clearInterval(counterLine);
        startTimer(10);
        startTimerLine();
        ui.soruGoster(quiz.soruGetir());
        ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
        ui.next_btn.classList.remove("show");
    } else {
        // console.log("quiz bitti");
        clearInterval(counter);
        clearInterval(counterLine);
        ui.quiz_box.classList.remove("active");
        ui.score_box.classList.add("active");
        ui.skoruGoster(quiz.sorular.length, quiz.dogruCevapSayisi);
    }
});

// const option_list = document.querySelector(".option_list");
// const correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>';
// const inCorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>';

ui.btn_quit.addEventListener("click", () => {
    window.location.reload();
});


ui.btn_replay.addEventListener("click", () => {
    quiz.soruIndex = 0;
    quiz.dogruCevapSayisi = 0;
    ui.btn_start.click();
    ui.score_box.classList.remove("active");
});


function optionSelected(option) {
    // console.log(option);
    clearInterval(counter);
    clearInterval(counterLine);
    let cevap = option.querySelector("span b").textContent;
    let soru = quiz.soruGetir();

    // console.log(cevap);
    // console.log(soru);

    if (soru.cevabiKontrolEt(cevap)) {
        quiz.dogruCevapSayisi += 1;
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

let counter;
function startTimer(time) {
    // setInterval(function () {
    //     console.log("aa");
    // }, 1000);

    counter = setInterval(timer, 1000);

    function timer() {
        ui.timer_second.textContent = time;
        time--;

        if (time < 0) {
            clearInterval(counter);
            ui.timer_text.textContent = "Süre Bitti";

            let cevap = quiz.soruGetir().dogruCevap;
            for (let option of ui.option_list.children) {
                if (option.querySelector("span b").textContent == cevap) {
                    option.classList.add("correct");
                    option.insertAdjacentHTML("beforeend", ui.correctIcon);
                }

                option.classList.add("disabled");
            }
            ui.next_btn.classList.add("show");
        }
    }
}

let counterLine;
function startTimerLine() {
    let line_width = 0;

    counterLine = setInterval(timer, 20);

    function timer() {
        line_width += 1;
        ui.time_line.style.width = line_width + "px";

        if (line_width > 549) {
            clearInterval(counterLine);
        }
    }
}
