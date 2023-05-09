var isim = "Ahmet"; // global scope => her yerden erişilir.
const ADRES = "İstanbul";

ADRES = "Kocaeli";

function yazdir() {
    // Fonksiyon kapsamı
    var isim = "Ayşe"; // Fonksiyon elemanı, farklı scope
    var yas = 20;
    console.log("function scope: ", isim, yas);
}

// if (true) {
//     var isim = "Zeynep";
//     console.log(isim);
// }

if (true) {
    // var cinsiyet = "Kadın";
    let cinsiyet = "Kadın";
    let isim = "Zeynep";
    console.log(isim, cinsiyet);
}

// console.log(cinsiyet); // let ile tanımlandığı için scope oluşmuş oldu bu yüzden dışarıdan erişilemez.

console.log(isim);
yazdir();

// Fonksiyonlar kendi scope alanlarını oluşturur.
// Block içerisinde yeni bir scope oluşmaz. (let, const) ile yapılabilir.



// console.log(yas); // Hata verir fonksiyonun içindeki değişkene ulaşamaz. global scope olarak tanımlanmış olmalı değişken


